// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorkflowRunsRequest, ListWorkflowRunsResponse } from "../models/models_0";
import { MWAAServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAServerlessClient";
import { ListWorkflowRuns } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkflowRunsCommand}.
 */
export interface ListWorkflowRunsCommandInput extends ListWorkflowRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowRunsCommand}.
 */
export interface ListWorkflowRunsCommandOutput extends ListWorkflowRunsResponse, __MetadataBearer {}

/**
 * <p>Lists all runs for a specified workflow, with optional pagination and filtering support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAServerlessClient, ListWorkflowRunsCommand } from "@aws-sdk/client-mwaa-serverless"; // ES Modules import
 * // const { MWAAServerlessClient, ListWorkflowRunsCommand } = require("@aws-sdk/client-mwaa-serverless"); // CommonJS import
 * // import type { MWAAServerlessClientConfig } from "@aws-sdk/client-mwaa-serverless";
 * const config = {}; // type is MWAAServerlessClientConfig
 * const client = new MWAAServerlessClient(config);
 * const input = { // ListWorkflowRunsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   WorkflowArn: "STRING_VALUE", // required
 *   WorkflowVersion: "STRING_VALUE",
 * };
 * const command = new ListWorkflowRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowRunsResponse
 * //   WorkflowRuns: [ // WorkflowRunSummaries
 * //     { // WorkflowRunSummary
 * //       RunId: "STRING_VALUE",
 * //       WorkflowArn: "STRING_VALUE",
 * //       WorkflowVersion: "STRING_VALUE",
 * //       RunType: "ON_DEMAND" || "SCHEDULED",
 * //       RunDetailSummary: { // RunDetailSummary
 * //         Status: "STARTING" || "QUEUED" || "RUNNING" || "SUCCESS" || "FAILED" || "TIMEOUT" || "STOPPING" || "STOPPED",
 * //         CreatedOn: new Date("TIMESTAMP"),
 * //         StartedAt: new Date("TIMESTAMP"),
 * //         EndedAt: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkflowRunsCommandInput - {@link ListWorkflowRunsCommandInput}
 * @returns {@link ListWorkflowRunsCommandOutput}
 * @see {@link ListWorkflowRunsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowRunsCommandOutput} for command's `response` shape.
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
export class ListWorkflowRunsCommand extends $Command
  .classBuilder<
    ListWorkflowRunsCommandInput,
    ListWorkflowRunsCommandOutput,
    MWAAServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MWAAServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMWAAServerless", "ListWorkflowRuns", {})
  .n("MWAAServerlessClient", "ListWorkflowRunsCommand")
  .sc(ListWorkflowRuns)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkflowRunsRequest;
      output: ListWorkflowRunsResponse;
    };
    sdk: {
      input: ListWorkflowRunsCommandInput;
      output: ListWorkflowRunsCommandOutput;
    };
  };
}
