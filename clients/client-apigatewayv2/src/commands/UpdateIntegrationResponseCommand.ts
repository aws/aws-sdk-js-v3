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
import { UpdateIntegrationResponseRequest, UpdateIntegrationResponseResponse } from "../models/models_0";
import { de_UpdateIntegrationResponseCommand, se_UpdateIntegrationResponseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateIntegrationResponseCommand}.
 */
export interface UpdateIntegrationResponseCommandInput extends UpdateIntegrationResponseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIntegrationResponseCommand}.
 */
export interface UpdateIntegrationResponseCommandOutput extends UpdateIntegrationResponseResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an IntegrationResponses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, UpdateIntegrationResponseCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, UpdateIntegrationResponseCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // UpdateIntegrationResponseRequest
 *   ApiId: "STRING_VALUE", // required
 *   ContentHandlingStrategy: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 *   IntegrationId: "STRING_VALUE", // required
 *   IntegrationResponseId: "STRING_VALUE", // required
 *   IntegrationResponseKey: "STRING_VALUE",
 *   ResponseParameters: { // IntegrationParameters
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ResponseTemplates: { // TemplateMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TemplateSelectionExpression: "STRING_VALUE",
 * };
 * const command = new UpdateIntegrationResponseCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIntegrationResponseResponse
 * //   ContentHandlingStrategy: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //   IntegrationResponseId: "STRING_VALUE",
 * //   IntegrationResponseKey: "STRING_VALUE",
 * //   ResponseParameters: { // IntegrationParameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ResponseTemplates: { // TemplateMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   TemplateSelectionExpression: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateIntegrationResponseCommandInput - {@link UpdateIntegrationResponseCommandInput}
 * @returns {@link UpdateIntegrationResponseCommandOutput}
 * @see {@link UpdateIntegrationResponseCommandInput} for command's `input` shape.
 * @see {@link UpdateIntegrationResponseCommandOutput} for command's `response` shape.
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
export class UpdateIntegrationResponseCommand extends $Command<
  UpdateIntegrationResponseCommandInput,
  UpdateIntegrationResponseCommandOutput,
  ApiGatewayV2ClientResolvedConfig
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
  constructor(readonly input: UpdateIntegrationResponseCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateIntegrationResponseCommandInput, UpdateIntegrationResponseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateIntegrationResponseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "UpdateIntegrationResponseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ApiGatewayV2",
        operation: "UpdateIntegrationResponse",
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
  private serialize(input: UpdateIntegrationResponseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateIntegrationResponseCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateIntegrationResponseCommandOutput> {
    return de_UpdateIntegrationResponseCommand(output, context);
  }
}
