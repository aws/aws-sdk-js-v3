// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDeliveryChannelsRequest, DescribeDeliveryChannelsResponse } from "../models/models_0";
import { de_DescribeDeliveryChannelsCommand, se_DescribeDeliveryChannelsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDeliveryChannelsCommand}.
 */
export interface DescribeDeliveryChannelsCommandInput extends DescribeDeliveryChannelsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeliveryChannelsCommand}.
 */
export interface DescribeDeliveryChannelsCommandOutput extends DescribeDeliveryChannelsResponse, __MetadataBearer {}

/**
 * <p>Returns details about the specified delivery channel. If a
 * 			delivery channel is not specified, this operation returns the details
 * 			of all delivery channels associated with the account.</p>
 *          <note>
 *             <p>Currently, you can specify only one delivery channel per
 * 				region in your account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeDeliveryChannelsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeDeliveryChannelsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeDeliveryChannelsRequest
 *   DeliveryChannelNames: [ // DeliveryChannelNameList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeDeliveryChannelsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeliveryChannelsResponse
 * //   DeliveryChannels: [ // DeliveryChannelList
 * //     { // DeliveryChannel
 * //       name: "STRING_VALUE",
 * //       s3BucketName: "STRING_VALUE",
 * //       s3KeyPrefix: "STRING_VALUE",
 * //       s3KmsKeyArn: "STRING_VALUE",
 * //       snsTopicARN: "STRING_VALUE",
 * //       configSnapshotDeliveryProperties: { // ConfigSnapshotDeliveryProperties
 * //         deliveryFrequency: "One_Hour" || "Three_Hours" || "Six_Hours" || "Twelve_Hours" || "TwentyFour_Hours",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDeliveryChannelsCommandInput - {@link DescribeDeliveryChannelsCommandInput}
 * @returns {@link DescribeDeliveryChannelsCommandOutput}
 * @see {@link DescribeDeliveryChannelsCommandInput} for command's `input` shape.
 * @see {@link DescribeDeliveryChannelsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
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
export class DescribeDeliveryChannelsCommand extends $Command
  .classBuilder<
    DescribeDeliveryChannelsCommandInput,
    DescribeDeliveryChannelsCommandOutput,
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
  .s("StarlingDoveService", "DescribeDeliveryChannels", {})
  .n("ConfigServiceClient", "DescribeDeliveryChannelsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDeliveryChannelsCommand)
  .de(de_DescribeDeliveryChannelsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDeliveryChannelsRequest;
      output: DescribeDeliveryChannelsResponse;
    };
    sdk: {
      input: DescribeDeliveryChannelsCommandInput;
      output: DescribeDeliveryChannelsCommandOutput;
    };
  };
}
