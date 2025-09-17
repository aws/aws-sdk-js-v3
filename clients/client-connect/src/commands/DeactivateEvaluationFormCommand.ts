// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeactivateEvaluationFormRequest, DeactivateEvaluationFormResponse } from "../models/models_0";
import { de_DeactivateEvaluationFormCommand, se_DeactivateEvaluationFormCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeactivateEvaluationFormCommand}.
 */
export interface DeactivateEvaluationFormCommandInput extends DeactivateEvaluationFormRequest {}
/**
 * @public
 *
 * The output of {@link DeactivateEvaluationFormCommand}.
 */
export interface DeactivateEvaluationFormCommandOutput extends DeactivateEvaluationFormResponse, __MetadataBearer {}

/**
 * <p>Deactivates an evaluation form in the specified Amazon Connect instance. After a form is deactivated,
 *    it is no longer available for users to start new evaluations based on the form. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeactivateEvaluationFormCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeactivateEvaluationFormCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeactivateEvaluationFormRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EvaluationFormId: "STRING_VALUE", // required
 *   EvaluationFormVersion: Number("int"), // required
 * };
 * const command = new DeactivateEvaluationFormCommand(input);
 * const response = await client.send(command);
 * // { // DeactivateEvaluationFormResponse
 * //   EvaluationFormId: "STRING_VALUE", // required
 * //   EvaluationFormArn: "STRING_VALUE", // required
 * //   EvaluationFormVersion: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param DeactivateEvaluationFormCommandInput - {@link DeactivateEvaluationFormCommandInput}
 * @returns {@link DeactivateEvaluationFormCommandOutput}
 * @see {@link DeactivateEvaluationFormCommandInput} for command's `input` shape.
 * @see {@link DeactivateEvaluationFormCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DeactivateEvaluationFormCommand extends $Command
  .classBuilder<
    DeactivateEvaluationFormCommandInput,
    DeactivateEvaluationFormCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DeactivateEvaluationForm", {})
  .n("ConnectClient", "DeactivateEvaluationFormCommand")
  .f(void 0, void 0)
  .ser(se_DeactivateEvaluationFormCommand)
  .de(de_DeactivateEvaluationFormCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeactivateEvaluationFormRequest;
      output: DeactivateEvaluationFormResponse;
    };
    sdk: {
      input: DeactivateEvaluationFormCommandInput;
      output: DeactivateEvaluationFormCommandOutput;
    };
  };
}
