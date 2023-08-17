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
import { DeleteBackupVaultLockConfigurationInput } from "../models/models_0";
import {
  de_DeleteBackupVaultLockConfigurationCommand,
  se_DeleteBackupVaultLockConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteBackupVaultLockConfigurationCommand}.
 */
export interface DeleteBackupVaultLockConfigurationCommandInput extends DeleteBackupVaultLockConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DeleteBackupVaultLockConfigurationCommand}.
 */
export interface DeleteBackupVaultLockConfigurationCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes Backup Vault Lock from a backup vault specified by a backup vault
 *          name.</p>
 *          <p>If the Vault Lock configuration is immutable, then you cannot delete Vault Lock using
 *          API operations, and you will receive an <code>InvalidRequestException</code> if you attempt
 *          to do so. For more information, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html">Vault Lock</a> in the
 *                <i>Backup Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupVaultLockConfigurationCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteBackupVaultLockConfigurationCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // DeleteBackupVaultLockConfigurationInput
 *   BackupVaultName: "STRING_VALUE", // required
 * };
 * const command = new DeleteBackupVaultLockConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBackupVaultLockConfigurationCommandInput - {@link DeleteBackupVaultLockConfigurationCommandInput}
 * @returns {@link DeleteBackupVaultLockConfigurationCommandOutput}
 * @see {@link DeleteBackupVaultLockConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupVaultLockConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteBackupVaultLockConfigurationCommand extends $Command<
  DeleteBackupVaultLockConfigurationCommandInput,
  DeleteBackupVaultLockConfigurationCommandOutput,
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
  constructor(readonly input: DeleteBackupVaultLockConfigurationCommandInput) {
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
  ): Handler<DeleteBackupVaultLockConfigurationCommandInput, DeleteBackupVaultLockConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteBackupVaultLockConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DeleteBackupVaultLockConfigurationCommand";
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
    input: DeleteBackupVaultLockConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteBackupVaultLockConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteBackupVaultLockConfigurationCommandOutput> {
    return de_DeleteBackupVaultLockConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
