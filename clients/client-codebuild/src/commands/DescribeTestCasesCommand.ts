// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTestCasesInput, DescribeTestCasesOutput } from "../models/models_0";
import { DescribeTestCases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTestCasesCommand}.
 */
export interface DescribeTestCasesCommandInput extends DescribeTestCasesInput {}
/**
 * @public
 *
 * The output of {@link DescribeTestCasesCommand}.
 */
export interface DescribeTestCasesCommandOutput extends DescribeTestCasesOutput, __MetadataBearer {}

/**
 * <p>
 *       Returns a list of details about test cases for a report.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, DescribeTestCasesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, DescribeTestCasesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * // import type { CodeBuildClientConfig } from "@aws-sdk/client-codebuild";
 * const config = {}; // type is CodeBuildClientConfig
 * const client = new CodeBuildClient(config);
 * const input = { // DescribeTestCasesInput
 *   reportArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filter: { // TestCaseFilter
 *     status: "STRING_VALUE",
 *     keyword: "STRING_VALUE",
 *   },
 * };
 * const command = new DescribeTestCasesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTestCasesOutput
 * //   nextToken: "STRING_VALUE",
 * //   testCases: [ // TestCases
 * //     { // TestCase
 * //       reportArn: "STRING_VALUE",
 * //       testRawDataPath: "STRING_VALUE",
 * //       prefix: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       durationInNanoSeconds: Number("long"),
 * //       message: "STRING_VALUE",
 * //       expired: new Date("TIMESTAMP"),
 * //       testSuiteName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTestCasesCommandInput - {@link DescribeTestCasesCommandInput}
 * @returns {@link DescribeTestCasesCommandOutput}
 * @see {@link DescribeTestCasesCommandInput} for command's `input` shape.
 * @see {@link DescribeTestCasesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Web Services resource cannot be found.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 *
 * @public
 */
export class DescribeTestCasesCommand extends command<DescribeTestCasesCommandInput, DescribeTestCasesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTestCases",
  DescribeTestCases$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTestCasesInput;
      output: DescribeTestCasesOutput;
    };
    sdk: {
      input: DescribeTestCasesCommandInput;
      output: DescribeTestCasesCommandOutput;
    };
  };
}
