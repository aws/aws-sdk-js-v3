// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetComplianceSummaryByConfigRuleResponse } from "../models/models_0";
import { GetComplianceSummaryByConfigRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetComplianceSummaryByConfigRuleCommand}.
 */
export interface GetComplianceSummaryByConfigRuleCommandInput {}
/**
 * @public
 *
 * The output of {@link GetComplianceSummaryByConfigRuleCommand}.
 */
export interface GetComplianceSummaryByConfigRuleCommandOutput extends GetComplianceSummaryByConfigRuleResponse, __MetadataBearer {}

/**
 * <p>Returns the number of Config rules that are compliant and
 * 			noncompliant, up to a maximum of 25 for each.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetComplianceSummaryByConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetComplianceSummaryByConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = {};
 * const command = new GetComplianceSummaryByConfigRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetComplianceSummaryByConfigRuleResponse
 * //   ComplianceSummary: { // ComplianceSummary
 * //     CompliantResourceCount: { // ComplianceContributorCount
 * //       CappedCount: Number("int"),
 * //       CapExceeded: true || false,
 * //     },
 * //     NonCompliantResourceCount: {
 * //       CappedCount: Number("int"),
 * //       CapExceeded: true || false,
 * //     },
 * //     ComplianceSummaryTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetComplianceSummaryByConfigRuleCommandInput - {@link GetComplianceSummaryByConfigRuleCommandInput}
 * @returns {@link GetComplianceSummaryByConfigRuleCommandOutput}
 * @see {@link GetComplianceSummaryByConfigRuleCommandInput} for command's `input` shape.
 * @see {@link GetComplianceSummaryByConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class GetComplianceSummaryByConfigRuleCommand extends $Command
  .classBuilder<
    GetComplianceSummaryByConfigRuleCommandInput,
    GetComplianceSummaryByConfigRuleCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "GetComplianceSummaryByConfigRule", {})
  .n("ConfigServiceClient", "GetComplianceSummaryByConfigRuleCommand")
  .sc(GetComplianceSummaryByConfigRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetComplianceSummaryByConfigRuleResponse;
    };
    sdk: {
      input: GetComplianceSummaryByConfigRuleCommandInput;
      output: GetComplianceSummaryByConfigRuleCommandOutput;
    };
  };
}
