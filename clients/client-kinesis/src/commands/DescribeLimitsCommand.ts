// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { DescribeLimitsInput, DescribeLimitsOutput } from "../models/models_0";
import { DescribeLimits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeLimitsCommand}.
 */
export interface DescribeLimitsCommandInput extends DescribeLimitsInput {}
/**
 * @public
 *
 * The output of {@link DescribeLimitsCommand}.
 */
export interface DescribeLimitsCommandOutput extends DescribeLimitsOutput, __MetadataBearer {}

/**
 * <p>Describes the shard limits and usage for the account.</p>
 *          <p>If you update your account limits, the old limits might be returned for a few
 *             minutes.</p>
 *          <p>This operation has a limit of one transaction per second per account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DescribeLimitsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DescribeLimitsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = {};
 * const command = new DescribeLimitsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLimitsOutput
 * //   ShardLimit: Number("int"), // required
 * //   OpenShardCount: Number("int"), // required
 * //   OnDemandStreamCount: Number("int"), // required
 * //   OnDemandStreamCountLimit: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param DescribeLimitsCommandInput - {@link DescribeLimitsCommandInput}
 * @returns {@link DescribeLimitsCommandOutput}
 * @see {@link DescribeLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeLimitsCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 *
 * @public
 */
export class DescribeLimitsCommand extends command<DescribeLimitsCommandInput, DescribeLimitsCommandOutput>(
  _ep1,
  _mw0,
  "DescribeLimits",
  DescribeLimits$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeLimitsOutput;
    };
    sdk: {
      input: DescribeLimitsCommandInput;
      output: DescribeLimitsCommandOutput;
    };
  };
}
