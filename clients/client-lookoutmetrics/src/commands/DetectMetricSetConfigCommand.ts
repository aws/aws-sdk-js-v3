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
import { DetectMetricSetConfigRequest, DetectMetricSetConfigResponse } from "../models/models_0";
import { de_DetectMetricSetConfigCommand, se_DetectMetricSetConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DetectMetricSetConfigCommand}.
 */
export interface DetectMetricSetConfigCommandInput extends DetectMetricSetConfigRequest {}
/**
 * @public
 *
 * The output of {@link DetectMetricSetConfigCommand}.
 */
export interface DetectMetricSetConfigCommandOutput extends DetectMetricSetConfigResponse, __MetadataBearer {}

/**
 * @public
 * <p>Detects an Amazon S3 dataset's file format, interval, and offset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DetectMetricSetConfigCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DetectMetricSetConfigCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const input = { // DetectMetricSetConfigRequest
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 *   AutoDetectionMetricSource: { // AutoDetectionMetricSource
 *     S3SourceConfig: { // AutoDetectionS3SourceConfig
 *       TemplatedPathList: [ // TemplatedPathList
 *         "STRING_VALUE",
 *       ],
 *       HistoricalDataPathList: [ // HistoricalDataPathList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new DetectMetricSetConfigCommand(input);
 * const response = await client.send(command);
 * // { // DetectMetricSetConfigResponse
 * //   DetectedMetricSetConfig: { // DetectedMetricSetConfig
 * //     Offset: { // DetectedField
 * //       Value: { // AttributeValue
 * //         S: "STRING_VALUE",
 * //         N: "STRING_VALUE",
 * //         B: "STRING_VALUE",
 * //         SS: [ // StringListAttributeValue
 * //           "STRING_VALUE",
 * //         ],
 * //         NS: [ // NumberListAttributeValue
 * //           "STRING_VALUE",
 * //         ],
 * //         BS: [ // BinaryListAttributeValue
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Confidence: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     MetricSetFrequency: {
 * //       Value: {
 * //         S: "STRING_VALUE",
 * //         N: "STRING_VALUE",
 * //         B: "STRING_VALUE",
 * //         SS: [
 * //           "STRING_VALUE",
 * //         ],
 * //         NS: [
 * //           "STRING_VALUE",
 * //         ],
 * //         BS: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Confidence: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     MetricSource: { // DetectedMetricSource
 * //       S3SourceConfig: { // DetectedS3SourceConfig
 * //         FileFormatDescriptor: { // DetectedFileFormatDescriptor
 * //           CsvFormatDescriptor: { // DetectedCsvFormatDescriptor
 * //             FileCompression: {
 * //               Value: {
 * //                 S: "STRING_VALUE",
 * //                 N: "STRING_VALUE",
 * //                 B: "STRING_VALUE",
 * //                 SS: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 NS: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 BS: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               Confidence: "STRING_VALUE",
 * //               Message: "STRING_VALUE",
 * //             },
 * //             Charset: {
 * //               Value: {
 * //                 S: "STRING_VALUE",
 * //                 N: "STRING_VALUE",
 * //                 B: "STRING_VALUE",
 * //                 SS: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 NS: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 BS: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               Confidence: "STRING_VALUE",
 * //               Message: "STRING_VALUE",
 * //             },
 * //             ContainsHeader: {
 * //               Value: {
 * //                 S: "STRING_VALUE",
 * //                 N: "STRING_VALUE",
 * //                 B: "STRING_VALUE",
 * //                 SS: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 NS: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 BS: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               Confidence: "STRING_VALUE",
 * //               Message: "STRING_VALUE",
 * //             },
 * //             Delimiter: "<DetectedField>",
 * //             HeaderList: "<DetectedField>",
 * //             QuoteSymbol: "<DetectedField>",
 * //           },
 * //           JsonFormatDescriptor: { // DetectedJsonFormatDescriptor
 * //             FileCompression: "<DetectedField>",
 * //             Charset: "<DetectedField>",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DetectMetricSetConfigCommandInput - {@link DetectMetricSetConfigCommandInput}
 * @returns {@link DetectMetricSetConfigCommandOutput}
 * @see {@link DetectMetricSetConfigCommandInput} for command's `input` shape.
 * @see {@link DetectMetricSetConfigCommandOutput} for command's `response` shape.
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
export class DetectMetricSetConfigCommand extends $Command<
  DetectMetricSetConfigCommandInput,
  DetectMetricSetConfigCommandOutput,
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
  constructor(readonly input: DetectMetricSetConfigCommandInput) {
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
  ): Handler<DetectMetricSetConfigCommandInput, DetectMetricSetConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetectMetricSetConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "DetectMetricSetConfigCommand";
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
  private serialize(input: DetectMetricSetConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DetectMetricSetConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectMetricSetConfigCommandOutput> {
    return de_DetectMetricSetConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
