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
import { GetIntegrationRequest, Integration } from "../models/models_0";
import { de_GetIntegrationCommand, se_GetIntegrationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIntegrationCommand}.
 */
export interface GetIntegrationCommandInput extends GetIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link GetIntegrationCommand}.
 */
export interface GetIntegrationCommandOutput extends Integration, __MetadataBearer {}

/**
 * @public
 * <p>Get the integration settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetIntegrationCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetIntegrationCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetIntegrationRequest
 *   restApiId: "STRING_VALUE", // required
 *   resourceId: "STRING_VALUE", // required
 *   httpMethod: "STRING_VALUE", // required
 * };
 * const command = new GetIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // Integration
 * //   type: "HTTP" || "AWS" || "MOCK" || "HTTP_PROXY" || "AWS_PROXY",
 * //   httpMethod: "STRING_VALUE",
 * //   uri: "STRING_VALUE",
 * //   connectionType: "INTERNET" || "VPC_LINK",
 * //   connectionId: "STRING_VALUE",
 * //   credentials: "STRING_VALUE",
 * //   requestParameters: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   requestTemplates: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   passthroughBehavior: "STRING_VALUE",
 * //   contentHandling: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //   timeoutInMillis: Number("int"),
 * //   cacheNamespace: "STRING_VALUE",
 * //   cacheKeyParameters: [ // ListOfString
 * //     "STRING_VALUE",
 * //   ],
 * //   integrationResponses: { // MapOfIntegrationResponse
 * //     "<keys>": { // IntegrationResponse
 * //       statusCode: "STRING_VALUE",
 * //       selectionPattern: "STRING_VALUE",
 * //       responseParameters: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       responseTemplates: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       contentHandling: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //     },
 * //   },
 * //   tlsConfig: { // TlsConfig
 * //     insecureSkipVerification: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIntegrationCommandInput - {@link GetIntegrationCommandInput}
 * @returns {@link GetIntegrationCommandOutput}
 * @see {@link GetIntegrationCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationCommandOutput} for command's `response` shape.
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
export class GetIntegrationCommand extends $Command<
  GetIntegrationCommandInput,
  GetIntegrationCommandOutput,
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
  constructor(readonly input: GetIntegrationCommandInput) {
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
  ): Handler<GetIntegrationCommandInput, GetIntegrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIntegrationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetIntegrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BackplaneControlService",
        operation: "GetIntegration",
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
  private serialize(input: GetIntegrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetIntegrationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIntegrationCommandOutput> {
    return de_GetIntegrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
