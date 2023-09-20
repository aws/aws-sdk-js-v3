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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { AbortVaultLockInput } from "../models/models_0";
import { de_AbortVaultLockCommand, se_AbortVaultLockCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AbortVaultLockCommand}.
 */
export interface AbortVaultLockCommandInput extends AbortVaultLockInput {}
/**
 * @public
 *
 * The output of {@link AbortVaultLockCommand}.
 */
export interface AbortVaultLockCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>This operation aborts the vault locking process if the vault lock is not in the
 *             <code>Locked</code> state. If the vault lock is in the <code>Locked</code> state when
 *          this operation is requested, the operation returns an <code>AccessDeniedException</code>
 *          error. Aborting the vault locking process removes the vault lock policy from the specified
 *          vault. </p>
 *          <p>A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. A vault lock is put into the <code>Locked</code> state by
 *          calling <a>CompleteVaultLock</a>. You can get the state of a vault lock by
 *          calling <a>GetVaultLock</a>. For more information about the vault locking
 *          process, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. For more information about vault lock policies, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon
 *             Glacier Access Control with Vault Lock Policies</a>. </p>
 *          <p>This operation is idempotent. You can successfully invoke this operation multiple
 *          times, if the vault lock is in the <code>InProgress</code> state or if there is no policy
 *          associated with the vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, AbortVaultLockCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, AbortVaultLockCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // AbortVaultLockInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 * };
 * const command = new AbortVaultLockCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AbortVaultLockCommandInput - {@link AbortVaultLockCommandInput}
 * @returns {@link AbortVaultLockCommandOutput}
 * @see {@link AbortVaultLockCommandInput} for command's `input` shape.
 * @see {@link AbortVaultLockCommandOutput} for command's `response` shape.
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
 * @example To abort a vault lock
 * ```javascript
 * // The example aborts the vault locking process if the vault lock is not in the Locked state for the vault named examplevault.
 * const input = {
 *   "accountId": "-",
 *   "vaultName": "examplevault"
 * };
 * const command = new AbortVaultLockCommand(input);
 * await client.send(command);
 * // example id: to-abort-a-vault-lock-1481839357947
 * ```
 *
 */
export class AbortVaultLockCommand extends $Command<
  AbortVaultLockCommandInput,
  AbortVaultLockCommandOutput,
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
  constructor(readonly input: AbortVaultLockCommandInput) {
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
  ): Handler<AbortVaultLockCommandInput, AbortVaultLockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AbortVaultLockCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "AbortVaultLockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Glacier",
        operation: "AbortVaultLock",
      },
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
  private serialize(input: AbortVaultLockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AbortVaultLockCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AbortVaultLockCommandOutput> {
    return de_AbortVaultLockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
