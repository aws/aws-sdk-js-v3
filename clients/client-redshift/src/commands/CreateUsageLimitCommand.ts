// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateUsageLimitMessage, UsageLimit } from "../models/models_0";
import { CreateUsageLimit$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a usage limit for a specified Amazon Redshift feature on a cluster. The usage limit is identified by the returned usage limit identifier.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateUsageLimitCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateUsageLimitCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // CreateUsageLimitMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   FeatureType: "spectrum" || "concurrency-scaling" || "cross-region-datasharing" || "extra-compute-for-automatic-optimization", // required
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
 * //   FeatureType: "spectrum" || "concurrency-scaling" || "cross-region-datasharing" || "extra-compute-for-automatic-optimization",
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
 *
 * The `ClusterIdentifier` parameter does not refer to an existing cluster.
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *
 * The specified cluster is not in the `available` state.
 *
 * @throws {@link InvalidUsageLimitFault} (client fault)
 *
 * The usage limit is not valid.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *
 * The encryption key has exceeded its grant limit in Amazon Web Services KMS.
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *
 * You have exceeded the number of tags allowed.
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *
 * The requested operation isn't supported.
 *
 * @throws {@link UsageLimitAlreadyExistsFault} (client fault)
 *
 * The usage limit already exists.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class CreateUsageLimitCommand extends command<CreateUsageLimitCommandInput, CreateUsageLimitCommandOutput>(
  _ep0,
  _mw0,
  "CreateUsageLimit",
  CreateUsageLimit$
) {
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
