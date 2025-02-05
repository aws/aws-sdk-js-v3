// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetJobBookmarkRequest, GetJobBookmarkResponse } from "../models/models_2";
import { de_GetJobBookmarkCommand, se_GetJobBookmarkCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJobBookmarkCommand}.
 */
export interface GetJobBookmarkCommandInput extends GetJobBookmarkRequest {}
/**
 * @public
 *
 * The output of {@link GetJobBookmarkCommand}.
 */
export interface GetJobBookmarkCommandOutput extends GetJobBookmarkResponse, __MetadataBearer {}

/**
 * <p>Returns information on a job bookmark entry.</p>
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
 * import { GlueClient, GetJobBookmarkCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobBookmarkCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlueClient(config);
 * const input = { // GetJobBookmarkRequest
 *   JobName: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE",
 * };
 * const command = new GetJobBookmarkCommand(input);
 * const response = await client.send(command);
 * // { // GetJobBookmarkResponse
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
 * @param GetJobBookmarkCommandInput - {@link GetJobBookmarkCommandInput}
 * @returns {@link GetJobBookmarkCommandOutput}
 * @see {@link GetJobBookmarkCommandInput} for command's `input` shape.
 * @see {@link GetJobBookmarkCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class GetJobBookmarkCommand extends $Command
  .classBuilder<
    GetJobBookmarkCommandInput,
    GetJobBookmarkCommandOutput,
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
  .s("AWSGlue", "GetJobBookmark", {})
  .n("GlueClient", "GetJobBookmarkCommand")
  .f(void 0, void 0)
  .ser(se_GetJobBookmarkCommand)
  .de(de_GetJobBookmarkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJobBookmarkRequest;
      output: GetJobBookmarkResponse;
    };
    sdk: {
      input: GetJobBookmarkCommandInput;
      output: GetJobBookmarkCommandOutput;
    };
  };
}
