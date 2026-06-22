// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import type { GetInvestigationRequest, GetInvestigationResponse } from "../models/models_0";
import { GetInvestigation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInvestigationCommand}.
 */
export interface GetInvestigationCommandInput extends GetInvestigationRequest {}
/**
 * @public
 *
 * The output of {@link GetInvestigationCommand}.
 */
export interface GetInvestigationCommandOutput extends GetInvestigationResponse, __MetadataBearer {}

/**
 * <p>This API is currently available as a preview. This feature is available in the following Amazon Web Services Regions: US East (N. Virginia), US East (Ohio), US West (Oregon), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), and Asia Pacific (Tokyo).</p> <p>Retrieves the results and status of a specific GuardDuty investigation.</p> <p>An administrator account can retrieve any investigation within the organization. Member accounts can only retrieve investigations that belong to them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetInvestigationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetInvestigationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // GetInvestigationRequest
 *   DetectorId: "STRING_VALUE", // required
 *   InvestigationId: "STRING_VALUE", // required
 * };
 * const command = new GetInvestigationCommand(input);
 * const response = await client.send(command);
 * // { // GetInvestigationResponse
 * //   Investigation: { // Investigation
 * //     InvestigationId: "STRING_VALUE", // required
 * //     Status: "RUNNING" || "COMPLETED" || "FAILED", // required
 * //     TriggerPrompt: "STRING_VALUE", // required
 * //     TriggeredBy: "STRING_VALUE", // required
 * //     Metadata: { // InvestigationMetadata
 * //       Version: "STRING_VALUE", // required
 * //       Product: { // Product
 * //         Name: "STRING_VALUE", // required
 * //         Feature: "STRING_VALUE",
 * //       },
 * //     },
 * //     Cloud: { // CloudDetails
 * //       Provider: "AWS", // required
 * //       Region: "STRING_VALUE", // required
 * //       Account: "STRING_VALUE", // required
 * //     },
 * //     RiskLevel: "Info" || "Low" || "Medium" || "High" || "Critical",
 * //     Risk: "STRING_VALUE",
 * //     Confidence: "Unknown" || "Low" || "Medium" || "High",
 * //     Summary: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     Error: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInvestigationCommandInput - {@link GetInvestigationCommandInput}
 * @returns {@link GetInvestigationCommandOutput}
 * @see {@link GetInvestigationCommandInput} for command's `input` shape.
 * @see {@link GetInvestigationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class GetInvestigationCommand extends $Command
  .classBuilder<
    GetInvestigationCommandInput,
    GetInvestigationCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "GetInvestigation", {})
  .n("GuardDutyClient", "GetInvestigationCommand")
  .sc(GetInvestigation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInvestigationRequest;
      output: GetInvestigationResponse;
    };
    sdk: {
      input: GetInvestigationCommandInput;
      output: GetInvestigationCommandOutput;
    };
  };
}
