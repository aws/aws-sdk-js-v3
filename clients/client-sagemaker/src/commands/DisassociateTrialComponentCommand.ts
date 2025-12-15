// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateTrialComponentRequest, DisassociateTrialComponentResponse } from "../models/models_3";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DisassociateTrialComponent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateTrialComponentCommand}.
 */
export interface DisassociateTrialComponentCommandInput extends DisassociateTrialComponentRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateTrialComponentCommand}.
 */
export interface DisassociateTrialComponentCommandOutput extends DisassociateTrialComponentResponse, __MetadataBearer {}

/**
 * <p>Disassociates a trial component from a trial. This doesn't effect other trials the component is associated with. Before you can delete a component, you must disassociate the component from all trials it is associated with. To associate a trial component with a trial, call the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AssociateTrialComponent.html">AssociateTrialComponent</a> API.</p> <p>To get a list of the trials a component is associated with, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API. Specify <code>ExperimentTrialComponent</code> for the <code>Resource</code> parameter. The list appears in the response under <code>Results.TrialComponent.Parents</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DisassociateTrialComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DisassociateTrialComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DisassociateTrialComponentRequest
 *   TrialComponentName: "STRING_VALUE", // required
 *   TrialName: "STRING_VALUE", // required
 * };
 * const command = new DisassociateTrialComponentCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateTrialComponentResponse
 * //   TrialComponentArn: "STRING_VALUE",
 * //   TrialArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateTrialComponentCommandInput - {@link DisassociateTrialComponentCommandInput}
 * @returns {@link DisassociateTrialComponentCommandOutput}
 * @see {@link DisassociateTrialComponentCommandInput} for command's `input` shape.
 * @see {@link DisassociateTrialComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
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
export class DisassociateTrialComponentCommand extends $Command
  .classBuilder<
    DisassociateTrialComponentCommandInput,
    DisassociateTrialComponentCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DisassociateTrialComponent", {})
  .n("SageMakerClient", "DisassociateTrialComponentCommand")
  .sc(DisassociateTrialComponent$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateTrialComponentRequest;
      output: DisassociateTrialComponentResponse;
    };
    sdk: {
      input: DisassociateTrialComponentCommandInput;
      output: DisassociateTrialComponentCommandOutput;
    };
  };
}
