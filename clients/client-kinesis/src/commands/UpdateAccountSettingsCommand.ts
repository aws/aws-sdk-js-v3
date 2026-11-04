// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { UpdateAccountSettingsInput, UpdateAccountSettingsOutput } from "../models/models_0";
import { UpdateAccountSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAccountSettingsCommand}.
 */
export interface UpdateAccountSettingsCommandInput extends UpdateAccountSettingsInput {}
/**
 * @public
 *
 * The output of {@link UpdateAccountSettingsCommand}.
 */
export interface UpdateAccountSettingsCommandOutput extends UpdateAccountSettingsOutput, __MetadataBearer {}

/**
 * Updates the account-level settings for Amazon Kinesis Data Streams.
 *
 * Updating account settings is a synchronous operation. Upon receiving the request, Kinesis Data Streams will return immediately with your account’s updated settings.
 *
 * **API limits**
 *
 * - Certain account configurations have minimum commitment windows. Attempting to update your settings prior to the end of the minimum commitment window might have certain restrictions.
 * - This API has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. TPS over 5 will initiate the `LimitExceededException`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, UpdateAccountSettingsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, UpdateAccountSettingsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // UpdateAccountSettingsInput
 *   MinimumThroughputBillingCommitment: { // MinimumThroughputBillingCommitmentInput
 *     Status: "ENABLED" || "DISABLED", // required
 *   },
 * };
 * const command = new UpdateAccountSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccountSettingsOutput
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
 * @param UpdateAccountSettingsCommandInput - {@link UpdateAccountSettingsCommandInput}
 * @returns {@link UpdateAccountSettingsCommandOutput}
 * @see {@link UpdateAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * A specified parameter exceeds its restrictions, is not supported, or can't be used. For more information, see the returned message.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Specifies that you tried to invoke this API for a data stream with the on-demand capacity mode. This API is only supported for data streams with the provisioned capacity mode.
 *
 * @throws {@link KinesisServiceException}
 *
 * Base exception class for all service exceptions from Kinesis service.
 *
 * @public
 */
export class UpdateAccountSettingsCommand extends command<UpdateAccountSettingsCommandInput, UpdateAccountSettingsCommandOutput>(
  _ep1,
  _mw0,
  "UpdateAccountSettings",
  UpdateAccountSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccountSettingsInput;
      output: UpdateAccountSettingsOutput;
    };
    sdk: {
      input: UpdateAccountSettingsCommandInput;
      output: UpdateAccountSettingsCommandOutput;
    };
  };
}
