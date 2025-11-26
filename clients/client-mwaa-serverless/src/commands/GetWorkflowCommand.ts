// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetWorkflowRequest, GetWorkflowResponse } from "../models/models_0";
import type {
  MWAAServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MWAAServerlessClient";
import { GetWorkflow } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkflowCommand}.
 */
export interface GetWorkflowCommandInput extends GetWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowCommand}.
 */
export interface GetWorkflowCommandOutput extends GetWorkflowResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a workflow, including its configuration, status, and metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAServerlessClient, GetWorkflowCommand } from "@aws-sdk/client-mwaa-serverless"; // ES Modules import
 * // const { MWAAServerlessClient, GetWorkflowCommand } = require("@aws-sdk/client-mwaa-serverless"); // CommonJS import
 * // import type { MWAAServerlessClientConfig } from "@aws-sdk/client-mwaa-serverless";
 * const config = {}; // type is MWAAServerlessClientConfig
 * const client = new MWAAServerlessClient(config);
 * const input = { // GetWorkflowRequest
 *   WorkflowArn: "STRING_VALUE", // required
 *   WorkflowVersion: "STRING_VALUE",
 * };
 * const command = new GetWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowResponse
 * //   WorkflowArn: "STRING_VALUE", // required
 * //   WorkflowVersion: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   ModifiedAt: new Date("TIMESTAMP"),
 * //   EncryptionConfiguration: { // EncryptionConfiguration
 * //     Type: "AWS_MANAGED_KEY" || "CUSTOMER_MANAGED_KEY", // required
 * //     KmsKeyId: "STRING_VALUE",
 * //   },
 * //   LoggingConfiguration: { // LoggingConfiguration
 * //     LogGroupName: "STRING_VALUE", // required
 * //   },
 * //   EngineVersion: 1,
 * //   WorkflowStatus: "READY" || "DELETING",
 * //   DefinitionS3Location: { // DefinitionS3Location
 * //     Bucket: "STRING_VALUE", // required
 * //     ObjectKey: "STRING_VALUE", // required
 * //     VersionId: "STRING_VALUE",
 * //   },
 * //   ScheduleConfiguration: { // ScheduleConfiguration
 * //     CronExpression: "STRING_VALUE",
 * //   },
 * //   RoleArn: "STRING_VALUE",
 * //   NetworkConfiguration: { // NetworkConfiguration
 * //     SecurityGroupIds: [ // SecurityGroupIds
 * //       "STRING_VALUE",
 * //     ],
 * //     SubnetIds: [ // SubnetIds
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   TriggerMode: "STRING_VALUE",
 * //   WorkflowDefinition: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWorkflowCommandInput - {@link GetWorkflowCommandInput}
 * @returns {@link GetWorkflowCommandOutput}
 * @see {@link GetWorkflowCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowCommandOutput} for command's `response` shape.
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
export class GetWorkflowCommand extends $Command
  .classBuilder<
    GetWorkflowCommandInput,
    GetWorkflowCommandOutput,
    MWAAServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MWAAServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMWAAServerless", "GetWorkflow", {})
  .n("MWAAServerlessClient", "GetWorkflowCommand")
  .sc(GetWorkflow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkflowRequest;
      output: GetWorkflowResponse;
    };
    sdk: {
      input: GetWorkflowCommandInput;
      output: GetWorkflowCommandOutput;
    };
  };
}
