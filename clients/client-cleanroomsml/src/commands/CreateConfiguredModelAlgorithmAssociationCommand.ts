// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateConfiguredModelAlgorithmAssociationRequest,
  CreateConfiguredModelAlgorithmAssociationResponse,
} from "../models/models_0";
import {
  de_CreateConfiguredModelAlgorithmAssociationCommand,
  se_CreateConfiguredModelAlgorithmAssociationCommand,
} from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *           },
 *         ],
 *         containerMetrics: { // MetricsConfigurationPolicy
 *           noiseLevel: "HIGH" || "MEDIUM" || "LOW" || "NONE", // required
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStarkControlService", "CreateConfiguredModelAlgorithmAssociation", {})
  .n("CleanRoomsMLClient", "CreateConfiguredModelAlgorithmAssociationCommand")
  .f(void 0, void 0)
  .ser(se_CreateConfiguredModelAlgorithmAssociationCommand)
  .de(de_CreateConfiguredModelAlgorithmAssociationCommand)
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
