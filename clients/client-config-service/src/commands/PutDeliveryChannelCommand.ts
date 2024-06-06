// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutDeliveryChannelRequest } from "../models/models_1";
import { de_PutDeliveryChannelCommand, se_PutDeliveryChannelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDeliveryChannelCommand}.
 */
export interface PutDeliveryChannelCommandInput extends PutDeliveryChannelRequest {}
/**
 * @public
 *
 * The output of {@link PutDeliveryChannelCommand}.
 */
export interface PutDeliveryChannelCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates a delivery channel object to deliver configuration
 * 			information and other compliance information to an Amazon S3 bucket and Amazon SNS topic.
 * 			For more information,
 * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/notifications-for-AWS-Config.html">Notifications that Config Sends to an Amazon SNS topic</a>.</p>
 *          <p>Before you can create a delivery channel, you must create a
 * 			configuration recorder.</p>
 *          <p>You can use this action to change the Amazon S3 bucket or an
 * 			Amazon SNS topic of the existing delivery channel. To change the
 * 			Amazon S3 bucket or an Amazon SNS topic, call this action and
 * 			specify the changed values for the S3 bucket and the SNS topic. If
 * 			you specify a different value for either the S3 bucket or the SNS
 * 			topic, this action will keep the existing value for the parameter
 * 			that is not changed.</p>
 *          <note>
 *             <p>You can have only one delivery channel per region in your
 * 				account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutDeliveryChannelCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutDeliveryChannelCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // PutDeliveryChannelRequest
 *   DeliveryChannel: { // DeliveryChannel
 *     name: "STRING_VALUE",
 *     s3BucketName: "STRING_VALUE",
 *     s3KeyPrefix: "STRING_VALUE",
 *     s3KmsKeyArn: "STRING_VALUE",
 *     snsTopicARN: "STRING_VALUE",
 *     configSnapshotDeliveryProperties: { // ConfigSnapshotDeliveryProperties
 *       deliveryFrequency: "One_Hour" || "Three_Hours" || "Six_Hours" || "Twelve_Hours" || "TwentyFour_Hours",
 *     },
 *   },
 * };
 * const command = new PutDeliveryChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDeliveryChannelCommandInput - {@link PutDeliveryChannelCommandInput}
 * @returns {@link PutDeliveryChannelCommandOutput}
 * @see {@link PutDeliveryChannelCommandInput} for command's `input` shape.
 * @see {@link PutDeliveryChannelCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InsufficientDeliveryPolicyException} (client fault)
 *  <p>Your Amazon S3 bucket policy does not permit Config to
 * 			write to it.</p>
 *
 * @throws {@link InvalidDeliveryChannelNameException} (client fault)
 *  <p>The specified delivery channel name is not valid.</p>
 *
 * @throws {@link InvalidS3KeyPrefixException} (client fault)
 *  <p>The specified Amazon S3 key prefix is not valid.</p>
 *
 * @throws {@link InvalidS3KmsKeyArnException} (client fault)
 *  <p>The specified Amazon KMS Key ARN is not valid.</p>
 *
 * @throws {@link InvalidSNSTopicARNException} (client fault)
 *  <p>The specified Amazon SNS topic does not exist.</p>
 *
 * @throws {@link MaxNumberOfDeliveryChannelsExceededException} (client fault)
 *  <p>You have reached the limit of the number of delivery channels
 * 			you can create.</p>
 *
 * @throws {@link NoAvailableConfigurationRecorderException} (client fault)
 *  <p>There are no configuration recorders available to provide the
 * 			role needed to describe your resources. Create a configuration
 * 			recorder.</p>
 *
 * @throws {@link NoSuchBucketException} (client fault)
 *  <p>The specified Amazon S3 bucket does not exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class PutDeliveryChannelCommand extends $Command
  .classBuilder<
    PutDeliveryChannelCommandInput,
    PutDeliveryChannelCommandOutput,
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
  .s("StarlingDoveService", "PutDeliveryChannel", {})
  .n("ConfigServiceClient", "PutDeliveryChannelCommand")
  .f(void 0, void 0)
  .ser(se_PutDeliveryChannelCommand)
  .de(de_PutDeliveryChannelCommand)
  .build() {}
