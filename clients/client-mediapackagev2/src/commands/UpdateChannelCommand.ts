// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { UpdateChannelRequest, UpdateChannelResponse } from "../models/models_0";
import { de_UpdateChannelCommand, se_UpdateChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateChannelCommand}.
 */
export interface UpdateChannelCommandInput extends UpdateChannelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateChannelCommand}.
 */
export interface UpdateChannelCommandOutput extends UpdateChannelResponse, __MetadataBearer {}

/**
 * <p>Update the specified channel. You can edit if MediaPackage sends ingest or egress access logs to the CloudWatch log group, if content will be encrypted, the description on a channel, and your channel's policy settings. You can't edit the name of the channel or CloudFront distribution details.</p>
 *          <p>Any edits you make that impact the video output may not be reflected for a few minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, UpdateChannelCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, UpdateChannelCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * const client = new MediaPackageV2Client(config);
 * const input = { // UpdateChannelRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE", // required
 *   ETag: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   InputSwitchConfiguration: { // InputSwitchConfiguration
 *     MQCSInputSwitching: true || false,
 *   },
 *   OutputHeaderConfiguration: { // OutputHeaderConfiguration
 *     PublishMQCS: true || false,
 *   },
 * };
 * const command = new UpdateChannelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateChannelResponse
 * //   Arn: "STRING_VALUE", // required
 * //   ChannelName: "STRING_VALUE", // required
 * //   ChannelGroupName: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   ModifiedAt: new Date("TIMESTAMP"), // required
 * //   Description: "STRING_VALUE",
 * //   IngestEndpoints: [ // IngestEndpointList
 * //     { // IngestEndpoint
 * //       Id: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
 * //   ],
 * //   InputType: "HLS" || "CMAF",
 * //   ETag: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   InputSwitchConfiguration: { // InputSwitchConfiguration
 * //     MQCSInputSwitching: true || false,
 * //   },
 * //   OutputHeaderConfiguration: { // OutputHeaderConfiguration
 * //     PublishMQCS: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateChannelCommandInput - {@link UpdateChannelCommandInput}
 * @returns {@link UpdateChannelCommandOutput}
 * @see {@link UpdateChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service.</p>
 *
 * @throws {@link MediaPackageV2ServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageV2 service.</p>
 *
 *
 * @example Updating a Channel
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   Description: "Updated description for exampleChannel"
 * };
 * const command = new UpdateChannelCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannel",
 *   ChannelGroupName: "exampleChannelGroup",
 *   ChannelName: "exampleChannel",
 *   CreatedAt: "2022-10-18T09:36:00.00Z",
 *   Description: "Updated description for exampleChannel",
 *   ETag: "GlfT+dwAyGIR4wuy8nKWl1RDPwSrjQej9qUutLZxoxk=",
 *   IngestEndpoints: [
 *     {
 *       Id: "1",
 *       Url: "https://abcde-1.ingest.vwxyz.mediapackagev2.us-west-2.amazonaws.com/v1/exampleChannelGroup/exampleChannel/index"
 *     },
 *     {
 *       Id: "2",
 *       Url: "https://abcde-2.ingest.vwxyz.mediapackagev2.us-west-2.amazonaws.com/v1/exampleChannelGroup/exampleChannel/index"
 *     }
 *   ],
 *   InputType: "HLS",
 *   ModifiedAt: "2022-10-18T10:36:00.00Z",
 *   Tags: {
 *     key1: "value1",
 *     key2: "value2"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateChannelCommand extends $Command
  .classBuilder<
    UpdateChannelCommandInput,
    UpdateChannelCommandOutput,
    MediaPackageV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("mediapackagev2", "UpdateChannel", {})
  .n("MediaPackageV2Client", "UpdateChannelCommand")
  .f(void 0, void 0)
  .ser(se_UpdateChannelCommand)
  .de(de_UpdateChannelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateChannelRequest;
      output: UpdateChannelResponse;
    };
    sdk: {
      input: UpdateChannelCommandInput;
      output: UpdateChannelCommandOutput;
    };
  };
}
