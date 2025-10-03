// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCollaborationInput, CreateCollaborationOutput } from "../models/models_0";
import { de_CreateCollaborationCommand, se_CreateCollaborationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCollaborationCommand}.
 */
export interface CreateCollaborationCommandInput extends CreateCollaborationInput {}
/**
 * @public
 *
 * The output of {@link CreateCollaborationCommand}.
 */
export interface CreateCollaborationCommandOutput extends CreateCollaborationOutput, __MetadataBearer {}

/**
 * <p>Creates a new collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateCollaborationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateCollaborationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateCollaborationInput
 *   members: [ // MemberList // required
 *     { // MemberSpecification
 *       accountId: "STRING_VALUE", // required
 *       memberAbilities: [ // MemberAbilities // required
 *         "CAN_QUERY" || "CAN_RECEIVE_RESULTS" || "CAN_RUN_JOB",
 *       ],
 *       mlMemberAbilities: { // MLMemberAbilities
 *         customMLMemberAbilities: [ // CustomMLMemberAbilities // required
 *           "CAN_RECEIVE_MODEL_OUTPUT" || "CAN_RECEIVE_INFERENCE_OUTPUT",
 *         ],
 *       },
 *       displayName: "STRING_VALUE", // required
 *       paymentConfiguration: { // PaymentConfiguration
 *         queryCompute: { // QueryComputePaymentConfig
 *           isResponsible: true || false, // required
 *         },
 *         machineLearning: { // MLPaymentConfig
 *           modelTraining: { // ModelTrainingPaymentConfig
 *             isResponsible: true || false, // required
 *           },
 *           modelInference: { // ModelInferencePaymentConfig
 *             isResponsible: true || false, // required
 *           },
 *         },
 *         jobCompute: { // JobComputePaymentConfig
 *           isResponsible: true || false, // required
 *         },
 *       },
 *     },
 *   ],
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE", // required
 *   creatorMemberAbilities: [ // required
 *     "CAN_QUERY" || "CAN_RECEIVE_RESULTS" || "CAN_RUN_JOB",
 *   ],
 *   creatorMLMemberAbilities: {
 *     customMLMemberAbilities: [ // required
 *       "CAN_RECEIVE_MODEL_OUTPUT" || "CAN_RECEIVE_INFERENCE_OUTPUT",
 *     ],
 *   },
 *   creatorDisplayName: "STRING_VALUE", // required
 *   dataEncryptionMetadata: { // DataEncryptionMetadata
 *     allowCleartext: true || false, // required
 *     allowDuplicates: true || false, // required
 *     allowJoinsOnColumnsWithDifferentNames: true || false, // required
 *     preserveNulls: true || false, // required
 *   },
 *   queryLogStatus: "ENABLED" || "DISABLED", // required
 *   jobLogStatus: "ENABLED" || "DISABLED",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   creatorPaymentConfiguration: {
 *     queryCompute: {
 *       isResponsible: true || false, // required
 *     },
 *     machineLearning: {
 *       modelTraining: {
 *         isResponsible: true || false, // required
 *       },
 *       modelInference: {
 *         isResponsible: true || false, // required
 *       },
 *     },
 *     jobCompute: {
 *       isResponsible: true || false, // required
 *     },
 *   },
 *   analyticsEngine: "SPARK" || "CLEAN_ROOMS_SQL",
 *   autoApprovedChangeRequestTypes: [ // AutoApprovedChangeTypeList
 *     "ADD_MEMBER",
 *   ],
 *   allowedResultRegions: [ // AllowedResultRegions
 *     "us-west-1" || "us-west-2" || "us-east-1" || "us-east-2" || "af-south-1" || "ap-east-1" || "ap-east-2" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-southeast-5" || "ap-southeast-4" || "ap-southeast-7" || "ap-south-1" || "ap-northeast-3" || "ap-northeast-1" || "ap-northeast-2" || "ca-central-1" || "ca-west-1" || "eu-south-1" || "eu-west-3" || "eu-south-2" || "eu-central-2" || "eu-central-1" || "eu-north-1" || "eu-west-1" || "eu-west-2" || "me-south-1" || "me-central-1" || "il-central-1" || "sa-east-1" || "mx-central-1",
 *   ],
 * };
 * const command = new CreateCollaborationCommand(input);
 * const response = await client.send(command);
 * // { // CreateCollaborationOutput
 * //   collaboration: { // Collaboration
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     creatorAccountId: "STRING_VALUE", // required
 * //     creatorDisplayName: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     memberStatus: "STRING_VALUE", // required
 * //     membershipId: "STRING_VALUE",
 * //     membershipArn: "STRING_VALUE",
 * //     dataEncryptionMetadata: { // DataEncryptionMetadata
 * //       allowCleartext: true || false, // required
 * //       allowDuplicates: true || false, // required
 * //       allowJoinsOnColumnsWithDifferentNames: true || false, // required
 * //       preserveNulls: true || false, // required
 * //     },
 * //     queryLogStatus: "ENABLED" || "DISABLED", // required
 * //     jobLogStatus: "ENABLED" || "DISABLED",
 * //     analyticsEngine: "SPARK" || "CLEAN_ROOMS_SQL",
 * //     autoApprovedChangeTypes: [ // AutoApprovedChangeTypeList
 * //       "ADD_MEMBER",
 * //     ],
 * //     allowedResultRegions: [ // AllowedResultRegions
 * //       "us-west-1" || "us-west-2" || "us-east-1" || "us-east-2" || "af-south-1" || "ap-east-1" || "ap-east-2" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-southeast-5" || "ap-southeast-4" || "ap-southeast-7" || "ap-south-1" || "ap-northeast-3" || "ap-northeast-1" || "ap-northeast-2" || "ca-central-1" || "ca-west-1" || "eu-south-1" || "eu-west-3" || "eu-south-2" || "eu-central-2" || "eu-central-1" || "eu-north-1" || "eu-west-1" || "eu-west-2" || "me-south-1" || "me-central-1" || "il-central-1" || "sa-east-1" || "mx-central-1",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCollaborationCommandInput - {@link CreateCollaborationCommandInput}
 * @returns {@link CreateCollaborationCommandOutput}
 * @see {@link CreateCollaborationCommandInput} for command's `input` shape.
 * @see {@link CreateCollaborationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request denied because service quota has been exceeded.</p>
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
export class CreateCollaborationCommand extends $Command
  .classBuilder<
    CreateCollaborationCommandInput,
    CreateCollaborationCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "CreateCollaboration", {})
  .n("CleanRoomsClient", "CreateCollaborationCommand")
  .f(void 0, void 0)
  .ser(se_CreateCollaborationCommand)
  .de(de_CreateCollaborationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCollaborationInput;
      output: CreateCollaborationOutput;
    };
    sdk: {
      input: CreateCollaborationCommandInput;
      output: CreateCollaborationCommandOutput;
    };
  };
}
