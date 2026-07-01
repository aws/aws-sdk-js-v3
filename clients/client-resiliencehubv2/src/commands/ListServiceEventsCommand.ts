// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListServiceEventsRequest, ListServiceEventsResponse } from "../models/models_0";
import { ListServiceEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListServiceEventsCommand}.
 */
export interface ListServiceEventsCommandInput extends ListServiceEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceEventsCommand}.
 */
export interface ListServiceEventsCommandOutput extends ListServiceEventsResponse, __MetadataBearer {}

/**
 * <p>Lists events for a service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListServiceEventsCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListServiceEventsCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListServiceEventsRequest
 *   serviceArn: "STRING_VALUE", // required
 *   eventTypes: [ // ServiceEventTypeList
 *     "SERVICE_CREATED" || "SERVICE_DELETED" || "SERVICE_SYSTEM_ASSOCIATED" || "SERVICE_SYSTEM_DISASSOCIATED" || "SERVICE_RESOURCES_ASSOCIATED" || "SERVICE_RESOURCES_DISASSOCIATED" || "SERVICE_WORKFLOW_UPDATED" || "SERVICE_INPUT_SOURCES_UPDATED" || "SERVICE_POLICY_ASSOCIATED" || "SERVICE_POLICY_DISASSOCIATED" || "SERVICE_FUNCTION_CREATED" || "SERVICE_FUNCTION_UPDATED" || "SERVICE_FUNCTION_DELETED" || "SERVICE_FUNCTION_RESOURCES_ADDED" || "SERVICE_FUNCTION_RESOURCES_REMOVED" || "SERVICE_ACHIEVABILITY_UPDATED" || "ASSERTION_CREATED" || "ASSERTION_UPDATED" || "ASSERTION_DELETED",
 *   ],
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceEventsResponse
 * //   events: [ // ServiceEventList // required
 * //     { // ServiceEvent
 * //       eventId: "STRING_VALUE", // required
 * //       timestamp: new Date("TIMESTAMP"), // required
 * //       eventType: "SERVICE_CREATED" || "SERVICE_DELETED" || "SERVICE_SYSTEM_ASSOCIATED" || "SERVICE_SYSTEM_DISASSOCIATED" || "SERVICE_RESOURCES_ASSOCIATED" || "SERVICE_RESOURCES_DISASSOCIATED" || "SERVICE_WORKFLOW_UPDATED" || "SERVICE_INPUT_SOURCES_UPDATED" || "SERVICE_POLICY_ASSOCIATED" || "SERVICE_POLICY_DISASSOCIATED" || "SERVICE_FUNCTION_CREATED" || "SERVICE_FUNCTION_UPDATED" || "SERVICE_FUNCTION_DELETED" || "SERVICE_FUNCTION_RESOURCES_ADDED" || "SERVICE_FUNCTION_RESOURCES_REMOVED" || "SERVICE_ACHIEVABILITY_UPDATED" || "ASSERTION_CREATED" || "ASSERTION_UPDATED" || "ASSERTION_DELETED", // required
 * //       serviceArn: "STRING_VALUE", // required
 * //       actor: { // EventActor
 * //         type: "USER" || "SYSTEM", // required
 * //         principalId: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE",
 * //         userName: "STRING_VALUE",
 * //       },
 * //       eventDetails: { // ServiceEventDetails
 * //         title: "STRING_VALUE", // required
 * //         description: "STRING_VALUE", // required
 * //         eventMetadata: { // ServiceEventMetadata Union: only one key present
 * //           serviceCreated: {},
 * //           serviceDeleted: {},
 * //           serviceSystemAssociated: { // ServiceSystemAssociatedMetadata
 * //             systemName: "STRING_VALUE",
 * //             systemArn: "STRING_VALUE",
 * //           },
 * //           serviceSystemDisassociated: { // ServiceSystemDisassociatedMetadata
 * //             systemId: "STRING_VALUE",
 * //             systemName: "STRING_VALUE",
 * //             systemArn: "STRING_VALUE",
 * //           },
 * //           serviceResourcesAssociated: { // ServiceResourcesAssociatedMetadata
 * //             resourceCount: Number("int"),
 * //             resourceTypes: [ // ResourceTypeList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           serviceResourcesDisassociated: { // ServiceResourcesDisassociatedMetadata
 * //             resourceCount: Number("int"),
 * //             resourceTypes: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           serviceWorkflowUpdated: { // ServiceWorkflowUpdatedMetadata
 * //             serviceFunctionId: "STRING_VALUE",
 * //             serviceFunctionName: "STRING_VALUE",
 * //           },
 * //           serviceInputSourcesUpdated: {},
 * //           servicePolicyAssociated: { // ServicePolicyAssociatedMetadata
 * //             policyName: "STRING_VALUE",
 * //             policyArn: "STRING_VALUE",
 * //           },
 * //           servicePolicyDisassociated: { // ServicePolicyDisassociatedMetadata
 * //             policyName: "STRING_VALUE",
 * //             policyArn: "STRING_VALUE",
 * //           },
 * //           serviceFunctionCreated: { // ServiceFunctionCreatedMetadata
 * //             serviceFunctionId: "STRING_VALUE",
 * //             serviceFunctionName: "STRING_VALUE",
 * //           },
 * //           serviceFunctionUpdated: { // ServiceFunctionUpdatedMetadata
 * //             serviceFunctionId: "STRING_VALUE",
 * //             serviceFunctionName: "STRING_VALUE",
 * //             resourcesAdded: [ // ArnList
 * //               "STRING_VALUE",
 * //             ],
 * //             resourcesRemoved: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           serviceFunctionDeleted: { // ServiceFunctionDeletedMetadata
 * //             serviceFunctionId: "STRING_VALUE",
 * //             serviceFunctionName: "STRING_VALUE",
 * //           },
 * //           serviceFunctionResourcesAdded: { // ServiceFunctionResourcesAddedMetadata
 * //             serviceFunctionId: "STRING_VALUE",
 * //             serviceFunctionName: "STRING_VALUE",
 * //             resourcesAdded: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           serviceFunctionResourcesRemoved: { // ServiceFunctionResourcesRemovedMetadata
 * //             serviceFunctionId: "STRING_VALUE",
 * //             serviceFunctionName: "STRING_VALUE",
 * //             resourcesRemoved: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           serviceAchievabilityUpdated: { // ServiceAchievabilityUpdatedMetadata
 * //             assessmentId: "STRING_VALUE",
 * //             availabilitySlo: "STRING_VALUE",
 * //             multiAzRtoRpo: "STRING_VALUE",
 * //             multiRegionRtoRpo: "STRING_VALUE",
 * //           },
 * //           assertionCreated: { // AssertionCreatedMetadata
 * //             assertionId: "STRING_VALUE",
 * //             assertionName: "STRING_VALUE",
 * //           },
 * //           assertionUpdated: { // AssertionUpdatedMetadata
 * //             assertionId: "STRING_VALUE",
 * //             assertionName: "STRING_VALUE",
 * //           },
 * //           assertionDeleted: { // AssertionDeletedMetadata
 * //             assertionId: "STRING_VALUE",
 * //             assertionName: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceEventsCommandInput - {@link ListServiceEventsCommandInput}
 * @returns {@link ListServiceEventsCommandOutput}
 * @see {@link ListServiceEventsCommandInput} for command's `input` shape.
 * @see {@link ListServiceEventsCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class ListServiceEventsCommand extends command<ListServiceEventsCommandInput, ListServiceEventsCommandOutput>(
  _ep0,
  _mw0,
  "ListServiceEvents",
  ListServiceEvents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceEventsRequest;
      output: ListServiceEventsResponse;
    };
    sdk: {
      input: ListServiceEventsCommandInput;
      output: ListServiceEventsCommandOutput;
    };
  };
}
