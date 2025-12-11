// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateMembershipInput, CreateMembershipOutput } from "../models/models_0";
import { CreateMembership } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMembershipCommand}.
 */
export interface CreateMembershipCommandInput extends CreateMembershipInput {}
/**
 * @public
 *
 * The output of {@link CreateMembershipCommand}.
 */
export interface CreateMembershipCommandOutput extends CreateMembershipOutput, __MetadataBearer {}

/**
 * <p>Creates a membership for a specific collaboration identifier and joins the collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateMembershipCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateMembershipCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateMembershipInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   queryLogStatus: "ENABLED" || "DISABLED", // required
 *   jobLogStatus: "ENABLED" || "DISABLED",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   defaultResultConfiguration: { // MembershipProtectedQueryResultConfiguration
 *     outputConfiguration: { // MembershipProtectedQueryOutputConfiguration Union: only one key present
 *       s3: { // ProtectedQueryS3OutputConfiguration
 *         resultFormat: "STRING_VALUE", // required
 *         bucket: "STRING_VALUE", // required
 *         keyPrefix: "STRING_VALUE",
 *         singleFileOutput: true || false,
 *       },
 *     },
 *     roleArn: "STRING_VALUE",
 *   },
 *   defaultJobResultConfiguration: { // MembershipProtectedJobResultConfiguration
 *     outputConfiguration: { // MembershipProtectedJobOutputConfiguration Union: only one key present
 *       s3: { // ProtectedJobS3OutputConfigurationInput
 *         bucket: "STRING_VALUE", // required
 *         keyPrefix: "STRING_VALUE",
 *       },
 *     },
 *     roleArn: "STRING_VALUE", // required
 *   },
 *   paymentConfiguration: { // MembershipPaymentConfiguration
 *     queryCompute: { // MembershipQueryComputePaymentConfig
 *       isResponsible: true || false, // required
 *     },
 *     machineLearning: { // MembershipMLPaymentConfig
 *       modelTraining: { // MembershipModelTrainingPaymentConfig
 *         isResponsible: true || false, // required
 *       },
 *       modelInference: { // MembershipModelInferencePaymentConfig
 *         isResponsible: true || false, // required
 *       },
 *       syntheticDataGeneration: { // MembershipSyntheticDataGenerationPaymentConfig
 *         isResponsible: true || false, // required
 *       },
 *     },
 *     jobCompute: { // MembershipJobComputePaymentConfig
 *       isResponsible: true || false, // required
 *     },
 *   },
 * };
 * const command = new CreateMembershipCommand(input);
 * const response = await client.send(command);
 * // { // CreateMembershipOutput
 * //   membership: { // Membership
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     collaborationArn: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     collaborationCreatorAccountId: "STRING_VALUE", // required
 * //     collaborationCreatorDisplayName: "STRING_VALUE", // required
 * //     collaborationName: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     memberAbilities: [ // MemberAbilities // required
 * //       "CAN_QUERY" || "CAN_RECEIVE_RESULTS" || "CAN_RUN_JOB",
 * //     ],
 * //     mlMemberAbilities: { // MLMemberAbilities
 * //       customMLMemberAbilities: [ // CustomMLMemberAbilities // required
 * //         "CAN_RECEIVE_MODEL_OUTPUT" || "CAN_RECEIVE_INFERENCE_OUTPUT",
 * //       ],
 * //     },
 * //     queryLogStatus: "ENABLED" || "DISABLED", // required
 * //     jobLogStatus: "ENABLED" || "DISABLED",
 * //     defaultResultConfiguration: { // MembershipProtectedQueryResultConfiguration
 * //       outputConfiguration: { // MembershipProtectedQueryOutputConfiguration Union: only one key present
 * //         s3: { // ProtectedQueryS3OutputConfiguration
 * //           resultFormat: "STRING_VALUE", // required
 * //           bucket: "STRING_VALUE", // required
 * //           keyPrefix: "STRING_VALUE",
 * //           singleFileOutput: true || false,
 * //         },
 * //       },
 * //       roleArn: "STRING_VALUE",
 * //     },
 * //     defaultJobResultConfiguration: { // MembershipProtectedJobResultConfiguration
 * //       outputConfiguration: { // MembershipProtectedJobOutputConfiguration Union: only one key present
 * //         s3: { // ProtectedJobS3OutputConfigurationInput
 * //           bucket: "STRING_VALUE", // required
 * //           keyPrefix: "STRING_VALUE",
 * //         },
 * //       },
 * //       roleArn: "STRING_VALUE", // required
 * //     },
 * //     paymentConfiguration: { // MembershipPaymentConfiguration
 * //       queryCompute: { // MembershipQueryComputePaymentConfig
 * //         isResponsible: true || false, // required
 * //       },
 * //       machineLearning: { // MembershipMLPaymentConfig
 * //         modelTraining: { // MembershipModelTrainingPaymentConfig
 * //           isResponsible: true || false, // required
 * //         },
 * //         modelInference: { // MembershipModelInferencePaymentConfig
 * //           isResponsible: true || false, // required
 * //         },
 * //         syntheticDataGeneration: { // MembershipSyntheticDataGenerationPaymentConfig
 * //           isResponsible: true || false, // required
 * //         },
 * //       },
 * //       jobCompute: { // MembershipJobComputePaymentConfig
 * //         isResponsible: true || false, // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMembershipCommandInput - {@link CreateMembershipCommandInput}
 * @returns {@link CreateMembershipCommandOutput}
 * @see {@link CreateMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateMembershipCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
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
export class CreateMembershipCommand extends $Command
  .classBuilder<
    CreateMembershipCommandInput,
    CreateMembershipCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "CreateMembership", {})
  .n("CleanRoomsClient", "CreateMembershipCommand")
  .sc(CreateMembership)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMembershipInput;
      output: CreateMembershipOutput;
    };
    sdk: {
      input: CreateMembershipCommandInput;
      output: CreateMembershipCommandOutput;
    };
  };
}
