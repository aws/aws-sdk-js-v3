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
import { GatewayResponses, GetGatewayResponsesRequest } from "../models/models_0";
import { de_GetGatewayResponsesCommand, se_GetGatewayResponsesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetGatewayResponsesCommand}.
 */
export interface GetGatewayResponsesCommandInput extends GetGatewayResponsesRequest {}
/**
 * @public
 *
 * The output of {@link GetGatewayResponsesCommand}.
 */
export interface GetGatewayResponsesCommandOutput extends GatewayResponses, __MetadataBearer {}

/**
 * @public
 * <p>Gets the GatewayResponses collection on the given RestApi. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default GatewayResponses collection for the supported response types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetGatewayResponsesCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetGatewayResponsesCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetGatewayResponsesRequest
 *   restApiId: "STRING_VALUE", // required
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new GetGatewayResponsesCommand(input);
 * const response = await client.send(command);
 * // { // GatewayResponses
 * //   items: [ // ListOfGatewayResponse
 * //     { // GatewayResponse
 * //       responseType: "DEFAULT_4XX" || "DEFAULT_5XX" || "RESOURCE_NOT_FOUND" || "UNAUTHORIZED" || "INVALID_API_KEY" || "ACCESS_DENIED" || "AUTHORIZER_FAILURE" || "AUTHORIZER_CONFIGURATION_ERROR" || "INVALID_SIGNATURE" || "EXPIRED_TOKEN" || "MISSING_AUTHENTICATION_TOKEN" || "INTEGRATION_FAILURE" || "INTEGRATION_TIMEOUT" || "API_CONFIGURATION_ERROR" || "UNSUPPORTED_MEDIA_TYPE" || "BAD_REQUEST_PARAMETERS" || "BAD_REQUEST_BODY" || "REQUEST_TOO_LARGE" || "THROTTLED" || "QUOTA_EXCEEDED" || "WAF_FILTERED",
 * //       statusCode: "STRING_VALUE",
 * //       responseParameters: { // MapOfStringToString
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       responseTemplates: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       defaultResponse: true || false,
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGatewayResponsesCommandInput - {@link GetGatewayResponsesCommandInput}
 * @returns {@link GetGatewayResponsesCommandOutput}
 * @see {@link GetGatewayResponsesCommandInput} for command's `input` shape.
 * @see {@link GetGatewayResponsesCommandOutput} for command's `response` shape.
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
export class GetGatewayResponsesCommand extends $Command<
  GetGatewayResponsesCommandInput,
  GetGatewayResponsesCommandOutput,
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
  constructor(readonly input: GetGatewayResponsesCommandInput) {
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
  ): Handler<GetGatewayResponsesCommandInput, GetGatewayResponsesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetGatewayResponsesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetGatewayResponsesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "BackplaneControlService",
        operation: "GetGatewayResponses",
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
  private serialize(input: GetGatewayResponsesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetGatewayResponsesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGatewayResponsesCommandOutput> {
    return de_GetGatewayResponsesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
