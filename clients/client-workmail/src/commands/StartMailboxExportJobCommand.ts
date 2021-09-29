import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { StartMailboxExportJobRequest, StartMailboxExportJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartMailboxExportJobCommand,
  serializeAws_json1_1StartMailboxExportJobCommand,
} from "../protocols/Aws_json1_1";
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

export interface StartMailboxExportJobCommandInput extends StartMailboxExportJobRequest {}
export interface StartMailboxExportJobCommandOutput extends StartMailboxExportJobResponse, __MetadataBearer {}

/**
 * <p>Starts a mailbox export job to export MIME-format email messages and calendar items
 *          from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3)
 *          bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in
 *          the <i>Amazon WorkMail Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, StartMailboxExportJobCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, StartMailboxExportJobCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new StartMailboxExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMailboxExportJobCommandInput} for command's `input` shape.
 * @see {@link StartMailboxExportJobCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StartMailboxExportJobCommand extends $Command<
  StartMailboxExportJobCommandInput,
  StartMailboxExportJobCommandOutput,
  WorkMailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartMailboxExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMailboxExportJobCommandInput, StartMailboxExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "StartMailboxExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartMailboxExportJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartMailboxExportJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartMailboxExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartMailboxExportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMailboxExportJobCommandOutput> {
    return deserializeAws_json1_1StartMailboxExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
