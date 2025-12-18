// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListCollaborationChangeRequestsInput, ListCollaborationChangeRequestsOutput } from "../models/models_0";
import { ListCollaborationChangeRequests$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCollaborationChangeRequestsCommand}.
 */
export interface ListCollaborationChangeRequestsCommandInput extends ListCollaborationChangeRequestsInput {}
/**
 * @public
 *
 * The output of {@link ListCollaborationChangeRequestsCommand}.
 */
export interface ListCollaborationChangeRequestsCommandOutput
  extends ListCollaborationChangeRequestsOutput,
    __MetadataBearer {}

/**
 * <p>Lists all change requests for a collaboration with pagination support. Returns change requests sorted by creation time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListCollaborationChangeRequestsCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListCollaborationChangeRequestsCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListCollaborationChangeRequestsInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   status: "PENDING" || "APPROVED" || "CANCELLED" || "DENIED" || "COMMITTED",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCollaborationChangeRequestsCommand(input);
 * const response = await client.send(command);
 * // { // ListCollaborationChangeRequestsOutput
 * //   collaborationChangeRequestSummaries: [ // CollaborationChangeRequestSummaryList // required
 * //     { // CollaborationChangeRequestSummary
 * //       id: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       status: "PENDING" || "APPROVED" || "CANCELLED" || "DENIED" || "COMMITTED", // required
 * //       isAutoApproved: true || false, // required
 * //       changes: [ // ChangeList // required
 * //         { // Change
 * //           specificationType: "MEMBER" || "COLLABORATION", // required
 * //           specification: { // ChangeSpecification Union: only one key present
 * //             member: { // MemberChangeSpecification
 * //               accountId: "STRING_VALUE", // required
 * //               memberAbilities: [ // MemberAbilities // required
 * //                 "CAN_QUERY" || "CAN_RECEIVE_RESULTS" || "CAN_RUN_JOB",
 * //               ],
 * //               displayName: "STRING_VALUE",
 * //             },
 * //             collaboration: { // CollaborationChangeSpecification
 * //               autoApprovedChangeTypes: [ // AutoApprovedChangeTypeList
 * //                 "ADD_MEMBER" || "GRANT_RECEIVE_RESULTS_ABILITY" || "REVOKE_RECEIVE_RESULTS_ABILITY",
 * //               ],
 * //             },
 * //           },
 * //           types: [ // ChangeTypeList // required
 * //             "ADD_MEMBER" || "GRANT_RECEIVE_RESULTS_ABILITY" || "REVOKE_RECEIVE_RESULTS_ABILITY" || "EDIT_AUTO_APPROVED_CHANGE_TYPES",
 * //           ],
 * //         },
 * //       ],
 * //       approvals: { // ApprovalStatuses
 * //         "<keys>": { // ApprovalStatusDetails
 * //           status: "APPROVED" || "DENIED" || "PENDING", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCollaborationChangeRequestsCommandInput - {@link ListCollaborationChangeRequestsCommandInput}
 * @returns {@link ListCollaborationChangeRequestsCommandOutput}
 * @see {@link ListCollaborationChangeRequestsCommandInput} for command's `input` shape.
 * @see {@link ListCollaborationChangeRequestsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class ListCollaborationChangeRequestsCommand extends $Command
  .classBuilder<
    ListCollaborationChangeRequestsCommandInput,
    ListCollaborationChangeRequestsCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "ListCollaborationChangeRequests", {})
  .n("CleanRoomsClient", "ListCollaborationChangeRequestsCommand")
  .sc(ListCollaborationChangeRequests$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCollaborationChangeRequestsInput;
      output: ListCollaborationChangeRequestsOutput;
    };
    sdk: {
      input: ListCollaborationChangeRequestsCommandInput;
      output: ListCollaborationChangeRequestsCommandOutput;
    };
  };
}
