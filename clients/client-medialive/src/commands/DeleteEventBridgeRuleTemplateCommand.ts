// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEventBridgeRuleTemplateRequest } from "../models/models_1";
import { DeleteEventBridgeRuleTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
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
export class DeleteEventBridgeRuleTemplateCommand extends command<DeleteEventBridgeRuleTemplateCommandInput, DeleteEventBridgeRuleTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEventBridgeRuleTemplate",
  DeleteEventBridgeRuleTemplate$
) {
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
