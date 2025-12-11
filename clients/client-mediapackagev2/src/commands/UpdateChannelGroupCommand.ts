// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MediaPackageV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MediaPackageV2Client";
import type { UpdateChannelGroupRequest, UpdateChannelGroupResponse } from "../models/models_0";
import { UpdateChannelGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateChannelGroupCommand}.
 */
export interface UpdateChannelGroupCommandInput extends UpdateChannelGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateChannelGroupCommand}.
 */
export interface UpdateChannelGroupCommandOutput extends UpdateChannelGroupResponse, __MetadataBearer {}

/**
 * <p>Update the specified channel group. You can edit the description on a channel group for easier identification later from the AWS Elemental MediaPackage console. You can't edit the name of the channel group.</p> <p>Any edits you make that impact the video output may not be reflected for a few minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, UpdateChannelGroupCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, UpdateChannelGroupCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * // import type { MediaPackageV2ClientConfig } from "@aws-sdk/client-mediapackagev2";
 * const config = {}; // type is MediaPackageV2ClientConfig
 * const client = new MediaPackageV2Client(config);
 * const input = { // UpdateChannelGroupRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ETag: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateChannelGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateChannelGroupResponse
 * //   ChannelGroupName: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   EgressDomain: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   ModifiedAt: new Date("TIMESTAMP"), // required
 * //   Description: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateChannelGroupCommandInput - {@link UpdateChannelGroupCommandInput}
 * @returns {@link UpdateChannelGroupCommandOutput}
 * @see {@link UpdateChannelGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied because either you don't have permissions to perform the requested operation or MediaPackage is getting throttling errors with CDN authorization. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide. Or, if you're using CDN authorization, you will receive this exception if MediaPackage receives a throttling error from Secrets Manager.</p>
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
 * @example Updating a Channel Group
 * ```javascript
 * //
 * const input = {
 *   ChannelGroupName: "exampleChannelGroup",
 *   Description: "Updated description for exampleChannelGroup"
 * };
 * const command = new UpdateChannelGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup",
 *   ChannelGroupName: "exampleChannelGroup",
 *   CreatedAt: "2022-10-18T09:36:00.00Z",
 *   Description: "Updated description for exampleChannelGroup",
 *   ETag: "GlfT+dwAyGIR4wuy8nKWl1RDPwSrjQej9qUutLZxoxk=",
 *   EgressDomain: "abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com",
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
export class UpdateChannelGroupCommand extends $Command
  .classBuilder<
    UpdateChannelGroupCommandInput,
    UpdateChannelGroupCommandOutput,
    MediaPackageV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("mediapackagev2", "UpdateChannelGroup", {})
  .n("MediaPackageV2Client", "UpdateChannelGroupCommand")
  .sc(UpdateChannelGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateChannelGroupRequest;
      output: UpdateChannelGroupResponse;
    };
    sdk: {
      input: UpdateChannelGroupCommandInput;
      output: UpdateChannelGroupCommandOutput;
    };
  };
}
