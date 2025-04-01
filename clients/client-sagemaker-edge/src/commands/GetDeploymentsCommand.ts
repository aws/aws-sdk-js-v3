// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDeploymentsRequest, GetDeploymentsResult } from "../models/models_0";
import { de_GetDeploymentsCommand, se_GetDeploymentsCommand } from "../protocols/Aws_restJson1";
import { SagemakerEdgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SagemakerEdgeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeploymentsCommand}.
 */
export interface GetDeploymentsCommandInput extends GetDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link GetDeploymentsCommand}.
 */
export interface GetDeploymentsCommandOutput extends GetDeploymentsResult, __MetadataBearer {}

/**
 * <p>Use to get the active deployments from a device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SagemakerEdgeClient, GetDeploymentsCommand } from "@aws-sdk/client-sagemaker-edge"; // ES Modules import
 * // const { SagemakerEdgeClient, GetDeploymentsCommand } = require("@aws-sdk/client-sagemaker-edge"); // CommonJS import
 * const client = new SagemakerEdgeClient(config);
 * const input = { // GetDeploymentsRequest
 *   DeviceName: "STRING_VALUE", // required
 *   DeviceFleetName: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentsResult
 * //   Deployments: [ // EdgeDeployments
 * //     { // EdgeDeployment
 * //       DeploymentName: "STRING_VALUE",
 * //       Type: "Model",
 * //       FailureHandlingPolicy: "ROLLBACK_ON_FAILURE" || "DO_NOTHING",
 * //       Definitions: [ // Definitions
 * //         { // Definition
 * //           ModelHandle: "STRING_VALUE",
 * //           S3Url: "STRING_VALUE",
 * //           Checksum: { // Checksum
 * //             Type: "SHA1",
 * //             Sum: "STRING_VALUE",
 * //           },
 * //           State: "DEPLOY" || "UNDEPLOY",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDeploymentsCommandInput - {@link GetDeploymentsCommandInput}
 * @returns {@link GetDeploymentsCommandOutput}
 * @see {@link GetDeploymentsCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link SagemakerEdgeClientResolvedConfig | config} for SagemakerEdgeClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (client fault)
 *  <p>An internal failure occurred. Try your request again. If the problem
 *       persists, contact Amazon Web Services customer support.</p>
 *
 * @throws {@link SagemakerEdgeServiceException}
 * <p>Base exception class for all service exceptions from SagemakerEdge service.</p>
 *
 *
 * @public
 */
export class GetDeploymentsCommand extends $Command
  .classBuilder<
    GetDeploymentsCommandInput,
    GetDeploymentsCommandOutput,
    SagemakerEdgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SagemakerEdgeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSageMakerEdge", "GetDeployments", {})
  .n("SagemakerEdgeClient", "GetDeploymentsCommand")
  .f(void 0, void 0)
  .ser(se_GetDeploymentsCommand)
  .de(de_GetDeploymentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeploymentsRequest;
      output: GetDeploymentsResult;
    };
    sdk: {
      input: GetDeploymentsCommandInput;
      output: GetDeploymentsCommandOutput;
    };
  };
}
