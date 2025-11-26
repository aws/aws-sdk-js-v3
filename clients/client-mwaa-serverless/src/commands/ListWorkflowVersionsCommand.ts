// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListWorkflowVersionsRequest, ListWorkflowVersionsResponse } from "../models/models_0";
import type {
  MWAAServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MWAAServerlessClient";
import { ListWorkflowVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkflowVersionsCommand}.
 */
export interface ListWorkflowVersionsCommandInput extends ListWorkflowVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowVersionsCommand}.
 */
export interface ListWorkflowVersionsCommandOutput extends ListWorkflowVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists all versions of a specified workflow, with optional pagination support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAServerlessClient, ListWorkflowVersionsCommand } from "@aws-sdk/client-mwaa-serverless"; // ES Modules import
 * // const { MWAAServerlessClient, ListWorkflowVersionsCommand } = require("@aws-sdk/client-mwaa-serverless"); // CommonJS import
 * // import type { MWAAServerlessClientConfig } from "@aws-sdk/client-mwaa-serverless";
 * const config = {}; // type is MWAAServerlessClientConfig
 * const client = new MWAAServerlessClient(config);
 * const input = { // ListWorkflowVersionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   WorkflowArn: "STRING_VALUE", // required
 * };
 * const command = new ListWorkflowVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowVersionsResponse
 * //   WorkflowVersions: [ // WorkflowVersionSummaries
 * //     { // WorkflowVersionSummary
 * //       WorkflowVersion: "STRING_VALUE", // required
 * //       WorkflowArn: "STRING_VALUE", // required
 * //       IsLatestVersion: true || false,
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       ModifiedAt: new Date("TIMESTAMP"),
 * //       DefinitionS3Location: { // DefinitionS3Location
 * //         Bucket: "STRING_VALUE", // required
 * //         ObjectKey: "STRING_VALUE", // required
 * //         VersionId: "STRING_VALUE",
 * //       },
 * //       ScheduleConfiguration: { // ScheduleConfiguration
 * //         CronExpression: "STRING_VALUE",
 * //       },
 * //       TriggerMode: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkflowVersionsCommandInput - {@link ListWorkflowVersionsCommandInput}
 * @returns {@link ListWorkflowVersionsCommandOutput}
 * @see {@link ListWorkflowVersionsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowVersionsCommandOutput} for command's `response` shape.
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
export class ListWorkflowVersionsCommand extends $Command
  .classBuilder<
    ListWorkflowVersionsCommandInput,
    ListWorkflowVersionsCommandOutput,
    MWAAServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MWAAServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMWAAServerless", "ListWorkflowVersions", {})
  .n("MWAAServerlessClient", "ListWorkflowVersionsCommand")
  .sc(ListWorkflowVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkflowVersionsRequest;
      output: ListWorkflowVersionsResponse;
    };
    sdk: {
      input: ListWorkflowVersionsCommandInput;
      output: ListWorkflowVersionsCommandOutput;
    };
  };
}
