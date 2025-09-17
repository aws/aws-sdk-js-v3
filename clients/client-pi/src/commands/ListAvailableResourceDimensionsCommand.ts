// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAvailableResourceDimensionsRequest, ListAvailableResourceDimensionsResponse } from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import {
  de_ListAvailableResourceDimensionsCommand,
  se_ListAvailableResourceDimensionsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAvailableResourceDimensionsCommand}.
 */
export interface ListAvailableResourceDimensionsCommandInput extends ListAvailableResourceDimensionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAvailableResourceDimensionsCommand}.
 */
export interface ListAvailableResourceDimensionsCommandOutput
  extends ListAvailableResourceDimensionsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, ListAvailableResourceDimensionsCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, ListAvailableResourceDimensionsCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * // import type { PIClientConfig } from "@aws-sdk/client-pi";
 * const config = {}; // type is PIClientConfig
 * const client = new PIClient(config);
 * const input = { // ListAvailableResourceDimensionsRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   Metrics: [ // DimensionsMetricList // required
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   AuthorizedActions: [ // AuthorizedActionsList
 *     "DescribeDimensionKeys" || "GetDimensionKeyDetails" || "GetResourceMetrics",
 *   ],
 * };
 * const command = new ListAvailableResourceDimensionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailableResourceDimensionsResponse
 * //   MetricDimensions: [ // MetricDimensionsList
 * //     { // MetricDimensionGroups
 * //       Metric: "STRING_VALUE",
 * //       Groups: [ // DimensionGroupDetailList
 * //         { // DimensionGroupDetail
 * //           Group: "STRING_VALUE",
 * //           Dimensions: [ // DimensionDetailList
 * //             { // DimensionDetail
 * //               Identifier: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAvailableResourceDimensionsCommandInput - {@link ListAvailableResourceDimensionsCommandInput}
 * @returns {@link ListAvailableResourceDimensionsCommandOutput}
 * @see {@link ListAvailableResourceDimensionsCommandInput} for command's `input` shape.
 * @see {@link ListAvailableResourceDimensionsCommandOutput} for command's `response` shape.
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
export class ListAvailableResourceDimensionsCommand extends $Command
  .classBuilder<
    ListAvailableResourceDimensionsCommandInput,
    ListAvailableResourceDimensionsCommandOutput,
    PIClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PIClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PerformanceInsightsv20180227", "ListAvailableResourceDimensions", {})
  .n("PIClient", "ListAvailableResourceDimensionsCommand")
  .f(void 0, void 0)
  .ser(se_ListAvailableResourceDimensionsCommand)
  .de(de_ListAvailableResourceDimensionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAvailableResourceDimensionsRequest;
      output: ListAvailableResourceDimensionsResponse;
    };
    sdk: {
      input: ListAvailableResourceDimensionsCommandInput;
      output: ListAvailableResourceDimensionsCommandOutput;
    };
  };
}
