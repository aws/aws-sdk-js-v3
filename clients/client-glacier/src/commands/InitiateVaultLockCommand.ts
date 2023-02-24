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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import {
  InitiateVaultLockInput,
  InitiateVaultLockInputFilterSensitiveLog,
  InitiateVaultLockOutput,
  InitiateVaultLockOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1InitiateVaultLockCommand,
  serializeAws_restJson1InitiateVaultLockCommand,
} from "../protocols/Aws_restJson1";

export interface InitiateVaultLockCommandInput extends InitiateVaultLockInput {}
export interface InitiateVaultLockCommandOutput extends InitiateVaultLockOutput, __MetadataBearer {}

/**
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
 * const command = new InitiateVaultLockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitiateVaultLockCommandInput} for command's `input` shape.
 * @see {@link InitiateVaultLockCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
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
      inputFilterSensitiveLog: InitiateVaultLockInputFilterSensitiveLog,
      outputFilterSensitiveLog: InitiateVaultLockOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InitiateVaultLockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InitiateVaultLockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InitiateVaultLockCommandOutput> {
    return deserializeAws_restJson1InitiateVaultLockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
