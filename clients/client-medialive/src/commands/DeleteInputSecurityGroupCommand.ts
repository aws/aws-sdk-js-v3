// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { DeleteInputSecurityGroupRequest, DeleteInputSecurityGroupResponse } from "../models/models_1";
import { DeleteInputSecurityGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInputSecurityGroupCommand}.
 */
export interface DeleteInputSecurityGroupCommandInput extends DeleteInputSecurityGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInputSecurityGroupCommand}.
 */
export interface DeleteInputSecurityGroupCommandOutput extends DeleteInputSecurityGroupResponse, __MetadataBearer {}

/**
 * Deletes an Input Security Group
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteInputSecurityGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteInputSecurityGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // DeleteInputSecurityGroupRequest
 *   InputSecurityGroupId: "STRING_VALUE", // required
 * };
 * const command = new DeleteInputSecurityGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteInputSecurityGroupCommandInput - {@link DeleteInputSecurityGroupCommandInput}
 * @returns {@link DeleteInputSecurityGroupCommandOutput}
 * @see {@link DeleteInputSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteInputSecurityGroupCommandOutput} for command's `response` shape.
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
export class DeleteInputSecurityGroupCommand extends $Command
  .classBuilder<
    DeleteInputSecurityGroupCommandInput,
    DeleteInputSecurityGroupCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "DeleteInputSecurityGroup", {})
  .n("MediaLiveClient", "DeleteInputSecurityGroupCommand")
  .sc(DeleteInputSecurityGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInputSecurityGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteInputSecurityGroupCommandInput;
      output: DeleteInputSecurityGroupCommandOutput;
    };
  };
}
