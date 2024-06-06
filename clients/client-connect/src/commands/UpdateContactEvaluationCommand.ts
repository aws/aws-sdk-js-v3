// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateContactEvaluationRequest, UpdateContactEvaluationResponse } from "../models/models_2";
import { de_UpdateContactEvaluationCommand, se_UpdateContactEvaluationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateContactEvaluationCommand}.
 */
export interface UpdateContactEvaluationCommandInput extends UpdateContactEvaluationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactEvaluationCommand}.
 */
export interface UpdateContactEvaluationCommandOutput extends UpdateContactEvaluationResponse, __MetadataBearer {}

/**
 * <p>Updates details about a contact evaluation in the specified Amazon Connect instance. A
 *    contact evaluation must be in draft state. Answers included in the request are merged with
 *    existing answers for the given evaluation. An answer or note can be deleted by passing an empty
 *    object (<code>\{\}</code>) to the question identifier. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateContactEvaluationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateContactEvaluationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateContactEvaluationRequest
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
 * const command = new UpdateContactEvaluationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateContactEvaluationResponse
 * //   EvaluationId: "STRING_VALUE", // required
 * //   EvaluationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateContactEvaluationCommandInput - {@link UpdateContactEvaluationCommandInput}
 * @returns {@link UpdateContactEvaluationCommandOutput}
 * @see {@link UpdateContactEvaluationCommandInput} for command's `input` shape.
 * @see {@link UpdateContactEvaluationCommandOutput} for command's `response` shape.
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
export class UpdateContactEvaluationCommand extends $Command
  .classBuilder<
    UpdateContactEvaluationCommandInput,
    UpdateContactEvaluationCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "UpdateContactEvaluation", {})
  .n("ConnectClient", "UpdateContactEvaluationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateContactEvaluationCommand)
  .de(de_UpdateContactEvaluationCommand)
  .build() {}
