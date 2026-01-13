// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetConformancePackComplianceSummaryRequest,
  GetConformancePackComplianceSummaryResponse,
} from "../models/models_0";
import { GetConformancePackComplianceSummary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConformancePackComplianceSummaryCommand}.
 */
export interface GetConformancePackComplianceSummaryCommandInput extends GetConformancePackComplianceSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetConformancePackComplianceSummaryCommand}.
 */
export interface GetConformancePackComplianceSummaryCommandOutput extends GetConformancePackComplianceSummaryResponse, __MetadataBearer {}

/**
 * <p>Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetConformancePackComplianceSummaryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetConformancePackComplianceSummaryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // GetConformancePackComplianceSummaryRequest
 *   ConformancePackNames: [ // ConformancePackNamesToSummarizeList // required
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetConformancePackComplianceSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetConformancePackComplianceSummaryResponse
 * //   ConformancePackComplianceSummaryList: [ // ConformancePackComplianceSummaryList
 * //     { // ConformancePackComplianceSummary
 * //       ConformancePackName: "STRING_VALUE", // required
 * //       ConformancePackComplianceStatus: "COMPLIANT" || "NON_COMPLIANT" || "INSUFFICIENT_DATA", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConformancePackComplianceSummaryCommandInput - {@link GetConformancePackComplianceSummaryCommandInput}
 * @returns {@link GetConformancePackComplianceSummaryCommandOutput}
 * @see {@link GetConformancePackComplianceSummaryCommandInput} for command's `input` shape.
 * @see {@link GetConformancePackComplianceSummaryCommandOutput} for command's `response` shape.
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
 * @throws {@link NoSuchConformancePackException} (client fault)
 *  <p>You specified one or more conformance packs that do not exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class GetConformancePackComplianceSummaryCommand extends $Command
  .classBuilder<
    GetConformancePackComplianceSummaryCommandInput,
    GetConformancePackComplianceSummaryCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "GetConformancePackComplianceSummary", {})
  .n("ConfigServiceClient", "GetConformancePackComplianceSummaryCommand")
  .sc(GetConformancePackComplianceSummary$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConformancePackComplianceSummaryRequest;
      output: GetConformancePackComplianceSummaryResponse;
    };
    sdk: {
      input: GetConformancePackComplianceSummaryCommandInput;
      output: GetConformancePackComplianceSummaryCommandOutput;
    };
  };
}
