// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeCanariesLastRunRequest, DescribeCanariesLastRunResponse } from "../models/models_0";
import { DescribeCanariesLastRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Use this operation to see information from the most recent run of each canary that you have created.
 *
 * This operation supports resource-level authorization using an IAM policy and the `Names` parameter. If you specify the `Names` parameter, the operation is successful only if you have authorization to view all the canaries that you specify in your request. If you do not have permission to view any of the canaries, the request fails with a 403 response.
 *
 * You are required to use the `Names` parameter if you are logged on to a user or role that has an IAM policy that restricts which canaries that you are allowed to view. For more information, see [Limiting a user to viewing specific canaries](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html).
 *
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
 * //         Location: "STRING_VALUE",
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
 *
 * An unknown internal error occurred.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A parameter could not be validated.
 *
 * @throws {@link SyntheticsServiceException}
 *
 * Base exception class for all service exceptions from Synthetics service.
 *
 * @public
 */
export class DescribeCanariesLastRunCommand extends command<DescribeCanariesLastRunCommandInput, DescribeCanariesLastRunCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCanariesLastRun",
  DescribeCanariesLastRun$
) {
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
