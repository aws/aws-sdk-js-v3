// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeInputSecurityGroupRequest, DescribeInputSecurityGroupResponse } from "../models/models_1";
import { DescribeInputSecurityGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
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
 * //   Channels: [
 * //     "STRING_VALUE",
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
 *
 * @public
 */
export class DescribeInputSecurityGroupCommand extends command<DescribeInputSecurityGroupCommandInput, DescribeInputSecurityGroupCommandOutput>(
  _ep0,
  _mw0,
  "DescribeInputSecurityGroup",
  DescribeInputSecurityGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInputSecurityGroupRequest;
      output: DescribeInputSecurityGroupResponse;
    };
    sdk: {
      input: DescribeInputSecurityGroupCommandInput;
      output: DescribeInputSecurityGroupCommandOutput;
    };
  };
}
