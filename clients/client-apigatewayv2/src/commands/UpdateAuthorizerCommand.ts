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

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { UpdateAuthorizerRequest, UpdateAuthorizerResponse } from "../models/models_0";
import { de_UpdateAuthorizerCommand, se_UpdateAuthorizerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAuthorizerCommand}.
 */
export interface UpdateAuthorizerCommandInput extends UpdateAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAuthorizerCommand}.
 */
export interface UpdateAuthorizerCommandOutput extends UpdateAuthorizerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an Authorizer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateAuthorizerCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateAuthorizerCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // UpdateAuthorizerRequest
 *   ApiId: "STRING_VALUE", // required
 *   AuthorizerCredentialsArn: "STRING_VALUE",
 *   AuthorizerId: "STRING_VALUE", // required
 *   AuthorizerPayloadFormatVersion: "STRING_VALUE",
 *   AuthorizerResultTtlInSeconds: Number("int"),
 *   AuthorizerType: "REQUEST" || "JWT",
 *   AuthorizerUri: "STRING_VALUE",
 *   EnableSimpleResponses: true || false,
 *   IdentitySource: [ // IdentitySourceList
 *     "STRING_VALUE",
 *   ],
 *   IdentityValidationExpression: "STRING_VALUE",
 *   JwtConfiguration: { // JWTConfiguration
 *     Audience: [ // __listOf__string
 *       "STRING_VALUE",
 *     ],
 *     Issuer: "STRING_VALUE",
 *   },
 *   Name: "STRING_VALUE",
 * };
 * const command = new UpdateAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAuthorizerResponse
 * //   AuthorizerCredentialsArn: "STRING_VALUE",
 * //   AuthorizerId: "STRING_VALUE",
 * //   AuthorizerPayloadFormatVersion: "STRING_VALUE",
 * //   AuthorizerResultTtlInSeconds: Number("int"),
 * //   AuthorizerType: "REQUEST" || "JWT",
 * //   AuthorizerUri: "STRING_VALUE",
 * //   EnableSimpleResponses: true || false,
 * //   IdentitySource: [ // IdentitySourceList
 * //     "STRING_VALUE",
 * //   ],
 * //   IdentityValidationExpression: "STRING_VALUE",
 * //   JwtConfiguration: { // JWTConfiguration
 * //     Audience: [ // __listOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //     Issuer: "STRING_VALUE",
 * //   },
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAuthorizerCommandInput - {@link UpdateAuthorizerCommandInput}
 * @returns {@link UpdateAuthorizerCommandOutput}
 * @see {@link UpdateAuthorizerCommandInput} for command's `input` shape.
 * @see {@link UpdateAuthorizerCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. See the message field for more information.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>A limit has been exceeded. See the accompanying error message for details.</p>
 *
 * @throws {@link ApiGatewayV2ServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayV2 service.</p>
 *
 */
export class UpdateAuthorizerCommand extends $Command<
  UpdateAuthorizerCommandInput,
  UpdateAuthorizerCommandOutput,
  ApiGatewayV2ClientResolvedConfig
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
  constructor(readonly input: UpdateAuthorizerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAuthorizerCommandInput, UpdateAuthorizerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAuthorizerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "UpdateAuthorizerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ApiGatewayV2",
        operation: "UpdateAuthorizer",
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
  private serialize(input: UpdateAuthorizerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAuthorizerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAuthorizerCommandOutput> {
    return de_UpdateAuthorizerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
