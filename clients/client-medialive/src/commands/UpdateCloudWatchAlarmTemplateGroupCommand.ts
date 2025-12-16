// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type {
  UpdateCloudWatchAlarmTemplateGroupRequest,
  UpdateCloudWatchAlarmTemplateGroupResponse,
} from "../models/models_1";
import { UpdateCloudWatchAlarmTemplateGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCloudWatchAlarmTemplateGroupCommand}.
 */
export interface UpdateCloudWatchAlarmTemplateGroupCommandInput extends UpdateCloudWatchAlarmTemplateGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCloudWatchAlarmTemplateGroupCommand}.
 */
export interface UpdateCloudWatchAlarmTemplateGroupCommandOutput
  extends UpdateCloudWatchAlarmTemplateGroupResponse,
    __MetadataBearer {}

/**
 * Updates the specified cloudwatch alarm template group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateCloudWatchAlarmTemplateGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateCloudWatchAlarmTemplateGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateCloudWatchAlarmTemplateGroupRequest
 *   Description: "STRING_VALUE",
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new UpdateCloudWatchAlarmTemplateGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCloudWatchAlarmTemplateGroupResponse
 * //   Arn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   ModifiedAt: new Date("TIMESTAMP"),
 * //   Name: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCloudWatchAlarmTemplateGroupCommandInput - {@link UpdateCloudWatchAlarmTemplateGroupCommandInput}
 * @returns {@link UpdateCloudWatchAlarmTemplateGroupCommandOutput}
 * @see {@link UpdateCloudWatchAlarmTemplateGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateCloudWatchAlarmTemplateGroupCommandOutput} for command's `response` shape.
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
export class UpdateCloudWatchAlarmTemplateGroupCommand extends $Command
  .classBuilder<
    UpdateCloudWatchAlarmTemplateGroupCommandInput,
    UpdateCloudWatchAlarmTemplateGroupCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "UpdateCloudWatchAlarmTemplateGroup", {})
  .n("MediaLiveClient", "UpdateCloudWatchAlarmTemplateGroupCommand")
  .sc(UpdateCloudWatchAlarmTemplateGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCloudWatchAlarmTemplateGroupRequest;
      output: UpdateCloudWatchAlarmTemplateGroupResponse;
    };
    sdk: {
      input: UpdateCloudWatchAlarmTemplateGroupCommandInput;
      output: UpdateCloudWatchAlarmTemplateGroupCommandOutput;
    };
  };
}
