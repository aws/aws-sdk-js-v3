// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { GetSampleDataRequest, GetSampleDataResponse } from "../models/models_0";
import { de_GetSampleDataCommand, se_GetSampleDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSampleDataCommand}.
 */
export interface GetSampleDataCommandInput extends GetSampleDataRequest {}
/**
 * @public
 *
 * The output of {@link GetSampleDataCommand}.
 */
export interface GetSampleDataCommandOutput extends GetSampleDataResponse, __MetadataBearer {}

/**
 * <p>Returns a selection of sample records from an Amazon S3 datasource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, GetSampleDataCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, GetSampleDataCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * // import type { LookoutMetricsClientConfig } from "@aws-sdk/client-lookoutmetrics";
 * const config = {}; // type is LookoutMetricsClientConfig
 * const client = new LookoutMetricsClient(config);
 * const input = { // GetSampleDataRequest
 *   S3SourceConfig: { // SampleDataS3SourceConfig
 *     RoleArn: "STRING_VALUE", // required
 *     TemplatedPathList: [ // TemplatedPathList
 *       "STRING_VALUE",
 *     ],
 *     HistoricalDataPathList: [ // HistoricalDataPathList
 *       "STRING_VALUE",
 *     ],
 *     FileFormatDescriptor: { // FileFormatDescriptor
 *       CsvFormatDescriptor: { // CsvFormatDescriptor
 *         FileCompression: "NONE" || "GZIP",
 *         Charset: "STRING_VALUE",
 *         ContainsHeader: true || false,
 *         Delimiter: "STRING_VALUE",
 *         HeaderList: [ // HeaderList
 *           "STRING_VALUE",
 *         ],
 *         QuoteSymbol: "STRING_VALUE",
 *       },
 *       JsonFormatDescriptor: { // JsonFormatDescriptor
 *         FileCompression: "NONE" || "GZIP",
 *         Charset: "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new GetSampleDataCommand(input);
 * const response = await client.send(command);
 * // { // GetSampleDataResponse
 * //   HeaderValues: [ // HeaderValueList
 * //     "STRING_VALUE",
 * //   ],
 * //   SampleRows: [ // SampleRows
 * //     [ // SampleRow
 * //       "STRING_VALUE",
 * //     ],
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSampleDataCommandInput - {@link GetSampleDataCommandInput}
 * @returns {@link GetSampleDataCommandOutput}
 * @see {@link GetSampleDataCommandInput} for command's `input` shape.
 * @see {@link GetSampleDataCommandOutput} for command's `response` shape.
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
export class GetSampleDataCommand extends $Command
  .classBuilder<
    GetSampleDataCommandInput,
    GetSampleDataCommandOutput,
    LookoutMetricsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LookoutMetricsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LookoutMetrics", "GetSampleData", {})
  .n("LookoutMetricsClient", "GetSampleDataCommand")
  .f(void 0, void 0)
  .ser(se_GetSampleDataCommand)
  .de(de_GetSampleDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSampleDataRequest;
      output: GetSampleDataResponse;
    };
    sdk: {
      input: GetSampleDataCommandInput;
      output: GetSampleDataCommandOutput;
    };
  };
}
