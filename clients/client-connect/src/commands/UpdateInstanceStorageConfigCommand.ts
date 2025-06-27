// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateInstanceStorageConfigRequest } from "../models/models_2";
import {
  de_UpdateInstanceStorageConfigCommand,
  se_UpdateInstanceStorageConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateInstanceStorageConfigCommand}.
 */
export interface UpdateInstanceStorageConfigCommandInput extends UpdateInstanceStorageConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInstanceStorageConfigCommand}.
 */
export interface UpdateInstanceStorageConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates an existing configuration for a resource type. This API is idempotent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateInstanceStorageConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateInstanceStorageConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateInstanceStorageConfigRequest
 *   InstanceId: "STRING_VALUE", // required
 *   AssociationId: "STRING_VALUE", // required
 *   ResourceType: "CHAT_TRANSCRIPTS" || "CALL_RECORDINGS" || "SCHEDULED_REPORTS" || "MEDIA_STREAMS" || "CONTACT_TRACE_RECORDS" || "AGENT_EVENTS" || "REAL_TIME_CONTACT_ANALYSIS_SEGMENTS" || "ATTACHMENTS" || "CONTACT_EVALUATIONS" || "SCREEN_RECORDINGS" || "REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS" || "REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS" || "EMAIL_MESSAGES", // required
 *   StorageConfig: { // InstanceStorageConfig
 *     AssociationId: "STRING_VALUE",
 *     StorageType: "S3" || "KINESIS_VIDEO_STREAM" || "KINESIS_STREAM" || "KINESIS_FIREHOSE", // required
 *     S3Config: { // S3Config
 *       BucketName: "STRING_VALUE", // required
 *       BucketPrefix: "STRING_VALUE", // required
 *       EncryptionConfig: { // EncryptionConfig
 *         EncryptionType: "KMS", // required
 *         KeyId: "STRING_VALUE", // required
 *       },
 *     },
 *     KinesisVideoStreamConfig: { // KinesisVideoStreamConfig
 *       Prefix: "STRING_VALUE", // required
 *       RetentionPeriodHours: Number("int"), // required
 *       EncryptionConfig: {
 *         EncryptionType: "KMS", // required
 *         KeyId: "STRING_VALUE", // required
 *       },
 *     },
 *     KinesisStreamConfig: { // KinesisStreamConfig
 *       StreamArn: "STRING_VALUE", // required
 *     },
 *     KinesisFirehoseConfig: { // KinesisFirehoseConfig
 *       FirehoseArn: "STRING_VALUE", // required
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateInstanceStorageConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateInstanceStorageConfigCommandInput - {@link UpdateInstanceStorageConfigCommandInput}
 * @returns {@link UpdateInstanceStorageConfigCommandOutput}
 * @see {@link UpdateInstanceStorageConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceStorageConfigCommandOutput} for command's `response` shape.
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
export class UpdateInstanceStorageConfigCommand extends $Command
  .classBuilder<
    UpdateInstanceStorageConfigCommandInput,
    UpdateInstanceStorageConfigCommandOutput,
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
  .s("AmazonConnectService", "UpdateInstanceStorageConfig", {})
  .n("ConnectClient", "UpdateInstanceStorageConfigCommand")
  .f(void 0, void 0)
  .ser(se_UpdateInstanceStorageConfigCommand)
  .de(de_UpdateInstanceStorageConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInstanceStorageConfigRequest;
      output: {};
    };
    sdk: {
      input: UpdateInstanceStorageConfigCommandInput;
      output: UpdateInstanceStorageConfigCommandOutput;
    };
  };
}
