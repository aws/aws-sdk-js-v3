// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListConformancePackComplianceScoresRequest,
  ListConformancePackComplianceScoresResponse,
} from "../models/models_0";
import {
  de_ListConformancePackComplianceScoresCommand,
  se_ListConformancePackComplianceScoresCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConformancePackComplianceScoresCommand}.
 */
export interface ListConformancePackComplianceScoresCommandInput extends ListConformancePackComplianceScoresRequest {}
/**
 * @public
 *
 * The output of {@link ListConformancePackComplianceScoresCommand}.
 */
export interface ListConformancePackComplianceScoresCommandOutput
  extends ListConformancePackComplianceScoresResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of conformance pack compliance scores.
 * 			A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack.
 * 			This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand
 * 			the level of compliance in your conformance packs.</p>
 *          <note>
 *             <p>Conformance packs with no evaluation results will have a compliance score of <code>INSUFFICIENT_DATA</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, ListConformancePackComplianceScoresCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, ListConformancePackComplianceScoresCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // ListConformancePackComplianceScoresRequest
 *   Filters: { // ConformancePackComplianceScoresFilters
 *     ConformancePackNames: [ // ConformancePackNameFilter // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   SortOrder: "ASCENDING" || "DESCENDING",
 *   SortBy: "SCORE",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListConformancePackComplianceScoresCommand(input);
 * const response = await client.send(command);
 * // { // ListConformancePackComplianceScoresResponse
 * //   NextToken: "STRING_VALUE",
 * //   ConformancePackComplianceScores: [ // ConformancePackComplianceScores // required
 * //     { // ConformancePackComplianceScore
 * //       Score: "STRING_VALUE",
 * //       ConformancePackName: "STRING_VALUE",
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListConformancePackComplianceScoresCommandInput - {@link ListConformancePackComplianceScoresCommandInput}
 * @returns {@link ListConformancePackComplianceScoresCommandOutput}
 * @see {@link ListConformancePackComplianceScoresCommandInput} for command's `input` shape.
 * @see {@link ListConformancePackComplianceScoresCommandOutput} for command's `response` shape.
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
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class ListConformancePackComplianceScoresCommand extends $Command
  .classBuilder<
    ListConformancePackComplianceScoresCommandInput,
    ListConformancePackComplianceScoresCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "ListConformancePackComplianceScores", {})
  .n("ConfigServiceClient", "ListConformancePackComplianceScoresCommand")
  .f(void 0, void 0)
  .ser(se_ListConformancePackComplianceScoresCommand)
  .de(de_ListConformancePackComplianceScoresCommand)
  .build() {}
