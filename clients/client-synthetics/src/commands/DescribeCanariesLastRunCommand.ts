// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeCanariesLastRunRequest, DescribeCanariesLastRunResponse } from "../models/models_0";
import { DescribeCanariesLastRun } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCanariesLastRunCommand}.
 */
export interface DescribeCanariesLastRunCommandInput extends DescribeCanariesLastRunRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCanariesLastRunCommand}.
 */
export interface DescribeCanariesLastRunCommandOutput extends DescribeCanariesLastRunResponse, __MetadataBearer {}

/**
 * <p>Use this operation to see information from the most recent run of each canary that you have created.</p>
 *          <p>This operation supports resource-level authorization using an IAM policy and
 *          the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view
 *          all the canaries that you specify in your request. If you do not have permission to view any of
 *          the canaries, the request fails with a 403 response.</p>
 *          <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an
 *          IAM policy that restricts which canaries that you are allowed to view. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html">
 *             Limiting a user to viewing specific canaries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DescribeCanariesLastRunCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DescribeCanariesLastRunCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * // import type { SyntheticsClientConfig } from "@aws-sdk/client-synthetics";
 * const config = {}; // type is SyntheticsClientConfig
 * const client = new SyntheticsClient(config);
 * const input = { // DescribeCanariesLastRunRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Names: [ // DescribeCanariesLastRunNameFilter
 *     "STRING_VALUE",
 *   ],
 *   BrowserType: "CHROME" || "FIREFOX",
 * };
 * const command = new DescribeCanariesLastRunCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCanariesLastRunResponse
 * //   CanariesLastRun: [ // CanariesLastRun
 * //     { // CanaryLastRun
 * //       CanaryName: "STRING_VALUE",
 * //       LastRun: { // CanaryRun
 * //         Id: "STRING_VALUE",
 * //         ScheduledRunId: "STRING_VALUE",
 * //         RetryAttempt: Number("int"),
 * //         Name: "STRING_VALUE",
 * //         Status: { // CanaryRunStatus
 * //           State: "RUNNING" || "PASSED" || "FAILED",
 * //           StateReason: "STRING_VALUE",
 * //           StateReasonCode: "CANARY_FAILURE" || "EXECUTION_FAILURE",
 * //           TestResult: "PASSED" || "FAILED" || "UNKNOWN",
 * //         },
 * //         Timeline: { // CanaryRunTimeline
 * //           Started: new Date("TIMESTAMP"),
 * //           Completed: new Date("TIMESTAMP"),
 * //           MetricTimestampForRunAndRetries: new Date("TIMESTAMP"),
 * //         },
 * //         ArtifactS3Location: "STRING_VALUE",
 * //         DryRunConfig: { // CanaryDryRunConfigOutput
 * //           DryRunId: "STRING_VALUE",
 * //         },
 * //         BrowserType: "CHROME" || "FIREFOX",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCanariesLastRunCommandInput - {@link DescribeCanariesLastRunCommandInput}
 * @returns {@link DescribeCanariesLastRunCommandOutput}
 * @see {@link DescribeCanariesLastRunCommandInput} for command's `input` shape.
 * @see {@link DescribeCanariesLastRunCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 *
 * @public
 */
export class DescribeCanariesLastRunCommand extends $Command
  .classBuilder<
    DescribeCanariesLastRunCommandInput,
    DescribeCanariesLastRunCommandOutput,
    SyntheticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SyntheticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Synthetics", "DescribeCanariesLastRun", {})
  .n("SyntheticsClient", "DescribeCanariesLastRunCommand")
  .sc(DescribeCanariesLastRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCanariesLastRunRequest;
      output: DescribeCanariesLastRunResponse;
    };
    sdk: {
      input: DescribeCanariesLastRunCommandInput;
      output: DescribeCanariesLastRunCommandOutput;
    };
  };
}
