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

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import {
  GetUICustomizationRequest,
  GetUICustomizationRequestFilterSensitiveLog,
  GetUICustomizationResponse,
  GetUICustomizationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetUICustomizationCommand, se_GetUICustomizationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetUICustomizationCommand}.
 */
export interface GetUICustomizationCommandInput extends GetUICustomizationRequest {}
/**
 * @public
 *
 * The output of {@link GetUICustomizationCommand}.
 */
export interface GetUICustomizationCommandOutput extends GetUICustomizationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the user interface (UI) Customization information for a particular app client's
 *             app UI, if any such information exists for the client. If nothing is set for the
 *             particular client, but there is an existing pool level customization (the app
 *                 <code>clientId</code> is <code>ALL</code>), then that information is returned. If
 *             nothing is present, then an empty shape is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetUICustomizationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetUICustomizationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // GetUICustomizationRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE",
 * };
 * const command = new GetUICustomizationCommand(input);
 * const response = await client.send(command);
 * // { // GetUICustomizationResponse
 * //   UICustomization: { // UICustomizationType
 * //     UserPoolId: "STRING_VALUE",
 * //     ClientId: "STRING_VALUE",
 * //     ImageUrl: "STRING_VALUE",
 * //     CSS: "STRING_VALUE",
 * //     CSSVersion: "STRING_VALUE",
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //     CreationDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetUICustomizationCommandInput - {@link GetUICustomizationCommandInput}
 * @returns {@link GetUICustomizationCommandOutput}
 * @see {@link GetUICustomizationCommandInput} for command's `input` shape.
 * @see {@link GetUICustomizationCommandOutput} for command's `response` shape.
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
export class GetUICustomizationCommand extends $Command<
  GetUICustomizationCommandInput,
  GetUICustomizationCommandOutput,
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
  constructor(readonly input: GetUICustomizationCommandInput) {
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
  ): Handler<GetUICustomizationCommandInput, GetUICustomizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUICustomizationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "GetUICustomizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetUICustomizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetUICustomizationResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCognitoIdentityProviderService",
        operation: "GetUICustomization",
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
  private serialize(input: GetUICustomizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetUICustomizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUICustomizationCommandOutput> {
    return de_GetUICustomizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
