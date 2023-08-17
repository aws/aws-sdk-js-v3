// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { PutBackupVaultLockConfigurationInput } from "../models/models_0";
import {
  de_PutBackupVaultLockConfigurationCommand,
  se_PutBackupVaultLockConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutBackupVaultLockConfigurationCommand}.
 */
export interface PutBackupVaultLockConfigurationCommandInput extends PutBackupVaultLockConfigurationInput {}
/**
 * @public
 *
 * The output of {@link PutBackupVaultLockConfigurationCommand}.
 */
export interface PutBackupVaultLockConfigurationCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Applies Backup Vault Lock to a backup vault, preventing attempts to delete
 *          any recovery point stored in or created in a backup vault. Vault Lock also prevents
 *          attempts to update the lifecycle policy that controls the retention period of any recovery
 *          point currently stored in a backup vault. If specified, Vault Lock enforces a minimum and
 *          maximum retention period for future backup and copy jobs that target a backup vault.</p>
 *          <note>
 *             <p>Backup Vault Lock has been assessed by Cohasset Associates for use in environments
 *             that are subject to SEC 17a-4, CFTC, and FINRA regulations. For more information about
 *             how Backup Vault Lock relates to these regulations, see the
 *             <a href="samples/cohassetreport.zip">Cohasset Associates
 *                Compliance Assessment.</a>
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, PutBackupVaultLockConfigurationCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, PutBackupVaultLockConfigurationCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // PutBackupVaultLockConfigurationInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   MinRetentionDays: Number("long"),
 *   MaxRetentionDays: Number("long"),
 *   ChangeableForDays: Number("long"),
 * };
 * const command = new PutBackupVaultLockConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBackupVaultLockConfigurationCommandInput - {@link PutBackupVaultLockConfigurationCommandInput}
 * @returns {@link PutBackupVaultLockConfigurationCommandOutput}
 * @see {@link PutBackupVaultLockConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutBackupVaultLockConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: PutBackupVaultLockConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_PutBackupVaultLockConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutBackupVaultLockConfigurationCommandOutput> {
    return de_PutBackupVaultLockConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
