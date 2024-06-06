// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeliverConfigSnapshotRequest, DeliverConfigSnapshotResponse } from "../models/models_0";
import { de_DeliverConfigSnapshotCommand, se_DeliverConfigSnapshotCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeliverConfigSnapshotCommand}.
 */
export interface DeliverConfigSnapshotCommandInput extends DeliverConfigSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link DeliverConfigSnapshotCommand}.
 */
export interface DeliverConfigSnapshotCommandOutput extends DeliverConfigSnapshotResponse, __MetadataBearer {}

/**
 * <p>Schedules delivery of a configuration snapshot to the Amazon S3
 * 			bucket in the specified delivery channel. After the delivery has
 * 			started, Config sends the following notifications using an
 * 			Amazon SNS topic that you have specified.</p>
 *          <ul>
 *             <li>
 *                <p>Notification of the start of the delivery.</p>
 *             </li>
 *             <li>
 *                <p>Notification of the completion of the delivery, if the
 * 					delivery was successfully completed.</p>
 *             </li>
 *             <li>
 *                <p>Notification of delivery failure, if the delivery
 * 					failed.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeliverConfigSnapshotCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeliverConfigSnapshotCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DeliverConfigSnapshotRequest
 *   deliveryChannelName: "STRING_VALUE", // required
 * };
 * const command = new DeliverConfigSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // DeliverConfigSnapshotResponse
 * //   configSnapshotId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeliverConfigSnapshotCommandInput - {@link DeliverConfigSnapshotCommandInput}
 * @returns {@link DeliverConfigSnapshotCommandOutput}
 * @see {@link DeliverConfigSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeliverConfigSnapshotCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link NoAvailableConfigurationRecorderException} (client fault)
 *  <p>There are no configuration recorders available to provide the
 * 			role needed to describe your resources. Create a configuration
 * 			recorder.</p>
 *
 * @throws {@link NoRunningConfigurationRecorderException} (client fault)
 *  <p>There is no configuration recorder running.</p>
 *
 * @throws {@link NoSuchDeliveryChannelException} (client fault)
 *  <p>You have specified a delivery channel that does not
 * 			exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class DeliverConfigSnapshotCommand extends $Command
  .classBuilder<
    DeliverConfigSnapshotCommandInput,
    DeliverConfigSnapshotCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "DeliverConfigSnapshot", {})
  .n("ConfigServiceClient", "DeliverConfigSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_DeliverConfigSnapshotCommand)
  .de(de_DeliverConfigSnapshotCommand)
  .build() {}
