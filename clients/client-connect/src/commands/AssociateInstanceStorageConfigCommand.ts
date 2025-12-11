// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateInstanceStorageConfigRequest, AssociateInstanceStorageConfigResponse } from "../models/models_0";
import { AssociateInstanceStorageConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateInstanceStorageConfigCommand}.
 */
export interface AssociateInstanceStorageConfigCommandInput extends AssociateInstanceStorageConfigRequest {}
/**
 * @public
 *
 * The output of {@link AssociateInstanceStorageConfigCommand}.
 */
export interface AssociateInstanceStorageConfigCommandOutput
  extends AssociateInstanceStorageConfigResponse,
    __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Associates a storage resource type for the first time. You can only associate one type of storage configuration
 *    in a single call. This means, for example, that you can't define an instance with multiple S3 buckets for storing
 *    chat transcripts.</p>
 *          <p>This API does not create a resource that doesn't exist. It only associates it to the instance. Ensure that the
 *    resource being specified in the storage configuration, like an S3 bucket, exists when being used for
 *    association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateInstanceStorageConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateInstanceStorageConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // AssociateInstanceStorageConfigRequest
 *   InstanceId: "STRING_VALUE", // required
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
 * const command = new AssociateInstanceStorageConfigCommand(input);
 * const response = await client.send(command);
 * // { // AssociateInstanceStorageConfigResponse
 * //   AssociationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateInstanceStorageConfigCommandInput - {@link AssociateInstanceStorageConfigCommandInput}
 * @returns {@link AssociateInstanceStorageConfigCommandOutput}
 * @see {@link AssociateInstanceStorageConfigCommandInput} for command's `input` shape.
 * @see {@link AssociateInstanceStorageConfigCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
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
export class AssociateInstanceStorageConfigCommand extends $Command
  .classBuilder<
    AssociateInstanceStorageConfigCommandInput,
    AssociateInstanceStorageConfigCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "AssociateInstanceStorageConfig", {})
  .n("ConnectClient", "AssociateInstanceStorageConfigCommand")
  .sc(AssociateInstanceStorageConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateInstanceStorageConfigRequest;
      output: AssociateInstanceStorageConfigResponse;
    };
    sdk: {
      input: AssociateInstanceStorageConfigCommandInput;
      output: AssociateInstanceStorageConfigCommandOutput;
    };
  };
}
