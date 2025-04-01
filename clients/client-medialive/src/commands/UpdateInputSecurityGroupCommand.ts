// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateInputSecurityGroupRequest, UpdateInputSecurityGroupResponse } from "../models/models_2";
import { de_UpdateInputSecurityGroupCommand, se_UpdateInputSecurityGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateInputSecurityGroupCommand}.
 */
export interface UpdateInputSecurityGroupCommandInput extends UpdateInputSecurityGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInputSecurityGroupCommand}.
 */
export interface UpdateInputSecurityGroupCommandOutput extends UpdateInputSecurityGroupResponse, __MetadataBearer {}

/**
 * Update an Input Security Group's Whilelists.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateInputSecurityGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateInputSecurityGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateInputSecurityGroupRequest
 *   InputSecurityGroupId: "STRING_VALUE", // required
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   WhitelistRules: [ // __listOfInputWhitelistRuleCidr
 *     { // InputWhitelistRuleCidr
 *       Cidr: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateInputSecurityGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInputSecurityGroupResponse
 * //   SecurityGroup: { // InputSecurityGroup
 * //     Arn: "STRING_VALUE",
 * //     Id: "STRING_VALUE",
 * //     Inputs: [ // __listOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //     State: "IDLE" || "IN_USE" || "UPDATING" || "DELETED",
 * //     Tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     WhitelistRules: [ // __listOfInputWhitelistRule
 * //       { // InputWhitelistRule
 * //         Cidr: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateInputSecurityGroupCommandInput - {@link UpdateInputSecurityGroupCommandInput}
 * @returns {@link UpdateInputSecurityGroupCommandOutput}
 * @see {@link UpdateInputSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateInputSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class UpdateInputSecurityGroupCommand extends $Command
  .classBuilder<
    UpdateInputSecurityGroupCommandInput,
    UpdateInputSecurityGroupCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "UpdateInputSecurityGroup", {})
  .n("MediaLiveClient", "UpdateInputSecurityGroupCommand")
  .f(void 0, void 0)
  .ser(se_UpdateInputSecurityGroupCommand)
  .de(de_UpdateInputSecurityGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInputSecurityGroupRequest;
      output: UpdateInputSecurityGroupResponse;
    };
    sdk: {
      input: UpdateInputSecurityGroupCommandInput;
      output: UpdateInputSecurityGroupCommandOutput;
    };
  };
}
