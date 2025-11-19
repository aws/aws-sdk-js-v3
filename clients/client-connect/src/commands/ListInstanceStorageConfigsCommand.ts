// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListInstanceStorageConfigsRequest, ListInstanceStorageConfigsResponse } from "../models/models_1";
import { ListInstanceStorageConfigs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInstanceStorageConfigsCommand}.
 */
export interface ListInstanceStorageConfigsCommandInput extends ListInstanceStorageConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListInstanceStorageConfigsCommand}.
 */
export interface ListInstanceStorageConfigsCommandOutput extends ListInstanceStorageConfigsResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of storage configs for the identified instance and resource
 *    type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListInstanceStorageConfigsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListInstanceStorageConfigsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListInstanceStorageConfigsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ResourceType: "CHAT_TRANSCRIPTS" || "CALL_RECORDINGS" || "SCHEDULED_REPORTS" || "MEDIA_STREAMS" || "CONTACT_TRACE_RECORDS" || "AGENT_EVENTS" || "REAL_TIME_CONTACT_ANALYSIS_SEGMENTS" || "ATTACHMENTS" || "CONTACT_EVALUATIONS" || "SCREEN_RECORDINGS" || "REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS" || "REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS" || "EMAIL_MESSAGES", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListInstanceStorageConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListInstanceStorageConfigsResponse
 * //   StorageConfigs: [ // InstanceStorageConfigs
 * //     { // InstanceStorageConfig
 * //       AssociationId: "STRING_VALUE",
 * //       StorageType: "S3" || "KINESIS_VIDEO_STREAM" || "KINESIS_STREAM" || "KINESIS_FIREHOSE", // required
 * //       S3Config: { // S3Config
 * //         BucketName: "STRING_VALUE", // required
 * //         BucketPrefix: "STRING_VALUE", // required
 * //         EncryptionConfig: { // EncryptionConfig
 * //           EncryptionType: "KMS", // required
 * //           KeyId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       KinesisVideoStreamConfig: { // KinesisVideoStreamConfig
 * //         Prefix: "STRING_VALUE", // required
 * //         RetentionPeriodHours: Number("int"), // required
 * //         EncryptionConfig: {
 * //           EncryptionType: "KMS", // required
 * //           KeyId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       KinesisStreamConfig: { // KinesisStreamConfig
 * //         StreamArn: "STRING_VALUE", // required
 * //       },
 * //       KinesisFirehoseConfig: { // KinesisFirehoseConfig
 * //         FirehoseArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstanceStorageConfigsCommandInput - {@link ListInstanceStorageConfigsCommandInput}
 * @returns {@link ListInstanceStorageConfigsCommandOutput}
 * @see {@link ListInstanceStorageConfigsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceStorageConfigsCommandOutput} for command's `response` shape.
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
export class ListInstanceStorageConfigsCommand extends $Command
  .classBuilder<
    ListInstanceStorageConfigsCommandInput,
    ListInstanceStorageConfigsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListInstanceStorageConfigs", {})
  .n("ConnectClient", "ListInstanceStorageConfigsCommand")
  .sc(ListInstanceStorageConfigs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInstanceStorageConfigsRequest;
      output: ListInstanceStorageConfigsResponse;
    };
    sdk: {
      input: ListInstanceStorageConfigsCommandInput;
      output: ListInstanceStorageConfigsCommandOutput;
    };
  };
}
