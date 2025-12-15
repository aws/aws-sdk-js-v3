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
import type { CreateIntegrationWorkflowRequest, CreateIntegrationWorkflowResponse } from "../models/models_0";
import { CreateIntegrationWorkflow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIntegrationWorkflowCommand}.
 */
export interface CreateIntegrationWorkflowCommandInput extends CreateIntegrationWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link CreateIntegrationWorkflowCommand}.
 */
export interface CreateIntegrationWorkflowCommandOutput extends CreateIntegrationWorkflowResponse, __MetadataBearer {}

/**
 * <p> Creates an integration workflow. An integration workflow is an async process which
 *          ingests historic data and sets up an integration for ongoing updates. The supported Amazon AppFlow sources are Salesforce, ServiceNow, and Marketo. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, CreateIntegrationWorkflowCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, CreateIntegrationWorkflowCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // CreateIntegrationWorkflowRequest
 *   DomainName: "STRING_VALUE", // required
 *   WorkflowType: "APPFLOW_INTEGRATION", // required
 *   IntegrationConfig: { // IntegrationConfig
 *     AppflowIntegration: { // AppflowIntegration
 *       FlowDefinition: { // FlowDefinition
 *         Description: "STRING_VALUE",
 *         FlowName: "STRING_VALUE", // required
 *         KmsArn: "STRING_VALUE", // required
 *         SourceFlowConfig: { // SourceFlowConfig
 *           ConnectorProfileName: "STRING_VALUE",
 *           ConnectorType: "Salesforce" || "Marketo" || "Zendesk" || "Servicenow" || "S3", // required
 *           IncrementalPullConfig: { // IncrementalPullConfig
 *             DatetimeTypeFieldName: "STRING_VALUE",
 *           },
 *           SourceConnectorProperties: { // SourceConnectorProperties
 *             Marketo: { // MarketoSourceProperties
 *               Object: "STRING_VALUE", // required
 *             },
 *             S3: { // S3SourceProperties
 *               BucketName: "STRING_VALUE", // required
 *               BucketPrefix: "STRING_VALUE",
 *             },
 *             Salesforce: { // SalesforceSourceProperties
 *               Object: "STRING_VALUE", // required
 *               EnableDynamicFieldUpdate: true || false,
 *               IncludeDeletedRecords: true || false,
 *             },
 *             ServiceNow: { // ServiceNowSourceProperties
 *               Object: "STRING_VALUE", // required
 *             },
 *             Zendesk: { // ZendeskSourceProperties
 *               Object: "STRING_VALUE", // required
 *             },
 *           },
 *         },
 *         Tasks: [ // Tasks // required
 *           { // Task
 *             ConnectorOperator: { // ConnectorOperator
 *               Marketo: "PROJECTION" || "LESS_THAN" || "GREATER_THAN" || "BETWEEN" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *               S3: "PROJECTION" || "LESS_THAN" || "GREATER_THAN" || "BETWEEN" || "LESS_THAN_OR_EQUAL_TO" || "GREATER_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "NOT_EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *               Salesforce: "PROJECTION" || "LESS_THAN" || "CONTAINS" || "GREATER_THAN" || "BETWEEN" || "LESS_THAN_OR_EQUAL_TO" || "GREATER_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "NOT_EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *               ServiceNow: "PROJECTION" || "CONTAINS" || "LESS_THAN" || "GREATER_THAN" || "BETWEEN" || "LESS_THAN_OR_EQUAL_TO" || "GREATER_THAN_OR_EQUAL_TO" || "EQUAL_TO" || "NOT_EQUAL_TO" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *               Zendesk: "PROJECTION" || "GREATER_THAN" || "ADDITION" || "MULTIPLICATION" || "DIVISION" || "SUBTRACTION" || "MASK_ALL" || "MASK_FIRST_N" || "MASK_LAST_N" || "VALIDATE_NON_NULL" || "VALIDATE_NON_ZERO" || "VALIDATE_NON_NEGATIVE" || "VALIDATE_NUMERIC" || "NO_OP",
 *             },
 *             DestinationField: "STRING_VALUE",
 *             SourceFields: [ // SourceFields // required
 *               "STRING_VALUE",
 *             ],
 *             TaskProperties: { // TaskPropertiesMap
 *               "<keys>": "STRING_VALUE",
 *             },
 *             TaskType: "Arithmetic" || "Filter" || "Map" || "Mask" || "Merge" || "Truncate" || "Validate", // required
 *           },
 *         ],
 *         TriggerConfig: { // TriggerConfig
 *           TriggerType: "Scheduled" || "Event" || "OnDemand", // required
 *           TriggerProperties: { // TriggerProperties
 *             Scheduled: { // ScheduledTriggerProperties
 *               ScheduleExpression: "STRING_VALUE", // required
 *               DataPullMode: "Incremental" || "Complete",
 *               ScheduleStartTime: new Date("TIMESTAMP"),
 *               ScheduleEndTime: new Date("TIMESTAMP"),
 *               Timezone: "STRING_VALUE",
 *               ScheduleOffset: Number("long"),
 *               FirstExecutionFrom: new Date("TIMESTAMP"),
 *             },
 *           },
 *         },
 *       },
 *       Batches: [ // Batches
 *         { // Batch
 *           StartTime: new Date("TIMESTAMP"), // required
 *           EndTime: new Date("TIMESTAMP"), // required
 *         },
 *       ],
 *     },
 *   },
 *   ObjectTypeName: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIntegrationWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // CreateIntegrationWorkflowResponse
 * //   WorkflowId: "STRING_VALUE", // required
 * //   Message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateIntegrationWorkflowCommandInput - {@link CreateIntegrationWorkflowCommandInput}
 * @returns {@link CreateIntegrationWorkflowCommandOutput}
 * @see {@link CreateIntegrationWorkflowCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationWorkflowCommandOutput} for command's `response` shape.
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
export class CreateIntegrationWorkflowCommand extends $Command
  .classBuilder<
    CreateIntegrationWorkflowCommandInput,
    CreateIntegrationWorkflowCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "CreateIntegrationWorkflow", {})
  .n("CustomerProfilesClient", "CreateIntegrationWorkflowCommand")
  .sc(CreateIntegrationWorkflow$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIntegrationWorkflowRequest;
      output: CreateIntegrationWorkflowResponse;
    };
    sdk: {
      input: CreateIntegrationWorkflowCommandInput;
      output: CreateIntegrationWorkflowCommandOutput;
    };
  };
}
