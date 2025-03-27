// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceStorageConfigRequest, DescribeInstanceStorageConfigResponse } from "../models/models_1";
import {
  de_DescribeInstanceStorageConfigCommand,
  se_DescribeInstanceStorageConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceStorageConfigCommand}.
 */
export interface DescribeInstanceStorageConfigCommandInput extends DescribeInstanceStorageConfigRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceStorageConfigCommand}.
 */
export interface DescribeInstanceStorageConfigCommandOutput
  extends DescribeInstanceStorageConfigResponse,
    __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Retrieves the current storage configurations for the specified resource type, association
 *    ID, and instance ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeInstanceStorageConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeInstanceStorageConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DescribeInstanceStorageConfigRequest
 *   InstanceId: "STRING_VALUE", // required
 *   AssociationId: "STRING_VALUE", // required
 *   ResourceType: "CHAT_TRANSCRIPTS" || "CALL_RECORDINGS" || "SCHEDULED_REPORTS" || "MEDIA_STREAMS" || "CONTACT_TRACE_RECORDS" || "AGENT_EVENTS" || "REAL_TIME_CONTACT_ANALYSIS_SEGMENTS" || "ATTACHMENTS" || "CONTACT_EVALUATIONS" || "SCREEN_RECORDINGS" || "REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS" || "REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS" || "EMAIL_MESSAGES", // required
 * };
 * const command = new DescribeInstanceStorageConfigCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceStorageConfigResponse
 * //   StorageConfig: { // InstanceStorageConfig
 * //     AssociationId: "STRING_VALUE",
 * //     StorageType: "S3" || "KINESIS_VIDEO_STREAM" || "KINESIS_STREAM" || "KINESIS_FIREHOSE", // required
 * //     S3Config: { // S3Config
 * //       BucketName: "STRING_VALUE", // required
 * //       BucketPrefix: "STRING_VALUE", // required
 * //       EncryptionConfig: { // EncryptionConfig
 * //         EncryptionType: "KMS", // required
 * //         KeyId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     KinesisVideoStreamConfig: { // KinesisVideoStreamConfig
 * //       Prefix: "STRING_VALUE", // required
 * //       RetentionPeriodHours: Number("int"), // required
 * //       EncryptionConfig: {
 * //         EncryptionType: "KMS", // required
 * //         KeyId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     KinesisStreamConfig: { // KinesisStreamConfig
 * //       StreamArn: "STRING_VALUE", // required
 * //     },
 * //     KinesisFirehoseConfig: { // KinesisFirehoseConfig
 * //       FirehoseArn: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInstanceStorageConfigCommandInput - {@link DescribeInstanceStorageConfigCommandInput}
 * @returns {@link DescribeInstanceStorageConfigCommandOutput}
 * @see {@link DescribeInstanceStorageConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceStorageConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DescribeInstanceStorageConfigCommand extends $Command
  .classBuilder<
    DescribeInstanceStorageConfigCommandInput,
    DescribeInstanceStorageConfigCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DescribeInstanceStorageConfig", {})
  .n("ConnectClient", "DescribeInstanceStorageConfigCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInstanceStorageConfigCommand)
  .de(de_DescribeInstanceStorageConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceStorageConfigRequest;
      output: DescribeInstanceStorageConfigResponse;
    };
    sdk: {
      input: DescribeInstanceStorageConfigCommandInput;
      output: DescribeInstanceStorageConfigCommandOutput;
    };
  };
}
