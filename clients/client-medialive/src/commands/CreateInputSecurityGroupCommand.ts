// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { CreateInputSecurityGroupRequest, CreateInputSecurityGroupResponse } from "../models/models_1";
import { CreateInputSecurityGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInputSecurityGroupCommand}.
 */
export interface CreateInputSecurityGroupCommandInput extends CreateInputSecurityGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateInputSecurityGroupCommand}.
 */
export interface CreateInputSecurityGroupCommandOutput extends CreateInputSecurityGroupResponse, __MetadataBearer {}

/**
 * Creates a Input Security Group
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateInputSecurityGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateInputSecurityGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // CreateInputSecurityGroupRequest
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   WhitelistRules: [ // __listOfInputWhitelistRuleCidr
 *     { // InputWhitelistRuleCidr
 *       Cidr: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateInputSecurityGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateInputSecurityGroupResponse
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
 * @param CreateInputSecurityGroupCommandInput - {@link CreateInputSecurityGroupCommandInput}
 * @returns {@link CreateInputSecurityGroupCommandOutput}
 * @see {@link CreateInputSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link CreateInputSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class CreateInputSecurityGroupCommand extends $Command
  .classBuilder<
    CreateInputSecurityGroupCommandInput,
    CreateInputSecurityGroupCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "CreateInputSecurityGroup", {})
  .n("MediaLiveClient", "CreateInputSecurityGroupCommand")
  .sc(CreateInputSecurityGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInputSecurityGroupRequest;
      output: CreateInputSecurityGroupResponse;
    };
    sdk: {
      input: CreateInputSecurityGroupCommandInput;
      output: CreateInputSecurityGroupCommandOutput;
    };
  };
}
