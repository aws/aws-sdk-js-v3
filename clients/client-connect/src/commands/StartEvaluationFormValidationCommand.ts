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
 * Starts an asynchronous validation process for an evaluation form version in the specified Connect Customer instance. The validation first performs structural checks on the form content (such as verifying required fields, valid scoring configuration, and correct conditional logic), then asynchronously analyzes questions configured for generative AI evaluation against a set of best practices. Use [GetEvaluationFormValidation](https://docs.aws.amazon.com/connect/latest/APIReference/API_GetEvaluationFormValidation.html) to retrieve the status and results once the validation completes.
 *
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
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * A resource already has that name.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
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
