// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CustomerProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetWorkflowRequest, GetWorkflowResponse } from "../models/models_0";
import { GetWorkflow$ } from "../schemas/schemas_0";

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
 * <p>Get details of specified workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetWorkflowCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetWorkflowCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetWorkflowRequest
 *   DomainName: "STRING_VALUE", // required
 *   WorkflowId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowResponse
 * //   WorkflowId: "STRING_VALUE",
 * //   WorkflowType: "APPFLOW_INTEGRATION",
 * //   Status: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETE" || "FAILED" || "SPLIT" || "RETRY" || "CANCELLED",
 * //   ErrorDescription: "STRING_VALUE",
 * //   StartDate: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Attributes: { // WorkflowAttributes
 * //     AppflowIntegration: { // AppflowIntegrationWorkflowAttributes
 * //       SourceConnectorType: "Salesforce" || "Marketo" || "Zendesk" || "Servicenow" || "S3", // required
 * //       ConnectorProfileName: "STRING_VALUE", // required
 * //       RoleArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   Metrics: { // WorkflowMetrics
 * //     AppflowIntegration: { // AppflowIntegrationWorkflowMetrics
 * //       RecordsProcessed: Number("long"), // required
 * //       StepsCompleted: Number("long"), // required
 * //       TotalSteps: Number("long"), // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWorkflowCommandInput - {@link GetWorkflowCommandInput}
 * @returns {@link GetWorkflowCommandOutput}
 * @see {@link GetWorkflowCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class GetWorkflowCommand extends $Command
  .classBuilder<
    GetWorkflowCommandInput,
    GetWorkflowCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "GetWorkflow", {})
  .n("CustomerProfilesClient", "GetWorkflowCommand")
  .sc(GetWorkflow$)
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
