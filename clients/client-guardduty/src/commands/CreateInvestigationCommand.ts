// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import type { CreateInvestigationRequest, CreateInvestigationResponse } from "../models/models_0";
import { CreateInvestigation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInvestigationCommand}.
 */
export interface CreateInvestigationCommandInput extends CreateInvestigationRequest {}
/**
 * @public
 *
 * The output of {@link CreateInvestigationCommand}.
 */
export interface CreateInvestigationCommandOutput extends CreateInvestigationResponse, __MetadataBearer {}

/**
 * <p>This API is currently available as a preview. During the preview, you can initiate up to 10 investigations per account per day, with a total limit of 100 investigations per account. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo).</p> <p>Initiates a GuardDuty investigation that automatically analyzes security findings, correlates related activity, performs account-level analysis, and produces a structured investigation summary with recommended next steps.</p> <p>Only the administrator account can create an investigation. Member accounts don't have permission to create investigations from their accounts.</p> <p>To use this operation, the <code>AI_ANALYST</code> feature must be enabled on your detector.</p> <p>This feature uses Amazon Bedrock models that leverage Cross-Region Inference (CRIS), which automatically selects the optimal Amazon Web Services Region within your geography to process the investigation analysis and generate the investigation report. This maximizes available compute resources, model availability, and delivers the best customer experience. Your data remains stored only in the Region where the investigation request originates, however, investigation data and summary results may be processed outside that Region. All data is transmitted encrypted across Amazon's secure network. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty-investigation.html">GuardDuty Investigation</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateInvestigationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateInvestigationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // CreateInvestigationRequest
 *   DetectorId: "STRING_VALUE", // required
 *   TriggerPrompt: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateInvestigationCommand(input);
 * const response = await client.send(command);
 * // { // CreateInvestigationResponse
 * //   InvestigationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateInvestigationCommandInput - {@link CreateInvestigationCommandInput}
 * @returns {@link CreateInvestigationCommandOutput}
 * @see {@link CreateInvestigationCommandInput} for command's `input` shape.
 * @see {@link CreateInvestigationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An access denied exception object.</p>
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
export class CreateInvestigationCommand extends $Command
  .classBuilder<
    CreateInvestigationCommandInput,
    CreateInvestigationCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "CreateInvestigation", {})
  .n("GuardDutyClient", "CreateInvestigationCommand")
  .sc(CreateInvestigation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInvestigationRequest;
      output: CreateInvestigationResponse;
    };
    sdk: {
      input: CreateInvestigationCommandInput;
      output: CreateInvestigationCommandOutput;
    };
  };
}
