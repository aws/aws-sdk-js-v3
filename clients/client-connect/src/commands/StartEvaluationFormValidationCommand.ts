// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartEvaluationFormValidationRequest, StartEvaluationFormValidationResponse } from "../models/models_3";
import { StartEvaluationFormValidation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartEvaluationFormValidationCommand}.
 */
export interface StartEvaluationFormValidationCommandInput extends StartEvaluationFormValidationRequest {}
/**
 * @public
 *
 * The output of {@link StartEvaluationFormValidationCommand}.
 */
export interface StartEvaluationFormValidationCommandOutput extends StartEvaluationFormValidationResponse, __MetadataBearer {}

/**
 * <p>Starts an asynchronous validation process for an evaluation form version in the specified Connect Customer
 *    instance. The validation first performs structural checks on the form content (such as verifying required fields,
 *    valid scoring configuration, and correct conditional logic), then asynchronously analyzes questions configured for
 *    generative AI evaluation against a set of best practices. Use <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetEvaluationFormValidation.html">GetEvaluationFormValidation</a> to
 *    retrieve the status and results once the validation completes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartEvaluationFormValidationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartEvaluationFormValidationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StartEvaluationFormValidationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EvaluationFormId: "STRING_VALUE", // required
 *   EvaluationFormVersion: Number("int"), // required
 * };
 * const command = new StartEvaluationFormValidationCommand(input);
 * const response = await client.send(command);
 * // { // StartEvaluationFormValidationResponse
 * //   EvaluationFormId: "STRING_VALUE", // required
 * //   EvaluationFormArn: "STRING_VALUE", // required
 * //   EvaluationFormVersion: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param StartEvaluationFormValidationCommandInput - {@link StartEvaluationFormValidationCommandInput}
 * @returns {@link StartEvaluationFormValidationCommandOutput}
 * @see {@link StartEvaluationFormValidationCommandInput} for command's `input` shape.
 * @see {@link StartEvaluationFormValidationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class StartEvaluationFormValidationCommand extends command<StartEvaluationFormValidationCommandInput, StartEvaluationFormValidationCommandOutput>(
  _ep0,
  _mw0,
  "StartEvaluationFormValidation",
  StartEvaluationFormValidation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartEvaluationFormValidationRequest;
      output: StartEvaluationFormValidationResponse;
    };
    sdk: {
      input: StartEvaluationFormValidationCommandInput;
      output: StartEvaluationFormValidationCommandOutput;
    };
  };
}
