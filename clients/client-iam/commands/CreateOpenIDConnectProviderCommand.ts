import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateOpenIDConnectProviderRequest, CreateOpenIDConnectProviderResponse } from "../models/models_0";
import {
  deserializeAws_queryCreateOpenIDConnectProviderCommand,
  serializeAws_queryCreateOpenIDConnectProviderCommand,
} from "../protocols/Aws_query";
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

export interface CreateOpenIDConnectProviderCommandInput extends CreateOpenIDConnectProviderRequest {}
export interface CreateOpenIDConnectProviderCommandOutput
  extends CreateOpenIDConnectProviderResponse,
    __MetadataBearer {}

/**
 * <p>Creates an IAM entity to describe an identity provider (IdP) that supports <a href="http://openid.net/connect/">OpenID Connect (OIDC)</a>.</p>
 *         <p>The OIDC provider that you create with this operation can be used as a principal in a
 *             role's trust policy. Such a policy establishes a trust relationship between AWS and
 *             the OIDC provider.</p>
 *         <p>If you are using an OIDC identity provider from Google, Facebook, or Amazon Cognito,
 *             you don't need to create a separate IAM identity provider. These OIDC identity
 *             providers are already built-in to AWS and are available for your use. Instead, you can
 *             move directly to creating new roles using your identity provider. To learn more, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html">Creating a role for web identity or OpenID connect federation</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *         <p>When you create the IAM OIDC provider, you specify the following:</p>
 *         <ul>
 *             <li>
 *                 <p>The URL of the OIDC identity provider (IdP) to trust</p>
 *             </li>
 *             <li>
 *                 <p>A list of client IDs (also known as audiences) that identify the application
 *                     or applications that are allowed to authenticate using the OIDC provider</p>
 *             </li>
 *             <li>
 *                 <p>A list of thumbprints of one or more server certificates that the IdP
 *                     uses</p>
 *             </li>
 *          </ul>
 *         <p>You get all of this information from the OIDC IdP that you want to use to access
 *             AWS.</p>
 *         <note>
 *             <p>The trust for the OIDC provider is derived from the IAM provider that this
 *                 operation creates. Therefore, it is best to limit access to the <a>CreateOpenIDConnectProvider</a> operation to highly privileged
 *                 users.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link CreateOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateOpenIDConnectProviderCommand extends $Command<
  CreateOpenIDConnectProviderCommandInput,
  CreateOpenIDConnectProviderCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateOpenIDConnectProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateOpenIDConnectProviderCommandInput, CreateOpenIDConnectProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreateOpenIDConnectProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateOpenIDConnectProviderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateOpenIDConnectProviderResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateOpenIDConnectProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateOpenIDConnectProviderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateOpenIDConnectProviderCommandOutput> {
    return deserializeAws_queryCreateOpenIDConnectProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
