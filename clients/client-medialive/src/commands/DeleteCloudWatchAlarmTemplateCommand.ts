// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteCloudWatchAlarmTemplateRequest } from "../models/models_2";
import { DeleteCloudWatchAlarmTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCloudWatchAlarmTemplateCommand}.
 */
export interface DeleteCloudWatchAlarmTemplateCommandInput extends DeleteCloudWatchAlarmTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCloudWatchAlarmTemplateCommand}.
 */
export interface DeleteCloudWatchAlarmTemplateCommandOutput extends __MetadataBearer {}

/**
 * Deletes a cloudwatch alarm template.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteCloudWatchAlarmTemplateCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteCloudWatchAlarmTemplateCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // DeleteCloudWatchAlarmTemplateRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteCloudWatchAlarmTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCloudWatchAlarmTemplateCommandInput - {@link DeleteCloudWatchAlarmTemplateCommandInput}
 * @returns {@link DeleteCloudWatchAlarmTemplateCommandOutput}
 * @see {@link DeleteCloudWatchAlarmTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteCloudWatchAlarmTemplateCommandOutput} for command's `response` shape.
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
export class DeleteCloudWatchAlarmTemplateCommand extends $Command
  .classBuilder<
    DeleteCloudWatchAlarmTemplateCommandInput,
    DeleteCloudWatchAlarmTemplateCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "DeleteCloudWatchAlarmTemplate", {})
  .n("MediaLiveClient", "DeleteCloudWatchAlarmTemplateCommand")
  .sc(DeleteCloudWatchAlarmTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCloudWatchAlarmTemplateRequest;
      output: {};
    };
    sdk: {
      input: DeleteCloudWatchAlarmTemplateCommandInput;
      output: DeleteCloudWatchAlarmTemplateCommandOutput;
    };
  };
}
