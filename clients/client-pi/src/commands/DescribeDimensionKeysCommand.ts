// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeDimensionKeysRequest, DescribeDimensionKeysResponse } from "../models/models_0";
import type { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import { DescribeDimensionKeys } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDimensionKeysCommand}.
 */
export interface DescribeDimensionKeysCommandInput extends DescribeDimensionKeysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDimensionKeysCommand}.
 */
export interface DescribeDimensionKeysCommandOutput extends DescribeDimensionKeysResponse, __MetadataBearer {}

/**
 * <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric.
 *       </p>
 *          <note>
 *             <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements,
 *         only the first 500 bytes are returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, DescribeDimensionKeysCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, DescribeDimensionKeysCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * // import type { PIClientConfig } from "@aws-sdk/client-pi";
 * const config = {}; // type is PIClientConfig
 * const client = new PIClient(config);
 * const input = { // DescribeDimensionKeysRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   Metric: "STRING_VALUE", // required
 *   PeriodInSeconds: Number("int"),
 *   GroupBy: { // DimensionGroup
 *     Group: "STRING_VALUE", // required
 *     Dimensions: [ // SanitizedStringList
 *       "STRING_VALUE",
 *     ],
 *     Limit: Number("int"),
 *   },
 *   AdditionalMetrics: [ // AdditionalMetricsList
 *     "STRING_VALUE",
 *   ],
 *   PartitionBy: {
 *     Group: "STRING_VALUE", // required
 *     Dimensions: [
 *       "STRING_VALUE",
 *     ],
 *     Limit: Number("int"),
 *   },
 *   Filter: { // MetricQueryFilterMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeDimensionKeysCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDimensionKeysResponse
 * //   AlignedStartTime: new Date("TIMESTAMP"),
 * //   AlignedEndTime: new Date("TIMESTAMP"),
 * //   PartitionKeys: [ // ResponsePartitionKeyList
 * //     { // ResponsePartitionKey
 * //       Dimensions: { // DimensionMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Keys: [ // DimensionKeyDescriptionList
 * //     { // DimensionKeyDescription
 * //       Dimensions: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Total: Number("double"),
 * //       AdditionalMetrics: { // AdditionalMetricsMap
 * //         "<keys>": Number("double"),
 * //       },
 * //       Partitions: [ // MetricValuesList
 * //         Number("double"),
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDimensionKeysCommandInput - {@link DescribeDimensionKeysCommandInput}
 * @returns {@link DescribeDimensionKeysCommandOutput}
 * @see {@link DescribeDimensionKeysCommandInput} for command's `input` shape.
 * @see {@link DescribeDimensionKeysCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>The request failed due to an unknown error.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>One of the arguments provided is invalid for this request.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The user is not authorized to perform this request.</p>
 *
 * @throws {@link PIServiceException}
 * <p>Base exception class for all service exceptions from PI service.</p>
 *
 *
 * @public
 */
export class DescribeDimensionKeysCommand extends $Command
  .classBuilder<
    DescribeDimensionKeysCommandInput,
    DescribeDimensionKeysCommandOutput,
    PIClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PIClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PerformanceInsightsv20180227", "DescribeDimensionKeys", {})
  .n("PIClient", "DescribeDimensionKeysCommand")
  .sc(DescribeDimensionKeys)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDimensionKeysRequest;
      output: DescribeDimensionKeysResponse;
    };
    sdk: {
      input: DescribeDimensionKeysCommandInput;
      output: DescribeDimensionKeysCommandOutput;
    };
  };
}
