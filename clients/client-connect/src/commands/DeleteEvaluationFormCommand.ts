// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEvaluationFormRequest } from "../models/models_0";
import { de_DeleteEvaluationFormCommand, se_DeleteEvaluationFormCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEvaluationFormCommand}.
 */
export interface DeleteEvaluationFormCommandInput extends DeleteEvaluationFormRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEvaluationFormCommand}.
 */
export interface DeleteEvaluationFormCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an evaluation form in the specified Amazon Connect instance. </p>
 *          <ul>
 *             <li>
 *                <p>If the version property is provided, only the specified version of the evaluation form is
 *      deleted.</p>
 *             </li>
 *             <li>
 *                <p>If no version is provided, then the full form (all versions) is deleted.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteEvaluationFormCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteEvaluationFormCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // DeleteEvaluationFormRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EvaluationFormId: "STRING_VALUE", // required
 *   EvaluationFormVersion: Number("int"),
 * };
 * const command = new DeleteEvaluationFormCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEvaluationFormCommandInput - {@link DeleteEvaluationFormCommandInput}
 * @returns {@link DeleteEvaluationFormCommandOutput}
 * @see {@link DeleteEvaluationFormCommandInput} for command's `input` shape.
 * @see {@link DeleteEvaluationFormCommandOutput} for command's `response` shape.
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
export class DeleteEvaluationFormCommand extends $Command
  .classBuilder<
    DeleteEvaluationFormCommandInput,
    DeleteEvaluationFormCommandOutput,
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
  .s("AmazonConnectService", "DeleteEvaluationForm", {})
  .n("ConnectClient", "DeleteEvaluationFormCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEvaluationFormCommand)
  .de(de_DeleteEvaluationFormCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEvaluationFormRequest;
      output: {};
    };
    sdk: {
      input: DeleteEvaluationFormCommandInput;
      output: DeleteEvaluationFormCommandOutput;
    };
  };
}
