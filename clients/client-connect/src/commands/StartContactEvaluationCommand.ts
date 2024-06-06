// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartContactEvaluationRequest, StartContactEvaluationResponse } from "../models/models_2";
import { de_StartContactEvaluationCommand, se_StartContactEvaluationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartContactEvaluationCommand}.
 */
export interface StartContactEvaluationCommandInput extends StartContactEvaluationRequest {}
/**
 * @public
 *
 * The output of {@link StartContactEvaluationCommand}.
 */
export interface StartContactEvaluationCommandOutput extends StartContactEvaluationResponse, __MetadataBearer {}

/**
 * <p>Starts an empty evaluation in the specified Amazon Connect instance, using the given
 *    evaluation form for the particular contact. The evaluation form version used for the contact
 *    evaluation corresponds to the currently activated version. If no version is activated for the
 *    evaluation form, the contact evaluation cannot be started. </p>
 *          <note>
 *             <p>Evaluations created through the public API do not contain answer values suggested from
 *     automation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartContactEvaluationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartContactEvaluationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // StartContactEvaluationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   EvaluationFormId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new StartContactEvaluationCommand(input);
 * const response = await client.send(command);
 * // { // StartContactEvaluationResponse
 * //   EvaluationId: "STRING_VALUE", // required
 * //   EvaluationArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartContactEvaluationCommandInput - {@link StartContactEvaluationCommandInput}
 * @returns {@link StartContactEvaluationCommandOutput}
 * @see {@link StartContactEvaluationCommandInput} for command's `input` shape.
 * @see {@link StartContactEvaluationCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class StartContactEvaluationCommand extends $Command
  .classBuilder<
    StartContactEvaluationCommandInput,
    StartContactEvaluationCommandOutput,
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
  .s("AmazonConnectService", "StartContactEvaluation", {})
  .n("ConnectClient", "StartContactEvaluationCommand")
  .f(void 0, void 0)
  .ser(se_StartContactEvaluationCommand)
  .de(de_StartContactEvaluationCommand)
  .build() {}
