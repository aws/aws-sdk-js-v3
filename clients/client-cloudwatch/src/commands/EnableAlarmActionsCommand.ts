import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { EnableAlarmActionsInput } from "../models/models_0";
import {
  deserializeAws_queryEnableAlarmActionsCommand,
  serializeAws_queryEnableAlarmActionsCommand,
} from "../protocols/Aws_query";
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

export interface EnableAlarmActionsCommandInput extends EnableAlarmActionsInput {}
export interface EnableAlarmActionsCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables the actions for the specified alarms.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, EnableAlarmActionsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, EnableAlarmActionsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new EnableAlarmActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableAlarmActionsCommandInput} for command's `input` shape.
 * @see {@link EnableAlarmActionsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class EnableAlarmActionsCommand extends $Command<
  EnableAlarmActionsCommandInput,
  EnableAlarmActionsCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableAlarmActionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableAlarmActionsCommandInput, EnableAlarmActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "EnableAlarmActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableAlarmActionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableAlarmActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryEnableAlarmActionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableAlarmActionsCommandOutput> {
    return deserializeAws_queryEnableAlarmActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
