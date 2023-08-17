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

import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { DescribeAlertRequest, DescribeAlertResponse } from "../models/models_0";
import { de_DescribeAlertCommand, se_DescribeAlertCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAlertCommand}.
 */
export interface DescribeAlertCommandInput extends DescribeAlertRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAlertCommand}.
 */
export interface DescribeAlertCommandOutput extends DescribeAlertResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes an alert.</p>
 *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
 *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DescribeAlertCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DescribeAlertCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const input = { // DescribeAlertRequest
 *   AlertArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAlertCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAlertResponse
 * //   Alert: { // Alert
 * //     Action: { // Action
 * //       SNSConfiguration: { // SNSConfiguration
 * //         RoleArn: "STRING_VALUE", // required
 * //         SnsTopicArn: "STRING_VALUE", // required
 * //         SnsFormat: "STRING_VALUE",
 * //       },
 * //       LambdaConfiguration: { // LambdaConfiguration
 * //         RoleArn: "STRING_VALUE", // required
 * //         LambdaArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     AlertDescription: "STRING_VALUE",
 * //     AlertArn: "STRING_VALUE",
 * //     AnomalyDetectorArn: "STRING_VALUE",
 * //     AlertName: "STRING_VALUE",
 * //     AlertSensitivityThreshold: Number("int"),
 * //     AlertType: "STRING_VALUE",
 * //     AlertStatus: "STRING_VALUE",
 * //     LastModificationTime: new Date("TIMESTAMP"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     AlertFilters: { // AlertFilters
 * //       MetricList: [ // MetricNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       DimensionFilterList: [ // DimensionFilterList
 * //         { // DimensionFilter
 * //           DimensionName: "STRING_VALUE",
 * //           DimensionValueList: [ // DimensionValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAlertCommandInput - {@link DescribeAlertCommandInput}
 * @returns {@link DescribeAlertCommandOutput}
 * @see {@link DescribeAlertCommandInput} for command's `input` shape.
 * @see {@link DescribeAlertCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
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
export class DescribeAlertCommand extends $Command<
  DescribeAlertCommandInput,
  DescribeAlertCommandOutput,
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
  constructor(readonly input: DescribeAlertCommandInput) {
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
  ): Handler<DescribeAlertCommandInput, DescribeAlertCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeAlertCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "DescribeAlertCommand";
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
  private serialize(input: DescribeAlertCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAlertCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAlertCommandOutput> {
    return de_DescribeAlertCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
