// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { DetectMetricSetConfigRequest, DetectMetricSetConfigResponse } from "../models/models_0";
import { DetectMetricSetConfig } from "../schemas/schemas_5_Set";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Detects an Amazon S3 dataset's file format, interval, and offset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DetectMetricSetConfigCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DetectMetricSetConfigCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * // import type { LookoutMetricsClientConfig } from "@aws-sdk/client-lookoutmetrics";
 * const config = {}; // type is LookoutMetricsClientConfig
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
 * //       Confidence: "HIGH" || "LOW" || "NONE",
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
 * //       Confidence: "HIGH" || "LOW" || "NONE",
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
 * //               Confidence: "HIGH" || "LOW" || "NONE",
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
 * //               Confidence: "HIGH" || "LOW" || "NONE",
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
 * //               Confidence: "HIGH" || "LOW" || "NONE",
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
 *
 * @public
 */
export class DetectMetricSetConfigCommand extends $Command
  .classBuilder<
    DetectMetricSetConfigCommandInput,
    DetectMetricSetConfigCommandOutput,
    LookoutMetricsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutMetricsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LookoutMetrics", "DetectMetricSetConfig", {})
  .n("LookoutMetricsClient", "DetectMetricSetConfigCommand")
  .sc(DetectMetricSetConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetectMetricSetConfigRequest;
      output: DetectMetricSetConfigResponse;
    };
    sdk: {
      input: DetectMetricSetConfigCommandInput;
      output: DetectMetricSetConfigCommandOutput;
    };
  };
}
