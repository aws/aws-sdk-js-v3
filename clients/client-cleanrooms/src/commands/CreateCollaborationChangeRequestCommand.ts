// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCollaborationChangeRequestInput, CreateCollaborationChangeRequestOutput } from "../models/models_0";
import { CreateCollaborationChangeRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCollaborationChangeRequestCommand}.
 */
export interface CreateCollaborationChangeRequestCommandInput extends CreateCollaborationChangeRequestInput {}
/**
 * @public
 *
 * The output of {@link CreateCollaborationChangeRequestCommand}.
 */
export interface CreateCollaborationChangeRequestCommandOutput extends CreateCollaborationChangeRequestOutput, __MetadataBearer {}

/**
 * Creates a new change request to modify an existing collaboration. This enables post-creation modifications to collaborations through a structured API-driven approach.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateCollaborationChangeRequestCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateCollaborationChangeRequestCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateCollaborationChangeRequestInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   changes: [ // ChangeInputList // required
 *     { // ChangeInput
 *       specificationType: "MEMBER" || "COLLABORATION", // required
 *       specification: { // ChangeSpecification Union: only one key present
 *         member: { // MemberChangeSpecification
 *           accountId: "STRING_VALUE", // required
 *           memberAbilities: [ // MemberAbilities // required
 *             "CAN_QUERY" || "CAN_RECEIVE_RESULTS" || "CAN_RUN_JOB" || "CAN_EXPORT_QUERY_ANALYSIS_LOG",
 *           ],
 *           mlMemberAbilities: { // MLMemberAbilities
 *             customMLMemberAbilities: [ // CustomMLMemberAbilities // required
 *               "CAN_RECEIVE_MODEL_OUTPUT" || "CAN_RECEIVE_INFERENCE_OUTPUT",
 *             ],
 *           },
 *           paymentConfiguration: { // PaymentConfiguration
 *             queryCompute: { // QueryComputePaymentConfig
 *               isResponsible: true || false, // required
 *             },
 *             machineLearning: { // MLPaymentConfig
 *               modelTraining: { // ModelTrainingPaymentConfig
 *                 isResponsible: true || false, // required
 *               },
 *               modelInference: { // ModelInferencePaymentConfig
 *                 isResponsible: true || false, // required
 *               },
 *               syntheticDataGeneration: { // SyntheticDataGenerationPaymentConfig
 *                 isResponsible: true || false, // required
 *               },
 *             },
 *             jobCompute: { // JobComputePaymentConfig
 *               isResponsible: true || false, // required
 *             },
 *           },
 *           displayName: "STRING_VALUE",
 *         },
 *         collaboration: { // CollaborationChangeSpecification
 *           autoApprovedChangeTypes: [ // AutoApprovedChangeTypeList
 *             "ADD_MEMBER" || "GRANT_RECEIVE_RESULTS_ABILITY" || "REVOKE_RECEIVE_RESULTS_ABILITY" || "GRANT_EXPORT_QUERY_ANALYSIS_LOG_ABILITY" || "REVOKE_EXPORT_QUERY_ANALYSIS_LOG_ABILITY",
 *           ],
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateCollaborationChangeRequestCommand(input);
 * const response = await client.send(command);
 * // { // CreateCollaborationChangeRequestOutput
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
 * //               "CAN_QUERY" || "CAN_RECEIVE_RESULTS" || "CAN_RUN_JOB" || "CAN_EXPORT_QUERY_ANALYSIS_LOG",
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
 * //               "ADD_MEMBER" || "GRANT_RECEIVE_RESULTS_ABILITY" || "REVOKE_RECEIVE_RESULTS_ABILITY" || "GRANT_EXPORT_QUERY_ANALYSIS_LOG_ABILITY" || "REVOKE_EXPORT_QUERY_ANALYSIS_LOG_ABILITY",
 * //             ],
 * //           },
 * //         },
 * //         types: [ // ChangeTypeList // required
 * //           "ADD_MEMBER" || "GRANT_RECEIVE_RESULTS_ABILITY" || "REVOKE_RECEIVE_RESULTS_ABILITY" || "EDIT_AUTO_APPROVED_CHANGE_TYPES" || "ADD_PAYER_CANDIDATE" || "REMOVE_PAYER_CANDIDATE" || "GRANT_CAN_RECEIVE_MODEL_OUTPUT" || "GRANT_CAN_RECEIVE_INFERENCE_OUTPUT" || "REVOKE_CAN_RECEIVE_MODEL_OUTPUT" || "REVOKE_CAN_RECEIVE_INFERENCE_OUTPUT" || "GRANT_EXPORT_QUERY_ANALYSIS_LOG_ABILITY" || "REVOKE_EXPORT_QUERY_ANALYSIS_LOG_ABILITY",
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
 * @param CreateCollaborationChangeRequestCommandInput - {@link CreateCollaborationChangeRequestCommandInput}
 * @returns {@link CreateCollaborationChangeRequestCommandOutput}
 * @see {@link CreateCollaborationChangeRequestCommandInput} for command's `input` shape.
 * @see {@link CreateCollaborationChangeRequestCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request denied because service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CleanRoomsServiceException}
 *
 * Base exception class for all service exceptions from CleanRooms service.
 *
 * @public
 */
export class CreateCollaborationChangeRequestCommand extends command<CreateCollaborationChangeRequestCommandInput, CreateCollaborationChangeRequestCommandOutput>(
  _ep0,
  _mw0,
  "CreateCollaborationChangeRequest",
  CreateCollaborationChangeRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCollaborationChangeRequestInput;
      output: CreateCollaborationChangeRequestOutput;
    };
    sdk: {
      input: CreateCollaborationChangeRequestCommandInput;
      output: CreateCollaborationChangeRequestCommandOutput;
    };
  };
}
