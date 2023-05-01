// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { UpdateResourceServerRequest, UpdateResourceServerResponse } from "../models/models_1";
import { de_UpdateResourceServerCommand, se_UpdateResourceServerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateResourceServerCommand}.
 */
export interface UpdateResourceServerCommandInput extends UpdateResourceServerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResourceServerCommand}.
 */
export interface UpdateResourceServerCommandOutput extends UpdateResourceServerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the name and scopes of resource server. All other fields are read-only.</p>
 *         <important>
 *             <p>If you don't provide a value for an attribute, it is set to the default
 *                 value.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateResourceServerCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateResourceServerCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // UpdateResourceServerRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Scopes: [ // ResourceServerScopeListType
 *     { // ResourceServerScopeType
 *       ScopeName: "STRING_VALUE", // required
 *       ScopeDescription: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateResourceServerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResourceServerResponse
 * //   ResourceServer: { // ResourceServerType
 * //     UserPoolId: "STRING_VALUE",
 * //     Identifier: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Scopes: [ // ResourceServerScopeListType
 * //       { // ResourceServerScopeType
 * //         ScopeName: "STRING_VALUE", // required
 * //         ScopeDescription: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateResourceServerCommandInput - {@link UpdateResourceServerCommandInput}
 * @returns {@link UpdateResourceServerCommandOutput}
 * @see {@link UpdateResourceServerCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceServerCommandOutput} for command's `response` shape.
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
export class UpdateResourceServerCommand extends $Command<
  UpdateResourceServerCommandInput,
  UpdateResourceServerCommandOutput,
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
  constructor(readonly input: UpdateResourceServerCommandInput) {
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
  ): Handler<UpdateResourceServerCommandInput, UpdateResourceServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateResourceServerCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "UpdateResourceServerCommand";
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
  private serialize(input: UpdateResourceServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateResourceServerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateResourceServerCommandOutput> {
    return de_UpdateResourceServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
