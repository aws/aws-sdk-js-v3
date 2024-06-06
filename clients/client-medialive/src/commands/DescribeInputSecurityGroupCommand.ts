// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeInputSecurityGroupRequest, DescribeInputSecurityGroupResponse } from "../models/models_2";
import { de_DescribeInputSecurityGroupCommand, se_DescribeInputSecurityGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInputSecurityGroupCommand}.
 */
export interface DescribeInputSecurityGroupCommandInput extends DescribeInputSecurityGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInputSecurityGroupCommand}.
 */
export interface DescribeInputSecurityGroupCommandOutput extends DescribeInputSecurityGroupResponse, __MetadataBearer {}

/**
 * Produces a summary of an Input Security Group
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeInputSecurityGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeInputSecurityGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeInputSecurityGroupRequest
 *   InputSecurityGroupId: "STRING_VALUE", // required
 * };
 * const command = new DescribeInputSecurityGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInputSecurityGroupResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Inputs: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   State: "IDLE" || "IN_USE" || "UPDATING" || "DELETED",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   WhitelistRules: [ // __listOfInputWhitelistRule
 * //     { // InputWhitelistRule
 * //       Cidr: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeInputSecurityGroupCommandInput - {@link DescribeInputSecurityGroupCommandInput}
 * @returns {@link DescribeInputSecurityGroupCommandOutput}
 * @see {@link DescribeInputSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeInputSecurityGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 * @public
 */
export class DescribeInputSecurityGroupCommand extends $Command
  .classBuilder<
    DescribeInputSecurityGroupCommandInput,
    DescribeInputSecurityGroupCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "DescribeInputSecurityGroup", {})
  .n("MediaLiveClient", "DescribeInputSecurityGroupCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInputSecurityGroupCommand)
  .de(de_DescribeInputSecurityGroupCommand)
  .build() {}
