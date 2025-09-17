// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { DeleteJobTemplateRequest, DeleteJobTemplateResponse } from "../models/models_2";
import { de_DeleteJobTemplateCommand, se_DeleteJobTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteJobTemplateCommand}.
 */
export interface DeleteJobTemplateCommandInput extends DeleteJobTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteJobTemplateCommand}.
 */
export interface DeleteJobTemplateCommandOutput extends DeleteJobTemplateResponse, __MetadataBearer {}

/**
 * Permanently delete a job template you have created.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, DeleteJobTemplateCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, DeleteJobTemplateCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * // import type { MediaConvertClientConfig } from "@aws-sdk/client-mediaconvert";
 * const config = {}; // type is MediaConvertClientConfig
 * const client = new MediaConvertClient(config);
 * const input = { // DeleteJobTemplateRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteJobTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteJobTemplateCommandInput - {@link DeleteJobTemplateCommandInput}
 * @returns {@link DeleteJobTemplateCommandOutput}
 * @see {@link DeleteJobTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteJobTemplateCommandOutput} for command's `response` shape.
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
export class DeleteJobTemplateCommand extends $Command
  .classBuilder<
    DeleteJobTemplateCommandInput,
    DeleteJobTemplateCommandOutput,
    MediaConvertClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConvertClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConvert", "DeleteJobTemplate", {})
  .n("MediaConvertClient", "DeleteJobTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteJobTemplateCommand)
  .de(de_DeleteJobTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteJobTemplateRequest;
      output: {};
    };
    sdk: {
      input: DeleteJobTemplateCommandInput;
      output: DeleteJobTemplateCommandOutput;
    };
  };
}
