// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { ListChannelsRequest, ListChannelsResponse } from "../models/models_0";
import { de_ListChannelsCommand, se_ListChannelsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChannelsCommand}.
 */
export interface ListChannelsCommandInput extends ListChannelsRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelsCommand}.
 */
export interface ListChannelsCommandOutput extends ListChannelsResponse, __MetadataBearer {}

/**
 * <p>Retrieves all channels in a specific channel group that are configured in AWS Elemental MediaPackage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, ListChannelsCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, ListChannelsCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * const client = new MediaPackageV2Client(config);
 * const input = { // ListChannelsRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListChannelsCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelsResponse
 * //   Items: [ // ChannelList
 * //     { // ChannelListConfiguration
 * //       Arn: "STRING_VALUE", // required
 * //       ChannelName: "STRING_VALUE", // required
 * //       ChannelGroupName: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       ModifiedAt: new Date("TIMESTAMP"), // required
 * //       Description: "STRING_VALUE",
 * //       InputType: "HLS" || "CMAF",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelsCommandInput - {@link ListChannelsCommandInput}
 * @returns {@link ListChannelsCommandOutput}
 * @see {@link ListChannelsCommandInput} for command's `input` shape.
 * @see {@link ListChannelsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied because either you don't have permissions to perform the requested operation or MediaPackage is getting throttling errors with CDN authorization. The user or role that is making the request must have at least
 *          one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide. Or, if you're using CDN authorization, you will receive this exception
 *          if MediaPackage receives a throttling error from Secrets Manager.</p>
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
 * @example Listing all Channels
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup"
 * };
 * const command = new ListChannelsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/exampleChannel",
 *       ChannelGroupName: "exampleChannelGroup",
 *       ChannelName: "exampleChannel",
 *       CreatedAt: "2022-10-18T09:36:00.00Z",
 *       Description: "Description for exampleChannel",
 *       ModifiedAt: "2022-10-18T09:36:00.00Z"
 *     },
 *     {
 *       Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup/channel/anotherExampleChannel",
 *       ChannelGroupName: "exampleChannelGroup",
 *       ChannelName: "anotherExampleChannel",
 *       CreatedAt: "2022-10-18T10:36:00.00Z",
 *       ModifiedAt: "2022-10-18T10:36:00.00Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListChannelsCommand extends $Command
  .classBuilder<
    ListChannelsCommandInput,
    ListChannelsCommandOutput,
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
  .s("mediapackagev2", "ListChannels", {})
  .n("MediaPackageV2Client", "ListChannelsCommand")
  .f(void 0, void 0)
  .ser(se_ListChannelsCommand)
  .de(de_ListChannelsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelsRequest;
      output: ListChannelsResponse;
    };
    sdk: {
      input: ListChannelsCommandInput;
      output: ListChannelsCommandOutput;
    };
  };
}
