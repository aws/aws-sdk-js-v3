import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { CreateReportPlanInput, CreateReportPlanOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateReportPlanCommand,
  serializeAws_restJson1CreateReportPlanCommand,
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

export interface CreateReportPlanCommandInput extends CreateReportPlanInput {}
export interface CreateReportPlanCommandOutput extends CreateReportPlanOutput, __MetadataBearer {}

/**
 * <p>Creates a report plan. A report plan is a document that contains information about the
 *          contents of the report and where Backup will deliver it.</p>
 *          <p>If you call <code>CreateReportPlan</code> with a plan that already exists, you receive
 *          an <code>AlreadyExistsException</code> exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateReportPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateReportPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new CreateReportPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReportPlanCommandInput} for command's `input` shape.
 * @see {@link CreateReportPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateReportPlanCommand extends $Command<
  CreateReportPlanCommandInput,
  CreateReportPlanCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateReportPlanCommandInput) {
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
  ): Handler<CreateReportPlanCommandInput, CreateReportPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "CreateReportPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReportPlanInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateReportPlanOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateReportPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateReportPlanCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateReportPlanCommandOutput> {
    return deserializeAws_restJson1CreateReportPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
