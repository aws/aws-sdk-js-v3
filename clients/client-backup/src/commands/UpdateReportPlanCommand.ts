import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { UpdateReportPlanInput, UpdateReportPlanOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateReportPlanCommand,
  serializeAws_restJson1UpdateReportPlanCommand,
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

export interface UpdateReportPlanCommandInput extends UpdateReportPlanInput {}
export interface UpdateReportPlanCommandOutput extends UpdateReportPlanOutput, __MetadataBearer {}

/**
 * <p>Updates an existing report plan identified by its <code>ReportPlanName</code> with the
 *          input document in JSON format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateReportPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateReportPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new UpdateReportPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateReportPlanCommandInput} for command's `input` shape.
 * @see {@link UpdateReportPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateReportPlanCommand extends $Command<
  UpdateReportPlanCommandInput,
  UpdateReportPlanCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateReportPlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateReportPlanCommandInput, UpdateReportPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "UpdateReportPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateReportPlanInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateReportPlanOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateReportPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateReportPlanCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateReportPlanCommandOutput> {
    return deserializeAws_restJson1UpdateReportPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
