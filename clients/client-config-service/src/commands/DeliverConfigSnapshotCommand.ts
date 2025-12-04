// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeliverConfigSnapshotRequest, DeliverConfigSnapshotResponse } from "../models/models_0";
import { DeliverConfigSnapshot } from "../schemas/schemas_0";

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
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
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
 *  <p>There are no customer managed configuration recorders available to record your resources. Use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html">PutConfigurationRecorder</a> operation to create the customer managed configuration
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DeliverConfigSnapshot", {})
  .n("ConfigServiceClient", "DeliverConfigSnapshotCommand")
  .sc(DeliverConfigSnapshot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeliverConfigSnapshotRequest;
      output: DeliverConfigSnapshotResponse;
    };
    sdk: {
      input: DeliverConfigSnapshotCommandInput;
      output: DeliverConfigSnapshotCommandOutput;
    };
  };
}
