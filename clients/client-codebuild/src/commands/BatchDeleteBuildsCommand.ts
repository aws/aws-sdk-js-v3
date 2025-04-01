// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteBuildsInput, BatchDeleteBuildsOutput } from "../models/models_0";
import { de_BatchDeleteBuildsCommand, se_BatchDeleteBuildsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteBuildsCommand}.
 */
export interface BatchDeleteBuildsCommandInput extends BatchDeleteBuildsInput {}
/**
 * @public
 *
 * The output of {@link BatchDeleteBuildsCommand}.
 */
export interface BatchDeleteBuildsCommandOutput extends BatchDeleteBuildsOutput, __MetadataBearer {}

/**
 * <p>Deletes one or more builds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchDeleteBuildsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchDeleteBuildsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = { // BatchDeleteBuildsInput
 *   ids: [ // BuildIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteBuildsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteBuildsOutput
 * //   buildsDeleted: [ // BuildIds
 * //     "STRING_VALUE",
 * //   ],
 * //   buildsNotDeleted: [ // BuildsNotDeleted
 * //     { // BuildNotDeleted
 * //       id: "STRING_VALUE",
 * //       statusCode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteBuildsCommandInput - {@link BatchDeleteBuildsCommandInput}
 * @returns {@link BatchDeleteBuildsCommandOutput}
 * @see {@link BatchDeleteBuildsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteBuildsCommandOutput} for command's `response` shape.
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
export class BatchDeleteBuildsCommand extends $Command
  .classBuilder<
    BatchDeleteBuildsCommandInput,
    BatchDeleteBuildsCommandOutput,
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
  .s("CodeBuild_20161006", "BatchDeleteBuilds", {})
  .n("CodeBuildClient", "BatchDeleteBuildsCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteBuildsCommand)
  .de(de_BatchDeleteBuildsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteBuildsInput;
      output: BatchDeleteBuildsOutput;
    };
    sdk: {
      input: BatchDeleteBuildsCommandInput;
      output: BatchDeleteBuildsCommandOutput;
    };
  };
}
