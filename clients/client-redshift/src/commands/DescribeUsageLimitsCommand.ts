// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeUsageLimitsMessage, UsageLimitList } from "../models/models_1";
import { de_DescribeUsageLimitsCommand, se_DescribeUsageLimitsCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeUsageLimitsCommand}.
 */
export interface DescribeUsageLimitsCommandInput extends DescribeUsageLimitsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeUsageLimitsCommand}.
 */
export interface DescribeUsageLimitsCommandOutput extends UsageLimitList, __MetadataBearer {}

/**
 * <p>Shows usage limits on a cluster.
 *             Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p>
 *          <ul>
 *             <li>
 *                <p>If usage limit identifier, cluster identifier, and feature type are not provided,
 *                 then all usage limit objects for the current account in the current region are returned.</p>
 *             </li>
 *             <li>
 *                <p>If usage limit identifier is provided,
 *                 then the corresponding usage limit object is returned.</p>
 *             </li>
 *             <li>
 *                <p>If cluster identifier is provided,
 *                 then all usage limit objects for the specified cluster are returned.</p>
 *             </li>
 *             <li>
 *                <p>If cluster identifier and feature type are provided,
 *                 then all usage limit objects for the combination of cluster and feature are returned.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeUsageLimitsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeUsageLimitsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeUsageLimitsMessage
 *   UsageLimitId: "STRING_VALUE",
 *   ClusterIdentifier: "STRING_VALUE",
 *   FeatureType: "spectrum" || "concurrency-scaling" || "cross-region-datasharing",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   TagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 *   TagValues: [ // TagValueList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeUsageLimitsCommand(input);
 * const response = await client.send(command);
 * // { // UsageLimitList
 * //   UsageLimits: [ // UsageLimits
 * //     { // UsageLimit
 * //       UsageLimitId: "STRING_VALUE",
 * //       ClusterIdentifier: "STRING_VALUE",
 * //       FeatureType: "spectrum" || "concurrency-scaling" || "cross-region-datasharing",
 * //       LimitType: "time" || "data-scanned",
 * //       Amount: Number("long"),
 * //       Period: "daily" || "weekly" || "monthly",
 * //       BreachAction: "log" || "emit-metric" || "disable",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeUsageLimitsCommandInput - {@link DescribeUsageLimitsCommandInput}
 * @returns {@link DescribeUsageLimitsCommandOutput}
 * @see {@link DescribeUsageLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeUsageLimitsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class DescribeUsageLimitsCommand extends $Command
  .classBuilder<
    DescribeUsageLimitsCommandInput,
    DescribeUsageLimitsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "DescribeUsageLimits", {})
  .n("RedshiftClient", "DescribeUsageLimitsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeUsageLimitsCommand)
  .de(de_DescribeUsageLimitsCommand)
  .build() {}
