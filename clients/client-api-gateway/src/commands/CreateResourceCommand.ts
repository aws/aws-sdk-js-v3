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
import { CreateResourceRequest, Resource } from "../models/models_0";
import { de_CreateResourceCommand, se_CreateResourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateResourceCommand}.
 */
export interface CreateResourceCommandInput extends CreateResourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceCommand}.
 */
export interface CreateResourceCommandOutput extends Resource, __MetadataBearer {}

/**
 * @public
 * <p>Creates a Resource resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateResourceCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateResourceCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // CreateResourceRequest
 *   restApiId: "STRING_VALUE", // required
 *   parentId: "STRING_VALUE", // required
 *   pathPart: "STRING_VALUE", // required
 * };
 * const command = new CreateResourceCommand(input);
 * const response = await client.send(command);
 * // { // Resource
 * //   id: "STRING_VALUE",
 * //   parentId: "STRING_VALUE",
 * //   pathPart: "STRING_VALUE",
 * //   path: "STRING_VALUE",
 * //   resourceMethods: { // MapOfMethod
 * //     "<keys>": { // Method
 * //       httpMethod: "STRING_VALUE",
 * //       authorizationType: "STRING_VALUE",
 * //       authorizerId: "STRING_VALUE",
 * //       apiKeyRequired: true || false,
 * //       requestValidatorId: "STRING_VALUE",
 * //       operationName: "STRING_VALUE",
 * //       requestParameters: { // MapOfStringToBoolean
 * //         "<keys>": true || false,
 * //       },
 * //       requestModels: { // MapOfStringToString
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       methodResponses: { // MapOfMethodResponse
 * //         "<keys>": { // MethodResponse
 * //           statusCode: "STRING_VALUE",
 * //           responseParameters: {
 * //             "<keys>": true || false,
 * //           },
 * //           responseModels: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       methodIntegration: { // Integration
 * //         type: "HTTP" || "AWS" || "MOCK" || "HTTP_PROXY" || "AWS_PROXY",
 * //         httpMethod: "STRING_VALUE",
 * //         uri: "STRING_VALUE",
 * //         connectionType: "INTERNET" || "VPC_LINK",
 * //         connectionId: "STRING_VALUE",
 * //         credentials: "STRING_VALUE",
 * //         requestParameters: "<MapOfStringToString>",
 * //         requestTemplates: "<MapOfStringToString>",
 * //         passthroughBehavior: "STRING_VALUE",
 * //         contentHandling: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //         timeoutInMillis: Number("int"),
 * //         cacheNamespace: "STRING_VALUE",
 * //         cacheKeyParameters: [ // ListOfString
 * //           "STRING_VALUE",
 * //         ],
 * //         integrationResponses: { // MapOfIntegrationResponse
 * //           "<keys>": { // IntegrationResponse
 * //             statusCode: "STRING_VALUE",
 * //             selectionPattern: "STRING_VALUE",
 * //             responseParameters: "<MapOfStringToString>",
 * //             responseTemplates: "<MapOfStringToString>",
 * //             contentHandling: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //           },
 * //         },
 * //         tlsConfig: { // TlsConfig
 * //           insecureSkipVerification: true || false,
 * //         },
 * //       },
 * //       authorizationScopes: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateResourceCommandInput - {@link CreateResourceCommandInput}
 * @returns {@link CreateResourceCommandOutput}
 * @see {@link CreateResourceCommandInput} for command's `input` shape.
 * @see {@link CreateResourceCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded the rate limit. Retry after the specified time period.</p>
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
export class CreateResourceCommand extends $Command<
  CreateResourceCommandInput,
  CreateResourceCommandOutput,
  APIGatewayClientResolvedConfig
> {
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
  constructor(readonly input: CreateResourceCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateResourceCommandInput, CreateResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "CreateResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BackplaneControlService",
        operation: "CreateResource",
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
  private serialize(input: CreateResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateResourceCommandOutput> {
    return de_CreateResourceCommand(output, context);
  }
}
