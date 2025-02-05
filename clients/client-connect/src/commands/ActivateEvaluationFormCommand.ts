// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ActivateEvaluationFormRequest, ActivateEvaluationFormResponse } from "../models/models_0";
import { de_ActivateEvaluationFormCommand, se_ActivateEvaluationFormCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ActivateEvaluationFormCommand}.
 */
export interface ActivateEvaluationFormCommandInput extends ActivateEvaluationFormRequest {}
/**
 * @public
 *
 * The output of {@link ActivateEvaluationFormCommand}.
 */
export interface ActivateEvaluationFormCommandOutput extends ActivateEvaluationFormResponse, __MetadataBearer {}

/**
 * <p>Activates an evaluation form in the specified Amazon Connect instance. After the
 *    evaluation form is activated, it is available to start new evaluations based on the form. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ActivateEvaluationFormCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ActivateEvaluationFormCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // ActivateEvaluationFormRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EvaluationFormId: "STRING_VALUE", // required
 *   EvaluationFormVersion: Number("int"), // required
 * };
 * const command = new ActivateEvaluationFormCommand(input);
 * const response = await client.send(command);
 * // { // ActivateEvaluationFormResponse
 * //   EvaluationFormId: "STRING_VALUE", // required
 * //   EvaluationFormArn: "STRING_VALUE", // required
 * //   EvaluationFormVersion: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ActivateEvaluationFormCommandInput - {@link ActivateEvaluationFormCommandInput}
 * @returns {@link ActivateEvaluationFormCommandOutput}
 * @see {@link ActivateEvaluationFormCommandInput} for command's `input` shape.
 * @see {@link ActivateEvaluationFormCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ActivateEvaluationFormCommand extends $Command
  .classBuilder<
    ActivateEvaluationFormCommandInput,
    ActivateEvaluationFormCommandOutput,
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
  .s("AmazonConnectService", "ActivateEvaluationForm", {})
  .n("ConnectClient", "ActivateEvaluationFormCommand")
  .f(void 0, void 0)
  .ser(se_ActivateEvaluationFormCommand)
  .de(de_ActivateEvaluationFormCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ActivateEvaluationFormRequest;
      output: ActivateEvaluationFormResponse;
    };
    sdk: {
      input: ActivateEvaluationFormCommandInput;
      output: ActivateEvaluationFormCommandOutput;
    };
  };
}
