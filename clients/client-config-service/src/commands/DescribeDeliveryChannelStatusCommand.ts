// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDeliveryChannelStatusRequest, DescribeDeliveryChannelStatusResponse } from "../models/models_0";
import {
  de_DescribeDeliveryChannelStatusCommand,
  se_DescribeDeliveryChannelStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeliveryChannelStatusCommand}.
 */
export interface DescribeDeliveryChannelStatusCommandInput extends DescribeDeliveryChannelStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeliveryChannelStatusCommand}.
 */
export interface DescribeDeliveryChannelStatusCommandOutput
  extends DescribeDeliveryChannelStatusResponse,
    __MetadataBearer {}

/**
 * <p>Returns the current status of the specified delivery channel.
 * 			If a delivery channel is not specified, this operation returns the
 * 			current status of all delivery channels associated with the
 * 			account.</p>
 *          <note>
 *             <p>Currently, you can specify only one delivery channel per
 * 				region in your account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeDeliveryChannelStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeDeliveryChannelStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeDeliveryChannelStatusRequest
 *   DeliveryChannelNames: [ // DeliveryChannelNameList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeDeliveryChannelStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeliveryChannelStatusResponse
 * //   DeliveryChannelsStatus: [ // DeliveryChannelStatusList
 * //     { // DeliveryChannelStatus
 * //       name: "STRING_VALUE",
 * //       configSnapshotDeliveryInfo: { // ConfigExportDeliveryInfo
 * //         lastStatus: "Success" || "Failure" || "Not_Applicable",
 * //         lastErrorCode: "STRING_VALUE",
 * //         lastErrorMessage: "STRING_VALUE",
 * //         lastAttemptTime: new Date("TIMESTAMP"),
 * //         lastSuccessfulTime: new Date("TIMESTAMP"),
 * //         nextDeliveryTime: new Date("TIMESTAMP"),
 * //       },
 * //       configHistoryDeliveryInfo: {
 * //         lastStatus: "Success" || "Failure" || "Not_Applicable",
 * //         lastErrorCode: "STRING_VALUE",
 * //         lastErrorMessage: "STRING_VALUE",
 * //         lastAttemptTime: new Date("TIMESTAMP"),
 * //         lastSuccessfulTime: new Date("TIMESTAMP"),
 * //         nextDeliveryTime: new Date("TIMESTAMP"),
 * //       },
 * //       configStreamDeliveryInfo: { // ConfigStreamDeliveryInfo
 * //         lastStatus: "Success" || "Failure" || "Not_Applicable",
 * //         lastErrorCode: "STRING_VALUE",
 * //         lastErrorMessage: "STRING_VALUE",
 * //         lastStatusChangeTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDeliveryChannelStatusCommandInput - {@link DescribeDeliveryChannelStatusCommandInput}
 * @returns {@link DescribeDeliveryChannelStatusCommandOutput}
 * @see {@link DescribeDeliveryChannelStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeDeliveryChannelStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
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
export class DescribeDeliveryChannelStatusCommand extends $Command
  .classBuilder<
    DescribeDeliveryChannelStatusCommandInput,
    DescribeDeliveryChannelStatusCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "DescribeDeliveryChannelStatus", {})
  .n("ConfigServiceClient", "DescribeDeliveryChannelStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDeliveryChannelStatusCommand)
  .de(de_DescribeDeliveryChannelStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDeliveryChannelStatusRequest;
      output: DescribeDeliveryChannelStatusResponse;
    };
    sdk: {
      input: DescribeDeliveryChannelStatusCommandInput;
      output: DescribeDeliveryChannelStatusCommandOutput;
    };
  };
}
