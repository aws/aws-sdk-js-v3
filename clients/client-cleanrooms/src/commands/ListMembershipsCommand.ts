// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListMembershipsInput, ListMembershipsOutput } from "../models/models_1";
import { ListMemberships } from "../schemas/schemas_5_Collaboration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMembershipsCommand}.
 */
export interface ListMembershipsCommandInput extends ListMembershipsInput {}
/**
 * @public
 *
 * The output of {@link ListMembershipsCommand}.
 */
export interface ListMembershipsCommandOutput extends ListMembershipsOutput, __MetadataBearer {}

/**
 * <p>Lists all memberships resources within the caller's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListMembershipsCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListMembershipsCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListMembershipsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   status: "STRING_VALUE",
 * };
 * const command = new ListMembershipsCommand(input);
 * const response = await client.send(command);
 * // { // ListMembershipsOutput
 * //   nextToken: "STRING_VALUE",
 * //   membershipSummaries: [ // MembershipSummaryList // required
 * //     { // MembershipSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       collaborationCreatorAccountId: "STRING_VALUE", // required
 * //       collaborationCreatorDisplayName: "STRING_VALUE", // required
 * //       collaborationName: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       status: "STRING_VALUE", // required
 * //       memberAbilities: [ // MemberAbilities // required
 * //         "CAN_QUERY" || "CAN_RECEIVE_RESULTS" || "CAN_RUN_JOB",
 * //       ],
 * //       mlMemberAbilities: { // MLMemberAbilities
 * //         customMLMemberAbilities: [ // CustomMLMemberAbilities // required
 * //           "CAN_RECEIVE_MODEL_OUTPUT" || "CAN_RECEIVE_INFERENCE_OUTPUT",
 * //         ],
 * //       },
 * //       paymentConfiguration: { // MembershipPaymentConfiguration
 * //         queryCompute: { // MembershipQueryComputePaymentConfig
 * //           isResponsible: true || false, // required
 * //         },
 * //         machineLearning: { // MembershipMLPaymentConfig
 * //           modelTraining: { // MembershipModelTrainingPaymentConfig
 * //             isResponsible: true || false, // required
 * //           },
 * //           modelInference: { // MembershipModelInferencePaymentConfig
 * //             isResponsible: true || false, // required
 * //           },
 * //         },
 * //         jobCompute: { // MembershipJobComputePaymentConfig
 * //           isResponsible: true || false, // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMembershipsCommandInput - {@link ListMembershipsCommandInput}
 * @returns {@link ListMembershipsCommandOutput}
 * @see {@link ListMembershipsCommandInput} for command's `input` shape.
 * @see {@link ListMembershipsCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
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
export class ListMembershipsCommand extends $Command
  .classBuilder<
    ListMembershipsCommandInput,
    ListMembershipsCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "ListMemberships", {})
  .n("CleanRoomsClient", "ListMembershipsCommand")
  .sc(ListMemberships)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMembershipsInput;
      output: ListMembershipsOutput;
    };
    sdk: {
      input: ListMembershipsCommandInput;
      output: ListMembershipsCommandOutput;
    };
  };
}
