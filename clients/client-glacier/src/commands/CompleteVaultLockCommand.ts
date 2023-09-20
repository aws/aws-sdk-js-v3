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
import { CompleteVaultLockInput } from "../models/models_0";
import { de_CompleteVaultLockCommand, se_CompleteVaultLockCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CompleteVaultLockCommand}.
 */
export interface CompleteVaultLockCommandInput extends CompleteVaultLockInput {}
/**
 * @public
 *
 * The output of {@link CompleteVaultLockCommand}.
 */
export interface CompleteVaultLockCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>This operation completes the vault locking process by transitioning the vault lock
 *          from the <code>InProgress</code> state to the <code>Locked</code> state, which causes the
 *          vault lock policy to become unchangeable. A vault lock is put into the
 *             <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. You can
 *          obtain the state of the vault lock by calling <a>GetVaultLock</a>. For more
 *          information about the vault locking process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon Glacier Vault Lock</a>. </p>
 *          <p>This operation is idempotent. This request is always successful if the vault lock is
 *          in the <code>Locked</code> state and the provided lock ID matches the lock ID originally
 *          used to lock the vault.</p>
 *          <p>If an invalid lock ID is passed in the request when the vault lock is in the
 *             <code>Locked</code> state, the operation returns an <code>AccessDeniedException</code>
 *          error. If an invalid lock ID is passed in the request when the vault lock is in the
 *             <code>InProgress</code> state, the operation throws an <code>InvalidParameter</code>
 *          error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, CompleteVaultLockCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, CompleteVaultLockCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // CompleteVaultLockInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   lockId: "STRING_VALUE", // required
 * };
 * const command = new CompleteVaultLockCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CompleteVaultLockCommandInput - {@link CompleteVaultLockCommandInput}
 * @returns {@link CompleteVaultLockCommandOutput}
 * @see {@link CompleteVaultLockCommandInput} for command's `input` shape.
 * @see {@link CompleteVaultLockCommandOutput} for command's `response` shape.
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
 * @example To complete a vault lock
 * ```javascript
 * // The example completes the vault locking process by transitioning the vault lock from the InProgress state to the Locked state.
 * const input = {
 *   "accountId": "-",
 *   "lockId": "AE863rKkWZU53SLW5be4DUcW",
 *   "vaultName": "example-vault"
 * };
 * const command = new CompleteVaultLockCommand(input);
 * await client.send(command);
 * // example id: to-complete-a-vault-lock-1481839721312
 * ```
 *
 */
export class CompleteVaultLockCommand extends $Command<
  CompleteVaultLockCommandInput,
  CompleteVaultLockCommandOutput,
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
  constructor(readonly input: CompleteVaultLockCommandInput) {
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
  ): Handler<CompleteVaultLockCommandInput, CompleteVaultLockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CompleteVaultLockCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "CompleteVaultLockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Glacier",
        operation: "CompleteVaultLock",
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
  private serialize(input: CompleteVaultLockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CompleteVaultLockCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CompleteVaultLockCommandOutput> {
    return de_CompleteVaultLockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
