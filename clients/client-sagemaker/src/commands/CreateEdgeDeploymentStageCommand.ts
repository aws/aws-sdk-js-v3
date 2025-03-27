// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEdgeDeploymentStageRequest } from "../models/models_1";
import { de_CreateEdgeDeploymentStageCommand, se_CreateEdgeDeploymentStageCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEdgeDeploymentStageCommand}.
 */
export interface CreateEdgeDeploymentStageCommandInput extends CreateEdgeDeploymentStageRequest {}
/**
 * @public
 *
 * The output of {@link CreateEdgeDeploymentStageCommand}.
 */
export interface CreateEdgeDeploymentStageCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates a new stage in an existing edge deployment plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateEdgeDeploymentStageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateEdgeDeploymentStageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateEdgeDeploymentStageRequest
 *   EdgeDeploymentPlanName: "STRING_VALUE", // required
 *   Stages: [ // DeploymentStages // required
 *     { // DeploymentStage
 *       StageName: "STRING_VALUE", // required
 *       DeviceSelectionConfig: { // DeviceSelectionConfig
 *         DeviceSubsetType: "PERCENTAGE" || "SELECTION" || "NAMECONTAINS", // required
 *         Percentage: Number("int"),
 *         DeviceNames: [ // DeviceNames
 *           "STRING_VALUE",
 *         ],
 *         DeviceNameContains: "STRING_VALUE",
 *       },
 *       DeploymentConfig: { // EdgeDeploymentConfig
 *         FailureHandlingPolicy: "ROLLBACK_ON_FAILURE" || "DO_NOTHING", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateEdgeDeploymentStageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateEdgeDeploymentStageCommandInput - {@link CreateEdgeDeploymentStageCommandInput}
 * @returns {@link CreateEdgeDeploymentStageCommandOutput}
 * @see {@link CreateEdgeDeploymentStageCommandInput} for command's `input` shape.
 * @see {@link CreateEdgeDeploymentStageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class CreateEdgeDeploymentStageCommand extends $Command
  .classBuilder<
    CreateEdgeDeploymentStageCommandInput,
    CreateEdgeDeploymentStageCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "CreateEdgeDeploymentStage", {})
  .n("SageMakerClient", "CreateEdgeDeploymentStageCommand")
  .f(void 0, void 0)
  .ser(se_CreateEdgeDeploymentStageCommand)
  .de(de_CreateEdgeDeploymentStageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEdgeDeploymentStageRequest;
      output: {};
    };
    sdk: {
      input: CreateEdgeDeploymentStageCommandInput;
      output: CreateEdgeDeploymentStageCommandOutput;
    };
  };
}
