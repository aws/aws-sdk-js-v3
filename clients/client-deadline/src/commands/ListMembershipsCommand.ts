// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMembershipsRequest, ListMembershipsResponse } from "../models/models_1";
import { ListMemberships$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMembershipsCommand}.
 */
export interface ListMembershipsCommandInput extends ListMembershipsRequest {}
/**
 * @public
 *
 * The output of {@link ListMembershipsCommand}.
 */
export interface ListMembershipsCommandOutput extends ListMembershipsResponse, __MetadataBearer {}

/**
 * <p>Lists the Deadline Cloud resource memberships associated with a specified IAM Identity Center principal, optionally filtered by the requested resource types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListMembershipsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListMembershipsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListMembershipsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   principalId: "STRING_VALUE", // required
 *   identityStoreId: "STRING_VALUE",
 *   identityCenterRegion: "STRING_VALUE",
 *   resourceTypes: [ // MembershipResourceTypes
 *     "FARM" || "QUEUE" || "FLEET" || "JOB",
 *   ],
 * };
 * const command = new ListMembershipsCommand(input);
 * const response = await client.send(command);
 * // { // ListMembershipsResponse
 * //   memberships: [ // MembershipSummaries // required
 * //     { // MembershipSummary Union: only one key present
 * //       farm: { // FarmMember
 * //         farmId: "STRING_VALUE", // required
 * //         principalId: "STRING_VALUE", // required
 * //         principalType: "USER" || "GROUP", // required
 * //         identityStoreId: "STRING_VALUE", // required
 * //         membershipLevel: "VIEWER" || "CONTRIBUTOR" || "OWNER" || "MANAGER", // required
 * //       },
 * //       queue: { // QueueMember
 * //         farmId: "STRING_VALUE", // required
 * //         queueId: "STRING_VALUE", // required
 * //         principalId: "STRING_VALUE", // required
 * //         principalType: "USER" || "GROUP", // required
 * //         identityStoreId: "STRING_VALUE", // required
 * //         membershipLevel: "VIEWER" || "CONTRIBUTOR" || "OWNER" || "MANAGER", // required
 * //       },
 * //       fleet: { // FleetMember
 * //         farmId: "STRING_VALUE", // required
 * //         fleetId: "STRING_VALUE", // required
 * //         principalId: "STRING_VALUE", // required
 * //         principalType: "USER" || "GROUP", // required
 * //         identityStoreId: "STRING_VALUE", // required
 * //         membershipLevel: "VIEWER" || "CONTRIBUTOR" || "OWNER" || "MANAGER", // required
 * //       },
 * //       job: { // JobMember
 * //         farmId: "STRING_VALUE", // required
 * //         queueId: "STRING_VALUE", // required
 * //         jobId: "STRING_VALUE", // required
 * //         principalId: "STRING_VALUE", // required
 * //         principalType: "USER" || "GROUP", // required
 * //         identityStoreId: "STRING_VALUE", // required
 * //         membershipLevel: "VIEWER" || "CONTRIBUTOR" || "OWNER" || "MANAGER", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMembershipsCommandInput - {@link ListMembershipsCommandInput}
 * @returns {@link ListMembershipsCommandOutput}
 * @see {@link ListMembershipsCommandInput} for command's `input` shape.
 * @see {@link ListMembershipsCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @example List memberships using a cross-region identity store
 * ```javascript
 * //
 * const input = {
 *   identityCenterRegion: "us-east-1",
 *   identityStoreId: "d-1234567890",
 *   principalId: "12345678-1234-1234-1234-123456789abc",
 *   resourceTypes: [
 *     "QUEUE",
 *     "JOB"
 *   ]
 * };
 * const command = new ListMembershipsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example List a Monitor user's memberships of every resource type
 * ```javascript
 * //
 * const input = {
 *   principalId: "12345678-1234-1234-1234-123456789abc"
 * };
 * const command = new ListMembershipsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ListMembershipsCommand extends command<ListMembershipsCommandInput, ListMembershipsCommandOutput>(
  _ep0,
  _mw0,
  "ListMemberships",
  ListMemberships$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMembershipsRequest;
      output: ListMembershipsResponse;
    };
    sdk: {
      input: ListMembershipsCommandInput;
      output: ListMembershipsCommandOutput;
    };
  };
}
