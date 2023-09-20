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

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { Authorizers, GetAuthorizersRequest } from "../models/models_0";
import { de_GetAuthorizersCommand, se_GetAuthorizersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAuthorizersCommand}.
 */
export interface GetAuthorizersCommandInput extends GetAuthorizersRequest {}
/**
 * @public
 *
 * The output of {@link GetAuthorizersCommand}.
 */
export interface GetAuthorizersCommandOutput extends Authorizers, __MetadataBearer {}

/**
 * @public
 * <p>Describe an existing Authorizers resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetAuthorizersCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetAuthorizersCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetAuthorizersRequest
 *   restApiId: "STRING_VALUE", // required
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new GetAuthorizersCommand(input);
 * const response = await client.send(command);
 * // { // Authorizers
 * //   items: [ // ListOfAuthorizer
 * //     { // Authorizer
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       type: "TOKEN" || "REQUEST" || "COGNITO_USER_POOLS",
 * //       providerARNs: [ // ListOfARNs
 * //         "STRING_VALUE",
 * //       ],
 * //       authType: "STRING_VALUE",
 * //       authorizerUri: "STRING_VALUE",
 * //       authorizerCredentials: "STRING_VALUE",
 * //       identitySource: "STRING_VALUE",
 * //       identityValidationExpression: "STRING_VALUE",
 * //       authorizerResultTtlInSeconds: Number("int"),
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAuthorizersCommandInput - {@link GetAuthorizersCommandInput}
 * @returns {@link GetAuthorizersCommandOutput}
 * @see {@link GetAuthorizersCommandInput} for command's `input` shape.
 * @see {@link GetAuthorizersCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 */
export class GetAuthorizersCommand extends $Command<
  GetAuthorizersCommandInput,
  GetAuthorizersCommandOutput,
  APIGatewayClientResolvedConfig
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
  constructor(readonly input: GetAuthorizersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAuthorizersCommandInput, GetAuthorizersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAuthorizersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetAuthorizersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BackplaneControlService",
        operation: "GetAuthorizers",
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
  private serialize(input: GetAuthorizersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAuthorizersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAuthorizersCommandOutput> {
    return de_GetAuthorizersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
