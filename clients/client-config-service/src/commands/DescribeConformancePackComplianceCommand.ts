// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeConformancePackComplianceRequest,
  DescribeConformancePackComplianceResponse,
} from "../models/models_0";
import {
  de_DescribeConformancePackComplianceCommand,
  se_DescribeConformancePackComplianceCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConformancePackComplianceCommand}.
 */
export interface DescribeConformancePackComplianceCommandInput extends DescribeConformancePackComplianceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConformancePackComplianceCommand}.
 */
export interface DescribeConformancePackComplianceCommandOutput
  extends DescribeConformancePackComplianceResponse,
    __MetadataBearer {}

/**
 * <p>Returns compliance details for each rule in that conformance pack.</p>
 *          <note>
 *             <p>You must provide exact rule names.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConformancePackComplianceCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConformancePackComplianceCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeConformancePackComplianceRequest
 *   ConformancePackName: "STRING_VALUE", // required
 *   Filters: { // ConformancePackComplianceFilters
 *     ConfigRuleNames: [ // ConformancePackConfigRuleNames
 *       "STRING_VALUE",
 *     ],
 *     ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "INSUFFICIENT_DATA",
 *   },
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeConformancePackComplianceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConformancePackComplianceResponse
 * //   ConformancePackName: "STRING_VALUE", // required
 * //   ConformancePackRuleComplianceList: [ // ConformancePackRuleComplianceList // required
 * //     { // ConformancePackRuleCompliance
 * //       ConfigRuleName: "STRING_VALUE",
 * //       ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "INSUFFICIENT_DATA",
 * //       Controls: [ // ControlsList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConformancePackComplianceCommandInput - {@link DescribeConformancePackComplianceCommandInput}
 * @returns {@link DescribeConformancePackComplianceCommandOutput}
 * @see {@link DescribeConformancePackComplianceCommandInput} for command's `input` shape.
 * @see {@link DescribeConformancePackComplianceCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link NoSuchConfigRuleInConformancePackException} (client fault)
 *  <p>Config rule that you passed in the filter does not exist.</p>
 *
 * @throws {@link NoSuchConformancePackException} (client fault)
 *  <p>You specified one or more conformance packs that do not exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class DescribeConformancePackComplianceCommand extends $Command
  .classBuilder<
    DescribeConformancePackComplianceCommandInput,
    DescribeConformancePackComplianceCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "DescribeConformancePackCompliance", {})
  .n("ConfigServiceClient", "DescribeConformancePackComplianceCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConformancePackComplianceCommand)
  .de(de_DescribeConformancePackComplianceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConformancePackComplianceRequest;
      output: DescribeConformancePackComplianceResponse;
    };
    sdk: {
      input: DescribeConformancePackComplianceCommandInput;
      output: DescribeConformancePackComplianceCommandOutput;
    };
  };
}
