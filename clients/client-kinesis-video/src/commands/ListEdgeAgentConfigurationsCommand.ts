// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import {
  ListEdgeAgentConfigurationsInput,
  ListEdgeAgentConfigurationsOutput,
  ListEdgeAgentConfigurationsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListEdgeAgentConfigurationsCommand,
  se_ListEdgeAgentConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEdgeAgentConfigurationsCommand}.
 */
export interface ListEdgeAgentConfigurationsCommandInput extends ListEdgeAgentConfigurationsInput {}
/**
 * @public
 *
 * The output of {@link ListEdgeAgentConfigurationsCommand}.
 */
export interface ListEdgeAgentConfigurationsCommandOutput extends ListEdgeAgentConfigurationsOutput, __MetadataBearer {}

/**
 * <p>Returns an array of edge configurations associated with the specified Edge Agent.</p>
 *          <p>In the request, you must specify the Edge Agent <code>HubDeviceArn</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, ListEdgeAgentConfigurationsCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, ListEdgeAgentConfigurationsCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const input = { // ListEdgeAgentConfigurationsInput
 *   HubDeviceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEdgeAgentConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListEdgeAgentConfigurationsOutput
 * //   EdgeConfigs: [ // ListEdgeAgentConfigurationsEdgeConfigList
 * //     { // ListEdgeAgentConfigurationsEdgeConfig
 * //       StreamName: "STRING_VALUE",
 * //       StreamARN: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       SyncStatus: "SYNCING" || "ACKNOWLEDGED" || "IN_SYNC" || "SYNC_FAILED" || "DELETING" || "DELETE_FAILED" || "DELETING_ACKNOWLEDGED",
 * //       FailedStatusDetails: "STRING_VALUE",
 * //       EdgeConfig: { // EdgeConfig
 * //         HubDeviceArn: "STRING_VALUE", // required
 * //         RecorderConfig: { // RecorderConfig
 * //           MediaSourceConfig: { // MediaSourceConfig
 * //             MediaUriSecretArn: "STRING_VALUE", // required
 * //             MediaUriType: "RTSP_URI" || "FILE_URI", // required
 * //           },
 * //           ScheduleConfig: { // ScheduleConfig
 * //             ScheduleExpression: "STRING_VALUE", // required
 * //             DurationInSeconds: Number("int"), // required
 * //           },
 * //         },
 * //         UploaderConfig: { // UploaderConfig
 * //           ScheduleConfig: {
 * //             ScheduleExpression: "STRING_VALUE", // required
 * //             DurationInSeconds: Number("int"), // required
 * //           },
 * //         },
 * //         DeletionConfig: { // DeletionConfig
 * //           EdgeRetentionInHours: Number("int"),
 * //           LocalSizeConfig: { // LocalSizeConfig
 * //             MaxLocalMediaSizeInMB: Number("int"),
 * //             StrategyOnFullSize: "DELETE_OLDEST_MEDIA" || "DENY_NEW_MEDIA",
 * //           },
 * //           DeleteAfterUpload: true || false,
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEdgeAgentConfigurationsCommandInput - {@link ListEdgeAgentConfigurationsCommandInput}
 * @returns {@link ListEdgeAgentConfigurationsCommandOutput}
 * @see {@link ListEdgeAgentConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListEdgeAgentConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The caller is not authorized to perform this operation.</p>
 *
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 *
 * @public
 */
export class ListEdgeAgentConfigurationsCommand extends $Command
  .classBuilder<
    ListEdgeAgentConfigurationsCommandInput,
    ListEdgeAgentConfigurationsCommandOutput,
    KinesisVideoClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KinesisVideo_20170930", "ListEdgeAgentConfigurations", {})
  .n("KinesisVideoClient", "ListEdgeAgentConfigurationsCommand")
  .f(void 0, ListEdgeAgentConfigurationsOutputFilterSensitiveLog)
  .ser(se_ListEdgeAgentConfigurationsCommand)
  .de(de_ListEdgeAgentConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEdgeAgentConfigurationsInput;
      output: ListEdgeAgentConfigurationsOutput;
    };
    sdk: {
      input: ListEdgeAgentConfigurationsCommandInput;
      output: ListEdgeAgentConfigurationsCommandOutput;
    };
  };
}
