// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartRunRequest, StartRunResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { StartRun } from "../schemas/schemas_5_Workflow";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartRunCommand}.
 */
export interface StartRunCommandInput extends StartRunRequest {}
/**
 * @public
 *
 * The output of {@link StartRunCommand}.
 */
export interface StartRunCommandOutput extends StartRunResponse, __MetadataBearer {}

/**
 * <p>Starts a new run and returns details about the run, or duplicates an existing run. A run is a single invocation of a workflow. If you provide request IDs, Amazon Web Services HealthOmics identifies duplicate requests and starts the run only once. Monitor the progress of the run by calling the <code>GetRun</code> API operation.</p> <p>To start a new run, the following inputs are required:</p> <ul> <li> <p>A service role ARN (<code>roleArn</code>).</p> </li> <li> <p>The run's workflow ID (<code>workflowId</code>, not the <code>uuid</code> or <code>runId</code>).</p> </li> <li> <p>An Amazon S3 location (<code>outputUri</code>) where the run outputs will be saved.</p> </li> <li> <p>All required workflow parameters (<code>parameter</code>), which can include optional parameters from the parameter template. The run cannot include any parameters that are not defined in the parameter template. To see all possible parameters, use the <code>GetRun</code> API operation. </p> </li> <li> <p>For runs with a <code>STATIC</code> (default) storage type, specify the required storage capacity (in gibibytes). A storage capacity value is not required for runs that use <code>DYNAMIC</code> storage.</p> </li> </ul> <p> <code>StartRun</code> can also duplicate an existing run using the run's default values. You can modify these default values and/or add other optional inputs. To duplicate a run, the following inputs are required:</p> <ul> <li> <p>A service role ARN (<code>roleArn</code>).</p> </li> <li> <p>The ID of the run to duplicate (<code>runId</code>).</p> </li> <li> <p>An Amazon S3 location where the run outputs will be saved (<code>outputUri</code>).</p> </li> </ul> <p>To learn more about the optional parameters for <code>StartRun</code>, see <a href="https://docs.aws.amazon.com/omics/latest/dev/starting-a-run.html">Starting a run</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p> <p>Use the <code>retentionMode</code> input to control how long the metadata for each run is stored in CloudWatch. There are two retention modes:</p> <ul> <li> <p>Specify <code>REMOVE</code> to automatically remove the oldest runs when you reach the maximum service retention limit for runs. It is recommended that you use the <code>REMOVE</code> mode to initiate major run requests so that your runs do not fail when you reach the limit.</p> </li> <li> <p>The <code>retentionMode</code> is set to the <code>RETAIN</code> mode by default, which allows you to manually remove runs after reaching the maximum service retention limit. Under this setting, you cannot create additional runs until you remove the excess runs.</p> </li> </ul> <p>To learn more about the retention modes, see <a href="https://docs.aws.amazon.com/omics/latest/dev/run-retention.html">Run retention mode</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, StartRunCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, StartRunCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // StartRunRequest
 *   workflowId: "STRING_VALUE",
 *   workflowType: "STRING_VALUE",
 *   runId: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   cacheId: "STRING_VALUE",
 *   cacheBehavior: "STRING_VALUE",
 *   runGroupId: "STRING_VALUE",
 *   priority: Number("int"),
 *   parameters: "DOCUMENT_VALUE",
 *   storageCapacity: Number("int"),
 *   outputUri: "STRING_VALUE", // required
 *   logLevel: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   requestId: "STRING_VALUE", // required
 *   retentionMode: "STRING_VALUE",
 *   storageType: "STRING_VALUE",
 *   workflowOwnerId: "STRING_VALUE",
 *   workflowVersionName: "STRING_VALUE",
 * };
 * const command = new StartRunCommand(input);
 * const response = await client.send(command);
 * // { // StartRunResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   uuid: "STRING_VALUE",
 * //   runOutputUri: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartRunCommandInput - {@link StartRunCommandInput}
 * @returns {@link StartRunCommandOutput}
 * @see {@link StartRunCommandInput} for command's `input` shape.
 * @see {@link StartRunCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class StartRunCommand extends $Command
  .classBuilder<
    StartRunCommandInput,
    StartRunCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "StartRun", {})
  .n("OmicsClient", "StartRunCommand")
  .sc(StartRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartRunRequest;
      output: StartRunResponse;
    };
    sdk: {
      input: StartRunCommandInput;
      output: StartRunCommandOutput;
    };
  };
}
