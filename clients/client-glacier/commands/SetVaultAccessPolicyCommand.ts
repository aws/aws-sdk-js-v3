import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { SetVaultAccessPolicyInput } from "../models/models_0";
import {
  deserializeAws_restJson1SetVaultAccessPolicyCommand,
  serializeAws_restJson1SetVaultAccessPolicyCommand,
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

export interface SetVaultAccessPolicyCommandInput extends SetVaultAccessPolicyInput {}
export interface SetVaultAccessPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation configures an access policy for a vault and will overwrite an existing
 *          policy. To configure a vault access policy, send a PUT request to the
 *             <code>access-policy</code> subresource of the vault. An access policy is specific to a
 *          vault and is also called a vault subresource. You can set one access policy per vault and
 *          the policy can be up to 20 KB in size. For more information about vault access policies,
 *          see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-access-policy.html">Amazon Glacier Access Control with Vault Access Policies</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, SetVaultAccessPolicyCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, SetVaultAccessPolicyCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new SetVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link SetVaultAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SetVaultAccessPolicyCommand extends $Command<
  SetVaultAccessPolicyCommandInput,
  SetVaultAccessPolicyCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetVaultAccessPolicyCommandInput) {
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
  ): Handler<SetVaultAccessPolicyCommandInput, SetVaultAccessPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "SetVaultAccessPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetVaultAccessPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetVaultAccessPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SetVaultAccessPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetVaultAccessPolicyCommandOutput> {
    return deserializeAws_restJson1SetVaultAccessPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
