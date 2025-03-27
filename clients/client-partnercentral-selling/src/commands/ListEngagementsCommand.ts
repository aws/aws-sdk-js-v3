// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListEngagementsRequest,
  ListEngagementsRequestFilterSensitiveLog,
  ListEngagementsResponse,
  ListEngagementsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { de_ListEngagementsCommand, se_ListEngagementsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEngagementsCommand}.
 */
export interface ListEngagementsCommandInput extends ListEngagementsRequest {}
/**
 * @public
 *
 * The output of {@link ListEngagementsCommand}.
 */
export interface ListEngagementsCommandOutput extends ListEngagementsResponse, __MetadataBearer {}

/**
 * <p>This action allows users to retrieve a list of Engagement records from Partner
 *             Central. This action can be used to manage and track various engagements across
 *             different stages of the partner selling process. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, ListEngagementsCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, ListEngagementsCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // ListEngagementsRequest
 *   Catalog: "STRING_VALUE", // required
 *   CreatedBy: [ // AwsAccountList
 *     "STRING_VALUE",
 *   ],
 *   ExcludeCreatedBy: [
 *     "STRING_VALUE",
 *   ],
 *   Sort: { // EngagementSort
 *     SortOrder: "ASCENDING" || "DESCENDING", // required
 *     SortBy: "CreatedDate", // required
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   EngagementIdentifier: [ // EngagementIdentifiers
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListEngagementsCommand(input);
 * const response = await client.send(command);
 * // { // ListEngagementsResponse
 * //   EngagementSummaryList: [ // EngagementSummaryList // required
 * //     { // EngagementSummary
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Title: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       CreatedBy: "STRING_VALUE",
 * //       MemberCount: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEngagementsCommandInput - {@link ListEngagementsCommandInput}
 * @returns {@link ListEngagementsCommandOutput}
 * @see {@link ListEngagementsCommandInput} for command's `input` shape.
 * @see {@link ListEngagementsCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested
 *             action.</p>
 *          <p>You don’t have access to this action or resource. Review IAM policies or contact your
 *             AWS administrator for assistance.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not
 *             exist, or isn't visible with the current credentials.</p>
 *          <p>Suggested action: Verify that the resource ID is correct and the resource is in the
 *             expected AWS region. Check IAM permissions for accessing the resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error occurs when there are too many requests sent. Review the provided quotas
 *             and adapt your usage to avoid throttling.</p>
 *          <p>This error occurs when there are too many requests sent. Review the provided <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">Quotas</a> and retry after the provided delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service or business
 *             validation rules.</p>
 *          <p>Suggested action: Review the error message, including the failed fields and reasons,
 *             to correct the request payload.</p>
 *
 * @throws {@link PartnerCentralSellingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralSelling service.</p>
 *
 *
 * @public
 */
export class ListEngagementsCommand extends $Command
  .classBuilder<
    ListEngagementsCommandInput,
    ListEngagementsCommandOutput,
    PartnerCentralSellingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralSellingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSPartnerCentralSelling", "ListEngagements", {})
  .n("PartnerCentralSellingClient", "ListEngagementsCommand")
  .f(ListEngagementsRequestFilterSensitiveLog, ListEngagementsResponseFilterSensitiveLog)
  .ser(se_ListEngagementsCommand)
  .de(de_ListEngagementsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEngagementsRequest;
      output: ListEngagementsResponse;
    };
    sdk: {
      input: ListEngagementsCommandInput;
      output: ListEngagementsCommandOutput;
    };
  };
}
