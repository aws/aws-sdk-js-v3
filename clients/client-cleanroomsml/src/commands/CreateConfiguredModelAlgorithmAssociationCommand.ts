// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateConfiguredModelAlgorithmAssociationRequest,
  CreateConfiguredModelAlgorithmAssociationResponse,
} from "../models/models_0";
import { CreateConfiguredModelAlgorithmAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConfiguredModelAlgorithmAssociationCommand}.
 */
export interface CreateConfiguredModelAlgorithmAssociationCommandInput
  extends CreateConfiguredModelAlgorithmAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateConfiguredModelAlgorithmAssociationCommand}.
 */
export interface CreateConfiguredModelAlgorithmAssociationCommandOutput
  extends CreateConfiguredModelAlgorithmAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Associates a configured model algorithm to a collaboration for use by any member of the collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, CreateConfiguredModelAlgorithmAssociationCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, CreateConfiguredModelAlgorithmAssociationCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // CreateConfiguredModelAlgorithmAssociationRequest
 *   membershipIdentifier: "STRING_VALUE", // required
 *   configuredModelAlgorithmArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   privacyConfiguration: { // PrivacyConfiguration
 *     policies: { // PrivacyConfigurationPolicies
 *       trainedModels: { // TrainedModelsConfigurationPolicy
 *         containerLogs: [ // LogsConfigurationPolicyList
 *           { // LogsConfigurationPolicy
 *             allowedAccountIds: [ // AccountIdList // required
 *               "STRING_VALUE",
 *             ],
 *             filterPattern: "STRING_VALUE",
 *             logType: "ALL" || "ERROR_SUMMARY",
 *             logRedactionConfiguration: { // LogRedactionConfiguration
 *               entitiesToRedact: [ // EntityTypeList // required
 *                 "ALL_PERSONALLY_IDENTIFIABLE_INFORMATION" || "NUMBERS" || "CUSTOM",
 *               ],
 *               customEntityConfig: { // CustomEntityConfig
 *                 customDataIdentifiers: [ // CustomDataIdentifierList // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             },
 *           },
 *         ],
 *         containerMetrics: { // MetricsConfigurationPolicy
 *           noiseLevel: "HIGH" || "MEDIUM" || "LOW" || "NONE", // required
 *         },
 *         maxArtifactSize: { // TrainedModelArtifactMaxSize
 *           unit: "GB", // required
 *           value: Number("double"), // required
 *         },
 *       },
 *       trainedModelExports: { // TrainedModelExportsConfigurationPolicy
 *         maxSize: { // TrainedModelExportsMaxSize
 *           unit: "GB", // required
 *           value: Number("double"), // required
 *         },
 *         filesToExport: [ // TrainedModelExportFileTypeList // required
 *           "MODEL" || "OUTPUT",
 *         ],
 *       },
 *       trainedModelInferenceJobs: { // TrainedModelInferenceJobsConfigurationPolicy
 *         containerLogs: [
 *           {
 *             allowedAccountIds: [ // required
 *               "STRING_VALUE",
 *             ],
 *             filterPattern: "STRING_VALUE",
 *             logType: "ALL" || "ERROR_SUMMARY",
 *             logRedactionConfiguration: {
 *               entitiesToRedact: [ // required
 *                 "ALL_PERSONALLY_IDENTIFIABLE_INFORMATION" || "NUMBERS" || "CUSTOM",
 *               ],
 *               customEntityConfig: {
 *                 customDataIdentifiers: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             },
 *           },
 *         ],
 *         maxOutputSize: { // TrainedModelInferenceMaxOutputSize
 *           unit: "GB", // required
 *           value: Number("double"), // required
 *         },
 *       },
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConfiguredModelAlgorithmAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfiguredModelAlgorithmAssociationResponse
 * //   configuredModelAlgorithmAssociationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateConfiguredModelAlgorithmAssociationCommandInput - {@link CreateConfiguredModelAlgorithmAssociationCommandInput}
 * @returns {@link CreateConfiguredModelAlgorithmAssociationCommandOutput}
 * @see {@link CreateConfiguredModelAlgorithmAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateConfiguredModelAlgorithmAssociationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can't complete this action because another resource depends on this resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded your service quota.</p>
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
export class CreateConfiguredModelAlgorithmAssociationCommand extends $Command
  .classBuilder<
    CreateConfiguredModelAlgorithmAssociationCommandInput,
    CreateConfiguredModelAlgorithmAssociationCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "CreateConfiguredModelAlgorithmAssociation", {})
  .n("CleanRoomsMLClient", "CreateConfiguredModelAlgorithmAssociationCommand")
  .sc(CreateConfiguredModelAlgorithmAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfiguredModelAlgorithmAssociationRequest;
      output: CreateConfiguredModelAlgorithmAssociationResponse;
    };
    sdk: {
      input: CreateConfiguredModelAlgorithmAssociationCommandInput;
      output: CreateConfiguredModelAlgorithmAssociationCommandOutput;
    };
  };
}
