// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateUsageLimitMessage, UsageLimit } from "../models/models_0";
import { de_CreateUsageLimitCommand, se_CreateUsageLimitCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUsageLimitCommand}.
 */
export interface CreateUsageLimitCommandInput extends CreateUsageLimitMessage {}
/**
 * @public
 *
 * The output of {@link CreateUsageLimitCommand}.
 */
export interface CreateUsageLimitCommandOutput extends UsageLimit, __MetadataBearer {}

/**
 * <p>Creates a usage limit for a specified Amazon Redshift feature on a cluster.
 *             The usage limit is identified by the returned usage limit identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateUsageLimitCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateUsageLimitCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // CreateUsageLimitMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   FeatureType: "spectrum" || "concurrency-scaling" || "cross-region-datasharing", // required
 *   LimitType: "time" || "data-scanned", // required
 *   Amount: Number("long"), // required
 *   Period: "daily" || "weekly" || "monthly",
 *   BreachAction: "log" || "emit-metric" || "disable",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateUsageLimitCommand(input);
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
 * @param CreateUsageLimitCommandInput - {@link CreateUsageLimitCommandInput}
 * @returns {@link CreateUsageLimitCommandOutput}
 * @see {@link CreateUsageLimitCommandInput} for command's `input` shape.
 * @see {@link CreateUsageLimitCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link InvalidUsageLimitFault} (client fault)
 *  <p>The usage limit is not valid.</p>
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>The encryption key has exceeded its grant limit in Amazon Web Services KMS.</p>
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *  <p>You have exceeded the number of tags allowed.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link UsageLimitAlreadyExistsFault} (client fault)
 *  <p>The usage limit already exists. </p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class CreateUsageLimitCommand extends $Command
  .classBuilder<
    CreateUsageLimitCommandInput,
    CreateUsageLimitCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "CreateUsageLimit", {})
  .n("RedshiftClient", "CreateUsageLimitCommand")
  .f(void 0, void 0)
  .ser(se_CreateUsageLimitCommand)
  .de(de_CreateUsageLimitCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUsageLimitMessage;
      output: UsageLimit;
    };
    sdk: {
      input: CreateUsageLimitCommandInput;
      output: CreateUsageLimitCommandOutput;
    };
  };
}
