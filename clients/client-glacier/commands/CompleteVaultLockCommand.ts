import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { CompleteVaultLockInput } from "../models/models_0";
import {
  deserializeAws_restJson1CompleteVaultLockCommand,
  serializeAws_restJson1CompleteVaultLockCommand,
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

export type CompleteVaultLockCommandInput = CompleteVaultLockInput;
export type CompleteVaultLockCommandOutput = __MetadataBearer;

/**
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
 */
export class CompleteVaultLockCommand extends $Command<
  CompleteVaultLockCommandInput,
  CompleteVaultLockCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "CompleteVaultLockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CompleteVaultLockInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CompleteVaultLockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CompleteVaultLockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CompleteVaultLockCommandOutput> {
    return deserializeAws_restJson1CompleteVaultLockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
