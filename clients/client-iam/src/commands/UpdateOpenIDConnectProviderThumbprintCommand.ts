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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateOpenIDConnectProviderThumbprintRequest } from "../models/models_1";
import {
  de_UpdateOpenIDConnectProviderThumbprintCommand,
  se_UpdateOpenIDConnectProviderThumbprintCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateOpenIDConnectProviderThumbprintCommand}.
 */
export interface UpdateOpenIDConnectProviderThumbprintCommandInput
  extends UpdateOpenIDConnectProviderThumbprintRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOpenIDConnectProviderThumbprintCommand}.
 */
export interface UpdateOpenIDConnectProviderThumbprintCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Replaces the existing list of server certificate thumbprints associated with an OpenID
 *             Connect (OIDC) provider resource object with a new list of thumbprints.</p>
 *          <p>The list that you pass with this operation completely replaces the existing list of
 *             thumbprints. (The lists are not merged.)</p>
 *          <p>Typically, you need to update a thumbprint only when the identity provider certificate
 *             changes, which occurs rarely. However, if the provider's certificate
 *                 <i>does</i> change, any attempt to assume an IAM role that specifies
 *             the OIDC provider as a principal fails until the certificate thumbprint is
 *             updated.</p>
 *          <note>
 *             <p>Amazon Web Services secures communication with some OIDC identity providers (IdPs) through our
 *             library of trusted root certificate authorities (CAs) instead of using a certificate
 *             thumbprint to verify your IdP server certificate. These OIDC IdPs include Auth0, GitHub,
 *             Google, and those that use an Amazon S3 bucket to host a JSON Web Key Set (JWKS) endpoint. In
 *             these cases, your legacy thumbprint remains in your configuration, but is no longer used
 *             for validation.</p>
 *          </note>
 *          <note>
 *             <p>Trust for the OIDC provider is derived from the provider certificate and is
 *                 validated by the thumbprint. Therefore, it is best to limit access to the
 *                     <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly
 *                 privileged users.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateOpenIDConnectProviderThumbprintCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateOpenIDConnectProviderThumbprintCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // UpdateOpenIDConnectProviderThumbprintRequest
 *   OpenIDConnectProviderArn: "STRING_VALUE", // required
 *   ThumbprintList: [ // thumbprintListType // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateOpenIDConnectProviderThumbprintCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateOpenIDConnectProviderThumbprintCommandInput - {@link UpdateOpenIDConnectProviderThumbprintCommandInput}
 * @returns {@link UpdateOpenIDConnectProviderThumbprintCommandOutput}
 * @see {@link UpdateOpenIDConnectProviderThumbprintCommandInput} for command's `input` shape.
 * @see {@link UpdateOpenIDConnectProviderThumbprintCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 */
export class UpdateOpenIDConnectProviderThumbprintCommand extends $Command<
  UpdateOpenIDConnectProviderThumbprintCommandInput,
  UpdateOpenIDConnectProviderThumbprintCommandOutput,
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
  constructor(readonly input: UpdateOpenIDConnectProviderThumbprintCommandInput) {
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
  ): Handler<UpdateOpenIDConnectProviderThumbprintCommandInput, UpdateOpenIDConnectProviderThumbprintCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateOpenIDConnectProviderThumbprintCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateOpenIDConnectProviderThumbprintCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "UpdateOpenIDConnectProviderThumbprint",
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
  private serialize(
    input: UpdateOpenIDConnectProviderThumbprintCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateOpenIDConnectProviderThumbprintCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateOpenIDConnectProviderThumbprintCommandOutput> {
    return de_UpdateOpenIDConnectProviderThumbprintCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
