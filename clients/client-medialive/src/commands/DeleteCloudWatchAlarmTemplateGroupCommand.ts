// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCloudWatchAlarmTemplateGroupRequest } from "../models/models_1";
import { DeleteCloudWatchAlarmTemplateGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
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
 *
 * @public
 */
export class DeleteCloudWatchAlarmTemplateGroupCommand extends command<DeleteCloudWatchAlarmTemplateGroupCommandInput, DeleteCloudWatchAlarmTemplateGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCloudWatchAlarmTemplateGroup",
  DeleteCloudWatchAlarmTemplateGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCloudWatchAlarmTemplateGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteCloudWatchAlarmTemplateGroupCommandInput;
      output: DeleteCloudWatchAlarmTemplateGroupCommandOutput;
    };
  };
}
