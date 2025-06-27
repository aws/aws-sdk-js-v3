// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBuildBatchesInput, ListBuildBatchesOutput } from "../models/models_0";
import { de_ListBuildBatchesCommand, se_ListBuildBatchesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBuildBatchesCommand}.
 */
export interface ListBuildBatchesCommandInput extends ListBuildBatchesInput {}
/**
 * @public
 *
 * The output of {@link ListBuildBatchesCommand}.
 */
export interface ListBuildBatchesCommandOutput extends ListBuildBatchesOutput, __MetadataBearer {}

/**
 * <p>Retrieves the identifiers of your build batches in the current region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListBuildBatchesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListBuildBatchesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // ListBuildBatchesInput
 *   filter: { // BuildBatchFilter
 *     status: "SUCCEEDED" || "FAILED" || "FAULT" || "TIMED_OUT" || "IN_PROGRESS" || "STOPPED",
 *   },
 *   maxResults: Number("int"),
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBuildBatchesCommand(input);
 * const response = await client.send(command);
 * // { // ListBuildBatchesOutput
 * //   ids: [ // BuildBatchIds
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBuildBatchesCommandInput - {@link ListBuildBatchesCommandInput}
 * @returns {@link ListBuildBatchesCommandOutput}
 * @see {@link ListBuildBatchesCommandInput} for command's `input` shape.
 * @see {@link ListBuildBatchesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class ListBuildBatchesCommand extends $Command
  .classBuilder<
    ListBuildBatchesCommandInput,
    ListBuildBatchesCommandOutput,
    CodeBuildClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeBuildClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeBuild_20161006", "ListBuildBatches", {})
  .n("CodeBuildClient", "ListBuildBatchesCommand")
  .f(void 0, void 0)
  .ser(se_ListBuildBatchesCommand)
  .de(de_ListBuildBatchesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBuildBatchesInput;
      output: ListBuildBatchesOutput;
    };
    sdk: {
      input: ListBuildBatchesCommandInput;
      output: ListBuildBatchesCommandOutput;
    };
  };
}
