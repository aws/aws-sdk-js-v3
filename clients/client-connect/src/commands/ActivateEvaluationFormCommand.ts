// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ActivateEvaluationFormRequest, ActivateEvaluationFormResponse } from "../models/models_0";
import { ActivateEvaluationForm } from "../schemas/schemas_0";

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
 * <p>Activates an evaluation form in the specified Amazon Connect instance. After the evaluation form is
 *    activated, it is available to start new evaluations based on the form. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ActivateEvaluationFormCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ActivateEvaluationFormCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ActivateEvaluationForm", {})
  .n("ConnectClient", "ActivateEvaluationFormCommand")
  .sc(ActivateEvaluationForm)
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
