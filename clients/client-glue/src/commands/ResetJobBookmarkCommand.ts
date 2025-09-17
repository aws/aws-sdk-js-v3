// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ResetJobBookmarkRequest, ResetJobBookmarkResponse } from "../models/models_3";
import { de_ResetJobBookmarkCommand, se_ResetJobBookmarkCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetJobBookmarkCommand}.
 */
export interface ResetJobBookmarkCommandInput extends ResetJobBookmarkRequest {}
/**
 * @public
 *
 * The output of {@link ResetJobBookmarkCommand}.
 */
export interface ResetJobBookmarkCommandOutput extends ResetJobBookmarkResponse, __MetadataBearer {}

/**
 * <p>Resets a bookmark entry.</p>
 *          <p>For more information about enabling and using job bookmarks, see:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html">Tracking processed data using job bookmarks</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Job parameters used by Glue</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job">Job structure</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ResetJobBookmarkCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ResetJobBookmarkCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ResetJobBookmarkRequest
 *   JobName: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE",
 * };
 * const command = new ResetJobBookmarkCommand(input);
 * const response = await client.send(command);
 * // { // ResetJobBookmarkResponse
 * //   JobBookmarkEntry: { // JobBookmarkEntry
 * //     JobName: "STRING_VALUE",
 * //     Version: Number("int"),
 * //     Run: Number("int"),
 * //     Attempt: Number("int"),
 * //     PreviousRunId: "STRING_VALUE",
 * //     RunId: "STRING_VALUE",
 * //     JobBookmark: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ResetJobBookmarkCommandInput - {@link ResetJobBookmarkCommandInput}
 * @returns {@link ResetJobBookmarkCommandOutput}
 * @see {@link ResetJobBookmarkCommandInput} for command's `input` shape.
 * @see {@link ResetJobBookmarkCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class ResetJobBookmarkCommand extends $Command
  .classBuilder<
    ResetJobBookmarkCommandInput,
    ResetJobBookmarkCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "ResetJobBookmark", {})
  .n("GlueClient", "ResetJobBookmarkCommand")
  .f(void 0, void 0)
  .ser(se_ResetJobBookmarkCommand)
  .de(de_ResetJobBookmarkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetJobBookmarkRequest;
      output: ResetJobBookmarkResponse;
    };
    sdk: {
      input: ResetJobBookmarkCommandInput;
      output: ResetJobBookmarkCommandOutput;
    };
  };
}
