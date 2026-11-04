// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEvaluationFormValidationRequest, GetEvaluationFormValidationResponse } from "../models/models_2";
import { GetEvaluationFormValidation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEvaluationFormValidationCommand}.
 */
export interface GetEvaluationFormValidationCommandInput extends GetEvaluationFormValidationRequest {}
/**
 * @public
 *
 * The output of {@link GetEvaluationFormValidationCommand}.
 */
export interface GetEvaluationFormValidationCommandOutput extends GetEvaluationFormValidationResponse, __MetadataBearer {}

/**
 * Retrieves the status and results of a validation process started by [StartEvaluationFormValidation](https://docs.aws.amazon.com/connect/latest/APIReference/API_StartEvaluationFormValidation.html). Returns the current execution status (`IN_PROGRESS`, `COMPLETED`, or `FAILED`), the validated form version, and when completed, a list of findings that identify structural issues and quality improvements for the evaluation form, and may include suggested fixes. If the validation failed, a reason is provided indicating the cause of the failure.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetEvaluationFormValidationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetEvaluationFormValidationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // GetEvaluationFormValidationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EvaluationFormId: "STRING_VALUE", // required
 *   EvaluationFormVersion: Number("int"),
 * };
 * const command = new GetEvaluationFormValidationCommand(input);
 * const response = await client.send(command);
 * // { // GetEvaluationFormValidationResponse
 * //   Status: "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //   FailureReason: "STRING_VALUE",
 * //   EvaluationFormId: "STRING_VALUE", // required
 * //   EvaluationFormVersion: Number("int"), // required
 * //   StartedTime: new Date("TIMESTAMP"), // required
 * //   Findings: [ // EvaluationFormValidationFindingList
 * //     { // EvaluationFormValidationFinding
 * //       IssueCode: "STRING_VALUE", // required
 * //       Items: [ // EvaluationFormValidationFindingItemList
 * //         { // EvaluationFormValidationFindingItem
 * //           RefId: "STRING_VALUE",
 * //           Property: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Description: "STRING_VALUE", // required
 * //       Suggestion: "STRING_VALUE",
 * //       Severity: "WARNING" || "ERROR", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetEvaluationFormValidationCommandInput - {@link GetEvaluationFormValidationCommandInput}
 * @returns {@link GetEvaluationFormValidationCommandOutput}
 * @see {@link GetEvaluationFormValidationCommandInput} for command's `input` shape.
 * @see {@link GetEvaluationFormValidationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
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
export class GetEvaluationFormValidationCommand extends command<GetEvaluationFormValidationCommandInput, GetEvaluationFormValidationCommandOutput>(
  _ep0,
  _mw0,
  "GetEvaluationFormValidation",
  GetEvaluationFormValidation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEvaluationFormValidationRequest;
      output: GetEvaluationFormValidationResponse;
    };
    sdk: {
      input: GetEvaluationFormValidationCommandInput;
      output: GetEvaluationFormValidationCommandOutput;
    };
  };
}
