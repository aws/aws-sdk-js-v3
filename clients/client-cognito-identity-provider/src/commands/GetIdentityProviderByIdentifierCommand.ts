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

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { GetIdentityProviderByIdentifierRequest, GetIdentityProviderByIdentifierResponse } from "../models/models_0";
import {
  de_GetIdentityProviderByIdentifierCommand,
  se_GetIdentityProviderByIdentifierCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIdentityProviderByIdentifierCommand}.
 */
export interface GetIdentityProviderByIdentifierCommandInput extends GetIdentityProviderByIdentifierRequest {}
/**
 * @public
 *
 * The output of {@link GetIdentityProviderByIdentifierCommand}.
 */
export interface GetIdentityProviderByIdentifierCommandOutput
  extends GetIdentityProviderByIdentifierResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the specified IdP.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetIdentityProviderByIdentifierCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetIdentityProviderByIdentifierCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // GetIdentityProviderByIdentifierRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   IdpIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetIdentityProviderByIdentifierCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityProviderByIdentifierResponse
 * //   IdentityProvider: { // IdentityProviderType
 * //     UserPoolId: "STRING_VALUE",
 * //     ProviderName: "STRING_VALUE",
 * //     ProviderType: "SAML" || "Facebook" || "Google" || "LoginWithAmazon" || "SignInWithApple" || "OIDC",
 * //     ProviderDetails: { // ProviderDetailsType
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     AttributeMapping: { // AttributeMappingType
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     IdpIdentifiers: [ // IdpIdentifiersListType
 * //       "STRING_VALUE",
 * //     ],
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //     CreationDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIdentityProviderByIdentifierCommandInput - {@link GetIdentityProviderByIdentifierCommandInput}
 * @returns {@link GetIdentityProviderByIdentifierCommandOutput}
 * @see {@link GetIdentityProviderByIdentifierCommandInput} for command's `input` shape.
 * @see {@link GetIdentityProviderByIdentifierCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 */
export class GetIdentityProviderByIdentifierCommand extends $Command<
  GetIdentityProviderByIdentifierCommandInput,
  GetIdentityProviderByIdentifierCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
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
  constructor(readonly input: GetIdentityProviderByIdentifierCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIdentityProviderByIdentifierCommandInput, GetIdentityProviderByIdentifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIdentityProviderByIdentifierCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "GetIdentityProviderByIdentifierCommand";
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
  private serialize(
    input: GetIdentityProviderByIdentifierCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetIdentityProviderByIdentifierCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIdentityProviderByIdentifierCommandOutput> {
    return de_GetIdentityProviderByIdentifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
