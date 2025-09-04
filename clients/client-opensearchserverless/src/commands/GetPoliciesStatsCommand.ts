// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetPoliciesStatsRequest, GetPoliciesStatsResponse } from "../models/models_0";
import {
  OpenSearchServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../OpenSearchServerlessClient";
import { de_GetPoliciesStatsCommand, se_GetPoliciesStatsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPoliciesStatsCommand}.
 */
export interface GetPoliciesStatsCommandInput extends GetPoliciesStatsRequest {}
/**
 * @public
 *
 * The output of {@link GetPoliciesStatsCommand}.
 */
export interface GetPoliciesStatsCommandOutput extends GetPoliciesStatsResponse, __MetadataBearer {}

/**
 * <p>Returns statistical information about your OpenSearch Serverless access policies, security configurations, and security policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchServerlessClient, GetPoliciesStatsCommand } from "@aws-sdk/client-opensearchserverless"; // ES Modules import
 * // const { OpenSearchServerlessClient, GetPoliciesStatsCommand } = require("@aws-sdk/client-opensearchserverless"); // CommonJS import
 * const client = new OpenSearchServerlessClient(config);
 * const input = {};
 * const command = new GetPoliciesStatsCommand(input);
 * const response = await client.send(command);
 * // { // GetPoliciesStatsResponse
 * //   AccessPolicyStats: { // AccessPolicyStats
 * //     DataPolicyCount: Number("long"),
 * //   },
 * //   SecurityPolicyStats: { // SecurityPolicyStats
 * //     EncryptionPolicyCount: Number("long"),
 * //     NetworkPolicyCount: Number("long"),
 * //   },
 * //   SecurityConfigStats: { // SecurityConfigStats
 * //     SamlConfigCount: Number("long"),
 * //   },
 * //   LifecyclePolicyStats: { // LifecyclePolicyStats
 * //     RetentionPolicyCount: Number("long"),
 * //   },
 * //   TotalPolicyCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetPoliciesStatsCommandInput - {@link GetPoliciesStatsCommandInput}
 * @returns {@link GetPoliciesStatsCommandOutput}
 * @see {@link GetPoliciesStatsCommandInput} for command's `input` shape.
 * @see {@link GetPoliciesStatsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchServerlessClientResolvedConfig | config} for OpenSearchServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Thrown when an error internal to the service occurs while processing a request.</p>
 *
 * @throws {@link OpenSearchServerlessServiceException}
 * <p>Base exception class for all service exceptions from OpenSearchServerless service.</p>
 *
 *
 * @public
 */
export class GetPoliciesStatsCommand extends $Command
  .classBuilder<
    GetPoliciesStatsCommandInput,
    GetPoliciesStatsCommandOutput,
    OpenSearchServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpenSearchServerless", "GetPoliciesStats", {})
  .n("OpenSearchServerlessClient", "GetPoliciesStatsCommand")
  .f(void 0, void 0)
  .ser(se_GetPoliciesStatsCommand)
  .de(de_GetPoliciesStatsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetPoliciesStatsResponse;
    };
    sdk: {
      input: GetPoliciesStatsCommandInput;
      output: GetPoliciesStatsCommandOutput;
    };
  };
}
