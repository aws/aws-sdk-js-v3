// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSamplingRulesRequest, GetSamplingRulesResult } from "../models/models_0";
import { de_GetSamplingRulesCommand, se_GetSamplingRulesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSamplingRulesCommand}.
 */
export interface GetSamplingRulesCommandInput extends GetSamplingRulesRequest {}
/**
 * @public
 *
 * The output of {@link GetSamplingRulesCommand}.
 */
export interface GetSamplingRulesCommandOutput extends GetSamplingRulesResult, __MetadataBearer {}

/**
 * <p>Retrieves all sampling rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, GetSamplingRulesCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, GetSamplingRulesCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * // import type { XRayClientConfig } from "@aws-sdk/client-xray";
 * const config = {}; // type is XRayClientConfig
 * const client = new XRayClient(config);
 * const input = { // GetSamplingRulesRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetSamplingRulesCommand(input);
 * const response = await client.send(command);
 * // { // GetSamplingRulesResult
 * //   SamplingRuleRecords: [ // SamplingRuleRecordList
 * //     { // SamplingRuleRecord
 * //       SamplingRule: { // SamplingRule
 * //         RuleName: "STRING_VALUE",
 * //         RuleARN: "STRING_VALUE",
 * //         ResourceARN: "STRING_VALUE", // required
 * //         Priority: Number("int"), // required
 * //         FixedRate: Number("double"), // required
 * //         ReservoirSize: Number("int"), // required
 * //         ServiceName: "STRING_VALUE", // required
 * //         ServiceType: "STRING_VALUE", // required
 * //         Host: "STRING_VALUE", // required
 * //         HTTPMethod: "STRING_VALUE", // required
 * //         URLPath: "STRING_VALUE", // required
 * //         Version: Number("int"), // required
 * //         Attributes: { // AttributeMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         SamplingRateBoost: { // SamplingRateBoost
 * //           MaxRate: Number("double"), // required
 * //           CooldownWindowMinutes: Number("int"), // required
 * //         },
 * //       },
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       ModifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSamplingRulesCommandInput - {@link GetSamplingRulesCommandInput}
 * @returns {@link GetSamplingRulesCommandOutput}
 * @see {@link GetSamplingRulesCommandInput} for command's `input` shape.
 * @see {@link GetSamplingRulesCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 *
 * @public
 */
export class GetSamplingRulesCommand extends $Command
  .classBuilder<
    GetSamplingRulesCommandInput,
    GetSamplingRulesCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSXRay", "GetSamplingRules", {})
  .n("XRayClient", "GetSamplingRulesCommand")
  .f(void 0, void 0)
  .ser(se_GetSamplingRulesCommand)
  .de(de_GetSamplingRulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSamplingRulesRequest;
      output: GetSamplingRulesResult;
    };
    sdk: {
      input: GetSamplingRulesCommandInput;
      output: GetSamplingRulesCommandOutput;
    };
  };
}
