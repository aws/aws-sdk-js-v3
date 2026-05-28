// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSystemEventsRequest, ListSystemEventsResponse } from "../models/models_0";
import type {
  Resiliencehubv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Resiliencehubv2Client";
import { ListSystemEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSystemEventsCommand}.
 */
export interface ListSystemEventsCommandInput extends ListSystemEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListSystemEventsCommand}.
 */
export interface ListSystemEventsCommandOutput extends ListSystemEventsResponse, __MetadataBearer {}

/**
 * <p>Lists events for a system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListSystemEventsCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListSystemEventsCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListSystemEventsRequest
 *   systemArn: "STRING_VALUE", // required
 *   eventTypes: [ // SystemEventTypeList
 *     "SYSTEM_CREATED" || "SYSTEM_DELETED" || "SYSTEM_USER_JOURNEY_CREATED" || "SYSTEM_USER_JOURNEY_UPDATED" || "SYSTEM_USER_JOURNEY_DELETED" || "SYSTEM_SERVICE_ASSOCIATED" || "SYSTEM_SERVICE_DISASSOCIATED" || "SYSTEM_POLICY_ASSOCIATED" || "SYSTEM_POLICY_DISASSOCIATED",
 *   ],
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSystemEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListSystemEventsResponse
 * //   events: [ // SystemEventList // required
 * //     { // SystemEvent
 * //       eventId: "STRING_VALUE", // required
 * //       timestamp: new Date("TIMESTAMP"), // required
 * //       eventType: "SYSTEM_CREATED" || "SYSTEM_DELETED" || "SYSTEM_USER_JOURNEY_CREATED" || "SYSTEM_USER_JOURNEY_UPDATED" || "SYSTEM_USER_JOURNEY_DELETED" || "SYSTEM_SERVICE_ASSOCIATED" || "SYSTEM_SERVICE_DISASSOCIATED" || "SYSTEM_POLICY_ASSOCIATED" || "SYSTEM_POLICY_DISASSOCIATED", // required
 * //       systemArn: "STRING_VALUE", // required
 * //       actor: { // EventActor
 * //         type: "USER" || "SYSTEM", // required
 * //         principalId: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE",
 * //         userName: "STRING_VALUE",
 * //       },
 * //       eventDetails: { // SystemEventDetails
 * //         title: "STRING_VALUE", // required
 * //         description: "STRING_VALUE", // required
 * //         eventMetadata: { // SystemEventMetadata Union: only one key present
 * //           systemCreated: {},
 * //           systemDeleted: {},
 * //           systemUserJourneyCreated: { // SystemUserJourneyCreatedMetadata
 * //             userJourneyName: "STRING_VALUE",
 * //             associatedServices: [ // ServiceReferenceList
 * //               { // ServiceReference
 * //                 serviceId: "STRING_VALUE",
 * //                 serviceName: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           systemUserJourneyUpdated: { // SystemUserJourneyUpdatedMetadata
 * //             userJourneyName: "STRING_VALUE",
 * //             changes: { // UserJourneyChanges
 * //               journeyDescription: { // StringChange
 * //                 oldValue: "STRING_VALUE",
 * //                 newValue: "STRING_VALUE",
 * //               },
 * //               associatedServices: { // ServiceReferenceChanges
 * //                 added: [
 * //                   {
 * //                     serviceId: "STRING_VALUE",
 * //                     serviceName: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //                 removed: [
 * //                   {
 * //                     serviceId: "STRING_VALUE",
 * //                     serviceName: "STRING_VALUE",
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           },
 * //           systemUserJourneyDeleted: { // SystemUserJourneyDeletedMetadata
 * //             userJourneyName: "STRING_VALUE",
 * //             associatedServicesAtDeletion: [
 * //               {
 * //                 serviceId: "STRING_VALUE",
 * //                 serviceName: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           systemServiceAssociated: { // SystemServiceAssociatedMetadata
 * //             serviceName: "STRING_VALUE",
 * //             serviceArn: "STRING_VALUE",
 * //             userJourneys: [ // UserJourneyNameList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           systemServiceDisassociated: { // SystemServiceDisassociatedMetadata
 * //             serviceName: "STRING_VALUE",
 * //             serviceArn: "STRING_VALUE",
 * //             userJourneysAffected: [
 * //               "STRING_VALUE",
 * //             ],
 * //             comment: "STRING_VALUE",
 * //           },
 * //           systemPolicyAssociated: { // SystemPolicyAssociatedMetadata
 * //             policyName: "STRING_VALUE",
 * //             policyArn: "STRING_VALUE",
 * //           },
 * //           systemPolicyDisassociated: { // SystemPolicyDisassociatedMetadata
 * //             policyName: "STRING_VALUE",
 * //             policyArn: "STRING_VALUE",
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
 * @param ListSystemEventsCommandInput - {@link ListSystemEventsCommandInput}
 * @returns {@link ListSystemEventsCommandOutput}
 * @see {@link ListSystemEventsCommandInput} for command's `input` shape.
 * @see {@link ListSystemEventsCommandOutput} for command's `response` shape.
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
export class ListSystemEventsCommand extends $Command
  .classBuilder<
    ListSystemEventsCommandInput,
    ListSystemEventsCommandOutput,
    Resiliencehubv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Resiliencehubv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NGRHServiceCore", "ListSystemEvents", {})
  .n("Resiliencehubv2Client", "ListSystemEventsCommand")
  .sc(ListSystemEvents$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSystemEventsRequest;
      output: ListSystemEventsResponse;
    };
    sdk: {
      input: ListSystemEventsCommandInput;
      output: ListSystemEventsCommandOutput;
    };
  };
}
