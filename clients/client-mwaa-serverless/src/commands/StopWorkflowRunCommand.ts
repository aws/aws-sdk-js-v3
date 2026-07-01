// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopWorkflowRunRequest, StopWorkflowRunResponse } from "../models/models_0";
import { StopWorkflowRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopWorkflowRunCommand}.
 */
export interface StopWorkflowRunCommandInput extends StopWorkflowRunRequest {}
/**
 * @public
 *
 * The output of {@link StopWorkflowRunCommand}.
 */
export interface StopWorkflowRunCommandOutput extends StopWorkflowRunResponse, __MetadataBearer {}

/**
 * <p>Stops a running workflow execution. This operation terminates all running tasks and prevents new tasks from starting. Amazon Managed Workflows for Apache Airflow Serverless gracefully shuts down the workflow execution by stopping task scheduling and terminating active ECS worker containers. The operation transitions the workflow run to a <code>STOPPING</code> state and then to <code>STOPPED</code> once all cleanup is complete. In-flight tasks may complete or be terminated depending on their current execution state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAServerlessClient, StopWorkflowRunCommand } from "@aws-sdk/client-mwaa-serverless"; // ES Modules import
 * // const { MWAAServerlessClient, StopWorkflowRunCommand } = require("@aws-sdk/client-mwaa-serverless"); // CommonJS import
 * // import type { MWAAServerlessClientConfig } from "@aws-sdk/client-mwaa-serverless";
 * const config = {}; // type is MWAAServerlessClientConfig
 * const client = new MWAAServerlessClient(config);
 * const input = { // StopWorkflowRunRequest
 *   WorkflowArn: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new StopWorkflowRunCommand(input);
 * const response = await client.send(command);
 * // { // StopWorkflowRunResponse
 * //   WorkflowArn: "STRING_VALUE",
 * //   WorkflowVersion: "STRING_VALUE",
 * //   RunId: "STRING_VALUE",
 * //   Status: "STARTING" || "QUEUED" || "RUNNING" || "SUCCESS" || "FAILED" || "TIMEOUT" || "STOPPING" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StopWorkflowRunCommandInput - {@link StopWorkflowRunCommandInput}
 * @returns {@link StopWorkflowRunCommandOutput}
 * @see {@link StopWorkflowRunCommandInput} for command's `input` shape.
 * @see {@link StopWorkflowRunCommandOutput} for command's `response` shape.
 * @see {@link MWAAServerlessClientResolvedConfig | config} for MWAAServerlessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected server-side error occurred during request processing.</p>
 *
 * @throws {@link OperationTimeoutException} (server fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. You can only access or modify a resource that already exists.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because too many requests were made in a short period, exceeding the service rate limits. Amazon Managed Workflows for Apache Airflow Serverless implements throttling controls to ensure fair resource allocation across all customers in the multi-tenant environment. This helps maintain service stability and performance. If you encounter throttling, implement exponential backoff and retry logic in your applications, or consider distributing your API calls over a longer time period.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified request parameters are invalid, missing, or inconsistent with Amazon Managed Workflows for Apache Airflow Serverless service requirements. This can occur when workflow definitions contain unsupported operators, when required IAM permissions are missing, when S3 locations are inaccessible, or when network configurations are invalid. The service validates workflow definitions, execution roles, and resource configurations to ensure compatibility with the managed Airflow environment and security requirements.</p>
 *
 * @throws {@link MWAAServerlessServiceException}
 * <p>Base exception class for all service exceptions from MWAAServerless service.</p>
 *
 *
 * @public
 */
export class StopWorkflowRunCommand extends command<StopWorkflowRunCommandInput, StopWorkflowRunCommandOutput>(
  _ep0,
  _mw0,
  "StopWorkflowRun",
  StopWorkflowRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopWorkflowRunRequest;
      output: StopWorkflowRunResponse;
    };
    sdk: {
      input: StopWorkflowRunCommandInput;
      output: StopWorkflowRunCommandOutput;
    };
  };
}
