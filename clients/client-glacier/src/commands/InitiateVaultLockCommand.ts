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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { InitiateVaultLockInput, InitiateVaultLockOutput } from "../models/models_0";
import { de_InitiateVaultLockCommand, se_InitiateVaultLockCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link InitiateVaultLockCommand}.
 */
export interface InitiateVaultLockCommandInput extends InitiateVaultLockInput {}
/**
 * @public
 *
 * The output of {@link InitiateVaultLockCommand}.
 */
export interface InitiateVaultLockCommandOutput extends InitiateVaultLockOutput, __MetadataBearer {}

/**
 * @public
 * <p>This operation initiates the vault locking process by doing the following:</p>
 *          <ul>
 *             <li>
 *                <p>Installing a vault lock policy on the specified vault.</p>
 *             </li>
 *             <li>
 *                <p>Setting the lock state of vault lock to <code>InProgress</code>.</p>
 *             </li>
 *             <li>
 *                <p>Returning a lock ID, which is used to complete the vault locking
 *                process.</p>
 *             </li>
 *          </ul>
 *
 *          <p>You can set one vault lock policy for each vault and this policy can be up to 20 KB
 *          in size. For more information about vault lock policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon Glacier Access Control with
 *             Vault Lock Policies</a>. </p>
 *          <p>You must complete the vault locking process within 24 hours after the vault lock
 *          enters the <code>InProgress</code> state. After the 24 hour window ends, the lock ID
 *          expires, the vault automatically exits the <code>InProgress</code> state, and the vault
 *          lock policy is removed from the vault. You call <a>CompleteVaultLock</a> to
 *          complete the vault locking process by setting the state of the vault lock to
 *             <code>Locked</code>. </p>
 *          <p>After a vault lock is in the <code>Locked</code> state, you cannot initiate a new
 *          vault lock for the vault.</p>
 *
 *          <p>You can abort the vault locking process by calling <a>AbortVaultLock</a>.
 *          You can get the state of the vault lock by calling <a>GetVaultLock</a>. For more
 *          information about the vault locking process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault
 *          Lock</a>.</p>
 *
 *          <p>If this operation is called when the vault lock is in the <code>InProgress</code>
 *          state, the operation returns an <code>AccessDeniedException</code> error. When the vault
 *          lock is in the <code>InProgress</code> state you must call <a>AbortVaultLock</a>
 *          before you can initiate a new vault lock policy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, InitiateVaultLockCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, InitiateVaultLockCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // InitiateVaultLockInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   policy: { // VaultLockPolicy
 *     Policy: "STRING_VALUE",
 *   },
 * };
 * const command = new InitiateVaultLockCommand(input);
 * const response = await client.send(command);
 * // { // InitiateVaultLockOutput
 * //   lockId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InitiateVaultLockCommandInput - {@link InitiateVaultLockCommandInput}
 * @returns {@link InitiateVaultLockCommandOutput}
 * @see {@link InitiateVaultLockCommandInput} for command's `input` shape.
 * @see {@link InitiateVaultLockCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't
 *          exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 * @example To initiate the vault locking process
 * ```javascript
 * // The example initiates the vault locking process for the vault named my-vault.
 * const input = {
 *   "accountId": "-",
 *   "policy": {
 *     "Policy": "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Sid\":\"Define-vault-lock\",\"Effect\":\"Deny\",\"Principal\":{\"AWS\":\"arn:aws:iam::999999999999:root\"},\"Action\":\"glacier:DeleteArchive\",\"Resource\":\"arn:aws:glacier:us-west-2:999999999999:vaults/examplevault\",\"Condition\":{\"NumericLessThanEquals\":{\"glacier:ArchiveAgeinDays\":\"365\"}}}]}"
 *   },
 *   "vaultName": "my-vault"
 * };
 * const command = new InitiateVaultLockCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "lockId": "AE863rKkWZU53SLW5be4DUcW"
 * }
 * *\/
 * // example id: to-initiate-the-vault-locking-process-1481919693394
 * ```
 *
 */
export class InitiateVaultLockCommand extends $Command<
  InitiateVaultLockCommandInput,
  InitiateVaultLockCommandOutput,
  GlacierClientResolvedConfig
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
  constructor(readonly input: InitiateVaultLockCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InitiateVaultLockCommandInput, InitiateVaultLockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InitiateVaultLockCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "InitiateVaultLockCommand";
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
  private serialize(input: InitiateVaultLockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InitiateVaultLockCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InitiateVaultLockCommandOutput> {
    return de_InitiateVaultLockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
