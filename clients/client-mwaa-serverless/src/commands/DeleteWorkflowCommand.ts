// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteWorkflowRequest, DeleteWorkflowResponse } from "../models/models_0";
import type {
  MWAAServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MWAAServerlessClient";
import { DeleteWorkflow } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWorkflowCommand}.
 */
export interface DeleteWorkflowCommandInput extends DeleteWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWorkflowCommand}.
 */
export interface DeleteWorkflowCommandOutput extends DeleteWorkflowResponse, __MetadataBearer {}

/**
 * <p>Deletes a workflow and all its versions. This operation permanently removes the workflow and cannot be undone. Amazon Managed Workflows for Apache Airflow Serverless ensures that all associated resources are properly cleaned up, including stopping any running executions, removing scheduled triggers, and cleaning up execution history. The deletion process respects the multi-tenant isolation boundaries and ensures that no residual data or configurations remain that could affect other customers or workflows.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAServerlessClient, DeleteWorkflowCommand } from "@aws-sdk/client-mwaa-serverless"; // ES Modules import
 * // const { MWAAServerlessClient, DeleteWorkflowCommand } = require("@aws-sdk/client-mwaa-serverless"); // CommonJS import
 * // import type { MWAAServerlessClientConfig } from "@aws-sdk/client-mwaa-serverless";
 * const config = {}; // type is MWAAServerlessClientConfig
 * const client = new MWAAServerlessClient(config);
 * const input = { // DeleteWorkflowRequest
 *   WorkflowArn: "STRING_VALUE", // required
 *   WorkflowVersion: "STRING_VALUE",
 * };
 * const command = new DeleteWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // DeleteWorkflowResponse
 * //   WorkflowArn: "STRING_VALUE", // required
 * //   WorkflowVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteWorkflowCommandInput - {@link DeleteWorkflowCommandInput}
 * @returns {@link DeleteWorkflowCommandOutput}
 * @see {@link DeleteWorkflowCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkflowCommandOutput} for command's `response` shape.
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
export class DeleteWorkflowCommand extends $Command
  .classBuilder<
    DeleteWorkflowCommandInput,
    DeleteWorkflowCommandOutput,
    MWAAServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MWAAServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMWAAServerless", "DeleteWorkflow", {})
  .n("MWAAServerlessClient", "DeleteWorkflowCommand")
  .sc(DeleteWorkflow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWorkflowRequest;
      output: DeleteWorkflowResponse;
    };
    sdk: {
      input: DeleteWorkflowCommandInput;
      output: DeleteWorkflowCommandOutput;
    };
  };
}
