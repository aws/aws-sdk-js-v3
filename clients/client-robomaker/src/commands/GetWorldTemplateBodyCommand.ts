// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetWorldTemplateBodyRequest, GetWorldTemplateBodyResponse } from "../models/models_0";
import { de_GetWorldTemplateBodyCommand, se_GetWorldTemplateBodyCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorldTemplateBodyCommand}.
 */
export interface GetWorldTemplateBodyCommandInput extends GetWorldTemplateBodyRequest {}
/**
 * @public
 *
 * The output of {@link GetWorldTemplateBodyCommand}.
 */
export interface GetWorldTemplateBodyCommandOutput extends GetWorldTemplateBodyResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>End of support notice: On September 10, 2025, Amazon Web Services
 *          will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will
 *          no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources.
 *          For more information on transitioning to Batch to help run containerized
 *          simulations, visit <a href="https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/">https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/</a>.
 *       </p>
 *          </important>
 *          <p>Gets the world template body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, GetWorldTemplateBodyCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, GetWorldTemplateBodyCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * // import type { RoboMakerClientConfig } from "@aws-sdk/client-robomaker";
 * const config = {}; // type is RoboMakerClientConfig
 * const client = new RoboMakerClient(config);
 * const input = { // GetWorldTemplateBodyRequest
 *   template: "STRING_VALUE",
 *   generationJob: "STRING_VALUE",
 * };
 * const command = new GetWorldTemplateBodyCommand(input);
 * const response = await client.send(command);
 * // { // GetWorldTemplateBodyResponse
 * //   templateBody: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWorldTemplateBodyCommandInput - {@link GetWorldTemplateBodyCommandInput}
 * @returns {@link GetWorldTemplateBodyCommandOutput}
 * @see {@link GetWorldTemplateBodyCommandInput} for command's `input` shape.
 * @see {@link GetWorldTemplateBodyCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 *
 * @public
 */
export class GetWorldTemplateBodyCommand extends $Command
  .classBuilder<
    GetWorldTemplateBodyCommandInput,
    GetWorldTemplateBodyCommandOutput,
    RoboMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RoboMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("robomaker", "GetWorldTemplateBody", {})
  .n("RoboMakerClient", "GetWorldTemplateBodyCommand")
  .f(void 0, void 0)
  .ser(se_GetWorldTemplateBodyCommand)
  .de(de_GetWorldTemplateBodyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorldTemplateBodyRequest;
      output: GetWorldTemplateBodyResponse;
    };
    sdk: {
      input: GetWorldTemplateBodyCommandInput;
      output: GetWorldTemplateBodyCommandOutput;
    };
  };
}
