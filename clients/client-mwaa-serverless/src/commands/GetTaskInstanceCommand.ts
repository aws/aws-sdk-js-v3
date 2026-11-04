// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTaskInstanceRequest, GetTaskInstanceResponse } from "../models/models_0";
import { GetTaskInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTaskInstanceCommand}.
 */
export interface GetTaskInstanceCommandInput extends GetTaskInstanceRequest {}
/**
 * @public
 *
 * The output of {@link GetTaskInstanceCommand}.
 */
export interface GetTaskInstanceCommandOutput extends GetTaskInstanceResponse, __MetadataBearer {}

/**
 * Retrieves detailed information about a specific task instance within a workflow run. Task instances represent individual tasks that are executed as part of a workflow in the Amazon Managed Workflows for Apache Airflow Serverless environment. Each task instance runs in an isolated ECS container with dedicated resources and security boundaries. The service tracks task execution state, retry attempts, and provides detailed timing and error information for troubleshooting and monitoring purposes.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAServerlessClient, GetTaskInstanceCommand } from "@aws-sdk/client-mwaa-serverless"; // ES Modules import
 * // const { MWAAServerlessClient, GetTaskInstanceCommand } = require("@aws-sdk/client-mwaa-serverless"); // CommonJS import
 * // import type { MWAAServerlessClientConfig } from "@aws-sdk/client-mwaa-serverless";
 * const config = {}; // type is MWAAServerlessClientConfig
 * const client = new MWAAServerlessClient(config);
 * const input = { // GetTaskInstanceRequest
 *   WorkflowArn: "STRING_VALUE", // required
 *   TaskInstanceId: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new GetTaskInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetTaskInstanceResponse
 * //   WorkflowArn: "STRING_VALUE", // required
 * //   RunId: "STRING_VALUE", // required
 * //   TaskInstanceId: "STRING_VALUE", // required
 * //   WorkflowVersion: "STRING_VALUE",
 * //   Status: "QUEUED" || "FAILED" || "SCHEDULED" || "RUNNING" || "SUCCESS" || "UP_FOR_RESCHEDULE" || "UP_FOR_RETRY" || "UPSTREAM_FAILED" || "REMOVED" || "RESTARTING" || "DEFERRED" || "NONE" || "CANCELLED" || "TIMEOUT",
 * //   DurationInSeconds: Number("int"),
 * //   OperatorName: "STRING_VALUE",
 * //   ModifiedAt: new Date("TIMESTAMP"),
 * //   EndedAt: new Date("TIMESTAMP"),
 * //   StartedAt: new Date("TIMESTAMP"),
 * //   AttemptNumber: Number("int"),
 * //   ErrorMessage: "STRING_VALUE",
 * //   TaskId: "STRING_VALUE",
 * //   LogStream: "STRING_VALUE",
 * //   Xcom: { // GenericMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTaskInstanceCommandInput - {@link GetTaskInstanceCommandInput}
 * @returns {@link GetTaskInstanceCommandOutput}
 * @see {@link GetTaskInstanceCommandInput} for command's `input` shape.
 * @see {@link GetTaskInstanceCommandOutput} for command's `response` shape.
 * @see {@link MWAAServerlessClientResolvedConfig | config} for MWAAServerlessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected server-side error occurred during request processing.
 *
 * @throws {@link OperationTimeoutException} (server fault)
 *
 * The operation timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found. You can only access or modify a resource that already exists.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because too many requests were made in a short period, exceeding the service rate limits. Amazon Managed Workflows for Apache Airflow Serverless implements throttling controls to ensure fair resource allocation across all customers in the multi-tenant environment. This helps maintain service stability and performance. If you encounter throttling, implement exponential backoff and retry logic in your applications, or consider distributing your API calls over a longer time period.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The specified request parameters are invalid, missing, or inconsistent with Amazon Managed Workflows for Apache Airflow Serverless service requirements. This can occur when workflow definitions contain unsupported operators, when required IAM permissions are missing, when S3 locations are inaccessible, or when network configurations are invalid. The service validates workflow definitions, execution roles, and resource configurations to ensure compatibility with the managed Airflow environment and security requirements.
 *
 * @throws {@link MWAAServerlessServiceException}
 *
 * Base exception class for all service exceptions from MWAAServerless service.
 *
 * @public
 */
export class GetTaskInstanceCommand extends command<GetTaskInstanceCommandInput, GetTaskInstanceCommandOutput>(
  _ep0,
  _mw0,
  "GetTaskInstance",
  GetTaskInstance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTaskInstanceRequest;
      output: GetTaskInstanceResponse;
    };
    sdk: {
      input: GetTaskInstanceCommandInput;
      output: GetTaskInstanceCommandOutput;
    };
  };
}
