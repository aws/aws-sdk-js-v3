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
import { CompleteVaultLockInput, CompleteVaultLockInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1CompleteVaultLockCommand,
  serializeAws_restJson1CompleteVaultLockCommand,
} from "../protocols/Aws_restJson1";

export interface CompleteVaultLockCommandInput extends CompleteVaultLockInput {}
export interface CompleteVaultLockCommandOutput extends __MetadataBearer {}

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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, CompleteVaultLockCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, CompleteVaultLockCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new CompleteVaultLockCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteVaultLockCommandInput} for command's `input` shape.
 * @see {@link CompleteVaultLockCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
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
      inputFilterSensitiveLog: CompleteVaultLockInputFilterSensitiveLog,
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
