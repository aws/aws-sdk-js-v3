import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { CreateBackupPlanInput, CreateBackupPlanOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateBackupPlanCommand,
  serializeAws_restJson1CreateBackupPlanCommand,
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

export interface CreateBackupPlanCommandInput extends CreateBackupPlanInput {}
export interface CreateBackupPlanCommandOutput extends CreateBackupPlanOutput, __MetadataBearer {}

/**
 * <p>Creates a backup plan using a backup plan name and backup rules. A backup plan is a
 *          document that contains information that Backup uses to schedule tasks that
 *          create recovery points for resources.</p>
 *          <p>If you call <code>CreateBackupPlan</code> with a plan that already exists, you receive
 *          an <code>AlreadyExistsException</code> exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateBackupPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateBackupPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new CreateBackupPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackupPlanCommandInput} for command's `input` shape.
 * @see {@link CreateBackupPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateBackupPlanCommand extends $Command<
  CreateBackupPlanCommandInput,
  CreateBackupPlanCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateBackupPlanCommandInput) {
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
  ): Handler<CreateBackupPlanCommandInput, CreateBackupPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "CreateBackupPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBackupPlanInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBackupPlanOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBackupPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateBackupPlanCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBackupPlanCommandOutput> {
    return deserializeAws_restJson1CreateBackupPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
