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
import { UpdateApiRequest, UpdateApiResponse } from "../models/models_0";
import { de_UpdateApiCommand, se_UpdateApiCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateApiCommand}.
 */
export interface UpdateApiCommandInput extends UpdateApiRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApiCommand}.
 */
export interface UpdateApiCommandOutput extends UpdateApiResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an Api resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateApiCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateApiCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // UpdateApiRequest
 *   ApiId: "STRING_VALUE", // required
 *   ApiKeySelectionExpression: "STRING_VALUE",
 *   CorsConfiguration: { // Cors
 *     AllowCredentials: true || false,
 *     AllowHeaders: [ // CorsHeaderList
 *       "STRING_VALUE",
 *     ],
 *     AllowMethods: [ // CorsMethodList
 *       "STRING_VALUE",
 *     ],
 *     AllowOrigins: [ // CorsOriginList
 *       "STRING_VALUE",
 *     ],
 *     ExposeHeaders: [
 *       "STRING_VALUE",
 *     ],
 *     MaxAge: Number("int"),
 *   },
 *   CredentialsArn: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   DisableSchemaValidation: true || false,
 *   DisableExecuteApiEndpoint: true || false,
 *   Name: "STRING_VALUE",
 *   RouteKey: "STRING_VALUE",
 *   RouteSelectionExpression: "STRING_VALUE",
 *   Target: "STRING_VALUE",
 *   Version: "STRING_VALUE",
 * };
 * const command = new UpdateApiCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApiResponse
 * //   ApiEndpoint: "STRING_VALUE",
 * //   ApiGatewayManaged: true || false,
 * //   ApiId: "STRING_VALUE",
 * //   ApiKeySelectionExpression: "STRING_VALUE",
 * //   CorsConfiguration: { // Cors
 * //     AllowCredentials: true || false,
 * //     AllowHeaders: [ // CorsHeaderList
 * //       "STRING_VALUE",
 * //     ],
 * //     AllowMethods: [ // CorsMethodList
 * //       "STRING_VALUE",
 * //     ],
 * //     AllowOrigins: [ // CorsOriginList
 * //       "STRING_VALUE",
 * //     ],
 * //     ExposeHeaders: [
 * //       "STRING_VALUE",
 * //     ],
 * //     MaxAge: Number("int"),
 * //   },
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   DisableSchemaValidation: true || false,
 * //   DisableExecuteApiEndpoint: true || false,
 * //   ImportInfo: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   Name: "STRING_VALUE",
 * //   ProtocolType: "WEBSOCKET" || "HTTP",
 * //   RouteSelectionExpression: "STRING_VALUE",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Version: "STRING_VALUE",
 * //   Warnings: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateApiCommandInput - {@link UpdateApiCommandInput}
 * @returns {@link UpdateApiCommandOutput}
 * @see {@link UpdateApiCommandInput} for command's `input` shape.
 * @see {@link UpdateApiCommandOutput} for command's `response` shape.
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
export class UpdateApiCommand extends $Command<
  UpdateApiCommandInput,
  UpdateApiCommandOutput,
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
  constructor(readonly input: UpdateApiCommandInput) {
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
  ): Handler<UpdateApiCommandInput, UpdateApiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateApiCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "UpdateApiCommand";
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
  private serialize(input: UpdateApiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateApiCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateApiCommandOutput> {
    return de_UpdateApiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
