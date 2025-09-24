// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { DeletePresetRequest, DeletePresetResponse } from "../models/models_2";
import { DeletePreset } from "../schemas/schemas_11_DeletePreset";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePresetCommand}.
 */
export interface DeletePresetCommandInput extends DeletePresetRequest {}
/**
 * @public
 *
 * The output of {@link DeletePresetCommand}.
 */
export interface DeletePresetCommandOutput extends DeletePresetResponse, __MetadataBearer {}

/**
 * Permanently delete a preset you have created.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, DeletePresetCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, DeletePresetCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * // import type { MediaConvertClientConfig } from "@aws-sdk/client-mediaconvert";
 * const config = {}; // type is MediaConvertClientConfig
 * const client = new MediaConvertClient(config);
 * const input = { // DeletePresetRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeletePresetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePresetCommandInput - {@link DeletePresetCommandInput}
 * @returns {@link DeletePresetCommandOutput}
 * @see {@link DeletePresetCommandInput} for command's `input` shape.
 * @see {@link DeletePresetCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for MediaConvertClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The service can't process your request because of a problem in the request. Please check your request form and syntax.
 *
 * @throws {@link ConflictException} (client fault)
 *  The service couldn't complete your request because there is a conflict with the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  You don't have permissions for this action with the credentials you sent.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  The service encountered an unexpected condition and can't fulfill your request.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The resource you requested doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
 *
 * @throws {@link MediaConvertServiceException}
 * <p>Base exception class for all service exceptions from MediaConvert service.</p>
 *
 *
 * @public
 */
export class DeletePresetCommand extends $Command
  .classBuilder<
    DeletePresetCommandInput,
    DeletePresetCommandOutput,
    MediaConvertClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConvertClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConvert", "DeletePreset", {})
  .n("MediaConvertClient", "DeletePresetCommand")
  .sc(DeletePreset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePresetRequest;
      output: {};
    };
    sdk: {
      input: DeletePresetCommandInput;
      output: DeletePresetCommandOutput;
    };
  };
}
