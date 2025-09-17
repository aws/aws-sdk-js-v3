// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeMapRunInput, DescribeMapRunOutput } from "../models/models_0";
import { de_DescribeMapRunCommand, se_DescribeMapRunCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMapRunCommand}.
 */
export interface DescribeMapRunCommandInput extends DescribeMapRunInput {}
/**
 * @public
 *
 * The output of {@link DescribeMapRunCommand}.
 */
export interface DescribeMapRunCommandOutput extends DescribeMapRunOutput, __MetadataBearer {}

/**
 * <p>Provides information about a Map Run's configuration, progress, and results. If you've <a href="https://docs.aws.amazon.com/step-functions/latest/dg/redrive-map-run.html">redriven</a> a Map Run, this API action also returns information about the redrives of that Map Run. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-examine-map-run.html">Examining Map Run</a> in the <i>Step Functions Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeMapRunCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeMapRunCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // DescribeMapRunInput
 *   mapRunArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeMapRunCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMapRunOutput
 * //   mapRunArn: "STRING_VALUE", // required
 * //   executionArn: "STRING_VALUE", // required
 * //   status: "RUNNING" || "SUCCEEDED" || "FAILED" || "ABORTED", // required
 * //   startDate: new Date("TIMESTAMP"), // required
 * //   stopDate: new Date("TIMESTAMP"),
 * //   maxConcurrency: Number("int"), // required
 * //   toleratedFailurePercentage: Number("float"), // required
 * //   toleratedFailureCount: Number("long"), // required
 * //   itemCounts: { // MapRunItemCounts
 * //     pending: Number("long"), // required
 * //     running: Number("long"), // required
 * //     succeeded: Number("long"), // required
 * //     failed: Number("long"), // required
 * //     timedOut: Number("long"), // required
 * //     aborted: Number("long"), // required
 * //     total: Number("long"), // required
 * //     resultsWritten: Number("long"), // required
 * //     failuresNotRedrivable: Number("long"),
 * //     pendingRedrive: Number("long"),
 * //   },
 * //   executionCounts: { // MapRunExecutionCounts
 * //     pending: Number("long"), // required
 * //     running: Number("long"), // required
 * //     succeeded: Number("long"), // required
 * //     failed: Number("long"), // required
 * //     timedOut: Number("long"), // required
 * //     aborted: Number("long"), // required
 * //     total: Number("long"), // required
 * //     resultsWritten: Number("long"), // required
 * //     failuresNotRedrivable: Number("long"),
 * //     pendingRedrive: Number("long"),
 * //   },
 * //   redriveCount: Number("int"),
 * //   redriveDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeMapRunCommandInput - {@link DescribeMapRunCommandInput}
 * @returns {@link DescribeMapRunCommandOutput}
 * @see {@link DescribeMapRunCommandInput} for command's `input` shape.
 * @see {@link DescribeMapRunCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Could not find the referenced resource.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 *
 * @public
 */
export class DescribeMapRunCommand extends $Command
  .classBuilder<
    DescribeMapRunCommandInput,
    DescribeMapRunCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStepFunctions", "DescribeMapRun", {})
  .n("SFNClient", "DescribeMapRunCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMapRunCommand)
  .de(de_DescribeMapRunCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMapRunInput;
      output: DescribeMapRunOutput;
    };
    sdk: {
      input: DescribeMapRunCommandInput;
      output: DescribeMapRunCommandOutput;
    };
  };
}
