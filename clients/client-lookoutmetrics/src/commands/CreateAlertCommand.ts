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

import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { CreateAlertRequest, CreateAlertResponse } from "../models/models_0";
import { de_CreateAlertCommand, se_CreateAlertCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAlertCommand}.
 */
export interface CreateAlertCommandInput extends CreateAlertRequest {}
/**
 * @public
 *
 * The output of {@link CreateAlertCommand}.
 */
export interface CreateAlertCommandOutput extends CreateAlertResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an alert for an anomaly detector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, CreateAlertCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, CreateAlertCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const input = { // CreateAlertRequest
 *   AlertName: "STRING_VALUE", // required
 *   AlertSensitivityThreshold: Number("int"),
 *   AlertDescription: "STRING_VALUE",
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 *   Action: { // Action
 *     SNSConfiguration: { // SNSConfiguration
 *       RoleArn: "STRING_VALUE", // required
 *       SnsTopicArn: "STRING_VALUE", // required
 *       SnsFormat: "LONG_TEXT" || "SHORT_TEXT" || "JSON",
 *     },
 *     LambdaConfiguration: { // LambdaConfiguration
 *       RoleArn: "STRING_VALUE", // required
 *       LambdaArn: "STRING_VALUE", // required
 *     },
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AlertFilters: { // AlertFilters
 *     MetricList: [ // MetricNameList
 *       "STRING_VALUE",
 *     ],
 *     DimensionFilterList: [ // DimensionFilterList
 *       { // DimensionFilter
 *         DimensionName: "STRING_VALUE",
 *         DimensionValueList: [ // DimensionValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateAlertCommand(input);
 * const response = await client.send(command);
 * // { // CreateAlertResponse
 * //   AlertArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAlertCommandInput - {@link CreateAlertCommandInput}
 * @returns {@link CreateAlertCommandOutput}
 * @see {@link CreateAlertCommandInput} for command's `input` shape.
 * @see {@link CreateAlertCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Try your request again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeded the service's quotas. Check the service quotas and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to too many requests being submitted at the same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service. Check your input values and try
 *       again.</p>
 *
 * @throws {@link LookoutMetricsServiceException}
 * <p>Base exception class for all service exceptions from LookoutMetrics service.</p>
 *
 */
export class CreateAlertCommand extends $Command<
  CreateAlertCommandInput,
  CreateAlertCommandOutput,
  LookoutMetricsClientResolvedConfig
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
  constructor(readonly input: CreateAlertCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAlertCommandInput, CreateAlertCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateAlertCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "CreateAlertCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LookoutMetrics",
        operation: "CreateAlert",
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
  private serialize(input: CreateAlertCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAlertCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAlertCommandOutput> {
    return de_CreateAlertCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
