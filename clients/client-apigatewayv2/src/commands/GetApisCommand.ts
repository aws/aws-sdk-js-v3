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
import { GetApisRequest, GetApisResponse } from "../models/models_0";
import { de_GetApisCommand, se_GetApisCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetApisCommand}.
 */
export interface GetApisCommandInput extends GetApisRequest {}
/**
 * @public
 *
 * The output of {@link GetApisCommand}.
 */
export interface GetApisCommandOutput extends GetApisResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a collection of Api resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetApisCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetApisCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetApisRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetApisCommand(input);
 * const response = await client.send(command);
 * // { // GetApisResponse
 * //   Items: [ // __listOfApi
 * //     { // Api
 * //       ApiEndpoint: "STRING_VALUE",
 * //       ApiGatewayManaged: true || false,
 * //       ApiId: "STRING_VALUE",
 * //       ApiKeySelectionExpression: "STRING_VALUE",
 * //       CorsConfiguration: { // Cors
 * //         AllowCredentials: true || false,
 * //         AllowHeaders: [ // CorsHeaderList
 * //           "STRING_VALUE",
 * //         ],
 * //         AllowMethods: [ // CorsMethodList
 * //           "STRING_VALUE",
 * //         ],
 * //         AllowOrigins: [ // CorsOriginList
 * //           "STRING_VALUE",
 * //         ],
 * //         ExposeHeaders: [
 * //           "STRING_VALUE",
 * //         ],
 * //         MaxAge: Number("int"),
 * //       },
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       Description: "STRING_VALUE",
 * //       DisableSchemaValidation: true || false,
 * //       DisableExecuteApiEndpoint: true || false,
 * //       ImportInfo: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       Name: "STRING_VALUE", // required
 * //       ProtocolType: "WEBSOCKET" || "HTTP", // required
 * //       RouteSelectionExpression: "STRING_VALUE", // required
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Version: "STRING_VALUE",
 * //       Warnings: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetApisCommandInput - {@link GetApisCommandInput}
 * @returns {@link GetApisCommandOutput}
 * @see {@link GetApisCommandInput} for command's `input` shape.
 * @see {@link GetApisCommandOutput} for command's `response` shape.
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
export class GetApisCommand extends $Command<
  GetApisCommandInput,
  GetApisCommandOutput,
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
  constructor(readonly input: GetApisCommandInput) {
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
  ): Handler<GetApisCommandInput, GetApisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetApisCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "GetApisCommand";
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
  private serialize(input: GetApisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetApisCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetApisCommandOutput> {
    return de_GetApisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
