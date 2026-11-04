// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeConformancePackComplianceRequest,
  DescribeConformancePackComplianceResponse,
} from "../models/models_0";
import { DescribeConformancePackCompliance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeConformancePackComplianceCommandOutput extends DescribeConformancePackComplianceResponse, __MetadataBearer {}

/**
 * Returns compliance details for each rule in that conformance pack.
 *
 * > **Note:** You must provide exact rule names.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConformancePackComplianceCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConformancePackComplianceCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
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
 *
 * The specified limit is outside the allowable range.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The specified next token is not valid. Specify the `nextToken` string that was returned in the previous response to get the next page of results.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more of the specified parameters are not valid. Verify that your parameters are valid and try again.
 *
 * @throws {@link NoSuchConfigRuleInConformancePackException} (client fault)
 *
 * Config rule that you passed in the filter does not exist.
 *
 * @throws {@link NoSuchConformancePackException} (client fault)
 *
 * You specified one or more conformance packs that do not exist.
 *
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class DescribeConformancePackComplianceCommand extends command<DescribeConformancePackComplianceCommandInput, DescribeConformancePackComplianceCommandOutput>(
  _ep0,
  _mw0,
  "DescribeConformancePackCompliance",
  DescribeConformancePackCompliance$
) {
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
