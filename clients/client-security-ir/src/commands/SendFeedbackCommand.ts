// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendFeedbackRequest, SendFeedbackResponse } from "../models/models_0";
import { SendFeedback$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendFeedbackCommand}.
 */
export interface SendFeedbackCommandInput extends SendFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link SendFeedbackCommand}.
 */
export interface SendFeedbackCommandOutput extends SendFeedbackResponse, __MetadataBearer {}

/**
 * Send feedback based on response investigation action
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, SendFeedbackCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, SendFeedbackCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * // import type { SecurityIRClientConfig } from "@aws-sdk/client-security-ir";
 * const config = {}; // type is SecurityIRClientConfig
 * const client = new SecurityIRClient(config);
 * const input = { // SendFeedbackRequest
 *   caseId: "STRING_VALUE", // required
 *   resultId: "STRING_VALUE", // required
 *   usefulness: "USEFUL" || "NOT_USEFUL", // required
 *   comment: "STRING_VALUE",
 * };
 * const command = new SendFeedbackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendFeedbackCommandInput - {@link SendFeedbackCommandInput}
 * @returns {@link SendFeedbackCommandOutput}
 * @see {@link SendFeedbackCommandInput} for command's `input` shape.
 * @see {@link SendFeedbackCommandOutput} for command's `response` shape.
 * @see {@link SecurityIRClientResolvedConfig | config} for SecurityIRClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * @throws {@link ConflictException} (client fault)
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * @throws {@link InvalidTokenException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link SecurityIncidentResponseNotActiveException} (client fault)
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link SecurityIRServiceException}
 *
 * Base exception class for all service exceptions from SecurityIR service.
 *
 * @example Send positive feedback for investigation result```javascript
 * //
 * const input = {
 *   caseId: "8403556009",
 *   comment: "The CloudTrail analysis was very helpful in identifying the root cause of the security incident.",
 *   resultId: "inv-polkjhyuty",
 *   usefulness: "USEFUL"
 * };
 * const command = new SendFeedbackCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example Send negative feedback with detailed comment
 * ```javascript
 * //
 * const input = {
 *   caseId: "8403556009",
 *   comment: "The investigation results were too generic and didn't provide actionable insights for our specific incident.",
 *   resultId: "inv-irutjfhgjk",
 *   usefulness: "NOT_USEFUL"
 * };
 * const command = new SendFeedbackCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SendFeedbackCommand extends command<SendFeedbackCommandInput, SendFeedbackCommandOutput>(
  _ep0,
  _mw0,
  "SendFeedback",
  SendFeedback$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendFeedbackRequest;
      output: {};
    };
    sdk: {
      input: SendFeedbackCommandInput;
      output: SendFeedbackCommandOutput;
    };
  };
}
