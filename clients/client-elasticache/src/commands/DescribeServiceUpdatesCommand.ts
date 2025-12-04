// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeServiceUpdatesMessage, ServiceUpdatesMessage } from "../models/models_0";
import { DescribeServiceUpdates } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeServiceUpdatesCommand}.
 */
export interface DescribeServiceUpdatesCommandInput extends DescribeServiceUpdatesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeServiceUpdatesCommand}.
 */
export interface DescribeServiceUpdatesCommandOutput extends ServiceUpdatesMessage, __MetadataBearer {}

/**
 * <p>Returns details of the service updates</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeServiceUpdatesCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeServiceUpdatesCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeServiceUpdatesMessage
 *   ServiceUpdateName: "STRING_VALUE",
 *   ServiceUpdateStatus: [ // ServiceUpdateStatusList
 *     "available" || "cancelled" || "expired",
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeServiceUpdatesCommand(input);
 * const response = await client.send(command);
 * // { // ServiceUpdatesMessage
 * //   Marker: "STRING_VALUE",
 * //   ServiceUpdates: [ // ServiceUpdateList
 * //     { // ServiceUpdate
 * //       ServiceUpdateName: "STRING_VALUE",
 * //       ServiceUpdateReleaseDate: new Date("TIMESTAMP"),
 * //       ServiceUpdateEndDate: new Date("TIMESTAMP"),
 * //       ServiceUpdateSeverity: "critical" || "important" || "medium" || "low",
 * //       ServiceUpdateRecommendedApplyByDate: new Date("TIMESTAMP"),
 * //       ServiceUpdateStatus: "available" || "cancelled" || "expired",
 * //       ServiceUpdateDescription: "STRING_VALUE",
 * //       ServiceUpdateType: "security-update",
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       AutoUpdateAfterRecommendedApplyByDate: true || false,
 * //       EstimatedUpdateTime: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeServiceUpdatesCommandInput - {@link DescribeServiceUpdatesCommandInput}
 * @returns {@link DescribeServiceUpdatesCommandOutput}
 * @see {@link DescribeServiceUpdatesCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceUpdatesCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ServiceUpdateNotFoundFault} (client fault)
 *  <p>The service update doesn't exist</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @public
 */
export class DescribeServiceUpdatesCommand extends $Command
  .classBuilder<
    DescribeServiceUpdatesCommandInput,
    DescribeServiceUpdatesCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "DescribeServiceUpdates", {})
  .n("ElastiCacheClient", "DescribeServiceUpdatesCommand")
  .sc(DescribeServiceUpdates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeServiceUpdatesMessage;
      output: ServiceUpdatesMessage;
    };
    sdk: {
      input: DescribeServiceUpdatesCommandInput;
      output: DescribeServiceUpdatesCommandOutput;
    };
  };
}
