// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteCloudWatchAlarmTemplateGroupRequest } from "../models/models_2";
import {
  de_DeleteCloudWatchAlarmTemplateGroupCommand,
  se_DeleteCloudWatchAlarmTemplateGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCloudWatchAlarmTemplateGroupCommand}.
 */
export interface DeleteCloudWatchAlarmTemplateGroupCommandInput extends DeleteCloudWatchAlarmTemplateGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCloudWatchAlarmTemplateGroupCommand}.
 */
export interface DeleteCloudWatchAlarmTemplateGroupCommandOutput extends __MetadataBearer {}

/**
 * Deletes a cloudwatch alarm template group. You must detach this group from all signal maps and ensure its existing templates are moved to another group or deleted.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteCloudWatchAlarmTemplateGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteCloudWatchAlarmTemplateGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // DeleteCloudWatchAlarmTemplateGroupRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteCloudWatchAlarmTemplateGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCloudWatchAlarmTemplateGroupCommandInput - {@link DeleteCloudWatchAlarmTemplateGroupCommandInput}
 * @returns {@link DeleteCloudWatchAlarmTemplateGroupCommandOutput}
 * @see {@link DeleteCloudWatchAlarmTemplateGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteCloudWatchAlarmTemplateGroupCommandOutput} for command's `response` shape.
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
export class DeleteCloudWatchAlarmTemplateGroupCommand extends $Command
  .classBuilder<
    DeleteCloudWatchAlarmTemplateGroupCommandInput,
    DeleteCloudWatchAlarmTemplateGroupCommandOutput,
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
  .s("MediaLive", "DeleteCloudWatchAlarmTemplateGroup", {})
  .n("MediaLiveClient", "DeleteCloudWatchAlarmTemplateGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCloudWatchAlarmTemplateGroupCommand)
  .de(de_DeleteCloudWatchAlarmTemplateGroupCommand)
  .build() {}
