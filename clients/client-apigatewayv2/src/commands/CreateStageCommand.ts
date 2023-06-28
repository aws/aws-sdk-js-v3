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
import { CreateStageRequest, CreateStageResponse } from "../models/models_0";
import { de_CreateStageCommand, se_CreateStageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateStageCommand}.
 */
export interface CreateStageCommandInput extends CreateStageRequest {}
/**
 * @public
 *
 * The output of {@link CreateStageCommand}.
 */
export interface CreateStageCommandOutput extends CreateStageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a Stage for an API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, CreateStageCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, CreateStageCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // CreateStageRequest
 *   AccessLogSettings: { // AccessLogSettings
 *     DestinationArn: "STRING_VALUE",
 *     Format: "STRING_VALUE",
 *   },
 *   ApiId: "STRING_VALUE", // required
 *   AutoDeploy: true || false,
 *   ClientCertificateId: "STRING_VALUE",
 *   DefaultRouteSettings: { // RouteSettings
 *     DataTraceEnabled: true || false,
 *     DetailedMetricsEnabled: true || false,
 *     LoggingLevel: "STRING_VALUE",
 *     ThrottlingBurstLimit: Number("int"),
 *     ThrottlingRateLimit: Number("double"),
 *   },
 *   DeploymentId: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   RouteSettings: { // RouteSettingsMap
 *     "<keys>": {
 *       DataTraceEnabled: true || false,
 *       DetailedMetricsEnabled: true || false,
 *       LoggingLevel: "STRING_VALUE",
 *       ThrottlingBurstLimit: Number("int"),
 *       ThrottlingRateLimit: Number("double"),
 *     },
 *   },
 *   StageName: "STRING_VALUE", // required
 *   StageVariables: { // StageVariablesMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateStageCommand(input);
 * const response = await client.send(command);
 * // { // CreateStageResponse
 * //   AccessLogSettings: { // AccessLogSettings
 * //     DestinationArn: "STRING_VALUE",
 * //     Format: "STRING_VALUE",
 * //   },
 * //   ApiGatewayManaged: true || false,
 * //   AutoDeploy: true || false,
 * //   ClientCertificateId: "STRING_VALUE",
 * //   CreatedDate: new Date("TIMESTAMP"),
 * //   DefaultRouteSettings: { // RouteSettings
 * //     DataTraceEnabled: true || false,
 * //     DetailedMetricsEnabled: true || false,
 * //     LoggingLevel: "STRING_VALUE",
 * //     ThrottlingBurstLimit: Number("int"),
 * //     ThrottlingRateLimit: Number("double"),
 * //   },
 * //   DeploymentId: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   LastDeploymentStatusMessage: "STRING_VALUE",
 * //   LastUpdatedDate: new Date("TIMESTAMP"),
 * //   RouteSettings: { // RouteSettingsMap
 * //     "<keys>": {
 * //       DataTraceEnabled: true || false,
 * //       DetailedMetricsEnabled: true || false,
 * //       LoggingLevel: "STRING_VALUE",
 * //       ThrottlingBurstLimit: Number("int"),
 * //       ThrottlingRateLimit: Number("double"),
 * //     },
 * //   },
 * //   StageName: "STRING_VALUE",
 * //   StageVariables: { // StageVariablesMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateStageCommandInput - {@link CreateStageCommandInput}
 * @returns {@link CreateStageCommandOutput}
 * @see {@link CreateStageCommandInput} for command's `input` shape.
 * @see {@link CreateStageCommandOutput} for command's `response` shape.
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
export class CreateStageCommand extends $Command<
  CreateStageCommandInput,
  CreateStageCommandOutput,
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
  constructor(readonly input: CreateStageCommandInput) {
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
  ): Handler<CreateStageCommandInput, CreateStageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateStageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "CreateStageCommand";
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
  private serialize(input: CreateStageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateStageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStageCommandOutput> {
    return de_CreateStageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
