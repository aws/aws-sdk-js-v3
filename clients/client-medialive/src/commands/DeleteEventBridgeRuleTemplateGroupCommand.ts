// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteEventBridgeRuleTemplateGroupRequest } from "../models/models_2";
import { DeleteEventBridgeRuleTemplateGroup } from "../schemas/schemas_20_DeleteEventBridgeRuleTemplateGroup";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEventBridgeRuleTemplateGroupCommand}.
 */
export interface DeleteEventBridgeRuleTemplateGroupCommandInput extends DeleteEventBridgeRuleTemplateGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventBridgeRuleTemplateGroupCommand}.
 */
export interface DeleteEventBridgeRuleTemplateGroupCommandOutput extends __MetadataBearer {}

/**
 * Deletes an eventbridge rule template group. You must detach this group from all signal maps and ensure its existing templates are moved to another group or deleted.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteEventBridgeRuleTemplateGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteEventBridgeRuleTemplateGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // DeleteEventBridgeRuleTemplateGroupRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventBridgeRuleTemplateGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEventBridgeRuleTemplateGroupCommandInput - {@link DeleteEventBridgeRuleTemplateGroupCommandInput}
 * @returns {@link DeleteEventBridgeRuleTemplateGroupCommandOutput}
 * @see {@link DeleteEventBridgeRuleTemplateGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteEventBridgeRuleTemplateGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
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
export class DeleteEventBridgeRuleTemplateGroupCommand extends $Command
  .classBuilder<
    DeleteEventBridgeRuleTemplateGroupCommandInput,
    DeleteEventBridgeRuleTemplateGroupCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "DeleteEventBridgeRuleTemplateGroup", {})
  .n("MediaLiveClient", "DeleteEventBridgeRuleTemplateGroupCommand")
  .sc(DeleteEventBridgeRuleTemplateGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventBridgeRuleTemplateGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteEventBridgeRuleTemplateGroupCommandInput;
      output: DeleteEventBridgeRuleTemplateGroupCommandOutput;
    };
  };
}
