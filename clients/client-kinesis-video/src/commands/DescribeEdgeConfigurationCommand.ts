// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { DescribeEdgeConfigurationInput, DescribeEdgeConfigurationOutput } from "../models/models_0";
import { DescribeEdgeConfiguration } from "../schemas/schemas_7_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEdgeConfigurationCommand}.
 */
export interface DescribeEdgeConfigurationCommandInput extends DescribeEdgeConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DescribeEdgeConfigurationCommand}.
 */
export interface DescribeEdgeConfigurationCommandOutput extends DescribeEdgeConfigurationOutput, __MetadataBearer {}

/**
 * <p>Describes a stream’s edge configuration that was set using the
 *                 <code>StartEdgeConfigurationUpdate</code> API and the latest status of the edge
 *             agent's recorder and uploader jobs. Use this API to get the status of the configuration
 *             to determine if the configuration is in sync with the Edge Agent. Use this API to
 *             evaluate the health of the Edge Agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, DescribeEdgeConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, DescribeEdgeConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // DescribeEdgeConfigurationInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new DescribeEdgeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEdgeConfigurationOutput
 * //   StreamName: "STRING_VALUE",
 * //   StreamARN: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastUpdatedTime: new Date("TIMESTAMP"),
 * //   SyncStatus: "SYNCING" || "ACKNOWLEDGED" || "IN_SYNC" || "SYNC_FAILED" || "DELETING" || "DELETE_FAILED" || "DELETING_ACKNOWLEDGED",
 * //   FailedStatusDetails: "STRING_VALUE",
 * //   EdgeConfig: { // EdgeConfig
 * //     HubDeviceArn: "STRING_VALUE", // required
 * //     RecorderConfig: { // RecorderConfig
 * //       MediaSourceConfig: { // MediaSourceConfig
 * //         MediaUriSecretArn: "STRING_VALUE", // required
 * //         MediaUriType: "RTSP_URI" || "FILE_URI", // required
 * //       },
 * //       ScheduleConfig: { // ScheduleConfig
 * //         ScheduleExpression: "STRING_VALUE", // required
 * //         DurationInSeconds: Number("int"), // required
 * //       },
 * //     },
 * //     UploaderConfig: { // UploaderConfig
 * //       ScheduleConfig: {
 * //         ScheduleExpression: "STRING_VALUE", // required
 * //         DurationInSeconds: Number("int"), // required
 * //       },
 * //     },
 * //     DeletionConfig: { // DeletionConfig
 * //       EdgeRetentionInHours: Number("int"),
 * //       LocalSizeConfig: { // LocalSizeConfig
 * //         MaxLocalMediaSizeInMB: Number("int"),
 * //         StrategyOnFullSize: "DELETE_OLDEST_MEDIA" || "DENY_NEW_MEDIA",
 * //       },
 * //       DeleteAfterUpload: true || false,
 * //     },
 * //   },
 * //   EdgeAgentStatus: { // EdgeAgentStatus
 * //     LastRecorderStatus: { // LastRecorderStatus
 * //       JobStatusDetails: "STRING_VALUE",
 * //       LastCollectedTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       RecorderStatus: "SUCCESS" || "USER_ERROR" || "SYSTEM_ERROR",
 * //     },
 * //     LastUploaderStatus: { // LastUploaderStatus
 * //       JobStatusDetails: "STRING_VALUE",
 * //       LastCollectedTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       UploaderStatus: "SUCCESS" || "USER_ERROR" || "SYSTEM_ERROR",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEdgeConfigurationCommandInput - {@link DescribeEdgeConfigurationCommandInput}
 * @returns {@link DescribeEdgeConfigurationCommandOutput}
 * @see {@link DescribeEdgeConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeEdgeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to perform this operation.</p>
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
 *
 * @throws {@link StreamEdgeConfigurationNotFoundException} (client fault)
 *  <p>The Exception rendered when the Amazon Kinesis Video Stream can't find a stream's edge configuration
 *          that you specified. </p>
 *
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 *
 * @public
 */
export class DescribeEdgeConfigurationCommand extends $Command
  .classBuilder<
    DescribeEdgeConfigurationCommandInput,
    DescribeEdgeConfigurationCommandOutput,
    KinesisVideoClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisVideo_20170930", "DescribeEdgeConfiguration", {})
  .n("KinesisVideoClient", "DescribeEdgeConfigurationCommand")
  .sc(DescribeEdgeConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEdgeConfigurationInput;
      output: DescribeEdgeConfigurationOutput;
    };
    sdk: {
      input: DescribeEdgeConfigurationCommandInput;
      output: DescribeEdgeConfigurationCommandOutput;
    };
  };
}
