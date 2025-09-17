// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SubmitContactEvaluationRequest, SubmitContactEvaluationResponse } from "../models/models_2";
import { de_SubmitContactEvaluationCommand, se_SubmitContactEvaluationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SubmitContactEvaluationCommand}.
 */
export interface SubmitContactEvaluationCommandInput extends SubmitContactEvaluationRequest {}
/**
 * @public
 *
 * The output of {@link SubmitContactEvaluationCommand}.
 */
export interface SubmitContactEvaluationCommandOutput extends SubmitContactEvaluationResponse, __MetadataBearer {}

/**
 * <p>Submits a contact evaluation in the specified Amazon Connect instance. Answers included
 *    in the request are merged with existing answers for the given evaluation. If no answers or notes
 *    are passed, the evaluation is submitted with the existing answers and notes. You can delete an
 *    answer or note by passing an empty object (<code>\{\}</code>) to the question identifier. </p>
 *          <p>If a contact evaluation is already in submitted state, this operation will trigger a
 *    resubmission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SubmitContactEvaluationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SubmitContactEvaluationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SubmitContactEvaluationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EvaluationId: "STRING_VALUE", // required
 *   Answers: { // EvaluationAnswersInputMap
 *     "<keys>": { // EvaluationAnswerInput
 *       Value: { // EvaluationAnswerData Union: only one key present
 *         StringValue: "STRING_VALUE",
 *         NumericValue: Number("double"),
 *         NotApplicable: true || false,
 *       },
 *     },
 *   },
 *   Notes: { // EvaluationNotesMap
 *     "<keys>": { // EvaluationNote
 *       Value: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new SubmitContactEvaluationCommand(input);
 * const response = await client.send(command);
 * // { // SubmitContactEvaluationResponse
 * //   EvaluationId: "STRING_VALUE", // required
 * //   EvaluationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SubmitContactEvaluationCommandInput - {@link SubmitContactEvaluationCommandInput}
 * @returns {@link SubmitContactEvaluationCommandOutput}
 * @see {@link SubmitContactEvaluationCommandInput} for command's `input` shape.
 * @see {@link SubmitContactEvaluationCommandOutput} for command's `response` shape.
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
export class SubmitContactEvaluationCommand extends $Command
  .classBuilder<
    SubmitContactEvaluationCommandInput,
    SubmitContactEvaluationCommandOutput,
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
  .s("AmazonConnectService", "SubmitContactEvaluation", {})
  .n("ConnectClient", "SubmitContactEvaluationCommand")
  .f(void 0, void 0)
  .ser(se_SubmitContactEvaluationCommand)
  .de(de_SubmitContactEvaluationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SubmitContactEvaluationRequest;
      output: SubmitContactEvaluationResponse;
    };
    sdk: {
      input: SubmitContactEvaluationCommandInput;
      output: SubmitContactEvaluationCommandOutput;
    };
  };
}
