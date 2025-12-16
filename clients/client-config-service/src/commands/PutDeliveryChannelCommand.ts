// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutDeliveryChannelRequest } from "../models/models_0";
import { PutDeliveryChannel$ } from "../schemas/schemas_0";

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
 * <p>Creates or updates a delivery channel to deliver configuration
 * 			information and other compliance information.</p>
 *          <p>You can use this operation to create a new delivery channel or to update the Amazon S3 bucket and the
 * 			Amazon SNS topic of an existing delivery channel.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/manage-delivery-channel.html">
 *                <b>Working with the Delivery Channel</b>
 *             </a> in the <i>Config Developer Guide.</i>
 *          </p>
 *          <note>
 *             <p>
 *                <b>One delivery channel per account per Region</b>
 *             </p>
 *             <p>You can have only one delivery channel for each account for each Amazon Web Services Region.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutDeliveryChannelCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutDeliveryChannelCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
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
 *  <p>Your Amazon S3 bucket policy does not allow Config to
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
 *  <p>There are no customer managed configuration recorders available to record your resources. Use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html">PutConfigurationRecorder</a> operation to create the customer managed configuration
 * 			recorder.</p>
 *
 * @throws {@link NoSuchBucketException} (client fault)
 *  <p>The specified Amazon S3 bucket does not exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "PutDeliveryChannel", {})
  .n("ConfigServiceClient", "PutDeliveryChannelCommand")
  .sc(PutDeliveryChannel$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDeliveryChannelRequest;
      output: {};
    };
    sdk: {
      input: PutDeliveryChannelCommandInput;
      output: PutDeliveryChannelCommandOutput;
    };
  };
}
