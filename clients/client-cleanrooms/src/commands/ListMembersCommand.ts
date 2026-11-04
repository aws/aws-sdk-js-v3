// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMembersInput, ListMembersOutput } from "../models/models_0";
import { ListMembers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMembersCommand}.
 */
export interface ListMembersCommandInput extends ListMembersInput {}
/**
 * @public
 *
 * The output of {@link ListMembersCommand}.
 */
export interface ListMembersCommandOutput extends ListMembersOutput, __MetadataBearer {}

/**
 * Lists all members within a collaboration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListMembersCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListMembersCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListMembersInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListMembersCommand(input);
 * const response = await client.send(command);
 * // { // ListMembersOutput
 * //   nextToken: "STRING_VALUE",
 * //   memberSummaries: [ // MemberSummaryList // required
 * //     { // MemberSummary
 * //       accountId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE", // required
 * //       abilities: [ // MemberAbilities // required
 * //         "CAN_QUERY" || "CAN_RECEIVE_RESULTS" || "CAN_RUN_JOB" || "CAN_EXPORT_QUERY_ANALYSIS_LOG",
 * //       ],
 * //       mlAbilities: { // MLMemberAbilities
 * //         customMLMemberAbilities: [ // CustomMLMemberAbilities // required
 * //           "CAN_RECEIVE_MODEL_OUTPUT" || "CAN_RECEIVE_INFERENCE_OUTPUT",
 * //         ],
 * //       },
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       membershipId: "STRING_VALUE",
 * //       membershipArn: "STRING_VALUE",
 * //       paymentConfiguration: { // PaymentConfiguration
 * //         queryCompute: { // QueryComputePaymentConfig
 * //           isResponsible: true || false, // required
 * //         },
 * //         machineLearning: { // MLPaymentConfig
 * //           modelTraining: { // ModelTrainingPaymentConfig
 * //             isResponsible: true || false, // required
 * //           },
 * //           modelInference: { // ModelInferencePaymentConfig
 * //             isResponsible: true || false, // required
 * //           },
 * //           syntheticDataGeneration: { // SyntheticDataGenerationPaymentConfig
 * //             isResponsible: true || false, // required
 * //           },
 * //         },
 * //         jobCompute: { // JobComputePaymentConfig
 * //           isResponsible: true || false, // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMembersCommandInput - {@link ListMembersCommandInput}
 * @returns {@link ListMembersCommandOutput}
 * @see {@link ListMembersCommandInput} for command's `input` shape.
 * @see {@link ListMembersCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
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
export class ListMembersCommand extends command<ListMembersCommandInput, ListMembersCommandOutput>(
  _ep0,
  _mw0,
  "ListMembers",
  ListMembers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMembersInput;
      output: ListMembersOutput;
    };
    sdk: {
      input: ListMembersCommandInput;
      output: ListMembersCommandOutput;
    };
  };
}
