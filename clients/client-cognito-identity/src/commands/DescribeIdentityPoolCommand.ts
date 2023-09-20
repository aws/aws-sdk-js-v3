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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { DescribeIdentityPoolInput, IdentityPool } from "../models/models_0";
import { de_DescribeIdentityPoolCommand, se_DescribeIdentityPoolCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeIdentityPoolCommand}.
 */
export interface DescribeIdentityPoolCommandInput extends DescribeIdentityPoolInput {}
/**
 * @public
 *
 * The output of {@link DescribeIdentityPoolCommand}.
 */
export interface DescribeIdentityPoolCommandOutput extends IdentityPool, __MetadataBearer {}

/**
 * @public
 * <p>Gets details about a particular identity pool, including the pool name, ID
 *          description, creation date, and current number of users.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, DescribeIdentityPoolCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, DescribeIdentityPoolCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const input = { // DescribeIdentityPoolInput
 *   IdentityPoolId: "STRING_VALUE", // required
 * };
 * const command = new DescribeIdentityPoolCommand(input);
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
 * @param DescribeIdentityPoolCommandInput - {@link DescribeIdentityPoolCommandInput}
 * @returns {@link DescribeIdentityPoolCommandOutput}
 * @see {@link DescribeIdentityPoolCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityPoolCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Thrown when the service encounters an error during processing the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Thrown for missing or bad input parameter(s).</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>Thrown when a user is not authorized to access the requested resource.</p>
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
export class DescribeIdentityPoolCommand extends $Command<
  DescribeIdentityPoolCommandInput,
  DescribeIdentityPoolCommandOutput,
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
  constructor(readonly input: DescribeIdentityPoolCommandInput) {
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
  ): Handler<DescribeIdentityPoolCommandInput, DescribeIdentityPoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeIdentityPoolCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "DescribeIdentityPoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCognitoIdentityService",
        operation: "DescribeIdentityPool",
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
  private serialize(input: DescribeIdentityPoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeIdentityPoolCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeIdentityPoolCommandOutput> {
    return de_DescribeIdentityPoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
