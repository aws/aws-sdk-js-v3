import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { AbortVaultLockInput } from "../models/models_0";
import {
  deserializeAws_restJson1AbortVaultLockCommand,
  serializeAws_restJson1AbortVaultLockCommand,
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

export type AbortVaultLockCommandInput = AbortVaultLockInput;
export type AbortVaultLockCommandOutput = __MetadataBearer;

/**
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
 */
export class AbortVaultLockCommand extends $Command<
  AbortVaultLockCommandInput,
  AbortVaultLockCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "AbortVaultLockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AbortVaultLockInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AbortVaultLockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AbortVaultLockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AbortVaultLockCommandOutput> {
    return deserializeAws_restJson1AbortVaultLockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
