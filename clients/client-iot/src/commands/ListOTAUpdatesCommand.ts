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
  ListOTAUpdatesRequest,
  ListOTAUpdatesRequestFilterSensitiveLog,
  ListOTAUpdatesResponse,
  ListOTAUpdatesResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListOTAUpdatesCommand,
  serializeAws_restJson1ListOTAUpdatesCommand,
} from "../protocols/Aws_restJson1";

export interface ListOTAUpdatesCommandInput extends ListOTAUpdatesRequest {}
export interface ListOTAUpdatesCommandOutput extends ListOTAUpdatesResponse, __MetadataBearer {}

/**
 * <p>Lists OTA updates.</p>
 *         <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOTAUpdates</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListOTAUpdatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListOTAUpdatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListOTAUpdatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOTAUpdatesCommandInput} for command's `input` shape.
 * @see {@link ListOTAUpdatesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class ListOTAUpdatesCommand extends $Command<
  ListOTAUpdatesCommandInput,
  ListOTAUpdatesCommandOutput,
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

  constructor(readonly input: ListOTAUpdatesCommandInput) {
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
  ): Handler<ListOTAUpdatesCommandInput, ListOTAUpdatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOTAUpdatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListOTAUpdatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOTAUpdatesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListOTAUpdatesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOTAUpdatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListOTAUpdatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOTAUpdatesCommandOutput> {
    return deserializeAws_restJson1ListOTAUpdatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
