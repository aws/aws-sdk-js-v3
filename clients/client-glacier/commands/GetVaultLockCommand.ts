import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { GetVaultLockInput, GetVaultLockOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetVaultLockCommand,
  serializeAws_restJson1GetVaultLockCommand,
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

export type GetVaultLockCommandInput = GetVaultLockInput;
export type GetVaultLockCommandOutput = GetVaultLockOutput & __MetadataBearer;

/**
 * <p>This operation retrieves the following attributes from the <code>lock-policy</code>
 *          subresource set on the specified vault: </p>
 *          <ul>
 *             <li>
 *                <p>The vault lock policy set on the vault.</p>
 *             </li>
 *             <li>
 *                <p>The state of the vault lock, which is either <code>InProgess</code> or
 *                   <code>Locked</code>.</p>
 *             </li>
 *             <li>
 *                <p>When the lock ID expires. The lock ID is used to complete the vault locking
 *                process.</p>
 *             </li>
 *             <li>
 *                <p>When the vault lock was initiated and put into the <code>InProgress</code>
 *                state.</p>
 *             </li>
 *          </ul>
 *
 *          <p>A vault lock is put into the <code>InProgress</code> state by calling <a>InitiateVaultLock</a>. A vault lock is put into the <code>Locked</code> state by
 *          calling <a>CompleteVaultLock</a>. You can abort the vault locking process by
 *          calling <a>AbortVaultLock</a>. For more information about the vault locking
 *          process, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock.html">Amazon
 *             Glacier Vault Lock</a>. </p>
 *          <p>If there is no vault lock policy set on the vault, the operation returns a <code>404
 *             Not found</code> error. For more information about vault lock policies, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-lock-policy.html">Amazon
 *             Glacier Access Control with Vault Lock Policies</a>. </p>
 */
export class GetVaultLockCommand extends $Command<
  GetVaultLockCommandInput,
  GetVaultLockCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetVaultLockCommandInput) {
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
  ): Handler<GetVaultLockCommandInput, GetVaultLockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "GetVaultLockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetVaultLockInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetVaultLockOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetVaultLockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetVaultLockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetVaultLockCommandOutput> {
    return deserializeAws_restJson1GetVaultLockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
