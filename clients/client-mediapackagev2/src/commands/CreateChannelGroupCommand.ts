// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { CreateChannelGroupRequest, CreateChannelGroupResponse } from "../models/models_0";
import { de_CreateChannelGroupCommand, se_CreateChannelGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateChannelGroupCommand}.
 */
export interface CreateChannelGroupCommandInput extends CreateChannelGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelGroupCommand}.
 */
export interface CreateChannelGroupCommandOutput extends CreateChannelGroupResponse, __MetadataBearer {}

/**
 * <p>Create a channel group to group your channels and origin endpoints. A channel group is the top-level resource that consists of channels and origin endpoints that are associated with it and that provides predictable URLs for stream delivery. All channels and origin endpoints within the channel group are guaranteed to share the DNS. You can create only one channel group with each request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, CreateChannelGroupCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, CreateChannelGroupCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaPackageV2Client(config);
 * const input = { // CreateChannelGroupRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateChannelGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelGroupResponse
 * //   ChannelGroupName: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   EgressDomain: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   ModifiedAt: new Date("TIMESTAMP"), // required
 * //   ETag: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateChannelGroupCommandInput - {@link CreateChannelGroupCommandInput}
 * @returns {@link CreateChannelGroupCommandOutput}
 * @see {@link CreateChannelGroupCommandInput} for command's `input` shape.
 * @see {@link CreateChannelGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
 * @public
 * @example Creating a Channel Group
 * ```javascript
 * //
 * const input = {
 *   "ChannelGroupName": "exampleChannelGroup",
 *   "Description": "Description for exampleChannelGroup",
 *   "Tags": {
 *     "key1": "value1",
 *     "key2": "value2"
 *   }
 * };
 * const command = new CreateChannelGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Arn": "arn:aws:mediapackagev2:us-west-2:123456789012:channelGroup/exampleChannelGroup",
 *   "ChannelGroupName": "exampleChannelGroup",
 *   "CreatedAt": "2022-10-18T09:36:00.00Z",
 *   "Description": "Description for exampleChannelGroup",
 *   "ETag": "GlfT+dwAyGIR4wuy8nKWl1RDPwSrjQej9qUutLZxoxk=",
 *   "EgressDomain": "abcde.egress.vwxyz.mediapackagev2.us-west-2.amazonaws.com",
 *   "ModifiedAt": "2022-10-18T09:36:00.00Z",
 *   "Tags": {
 *     "key1": "value1",
 *     "key2": "value2"
 *   }
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class CreateChannelGroupCommand extends $Command
  .classBuilder<
    CreateChannelGroupCommandInput,
    CreateChannelGroupCommandOutput,
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
  .s("mediapackagev2", "CreateChannelGroup", {})
  .n("MediaPackageV2Client", "CreateChannelGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateChannelGroupCommand)
  .de(de_CreateChannelGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChannelGroupRequest;
      output: CreateChannelGroupResponse;
    };
    sdk: {
      input: CreateChannelGroupCommandInput;
      output: CreateChannelGroupCommandOutput;
    };
  };
}
