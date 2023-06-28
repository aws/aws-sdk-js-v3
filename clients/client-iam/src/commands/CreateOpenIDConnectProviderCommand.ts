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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateOpenIDConnectProviderRequest, CreateOpenIDConnectProviderResponse } from "../models/models_0";
import { de_CreateOpenIDConnectProviderCommand, se_CreateOpenIDConnectProviderCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateOpenIDConnectProviderCommand}.
 */
export interface CreateOpenIDConnectProviderCommandInput extends CreateOpenIDConnectProviderRequest {}
/**
 * @public
 *
 * The output of {@link CreateOpenIDConnectProviderCommand}.
 */
export interface CreateOpenIDConnectProviderCommandOutput
  extends CreateOpenIDConnectProviderResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates an IAM entity to describe an identity provider (IdP) that supports <a href="http://openid.net/connect/">OpenID Connect (OIDC)</a>.</p>
 *          <p>The OIDC provider that you create with this operation can be used as a principal in a
 *             role's trust policy. Such a policy establishes a trust relationship between Amazon Web Services and
 *             the OIDC provider.</p>
 *          <p>If you are using an OIDC identity provider from Google, Facebook, or Amazon Cognito, you don't
 *             need to create a separate IAM identity provider. These OIDC identity providers are
 *             already built-in to Amazon Web Services and are available for your use. Instead, you can move directly
 *             to creating new roles using your identity provider. To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html">Creating
 *                 a role for web identity or OpenID connect federation</a> in the <i>IAM
 *                 User Guide</i>.</p>
 *          <p>When you create the IAM OIDC provider, you specify the following:</p>
 *          <ul>
 *             <li>
 *                <p>The URL of the OIDC identity provider (IdP) to trust</p>
 *             </li>
 *             <li>
 *                <p>A list of client IDs (also known as audiences) that identify the application
 *                     or applications allowed to authenticate using the OIDC provider</p>
 *             </li>
 *             <li>
 *                <p>A list of tags that are attached to the specified IAM OIDC provider</p>
 *             </li>
 *             <li>
 *                <p>A list of thumbprints of one or more server certificates that the IdP
 *                     uses</p>
 *             </li>
 *          </ul>
 *          <p>You get all of this information from the OIDC IdP you want to use to access
 *             Amazon Web Services.</p>
 *          <note>
 *             <p>Amazon Web Services secures communication with some OIDC identity providers (IdPs) through our
 *             library of trusted certificate authorities (CAs) instead of using a certificate
 *             thumbprint to verify your IdP server certificate. These OIDC IdPs include Google, Auth0,
 *             and those that use an Amazon S3 bucket to host a JSON Web Key Set (JWKS) endpoint. In these
 *             cases, your legacy thumbprint remains in your configuration, but is no longer used for
 *             validation.</p>
 *          </note>
 *          <note>
 *             <p>The trust for the OIDC provider is derived from the IAM provider that this
 *                 operation creates. Therefore, it is best to limit access to the <a>CreateOpenIDConnectProvider</a> operation to highly privileged
 *                 users.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // CreateOpenIDConnectProviderRequest
 *   Url: "STRING_VALUE", // required
 *   ClientIDList: [ // clientIDListType
 *     "STRING_VALUE",
 *   ],
 *   ThumbprintList: [ // thumbprintListType // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // tagListType
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreateOpenIDConnectProviderResponse
 * //   OpenIDConnectProviderArn: "STRING_VALUE",
 * //   Tags: [ // tagListType
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateOpenIDConnectProviderCommandInput - {@link CreateOpenIDConnectProviderCommandInput}
 * @returns {@link CreateOpenIDConnectProviderCommandOutput}
 * @see {@link CreateOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link CreateOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To create an instance profile
 * ```javascript
 * // The following example defines a new OIDC provider in IAM with a client ID of my-application-id and pointing at the server with a URL of https://server.example.com.
 * const input = {
 *   "ClientIDList": [
 *     "my-application-id"
 *   ],
 *   "ThumbprintList": [
 *     "3768084dfb3d2b68b7897bf5f565da8efEXAMPLE"
 *   ],
 *   "Url": "https://server.example.com"
 * };
 * const command = new CreateOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OpenIDConnectProviderArn": "arn:aws:iam::123456789012:oidc-provider/server.example.com"
 * }
 * *\/
 * // example id: 4e4a6bff-cc97-4406-922e-0ab4a82cdb63
 * ```
 *
 */
export class CreateOpenIDConnectProviderCommand extends $Command<
  CreateOpenIDConnectProviderCommandInput,
  CreateOpenIDConnectProviderCommandOutput,
  IAMClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateOpenIDConnectProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreateOpenIDConnectProviderCommand";
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
  private serialize(input: CreateOpenIDConnectProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateOpenIDConnectProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateOpenIDConnectProviderCommandOutput> {
    return de_CreateOpenIDConnectProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
