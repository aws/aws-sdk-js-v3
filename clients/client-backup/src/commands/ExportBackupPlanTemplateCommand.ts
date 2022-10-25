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

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import {
  ExportBackupPlanTemplateInput,
  ExportBackupPlanTemplateInputFilterSensitiveLog,
  ExportBackupPlanTemplateOutput,
  ExportBackupPlanTemplateOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ExportBackupPlanTemplateCommand,
  serializeAws_restJson1ExportBackupPlanTemplateCommand,
} from "../protocols/Aws_restJson1";

export interface ExportBackupPlanTemplateCommandInput extends ExportBackupPlanTemplateInput {}
export interface ExportBackupPlanTemplateCommandOutput extends ExportBackupPlanTemplateOutput, __MetadataBearer {}

/**
 * <p>Returns the backup plan that is specified by the plan ID as a backup template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ExportBackupPlanTemplateCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ExportBackupPlanTemplateCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ExportBackupPlanTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportBackupPlanTemplateCommandInput} for command's `input` shape.
 * @see {@link ExportBackupPlanTemplateCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class ExportBackupPlanTemplateCommand extends $Command<
  ExportBackupPlanTemplateCommandInput,
  ExportBackupPlanTemplateCommandOutput,
  BackupClientResolvedConfig
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

  constructor(readonly input: ExportBackupPlanTemplateCommandInput) {
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
  ): Handler<ExportBackupPlanTemplateCommandInput, ExportBackupPlanTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportBackupPlanTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ExportBackupPlanTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportBackupPlanTemplateInputFilterSensitiveLog,
      outputFilterSensitiveLog: ExportBackupPlanTemplateOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportBackupPlanTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExportBackupPlanTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportBackupPlanTemplateCommandOutput> {
    return deserializeAws_restJson1ExportBackupPlanTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
