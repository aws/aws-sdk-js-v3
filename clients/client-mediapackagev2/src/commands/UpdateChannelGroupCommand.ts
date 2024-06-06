// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { UpdateChannelGroupRequest, UpdateChannelGroupResponse } from "../models/models_0";
import { de_UpdateChannelGroupCommand, se_UpdateChannelGroupCommand } from "../protocols/Aws_restJson1";

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
 * <p>Update the specified channel group. You can edit the description on a channel group for easier identification later from the AWS Elemental MediaPackage console. You can't edit the name of the channel group.</p>
 *          <p>Any edits you make that impact the video output may not be reflected for a few minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, UpdateChannelGroupCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, UpdateChannelGroupCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("mediapackagev2", "UpdateChannelGroup", {})
  .n("MediaPackageV2Client", "UpdateChannelGroupCommand")
  .f(void 0, void 0)
  .ser(se_UpdateChannelGroupCommand)
  .de(de_UpdateChannelGroupCommand)
  .build() {}
