// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetConfiguredModelAlgorithmAssociationRequest,
  GetConfiguredModelAlgorithmAssociationResponse,
} from "../models/models_0";
import {
  de_GetConfiguredModelAlgorithmAssociationCommand,
  se_GetConfiguredModelAlgorithmAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConfiguredModelAlgorithmAssociationCommand}.
 */
export interface GetConfiguredModelAlgorithmAssociationCommandInput
  extends GetConfiguredModelAlgorithmAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetConfiguredModelAlgorithmAssociationCommand}.
 */
export interface GetConfiguredModelAlgorithmAssociationCommandOutput
  extends GetConfiguredModelAlgorithmAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about a configured model algorithm association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetConfiguredModelAlgorithmAssociationCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetConfiguredModelAlgorithmAssociationCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetConfiguredModelAlgorithmAssociationRequest
 *   configuredModelAlgorithmAssociationArn: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetConfiguredModelAlgorithmAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetConfiguredModelAlgorithmAssociationResponse
 * //   createTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   configuredModelAlgorithmAssociationArn: "STRING_VALUE", // required
 * //   membershipIdentifier: "STRING_VALUE", // required
 * //   collaborationIdentifier: "STRING_VALUE", // required
 * //   configuredModelAlgorithmArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   privacyConfiguration: { // PrivacyConfiguration
 * //     policies: { // PrivacyConfigurationPolicies
 * //       trainedModels: { // TrainedModelsConfigurationPolicy
 * //         containerLogs: [ // LogsConfigurationPolicyList
 * //           { // LogsConfigurationPolicy
 * //             allowedAccountIds: [ // AccountIdList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             filterPattern: "STRING_VALUE",
 * //           },
 * //         ],
 * //         containerMetrics: { // MetricsConfigurationPolicy
 * //           noiseLevel: "HIGH" || "MEDIUM" || "LOW" || "NONE", // required
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
 * //           },
 * //         ],
 * //         maxOutputSize: { // TrainedModelInferenceMaxOutputSize
 * //           unit: "GB", // required
 * //           value: Number("double"), // required
 * //         },
 * //       },
 * //     },
 * //   },
 * //   description: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConfiguredModelAlgorithmAssociationCommandInput - {@link GetConfiguredModelAlgorithmAssociationCommandInput}
 * @returns {@link GetConfiguredModelAlgorithmAssociationCommandOutput}
 * @see {@link GetConfiguredModelAlgorithmAssociationCommandInput} for command's `input` shape.
 * @see {@link GetConfiguredModelAlgorithmAssociationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 * @public
 */
export class GetConfiguredModelAlgorithmAssociationCommand extends $Command
  .classBuilder<
    GetConfiguredModelAlgorithmAssociationCommandInput,
    GetConfiguredModelAlgorithmAssociationCommandOutput,
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
  .s("AWSStarkControlService", "GetConfiguredModelAlgorithmAssociation", {})
  .n("CleanRoomsMLClient", "GetConfiguredModelAlgorithmAssociationCommand")
  .f(void 0, void 0)
  .ser(se_GetConfiguredModelAlgorithmAssociationCommand)
  .de(de_GetConfiguredModelAlgorithmAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfiguredModelAlgorithmAssociationRequest;
      output: GetConfiguredModelAlgorithmAssociationResponse;
    };
    sdk: {
      input: GetConfiguredModelAlgorithmAssociationCommandInput;
      output: GetConfiguredModelAlgorithmAssociationCommandOutput;
    };
  };
}
