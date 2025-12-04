// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateTrialComponentRequest, AssociateTrialComponentResponse } from "../models/models_0";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { AssociateTrialComponent } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateTrialComponentCommand}.
 */
export interface AssociateTrialComponentCommandInput extends AssociateTrialComponentRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTrialComponentCommand}.
 */
export interface AssociateTrialComponentCommandOutput extends AssociateTrialComponentResponse, __MetadataBearer {}

/**
 * <p>Associates a trial component with a trial. A trial component can be associated with multiple trials. To disassociate a trial component from a trial, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DisassociateTrialComponent.html">DisassociateTrialComponent</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, AssociateTrialComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, AssociateTrialComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // AssociateTrialComponentRequest
 *   TrialComponentName: "STRING_VALUE", // required
 *   TrialName: "STRING_VALUE", // required
 * };
 * const command = new AssociateTrialComponentCommand(input);
 * const response = await client.send(command);
 * // { // AssociateTrialComponentResponse
 * //   TrialComponentArn: "STRING_VALUE",
 * //   TrialArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateTrialComponentCommandInput - {@link AssociateTrialComponentCommandInput}
 * @returns {@link AssociateTrialComponentCommandOutput}
 * @see {@link AssociateTrialComponentCommandInput} for command's `input` shape.
 * @see {@link AssociateTrialComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class AssociateTrialComponentCommand extends $Command
  .classBuilder<
    AssociateTrialComponentCommandInput,
    AssociateTrialComponentCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "AssociateTrialComponent", {})
  .n("SageMakerClient", "AssociateTrialComponentCommand")
  .sc(AssociateTrialComponent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateTrialComponentRequest;
      output: AssociateTrialComponentResponse;
    };
    sdk: {
      input: AssociateTrialComponentCommandInput;
      output: AssociateTrialComponentCommandOutput;
    };
  };
}
