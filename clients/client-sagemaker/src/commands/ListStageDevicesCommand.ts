// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListStageDevicesRequest, ListStageDevicesResponse } from "../models/models_4";
import { de_ListStageDevicesCommand, se_ListStageDevicesCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStageDevicesCommand}.
 */
export interface ListStageDevicesCommandInput extends ListStageDevicesRequest {}
/**
 * @public
 *
 * The output of {@link ListStageDevicesCommand}.
 */
export interface ListStageDevicesCommandOutput extends ListStageDevicesResponse, __MetadataBearer {}

/**
 * <p>Lists devices allocated to the stage, containing detailed device information and
 *             deployment status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListStageDevicesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListStageDevicesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListStageDevicesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   EdgeDeploymentPlanName: "STRING_VALUE", // required
 *   ExcludeDevicesDeployedInOtherStage: true || false,
 *   StageName: "STRING_VALUE", // required
 * };
 * const command = new ListStageDevicesCommand(input);
 * const response = await client.send(command);
 * // { // ListStageDevicesResponse
 * //   DeviceDeploymentSummaries: [ // DeviceDeploymentSummaries // required
 * //     { // DeviceDeploymentSummary
 * //       EdgeDeploymentPlanArn: "STRING_VALUE", // required
 * //       EdgeDeploymentPlanName: "STRING_VALUE", // required
 * //       StageName: "STRING_VALUE", // required
 * //       DeployedStageName: "STRING_VALUE",
 * //       DeviceFleetName: "STRING_VALUE",
 * //       DeviceName: "STRING_VALUE", // required
 * //       DeviceArn: "STRING_VALUE", // required
 * //       DeviceDeploymentStatus: "READYTODEPLOY" || "INPROGRESS" || "DEPLOYED" || "FAILED" || "STOPPING" || "STOPPED",
 * //       DeviceDeploymentStatusMessage: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DeploymentStartTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStageDevicesCommandInput - {@link ListStageDevicesCommandInput}
 * @returns {@link ListStageDevicesCommandOutput}
 * @see {@link ListStageDevicesCommandInput} for command's `input` shape.
 * @see {@link ListStageDevicesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class ListStageDevicesCommand extends $Command
  .classBuilder<
    ListStageDevicesCommandInput,
    ListStageDevicesCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "ListStageDevices", {})
  .n("SageMakerClient", "ListStageDevicesCommand")
  .f(void 0, void 0)
  .ser(se_ListStageDevicesCommand)
  .de(de_ListStageDevicesCommand)
  .build() {}
