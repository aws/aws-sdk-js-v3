// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteEventBridgeRuleTemplateRequest } from "../models/models_2";
import {
  de_DeleteEventBridgeRuleTemplateCommand,
  se_DeleteEventBridgeRuleTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEventBridgeRuleTemplateCommand}.
 */
export interface DeleteEventBridgeRuleTemplateCommandInput extends DeleteEventBridgeRuleTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventBridgeRuleTemplateCommand}.
 */
export interface DeleteEventBridgeRuleTemplateCommandOutput extends __MetadataBearer {}

/**
 * Deletes an eventbridge rule template.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteEventBridgeRuleTemplateCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteEventBridgeRuleTemplateCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // DeleteEventBridgeRuleTemplateRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventBridgeRuleTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEventBridgeRuleTemplateCommandInput - {@link DeleteEventBridgeRuleTemplateCommandInput}
 * @returns {@link DeleteEventBridgeRuleTemplateCommandOutput}
 * @see {@link DeleteEventBridgeRuleTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteEventBridgeRuleTemplateCommandOutput} for command's `response` shape.
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
export class DeleteEventBridgeRuleTemplateCommand extends $Command
  .classBuilder<
    DeleteEventBridgeRuleTemplateCommandInput,
    DeleteEventBridgeRuleTemplateCommandOutput,
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
  .s("MediaLive", "DeleteEventBridgeRuleTemplate", {})
  .n("MediaLiveClient", "DeleteEventBridgeRuleTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEventBridgeRuleTemplateCommand)
  .de(de_DeleteEventBridgeRuleTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventBridgeRuleTemplateRequest;
      output: {};
    };
    sdk: {
      input: DeleteEventBridgeRuleTemplateCommandInput;
      output: DeleteEventBridgeRuleTemplateCommandOutput;
    };
  };
}
