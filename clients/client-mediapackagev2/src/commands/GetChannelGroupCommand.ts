// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { GetChannelGroupRequest, GetChannelGroupResponse } from "../models/models_0";
import { de_GetChannelGroupCommand, se_GetChannelGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetChannelGroupCommand}.
 */
export interface GetChannelGroupCommandInput extends GetChannelGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetChannelGroupCommand}.
 */
export interface GetChannelGroupCommandOutput extends GetChannelGroupResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified channel group that's configured in AWS Elemental MediaPackage, including the channels and origin endpoints that are associated with it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, GetChannelGroupCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, GetChannelGroupCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * const client = new MediaPackageV2Client(config);
 * const input = { // GetChannelGroupRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 * };
 * const command = new GetChannelGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetChannelGroupResponse
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
 * @param GetChannelGroupCommandInput - {@link GetChannelGroupCommandInput}
 * @returns {@link GetChannelGroupCommandOutput}
 * @see {@link GetChannelGroupCommandInput} for command's `input` shape.
 * @see {@link GetChannelGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide.</p>
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
export class GetChannelGroupCommand extends $Command
  .classBuilder<
    GetChannelGroupCommandInput,
    GetChannelGroupCommandOutput,
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
  .s("mediapackagev2", "GetChannelGroup", {})
  .n("MediaPackageV2Client", "GetChannelGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetChannelGroupCommand)
  .de(de_GetChannelGroupCommand)
  .build() {}
