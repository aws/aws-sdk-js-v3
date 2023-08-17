// smithy-typescript generated code
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { IdentityPool } from "../models/models_0";
import { de_UpdateIdentityPoolCommand, se_UpdateIdentityPoolCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateIdentityPoolCommand}.
 */
export interface UpdateIdentityPoolCommandInput extends IdentityPool {}
/**
 * @public
 *
 * The output of {@link UpdateIdentityPoolCommand}.
 */
export interface UpdateIdentityPoolCommandOutput extends IdentityPool, __MetadataBearer {}

/**
 * @public
 * <p>Updates an identity pool.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, UpdateIdentityPoolCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, UpdateIdentityPoolCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // IdentityPool
 *   IdentityPoolId: "STRING_VALUE", // required
 *   IdentityPoolName: "STRING_VALUE", // required
 *   AllowUnauthenticatedIdentities: true || false, // required
 *   AllowClassicFlow: true || false,
 *   SupportedLoginProviders: { // IdentityProviders
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DeveloperProviderName: "STRING_VALUE",
 *   OpenIdConnectProviderARNs: [ // OIDCProviderList
 *     "STRING_VALUE",
 *   ],
 *   CognitoIdentityProviders: [ // CognitoIdentityProviderList
 *     { // CognitoIdentityProvider
 *       ProviderName: "STRING_VALUE",
 *       ClientId: "STRING_VALUE",
 *       ServerSideTokenCheck: true || false,
 *     },
 *   ],
 *   SamlProviderARNs: [ // SAMLProviderList
 *     "STRING_VALUE",
 *   ],
 *   IdentityPoolTags: { // IdentityPoolTagsType
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateIdentityPoolCommand(input);
 * const response = await client.send(command);
 * // { // IdentityPool
 * //   IdentityPoolId: "STRING_VALUE", // required
 * //   IdentityPoolName: "STRING_VALUE", // required
 * //   AllowUnauthenticatedIdentities: true || false, // required
 * //   AllowClassicFlow: true || false,
 * //   SupportedLoginProviders: { // IdentityProviders
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   DeveloperProviderName: "STRING_VALUE",
 * //   OpenIdConnectProviderARNs: [ // OIDCProviderList
 * //     "STRING_VALUE",
 * //   ],
 * //   CognitoIdentityProviders: [ // CognitoIdentityProviderList
 * //     { // CognitoIdentityProvider
 * //       ProviderName: "STRING_VALUE",
 * //       ClientId: "STRING_VALUE",
 * //       ServerSideTokenCheck: true || false,
 * //     },
 * //   ],
 * //   SamlProviderARNs: [ // SAMLProviderList
 * //     "STRING_VALUE",
 * //   ],
 * //   IdentityPoolTags: { // IdentityPoolTagsType
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateIdentityPoolCommandInput - {@link UpdateIdentityPoolCommandInput}
 * @returns {@link UpdateIdentityPoolCommandOutput}
 * @see {@link UpdateIdentityPoolCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityPoolCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Thrown if there are parallel requests to modify a resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Thrown when the service encounters an error during processing the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Thrown for missing or bad input parameter(s).</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Thrown when the total number of user pools has exceeded a preset limit.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>Thrown when a user is not authorized to access the requested resource.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>Thrown when a user tries to use a login which is already linked to another
 *          account.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when the requested resource (for example, a dataset or record) does not
 *          exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Thrown when a request is throttled.</p>
 *
 * @throws {@link CognitoIdentityServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentity service.</p>
 *
 */
export class UpdateIdentityPoolCommand extends $Command<
  UpdateIdentityPoolCommandInput,
  UpdateIdentityPoolCommandOutput,
  CognitoIdentityClientResolvedConfig
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
  constructor(readonly input: UpdateIdentityPoolCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateIdentityPoolCommandInput, UpdateIdentityPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateIdentityPoolCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "UpdateIdentityPoolCommand";
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
  private serialize(input: UpdateIdentityPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateIdentityPoolCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateIdentityPoolCommandOutput> {
    return de_UpdateIdentityPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
