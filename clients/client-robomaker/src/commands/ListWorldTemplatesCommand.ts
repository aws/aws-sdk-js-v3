// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorldTemplatesRequest, ListWorldTemplatesResponse } from "../models/models_0";
import { de_ListWorldTemplatesCommand, se_ListWorldTemplatesCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorldTemplatesCommand}.
 */
export interface ListWorldTemplatesCommandInput extends ListWorldTemplatesRequest {}
/**
 * @public
 *
 * The output of {@link ListWorldTemplatesCommand}.
 */
export interface ListWorldTemplatesCommandOutput extends ListWorldTemplatesResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>End of support notice: On September 10, 2025, Amazon Web Services
 *          will discontinue support for Amazon Web Services RoboMaker. After September 10, 2025, you will
 *          no longer be able to access the Amazon Web Services RoboMaker console or Amazon Web Services RoboMaker resources.
 *          For more information on transitioning to Batch to help run containerized
 *          simulations, visit <a href="https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/">https://aws.amazon.com/blogs/hpc/run-simulations-using-multiple-containers-in-a-single-aws-batch-job/</a>.
 *       </p>
 *          </important>
 *          <p>Lists world templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListWorldTemplatesCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListWorldTemplatesCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // ListWorldTemplatesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListWorldTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListWorldTemplatesResponse
 * //   templateSummaries: [ // TemplateSummaries
 * //     { // TemplateSummary
 * //       arn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       name: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorldTemplatesCommandInput - {@link ListWorldTemplatesCommandInput}
 * @returns {@link ListWorldTemplatesCommandOutput}
 * @see {@link ListWorldTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListWorldTemplatesCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
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
export class ListWorldTemplatesCommand extends $Command
  .classBuilder<
    ListWorldTemplatesCommandInput,
    ListWorldTemplatesCommandOutput,
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
  .s("robomaker", "ListWorldTemplates", {})
  .n("RoboMakerClient", "ListWorldTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_ListWorldTemplatesCommand)
  .de(de_ListWorldTemplatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorldTemplatesRequest;
      output: ListWorldTemplatesResponse;
    };
    sdk: {
      input: ListWorldTemplatesCommandInput;
      output: ListWorldTemplatesCommandOutput;
    };
  };
}
