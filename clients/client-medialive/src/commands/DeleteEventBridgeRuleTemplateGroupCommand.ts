// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteEventBridgeRuleTemplateGroupRequest } from "../models/models_2";
import {
  de_DeleteEventBridgeRuleTemplateGroupCommand,
  se_DeleteEventBridgeRuleTemplateGroupCommand,
} from "../protocols/Aws_restJson1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "DeleteEventBridgeRuleTemplateGroup", {})
  .n("MediaLiveClient", "DeleteEventBridgeRuleTemplateGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEventBridgeRuleTemplateGroupCommand)
  .de(de_DeleteEventBridgeRuleTemplateGroupCommand)
  .build() {}
