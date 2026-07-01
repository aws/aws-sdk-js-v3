// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFindingsFeedbackRequest, UpdateFindingsFeedbackResponse } from "../models/models_1";
import { UpdateFindingsFeedback$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFindingsFeedbackCommand}.
 */
export interface UpdateFindingsFeedbackCommandInput extends UpdateFindingsFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFindingsFeedbackCommand}.
 */
export interface UpdateFindingsFeedbackCommandOutput extends UpdateFindingsFeedbackResponse, __MetadataBearer {}

/**
 * <p>Marks the specified GuardDuty findings as useful or not useful.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateFindingsFeedbackCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateFindingsFeedbackCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // UpdateFindingsFeedbackRequest
 *   DetectorId: "STRING_VALUE", // required
 *   FindingIds: [ // FindingIds // required
 *     "STRING_VALUE",
 *   ],
 *   Feedback: "USEFUL" || "NOT_USEFUL", // required
 *   Comments: "STRING_VALUE",
 * };
 * const command = new UpdateFindingsFeedbackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateFindingsFeedbackCommandInput - {@link UpdateFindingsFeedbackCommandInput}
 * @returns {@link UpdateFindingsFeedbackCommandOutput}
 * @see {@link UpdateFindingsFeedbackCommandInput} for command's `input` shape.
 * @see {@link UpdateFindingsFeedbackCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class UpdateFindingsFeedbackCommand extends command<UpdateFindingsFeedbackCommandInput, UpdateFindingsFeedbackCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFindingsFeedback",
  UpdateFindingsFeedback$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFindingsFeedbackRequest;
      output: {};
    };
    sdk: {
      input: UpdateFindingsFeedbackCommandInput;
      output: UpdateFindingsFeedbackCommandOutput;
    };
  };
}
