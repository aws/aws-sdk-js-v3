// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPolicyEventsRequest, ListPolicyEventsResponse } from "../models/models_0";
import { ListPolicyEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPolicyEventsCommand}.
 */
export interface ListPolicyEventsCommandInput extends ListPolicyEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListPolicyEventsCommand}.
 */
export interface ListPolicyEventsCommandOutput extends ListPolicyEventsResponse, __MetadataBearer {}

/**
 * <p>Lists events for a resilience policy, including services that started or stopped using it, changes to cross-account sharing, and deletion of the policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListPolicyEventsCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListPolicyEventsCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListPolicyEventsRequest
 *   policyArn: "STRING_VALUE", // required
 *   eventTypes: [ // PolicyEventTypeList
 *     "POLICY_ATTACHED_TO_SERVICE" || "POLICY_DETACHED_FROM_SERVICE" || "POLICY_SHARING_REVOKED" || "POLICY_DELETED",
 *   ],
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPolicyEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicyEventsResponse
 * //   events: [ // PolicyEventList // required
 * //     { // PolicyEvent
 * //       eventId: "STRING_VALUE", // required
 * //       timestamp: new Date("TIMESTAMP"), // required
 * //       eventType: "POLICY_ATTACHED_TO_SERVICE" || "POLICY_DETACHED_FROM_SERVICE" || "POLICY_SHARING_REVOKED" || "POLICY_DELETED", // required
 * //       policyArn: "STRING_VALUE", // required
 * //       actor: { // EventActor
 * //         type: "USER" || "SYSTEM", // required
 * //         principalId: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE",
 * //         userName: "STRING_VALUE",
 * //       },
 * //       eventDetails: { // PolicyEventDetails
 * //         title: "STRING_VALUE", // required
 * //         description: "STRING_VALUE", // required
 * //         eventMetadata: { // PolicyEventMetadata Union: only one key present
 * //           policyAttachedToService: { // PolicyAttachedToServiceMetadata
 * //             serviceArn: "STRING_VALUE",
 * //             accountId: "STRING_VALUE",
 * //           },
 * //           policyDetachedFromService: { // PolicyDetachedFromServiceMetadata
 * //             serviceArn: "STRING_VALUE",
 * //             accountId: "STRING_VALUE",
 * //           },
 * //           policySharingRevoked: { // PolicySharingRevokedMetadata
 * //             affectedServiceCount: Number("int"),
 * //           },
 * //           policyDeleted: { // PolicyDeletedMetadata
 * //             affectedServiceCount: Number("int"),
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
 * @param ListPolicyEventsCommandInput - {@link ListPolicyEventsCommandInput}
 * @returns {@link ListPolicyEventsCommandOutput}
 * @see {@link ListPolicyEventsCommandInput} for command's `input` shape.
 * @see {@link ListPolicyEventsCommandOutput} for command's `response` shape.
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
export class ListPolicyEventsCommand extends command<ListPolicyEventsCommandInput, ListPolicyEventsCommandOutput>(
  _ep0,
  _mw0,
  "ListPolicyEvents",
  ListPolicyEvents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicyEventsRequest;
      output: ListPolicyEventsResponse;
    };
    sdk: {
      input: ListPolicyEventsCommandInput;
      output: ListPolicyEventsCommandOutput;
    };
  };
}
