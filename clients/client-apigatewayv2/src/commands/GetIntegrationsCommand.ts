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
import { GetIntegrationsRequest, GetIntegrationsResponse } from "../models/models_0";
import { de_GetIntegrationsCommand, se_GetIntegrationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetIntegrationsCommand}.
 */
export interface GetIntegrationsCommandInput extends GetIntegrationsRequest {}
/**
 * @public
 *
 * The output of {@link GetIntegrationsCommand}.
 */
export interface GetIntegrationsCommandOutput extends GetIntegrationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the Integrations for an API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetIntegrationsCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetIntegrationsCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetIntegrationsRequest
 *   ApiId: "STRING_VALUE", // required
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // GetIntegrationsResponse
 * //   Items: [ // __listOfIntegration
 * //     { // Integration
 * //       ApiGatewayManaged: true || false,
 * //       ConnectionId: "STRING_VALUE",
 * //       ConnectionType: "INTERNET" || "VPC_LINK",
 * //       ContentHandlingStrategy: "CONVERT_TO_BINARY" || "CONVERT_TO_TEXT",
 * //       CredentialsArn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       IntegrationId: "STRING_VALUE",
 * //       IntegrationMethod: "STRING_VALUE",
 * //       IntegrationResponseSelectionExpression: "STRING_VALUE",
 * //       IntegrationSubtype: "STRING_VALUE",
 * //       IntegrationType: "AWS" || "HTTP" || "MOCK" || "HTTP_PROXY" || "AWS_PROXY",
 * //       IntegrationUri: "STRING_VALUE",
 * //       PassthroughBehavior: "WHEN_NO_MATCH" || "NEVER" || "WHEN_NO_TEMPLATES",
 * //       PayloadFormatVersion: "STRING_VALUE",
 * //       RequestParameters: { // IntegrationParameters
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       RequestTemplates: { // TemplateMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ResponseParameters: { // ResponseParameters
 * //         "<keys>": {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       TemplateSelectionExpression: "STRING_VALUE",
 * //       TimeoutInMillis: Number("int"),
 * //       TlsConfig: { // TlsConfig
 * //         ServerNameToVerify: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIntegrationsCommandInput - {@link GetIntegrationsCommandInput}
 * @returns {@link GetIntegrationsCommandOutput}
 * @see {@link GetIntegrationsCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationsCommandOutput} for command's `response` shape.
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
export class GetIntegrationsCommand extends $Command<
  GetIntegrationsCommandInput,
  GetIntegrationsCommandOutput,
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
  constructor(readonly input: GetIntegrationsCommandInput) {
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
  ): Handler<GetIntegrationsCommandInput, GetIntegrationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIntegrationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "GetIntegrationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ApiGatewayV2",
        operation: "GetIntegrations",
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
  private serialize(input: GetIntegrationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetIntegrationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIntegrationsCommandOutput> {
    return de_GetIntegrationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
