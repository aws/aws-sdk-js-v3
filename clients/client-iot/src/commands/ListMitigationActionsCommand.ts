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
  ListMitigationActionsRequest,
  ListMitigationActionsRequestFilterSensitiveLog,
  ListMitigationActionsResponse,
  ListMitigationActionsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListMitigationActionsCommand,
  serializeAws_restJson1ListMitigationActionsCommand,
} from "../protocols/Aws_restJson1";

export interface ListMitigationActionsCommandInput extends ListMitigationActionsRequest {}
export interface ListMitigationActionsCommandOutput extends ListMitigationActionsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of all mitigation actions that match the specified filter criteria.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListMitigationActions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListMitigationActionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListMitigationActionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListMitigationActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMitigationActionsCommandInput} for command's `input` shape.
 * @see {@link ListMitigationActionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class ListMitigationActionsCommand extends $Command<
  ListMitigationActionsCommandInput,
  ListMitigationActionsCommandOutput,
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

  constructor(readonly input: ListMitigationActionsCommandInput) {
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
  ): Handler<ListMitigationActionsCommandInput, ListMitigationActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMitigationActionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListMitigationActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMitigationActionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListMitigationActionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMitigationActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListMitigationActionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMitigationActionsCommandOutput> {
    return deserializeAws_restJson1ListMitigationActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
