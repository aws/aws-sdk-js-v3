import { CommanderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CommanderClient";
import { StartIncidentInput, StartIncidentOutput } from "../models/models_0";
import {
  deserializeAws_restJson1StartIncidentCommand,
  serializeAws_restJson1StartIncidentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface StartIncidentCommandInput extends StartIncidentInput {}
export interface StartIncidentCommandOutput extends StartIncidentOutput, __MetadataBearer {}

/**
 * <p>Used to start an incident from CloudWatch alarms, EventBridge events, or manually. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CommanderClient, StartIncidentCommand } from "@aws-sdk/client-commander"; // ES Modules import
 * // const { CommanderClient, StartIncidentCommand } = require("@aws-sdk/client-commander"); // CommonJS import
 * const client = new CommanderClient(config);
 * const command = new StartIncidentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartIncidentCommandInput} for command's `input` shape.
 * @see {@link StartIncidentCommandOutput} for command's `response` shape.
 * @see {@link CommanderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StartIncidentCommand extends $Command<
  StartIncidentCommandInput,
  StartIncidentCommandOutput,
  CommanderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartIncidentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CommanderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartIncidentCommandInput, StartIncidentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CommanderClient";
    const commandName = "StartIncidentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartIncidentInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartIncidentOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartIncidentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartIncidentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartIncidentCommandOutput> {
    return deserializeAws_restJson1StartIncidentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
