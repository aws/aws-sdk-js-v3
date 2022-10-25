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
  UpdateBackupPlanInput,
  UpdateBackupPlanInputFilterSensitiveLog,
  UpdateBackupPlanOutput,
  UpdateBackupPlanOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateBackupPlanCommand,
  serializeAws_restJson1UpdateBackupPlanCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateBackupPlanCommandInput extends UpdateBackupPlanInput {}
export interface UpdateBackupPlanCommandOutput extends UpdateBackupPlanOutput, __MetadataBearer {}

/**
 * <p>Updates an existing backup plan identified by its <code>backupPlanId</code> with the
 *          input document in JSON format. The new version is uniquely identified by a
 *             <code>VersionId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateBackupPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateBackupPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new UpdateBackupPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBackupPlanCommandInput} for command's `input` shape.
 * @see {@link UpdateBackupPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class UpdateBackupPlanCommand extends $Command<
  UpdateBackupPlanCommandInput,
  UpdateBackupPlanCommandOutput,
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

  constructor(readonly input: UpdateBackupPlanCommandInput) {
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
  ): Handler<UpdateBackupPlanCommandInput, UpdateBackupPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateBackupPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "UpdateBackupPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBackupPlanInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateBackupPlanOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateBackupPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateBackupPlanCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBackupPlanCommandOutput> {
    return deserializeAws_restJson1UpdateBackupPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
