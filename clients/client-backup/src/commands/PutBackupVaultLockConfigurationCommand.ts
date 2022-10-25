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
  PutBackupVaultLockConfigurationInput,
  PutBackupVaultLockConfigurationInputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutBackupVaultLockConfigurationCommand,
  serializeAws_restJson1PutBackupVaultLockConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface PutBackupVaultLockConfigurationCommandInput extends PutBackupVaultLockConfigurationInput {}
export interface PutBackupVaultLockConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Applies Backup Vault Lock to a backup vault, preventing attempts to delete
 *          any recovery point stored in or created in a backup vault. Vault Lock also prevents
 *          attempts to update the lifecycle policy that controls the retention period of any recovery
 *          point currently stored in a backup vault. If specified, Vault Lock enforces a minimum and
 *          maximum retention period for future backup and copy jobs that target a backup vault.</p>
 *          <note>
 *             <p>Backup Vault Lock has yet to receive a third-party assessment for SEC
 *             17a-4(f) and CFTC.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, PutBackupVaultLockConfigurationCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, PutBackupVaultLockConfigurationCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new PutBackupVaultLockConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBackupVaultLockConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutBackupVaultLockConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class PutBackupVaultLockConfigurationCommand extends $Command<
  PutBackupVaultLockConfigurationCommandInput,
  PutBackupVaultLockConfigurationCommandOutput,
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

  constructor(readonly input: PutBackupVaultLockConfigurationCommandInput) {
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
  ): Handler<PutBackupVaultLockConfigurationCommandInput, PutBackupVaultLockConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutBackupVaultLockConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "PutBackupVaultLockConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutBackupVaultLockConfigurationInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutBackupVaultLockConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PutBackupVaultLockConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutBackupVaultLockConfigurationCommandOutput> {
    return deserializeAws_restJson1PutBackupVaultLockConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
