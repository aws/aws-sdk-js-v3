// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMetricAttributionsRequest, ListMetricAttributionsResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_ListMetricAttributionsCommand, se_ListMetricAttributionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMetricAttributionsCommand}.
 */
export interface ListMetricAttributionsCommandInput extends ListMetricAttributionsRequest {}
/**
 * @public
 *
 * The output of {@link ListMetricAttributionsCommand}.
 */
export interface ListMetricAttributionsCommandOutput extends ListMetricAttributionsResponse, __MetadataBearer {}

/**
 * <p>Lists metric attributions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListMetricAttributionsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListMetricAttributionsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // ListMetricAttributionsRequest
 *   datasetGroupArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListMetricAttributionsCommand(input);
 * const response = await client.send(command);
 * // { // ListMetricAttributionsResponse
 * //   metricAttributions: [ // MetricAttributions
 * //     { // MetricAttributionSummary
 * //       name: "STRING_VALUE",
 * //       metricAttributionArn: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMetricAttributionsCommandInput - {@link ListMetricAttributionsCommandInput}
 * @returns {@link ListMetricAttributionsCommandOutput}
 * @see {@link ListMetricAttributionsCommandInput} for command's `input` shape.
 * @see {@link ListMetricAttributionsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 * @public
 */
export class ListMetricAttributionsCommand extends $Command
  .classBuilder<
    ListMetricAttributionsCommandInput,
    ListMetricAttributionsCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "ListMetricAttributions", {})
  .n("PersonalizeClient", "ListMetricAttributionsCommand")
  .f(void 0, void 0)
  .ser(se_ListMetricAttributionsCommand)
  .de(de_ListMetricAttributionsCommand)
  .build() {}
