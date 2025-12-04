// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UsageLimit } from "../models/models_0";
import type { ModifyUsageLimitMessage } from "../models/models_1";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyUsageLimit } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyUsageLimitCommand}.
 */
export interface ModifyUsageLimitCommandInput extends ModifyUsageLimitMessage {}
/**
 * @public
 *
 * The output of {@link ModifyUsageLimitCommand}.
 */
export interface ModifyUsageLimitCommandOutput extends UsageLimit, __MetadataBearer {}

/**
 * <p>Modifies a usage limit in a cluster.
 *             You can't modify the feature type or period of a usage limit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyUsageLimitCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyUsageLimitCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // ModifyUsageLimitMessage
 *   UsageLimitId: "STRING_VALUE", // required
 *   Amount: Number("long"),
 *   BreachAction: "log" || "emit-metric" || "disable",
 * };
 * const command = new ModifyUsageLimitCommand(input);
 * const response = await client.send(command);
 * // { // UsageLimit
 * //   UsageLimitId: "STRING_VALUE",
 * //   ClusterIdentifier: "STRING_VALUE",
 * //   FeatureType: "spectrum" || "concurrency-scaling" || "cross-region-datasharing",
 * //   LimitType: "time" || "data-scanned",
 * //   Amount: Number("long"),
 * //   Period: "daily" || "weekly" || "monthly",
 * //   BreachAction: "log" || "emit-metric" || "disable",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ModifyUsageLimitCommandInput - {@link ModifyUsageLimitCommandInput}
 * @returns {@link ModifyUsageLimitCommandOutput}
 * @see {@link ModifyUsageLimitCommandInput} for command's `input` shape.
 * @see {@link ModifyUsageLimitCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidUsageLimitFault} (client fault)
 *  <p>The usage limit is not valid.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link UsageLimitNotFoundFault} (client fault)
 *  <p>The usage limit identifier can't be found.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class ModifyUsageLimitCommand extends $Command
  .classBuilder<
    ModifyUsageLimitCommandInput,
    ModifyUsageLimitCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "ModifyUsageLimit", {})
  .n("RedshiftClient", "ModifyUsageLimitCommand")
  .sc(ModifyUsageLimit)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyUsageLimitMessage;
      output: UsageLimit;
    };
    sdk: {
      input: ModifyUsageLimitCommandInput;
      output: ModifyUsageLimitCommandOutput;
    };
  };
}
