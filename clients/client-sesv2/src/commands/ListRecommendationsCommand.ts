// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRecommendationsRequest, ListRecommendationsResponse } from "../models/models_0";
import { de_ListRecommendationsCommand, se_ListRecommendationsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecommendationsCommand}.
 */
export interface ListRecommendationsCommandInput extends ListRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendationsCommand}.
 */
export interface ListRecommendationsCommandOutput extends ListRecommendationsResponse, __MetadataBearer {}

/**
 * <p>Lists the recommendations present in your Amazon SES account in the current Amazon Web Services Region.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListRecommendationsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListRecommendationsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // ListRecommendationsRequest
 *   Filter: { // ListRecommendationsFilter
 *     "<keys>": "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationsResponse
 * //   Recommendations: [ // RecommendationsList
 * //     { // Recommendation
 * //       ResourceArn: "STRING_VALUE",
 * //       Type: "DKIM" || "DMARC" || "SPF" || "BIMI",
 * //       Description: "STRING_VALUE",
 * //       Status: "OPEN" || "FIXED",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //       Impact: "LOW" || "HIGH",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecommendationsCommandInput - {@link ListRecommendationsCommandInput}
 * @returns {@link ListRecommendationsCommandOutput}
 * @see {@link ListRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 * @public
 */
export class ListRecommendationsCommand extends $Command
  .classBuilder<
    ListRecommendationsCommandInput,
    ListRecommendationsCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "ListRecommendations", {})
  .n("SESv2Client", "ListRecommendationsCommand")
  .f(void 0, void 0)
  .ser(se_ListRecommendationsCommand)
  .de(de_ListRecommendationsCommand)
  .build() {}
