// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { DeletePolicyRequest, DeletePolicyResponse } from "../models/models_0";
import { DeletePolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePolicyCommand}.
 */
export interface DeletePolicyCommandInput extends DeletePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeletePolicyCommand}.
 */
export interface DeletePolicyCommandOutput extends DeletePolicyResponse, __MetadataBearer {}

/**
 * Permanently delete a policy that you created.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, DeletePolicyCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, DeletePolicyCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * // import type { MediaConvertClientConfig } from "@aws-sdk/client-mediaconvert";
 * const config = {}; // type is MediaConvertClientConfig
 * const client = new MediaConvertClient(config);
 * const input = {};
 * const command = new DeletePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePolicyCommandInput - {@link DeletePolicyCommandInput}
 * @returns {@link DeletePolicyCommandOutput}
 * @see {@link DeletePolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  You attempted to create more resources than the service allows based on service quotas.
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
export class DeletePolicyCommand extends $Command
  .classBuilder<
    DeletePolicyCommandInput,
    DeletePolicyCommandOutput,
    MediaConvertClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConvertClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConvert", "DeletePolicy", {})
  .n("MediaConvertClient", "DeletePolicyCommand")
  .sc(DeletePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DeletePolicyCommandInput;
      output: DeletePolicyCommandOutput;
    };
  };
}
