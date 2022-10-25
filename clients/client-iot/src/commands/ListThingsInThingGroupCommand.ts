// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  ListThingsInThingGroupRequest,
  ListThingsInThingGroupRequestFilterSensitiveLog,
  ListThingsInThingGroupResponse,
  ListThingsInThingGroupResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1ListThingsInThingGroupCommand,
  serializeAws_restJson1ListThingsInThingGroupCommand,
} from "../protocols/Aws_restJson1";

export interface ListThingsInThingGroupCommandInput extends ListThingsInThingGroupRequest {}
export interface ListThingsInThingGroupCommandOutput extends ListThingsInThingGroupResponse, __MetadataBearer {}

/**
 * <p>Lists the things in the specified group.</p>
 * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingsInThingGroup</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingsInThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingsInThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingsInThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingsInThingGroupCommandInput} for command's `input` shape.
 * @see {@link ListThingsInThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class ListThingsInThingGroupCommand extends $Command<
  ListThingsInThingGroupCommandInput,
  ListThingsInThingGroupCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: ListThingsInThingGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListThingsInThingGroupCommandInput, ListThingsInThingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListThingsInThingGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListThingsInThingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListThingsInThingGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListThingsInThingGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListThingsInThingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListThingsInThingGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListThingsInThingGroupCommandOutput> {
    return deserializeAws_restJson1ListThingsInThingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
