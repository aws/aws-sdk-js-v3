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
import { CreateAuthorizerRequest, CreateAuthorizerResponse } from "../models/models_0";
import { de_CreateAuthorizerCommand, se_CreateAuthorizerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAuthorizerCommand}.
 */
export interface CreateAuthorizerCommandInput extends CreateAuthorizerRequest {}
/**
 * @public
 *
 * The output of {@link CreateAuthorizerCommand}.
 */
export interface CreateAuthorizerCommandOutput extends CreateAuthorizerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Authorizer for an API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateAuthorizerCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateAuthorizerCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // CreateAuthorizerRequest
 *   ApiId: "STRING_VALUE", // required
 *   AuthorizerCredentialsArn: "STRING_VALUE",
 *   AuthorizerPayloadFormatVersion: "STRING_VALUE",
 *   AuthorizerResultTtlInSeconds: Number("int"),
 *   AuthorizerType: "REQUEST" || "JWT", // required
 *   AuthorizerUri: "STRING_VALUE",
 *   EnableSimpleResponses: true || false,
 *   IdentitySource: [ // IdentitySourceList // required
 *     "STRING_VALUE",
 *   ],
 *   IdentityValidationExpression: "STRING_VALUE",
 *   JwtConfiguration: { // JWTConfiguration
 *     Audience: [ // __listOf__string
 *       "STRING_VALUE",
 *     ],
 *     Issuer: "STRING_VALUE",
 *   },
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new CreateAuthorizerCommand(input);
 * const response = await client.send(command);
 * // { // CreateAuthorizerResponse
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
 * @param CreateAuthorizerCommandInput - {@link CreateAuthorizerCommandInput}
 * @returns {@link CreateAuthorizerCommandOutput}
 * @see {@link CreateAuthorizerCommandInput} for command's `input` shape.
 * @see {@link CreateAuthorizerCommandOutput} for command's `response` shape.
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
export class CreateAuthorizerCommand extends $Command<
  CreateAuthorizerCommandInput,
  CreateAuthorizerCommandOutput,
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
  constructor(readonly input: CreateAuthorizerCommandInput) {
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
  ): Handler<CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAuthorizerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "CreateAuthorizerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ApiGatewayV2",
        operation: "CreateAuthorizer",
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
  private serialize(input: CreateAuthorizerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAuthorizerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAuthorizerCommandOutput> {
    return de_CreateAuthorizerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
