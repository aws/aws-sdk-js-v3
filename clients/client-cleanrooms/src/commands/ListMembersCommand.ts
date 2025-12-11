// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListMembersInput, ListMembersOutput } from "../models/models_0";
import { ListMembers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists all members within a collaboration.</p>
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
 * //         "CAN_QUERY" || "CAN_RECEIVE_RESULTS" || "CAN_RUN_JOB",
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
export class ListMembersCommand extends $Command
  .classBuilder<
    ListMembersCommandInput,
    ListMembersCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "ListMembers", {})
  .n("CleanRoomsClient", "ListMembersCommand")
  .sc(ListMembers)
  .build() {
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
