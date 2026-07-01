// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCollaborationChangeRequestInput, GetCollaborationChangeRequestOutput } from "../models/models_0";
import { GetCollaborationChangeRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCollaborationChangeRequestCommand}.
 */
export interface GetCollaborationChangeRequestCommandInput extends GetCollaborationChangeRequestInput {}
/**
 * @public
 *
 * The output of {@link GetCollaborationChangeRequestCommand}.
 */
export interface GetCollaborationChangeRequestCommandOutput extends GetCollaborationChangeRequestOutput, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific collaboration change request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetCollaborationChangeRequestCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetCollaborationChangeRequestCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // GetCollaborationChangeRequestInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   changeRequestIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCollaborationChangeRequestCommand(input);
 * const response = await client.send(command);
 * // { // GetCollaborationChangeRequestOutput
 * //   collaborationChangeRequest: { // CollaborationChangeRequest
 * //     id: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     status: "PENDING" || "APPROVED" || "CANCELLED" || "DENIED" || "COMMITTED", // required
 * //     isAutoApproved: true || false, // required
 * //     changes: [ // ChangeList // required
 * //       { // Change
 * //         specificationType: "MEMBER" || "COLLABORATION", // required
 * //         specification: { // ChangeSpecification Union: only one key present
 * //           member: { // MemberChangeSpecification
 * //             accountId: "STRING_VALUE", // required
 * //             memberAbilities: [ // MemberAbilities // required
 * //               "CAN_QUERY" || "CAN_RECEIVE_RESULTS" || "CAN_RUN_JOB",
 * //             ],
 * //             mlMemberAbilities: { // MLMemberAbilities
 * //               customMLMemberAbilities: [ // CustomMLMemberAbilities // required
 * //                 "CAN_RECEIVE_MODEL_OUTPUT" || "CAN_RECEIVE_INFERENCE_OUTPUT",
 * //               ],
 * //             },
 * //             paymentConfiguration: { // PaymentConfiguration
 * //               queryCompute: { // QueryComputePaymentConfig
 * //                 isResponsible: true || false, // required
 * //               },
 * //               machineLearning: { // MLPaymentConfig
 * //                 modelTraining: { // ModelTrainingPaymentConfig
 * //                   isResponsible: true || false, // required
 * //                 },
 * //                 modelInference: { // ModelInferencePaymentConfig
 * //                   isResponsible: true || false, // required
 * //                 },
 * //                 syntheticDataGeneration: { // SyntheticDataGenerationPaymentConfig
 * //                   isResponsible: true || false, // required
 * //                 },
 * //               },
 * //               jobCompute: { // JobComputePaymentConfig
 * //                 isResponsible: true || false, // required
 * //               },
 * //             },
 * //             displayName: "STRING_VALUE",
 * //           },
 * //           collaboration: { // CollaborationChangeSpecification
 * //             autoApprovedChangeTypes: [ // AutoApprovedChangeTypeList
 * //               "ADD_MEMBER" || "GRANT_RECEIVE_RESULTS_ABILITY" || "REVOKE_RECEIVE_RESULTS_ABILITY",
 * //             ],
 * //           },
 * //         },
 * //         types: [ // ChangeTypeList // required
 * //           "ADD_MEMBER" || "GRANT_RECEIVE_RESULTS_ABILITY" || "REVOKE_RECEIVE_RESULTS_ABILITY" || "EDIT_AUTO_APPROVED_CHANGE_TYPES" || "ADD_PAYER_CANDIDATE" || "REMOVE_PAYER_CANDIDATE" || "GRANT_CAN_RECEIVE_MODEL_OUTPUT" || "GRANT_CAN_RECEIVE_INFERENCE_OUTPUT" || "REVOKE_CAN_RECEIVE_MODEL_OUTPUT" || "REVOKE_CAN_RECEIVE_INFERENCE_OUTPUT",
 * //         ],
 * //       },
 * //     ],
 * //     approvals: { // ApprovalStatuses
 * //       "<keys>": { // ApprovalStatusDetails
 * //         status: "APPROVED" || "DENIED" || "PENDING", // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCollaborationChangeRequestCommandInput - {@link GetCollaborationChangeRequestCommandInput}
 * @returns {@link GetCollaborationChangeRequestCommandOutput}
 * @see {@link GetCollaborationChangeRequestCommandInput} for command's `input` shape.
 * @see {@link GetCollaborationChangeRequestCommandOutput} for command's `response` shape.
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
export class GetCollaborationChangeRequestCommand extends command<GetCollaborationChangeRequestCommandInput, GetCollaborationChangeRequestCommandOutput>(
  _ep0,
  _mw0,
  "GetCollaborationChangeRequest",
  GetCollaborationChangeRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCollaborationChangeRequestInput;
      output: GetCollaborationChangeRequestOutput;
    };
    sdk: {
      input: GetCollaborationChangeRequestCommandInput;
      output: GetCollaborationChangeRequestCommandOutput;
    };
  };
}
