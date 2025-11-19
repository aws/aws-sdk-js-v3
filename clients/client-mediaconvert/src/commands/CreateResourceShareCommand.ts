// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { CreateResourceShareRequest, CreateResourceShareResponse } from "../models/models_0";
import { CreateResourceShare } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateResourceShareCommand}.
 */
export interface CreateResourceShareCommandInput extends CreateResourceShareRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceShareCommand}.
 */
export interface CreateResourceShareCommandOutput extends CreateResourceShareResponse, __MetadataBearer {}

/**
 * Create a new resource share request for MediaConvert resources with AWS Support.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, CreateResourceShareCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, CreateResourceShareCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * // import type { MediaConvertClientConfig } from "@aws-sdk/client-mediaconvert";
 * const config = {}; // type is MediaConvertClientConfig
 * const client = new MediaConvertClient(config);
 * const input = { // CreateResourceShareRequest
 *   JobId: "STRING_VALUE", // required
 *   SupportCaseId: "STRING_VALUE", // required
 * };
 * const command = new CreateResourceShareCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateResourceShareCommandInput - {@link CreateResourceShareCommandInput}
 * @returns {@link CreateResourceShareCommandOutput}
 * @see {@link CreateResourceShareCommandInput} for command's `input` shape.
 * @see {@link CreateResourceShareCommandOutput} for command's `response` shape.
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
export class CreateResourceShareCommand extends $Command
  .classBuilder<
    CreateResourceShareCommandInput,
    CreateResourceShareCommandOutput,
    MediaConvertClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConvertClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConvert", "CreateResourceShare", {})
  .n("MediaConvertClient", "CreateResourceShareCommand")
  .sc(CreateResourceShare)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResourceShareRequest;
      output: {};
    };
    sdk: {
      input: CreateResourceShareCommandInput;
      output: CreateResourceShareCommandOutput;
    };
  };
}
