// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutDeliveryChannelRequest } from "../models/models_0";
import { PutDeliveryChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates or updates a delivery channel to deliver configuration information and other compliance information.
 *
 * You can use this operation to create a new delivery channel or to update the Amazon S3 bucket and the Amazon SNS topic of an existing delivery channel.
 *
 * For more information, see [**Working with the Delivery Channel**](https://docs.aws.amazon.com/config/latest/developerguide/manage-delivery-channel.html) in the *Config Developer Guide.*
 *
 * > **Note:**
 * >
 * > **One delivery channel per account per Region**
 * >
 * > You can have only one delivery channel for each account for each Amazon Web Services Region.
 *
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
 *
 * Your Amazon S3 bucket policy does not allow Config to write to it.
 *
 * @throws {@link InvalidDeliveryChannelNameException} (client fault)
 *
 * The specified delivery channel name is not valid.
 *
 * @throws {@link InvalidS3KeyPrefixException} (client fault)
 *
 * The specified Amazon S3 key prefix is not valid.
 *
 * @throws {@link InvalidS3KmsKeyArnException} (client fault)
 *
 * The specified Amazon KMS Key ARN is not valid.
 *
 * @throws {@link InvalidSNSTopicARNException} (client fault)
 *
 * The specified Amazon SNS topic does not exist.
 *
 * @throws {@link MaxNumberOfDeliveryChannelsExceededException} (client fault)
 *
 * You have reached the limit of the number of delivery channels you can create.
 *
 * @throws {@link NoAvailableConfigurationRecorderException} (client fault)
 *
 * There are no customer managed configuration recorders available to record your resources. Use the [PutConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html) operation to create the customer managed configuration recorder.
 *
 * @throws {@link NoSuchBucketException} (client fault)
 *
 * The specified Amazon S3 bucket does not exist.
 *
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class PutDeliveryChannelCommand extends command<PutDeliveryChannelCommandInput, PutDeliveryChannelCommandOutput>(
  _ep0,
  _mw0,
  "PutDeliveryChannel",
  PutDeliveryChannel$
) {
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
