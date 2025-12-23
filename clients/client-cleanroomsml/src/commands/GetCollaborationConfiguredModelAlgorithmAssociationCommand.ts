// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetCollaborationConfiguredModelAlgorithmAssociationRequest,
  GetCollaborationConfiguredModelAlgorithmAssociationResponse,
} from "../models/models_0";
import { GetCollaborationConfiguredModelAlgorithmAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCollaborationConfiguredModelAlgorithmAssociationCommand}.
 */
export interface GetCollaborationConfiguredModelAlgorithmAssociationCommandInput extends GetCollaborationConfiguredModelAlgorithmAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetCollaborationConfiguredModelAlgorithmAssociationCommand}.
 */
export interface GetCollaborationConfiguredModelAlgorithmAssociationCommandOutput extends GetCollaborationConfiguredModelAlgorithmAssociationResponse, __MetadataBearer {}

/**
 * <p>Returns information about the configured model algorithm association in a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetCollaborationConfiguredModelAlgorithmAssociationCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetCollaborationConfiguredModelAlgorithmAssociationCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetCollaborationConfiguredModelAlgorithmAssociationRequest
 *   configuredModelAlgorithmAssociationArn: "STRING_VALUE", // required
 *   collaborationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCollaborationConfiguredModelAlgorithmAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetCollaborationConfiguredModelAlgorithmAssociationResponse
 * //   createTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   configuredModelAlgorithmAssociationArn: "STRING_VALUE", // required
 * //   membershipIdentifier: "STRING_VALUE", // required
 * //   collaborationIdentifier: "STRING_VALUE", // required
 * //   configuredModelAlgorithmArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   creatorAccountId: "STRING_VALUE", // required
 * //   privacyConfiguration: { // PrivacyConfiguration
 * //     policies: { // PrivacyConfigurationPolicies
 * //       trainedModels: { // TrainedModelsConfigurationPolicy
 * //         containerLogs: [ // LogsConfigurationPolicyList
 * //           { // LogsConfigurationPolicy
 * //             allowedAccountIds: [ // AccountIdList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             filterPattern: "STRING_VALUE",
 * //             logType: "ALL" || "ERROR_SUMMARY",
 * //             logRedactionConfiguration: { // LogRedactionConfiguration
 * //               entitiesToRedact: [ // EntityTypeList // required
 * //                 "ALL_PERSONALLY_IDENTIFIABLE_INFORMATION" || "NUMBERS" || "CUSTOM",
 * //               ],
 * //               customEntityConfig: { // CustomEntityConfig
 * //                 customDataIdentifiers: [ // CustomDataIdentifierList // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         containerMetrics: { // MetricsConfigurationPolicy
 * //           noiseLevel: "HIGH" || "MEDIUM" || "LOW" || "NONE", // required
 * //         },
 * //         maxArtifactSize: { // TrainedModelArtifactMaxSize
 * //           unit: "GB", // required
 * //           value: Number("double"), // required
 * //         },
 * //       },
 * //       trainedModelExports: { // TrainedModelExportsConfigurationPolicy
 * //         maxSize: { // TrainedModelExportsMaxSize
 * //           unit: "GB", // required
 * //           value: Number("double"), // required
 * //         },
 * //         filesToExport: [ // TrainedModelExportFileTypeList // required
 * //           "MODEL" || "OUTPUT",
 * //         ],
 * //       },
 * //       trainedModelInferenceJobs: { // TrainedModelInferenceJobsConfigurationPolicy
 * //         containerLogs: [
 * //           {
 * //             allowedAccountIds: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //             filterPattern: "STRING_VALUE",
 * //             logType: "ALL" || "ERROR_SUMMARY",
 * //             logRedactionConfiguration: {
 * //               entitiesToRedact: [ // required
 * //                 "ALL_PERSONALLY_IDENTIFIABLE_INFORMATION" || "NUMBERS" || "CUSTOM",
 * //               ],
 * //               customEntityConfig: {
 * //                 customDataIdentifiers: [ // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         maxOutputSize: { // TrainedModelInferenceMaxOutputSize
 * //           unit: "GB", // required
 * //           value: Number("double"), // required
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCollaborationConfiguredModelAlgorithmAssociationCommandInput - {@link GetCollaborationConfiguredModelAlgorithmAssociationCommandInput}
 * @returns {@link GetCollaborationConfiguredModelAlgorithmAssociationCommandOutput}
 * @see {@link GetCollaborationConfiguredModelAlgorithmAssociationCommandInput} for command's `input` shape.
 * @see {@link GetCollaborationConfiguredModelAlgorithmAssociationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class GetCollaborationConfiguredModelAlgorithmAssociationCommand extends $Command
  .classBuilder<
    GetCollaborationConfiguredModelAlgorithmAssociationCommandInput,
    GetCollaborationConfiguredModelAlgorithmAssociationCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "GetCollaborationConfiguredModelAlgorithmAssociation", {})
  .n("CleanRoomsMLClient", "GetCollaborationConfiguredModelAlgorithmAssociationCommand")
  .sc(GetCollaborationConfiguredModelAlgorithmAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCollaborationConfiguredModelAlgorithmAssociationRequest;
      output: GetCollaborationConfiguredModelAlgorithmAssociationResponse;
    };
    sdk: {
      input: GetCollaborationConfiguredModelAlgorithmAssociationCommandInput;
      output: GetCollaborationConfiguredModelAlgorithmAssociationCommandOutput;
    };
  };
}
