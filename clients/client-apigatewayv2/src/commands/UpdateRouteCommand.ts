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
import { UpdateRouteRequest, UpdateRouteResult } from "../models/models_0";
import { de_UpdateRouteCommand, se_UpdateRouteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRouteCommand}.
 */
export interface UpdateRouteCommandInput extends UpdateRouteRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRouteCommand}.
 */
export interface UpdateRouteCommandOutput extends UpdateRouteResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates a Route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateRouteCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateRouteCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // UpdateRouteRequest
 *   ApiId: "STRING_VALUE", // required
 *   ApiKeyRequired: true || false,
 *   AuthorizationScopes: [ // AuthorizationScopes
 *     "STRING_VALUE",
 *   ],
 *   AuthorizationType: "NONE" || "AWS_IAM" || "CUSTOM" || "JWT",
 *   AuthorizerId: "STRING_VALUE",
 *   ModelSelectionExpression: "STRING_VALUE",
 *   OperationName: "STRING_VALUE",
 *   RequestModels: { // RouteModels
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RequestParameters: { // RouteParameters
 *     "<keys>": { // ParameterConstraints
 *       Required: true || false,
 *     },
 *   },
 *   RouteId: "STRING_VALUE", // required
 *   RouteKey: "STRING_VALUE",
 *   RouteResponseSelectionExpression: "STRING_VALUE",
 *   Target: "STRING_VALUE",
 * };
 * const command = new UpdateRouteCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRouteResult
 * //   ApiGatewayManaged: true || false,
 * //   ApiKeyRequired: true || false,
 * //   AuthorizationScopes: [ // AuthorizationScopes
 * //     "STRING_VALUE",
 * //   ],
 * //   AuthorizationType: "NONE" || "AWS_IAM" || "CUSTOM" || "JWT",
 * //   AuthorizerId: "STRING_VALUE",
 * //   ModelSelectionExpression: "STRING_VALUE",
 * //   OperationName: "STRING_VALUE",
 * //   RequestModels: { // RouteModels
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   RequestParameters: { // RouteParameters
 * //     "<keys>": { // ParameterConstraints
 * //       Required: true || false,
 * //     },
 * //   },
 * //   RouteId: "STRING_VALUE",
 * //   RouteKey: "STRING_VALUE",
 * //   RouteResponseSelectionExpression: "STRING_VALUE",
 * //   Target: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateRouteCommandInput - {@link UpdateRouteCommandInput}
 * @returns {@link UpdateRouteCommandOutput}
 * @see {@link UpdateRouteCommandInput} for command's `input` shape.
 * @see {@link UpdateRouteCommandOutput} for command's `response` shape.
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
export class UpdateRouteCommand extends $Command<
  UpdateRouteCommandInput,
  UpdateRouteCommandOutput,
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
  constructor(readonly input: UpdateRouteCommandInput) {
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
  ): Handler<UpdateRouteCommandInput, UpdateRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateRouteCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "UpdateRouteCommand";
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
  private serialize(input: UpdateRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRouteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRouteCommandOutput> {
    return de_UpdateRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
