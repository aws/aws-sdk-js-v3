// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCodeCoveragesInput, DescribeCodeCoveragesOutput } from "../models/models_0";
import { de_DescribeCodeCoveragesCommand, se_DescribeCodeCoveragesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCodeCoveragesCommand}.
 */
export interface DescribeCodeCoveragesCommandInput extends DescribeCodeCoveragesInput {}
/**
 * @public
 *
 * The output of {@link DescribeCodeCoveragesCommand}.
 */
export interface DescribeCodeCoveragesCommandOutput extends DescribeCodeCoveragesOutput, __MetadataBearer {}

/**
 * <p>Retrieves one or more code coverage reports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DescribeCodeCoveragesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DescribeCodeCoveragesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // DescribeCodeCoveragesInput
 *   reportArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   sortBy: "LINE_COVERAGE_PERCENTAGE" || "FILE_PATH",
 *   minLineCoveragePercentage: Number("double"),
 *   maxLineCoveragePercentage: Number("double"),
 * };
 * const command = new DescribeCodeCoveragesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCodeCoveragesOutput
 * //   nextToken: "STRING_VALUE",
 * //   codeCoverages: [ // CodeCoverages
 * //     { // CodeCoverage
 * //       id: "STRING_VALUE",
 * //       reportARN: "STRING_VALUE",
 * //       filePath: "STRING_VALUE",
 * //       lineCoveragePercentage: Number("double"),
 * //       linesCovered: Number("int"),
 * //       linesMissed: Number("int"),
 * //       branchCoveragePercentage: Number("double"),
 * //       branchesCovered: Number("int"),
 * //       branchesMissed: Number("int"),
 * //       expired: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCodeCoveragesCommandInput - {@link DescribeCodeCoveragesCommandInput}
 * @returns {@link DescribeCodeCoveragesCommandOutput}
 * @see {@link DescribeCodeCoveragesCommandInput} for command's `input` shape.
 * @see {@link DescribeCodeCoveragesCommandOutput} for command's `response` shape.
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
export class DescribeCodeCoveragesCommand extends $Command
  .classBuilder<
    DescribeCodeCoveragesCommandInput,
    DescribeCodeCoveragesCommandOutput,
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
  .s("CodeBuild_20161006", "DescribeCodeCoverages", {})
  .n("CodeBuildClient", "DescribeCodeCoveragesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCodeCoveragesCommand)
  .de(de_DescribeCodeCoveragesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCodeCoveragesInput;
      output: DescribeCodeCoveragesOutput;
    };
    sdk: {
      input: DescribeCodeCoveragesCommandInput;
      output: DescribeCodeCoveragesCommandOutput;
    };
  };
}
