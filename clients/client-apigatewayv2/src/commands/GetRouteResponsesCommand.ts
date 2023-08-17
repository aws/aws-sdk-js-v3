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
} from "@smithy/types";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { GetRouteResponsesRequest, GetRouteResponsesResponse } from "../models/models_0";
import { de_GetRouteResponsesCommand, se_GetRouteResponsesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRouteResponsesCommand}.
 */
export interface GetRouteResponsesCommandInput extends GetRouteResponsesRequest {}
/**
 * @public
 *
 * The output of {@link GetRouteResponsesCommand}.
 */
export interface GetRouteResponsesCommandOutput extends GetRouteResponsesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the RouteResponses for a Route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetRouteResponsesCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetRouteResponsesCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetRouteResponsesRequest
 *   ApiId: "STRING_VALUE", // required
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   RouteId: "STRING_VALUE", // required
 * };
 * const command = new GetRouteResponsesCommand(input);
 * const response = await client.send(command);
 * // { // GetRouteResponsesResponse
 * //   Items: [ // __listOfRouteResponse
 * //     { // RouteResponse
 * //       ModelSelectionExpression: "STRING_VALUE",
 * //       ResponseModels: { // RouteModels
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ResponseParameters: { // RouteParameters
 * //         "<keys>": { // ParameterConstraints
 * //           Required: true || false,
 * //         },
 * //       },
 * //       RouteResponseId: "STRING_VALUE",
 * //       RouteResponseKey: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRouteResponsesCommandInput - {@link GetRouteResponsesCommandInput}
 * @returns {@link GetRouteResponsesCommandOutput}
 * @see {@link GetRouteResponsesCommandInput} for command's `input` shape.
 * @see {@link GetRouteResponsesCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
export class GetRouteResponsesCommand extends $Command<
  GetRouteResponsesCommandInput,
  GetRouteResponsesCommandOutput,
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
  constructor(readonly input: GetRouteResponsesCommandInput) {
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
  ): Handler<GetRouteResponsesCommandInput, GetRouteResponsesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRouteResponsesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "GetRouteResponsesCommand";
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
  private serialize(input: GetRouteResponsesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRouteResponsesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRouteResponsesCommandOutput> {
    return de_GetRouteResponsesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
