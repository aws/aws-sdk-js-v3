// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { DescribeAccountSettingsInput, DescribeAccountSettingsOutput } from "../models/models_0";
import { DescribeAccountSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAccountSettingsCommand}.
 */
export interface DescribeAccountSettingsCommandInput extends DescribeAccountSettingsInput {}
/**
 * @public
 *
 * The output of {@link DescribeAccountSettingsCommand}.
 */
export interface DescribeAccountSettingsCommandOutput extends DescribeAccountSettingsOutput, __MetadataBearer {}

/**
 * <p>Describes the account-level settings for Amazon Kinesis Data Streams. This operation returns information about the minimum throughput billing commitments and other account-level configurations.</p>
 *          <p>This API has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. TPS over 5 will initiate the <code>LimitExceededException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DescribeAccountSettingsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DescribeAccountSettingsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = {};
 * const command = new DescribeAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountSettingsOutput
 * //   MinimumThroughputBillingCommitment: { // MinimumThroughputBillingCommitmentOutput
 * //     Status: "ENABLED" || "DISABLED" || "ENABLED_UNTIL_EARLIEST_ALLOWED_END", // required
 * //     StartedAt: new Date("TIMESTAMP"),
 * //     EndedAt: new Date("TIMESTAMP"),
 * //     EarliestAllowedEndAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAccountSettingsCommandInput - {@link DescribeAccountSettingsCommandInput}
 * @returns {@link DescribeAccountSettingsCommandOutput}
 * @see {@link DescribeAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountSettingsCommandOutput} for command's `response` shape.
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
export class DescribeAccountSettingsCommand extends command<DescribeAccountSettingsCommandInput, DescribeAccountSettingsCommandOutput>(
  _ep1,
  _mw0,
  "DescribeAccountSettings",
  DescribeAccountSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeAccountSettingsOutput;
    };
    sdk: {
      input: DescribeAccountSettingsCommandInput;
      output: DescribeAccountSettingsCommandOutput;
    };
  };
}
