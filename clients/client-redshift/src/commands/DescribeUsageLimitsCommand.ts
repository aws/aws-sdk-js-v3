// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeUsageLimitsMessage, UsageLimitList } from "../models/models_0";
import { DescribeUsageLimits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Shows usage limits on a cluster. Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:
 *
 * - If usage limit identifier, cluster identifier, and feature type are not provided, then all usage limit objects for the current account in the current region are returned.
 * - If usage limit identifier is provided, then the corresponding usage limit object is returned.
 * - If cluster identifier is provided, then all usage limit objects for the specified cluster are returned.
 * - If cluster identifier and feature type are provided, then all usage limit objects for the combination of cluster and feature are returned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeUsageLimitsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeUsageLimitsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeUsageLimitsMessage
 *   UsageLimitId: "STRING_VALUE",
 *   ClusterIdentifier: "STRING_VALUE",
 *   FeatureType: "spectrum" || "concurrency-scaling" || "cross-region-datasharing" || "extra-compute-for-automatic-optimization",
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
 * //       FeatureType: "spectrum" || "concurrency-scaling" || "cross-region-datasharing" || "extra-compute-for-automatic-optimization",
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
 *
 * The `ClusterIdentifier` parameter does not refer to an existing cluster.
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *
 * The requested operation isn't supported.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class DescribeUsageLimitsCommand extends command<DescribeUsageLimitsCommandInput, DescribeUsageLimitsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeUsageLimits",
  DescribeUsageLimits$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeUsageLimitsMessage;
      output: UsageLimitList;
    };
    sdk: {
      input: DescribeUsageLimitsCommandInput;
      output: DescribeUsageLimitsCommandOutput;
    };
  };
}
