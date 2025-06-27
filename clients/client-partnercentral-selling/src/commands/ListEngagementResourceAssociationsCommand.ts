// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListEngagementResourceAssociationsRequest,
  ListEngagementResourceAssociationsRequestFilterSensitiveLog,
  ListEngagementResourceAssociationsResponse,
  ListEngagementResourceAssociationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import {
  de_ListEngagementResourceAssociationsCommand,
  se_ListEngagementResourceAssociationsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEngagementResourceAssociationsCommand}.
 */
export interface ListEngagementResourceAssociationsCommandInput extends ListEngagementResourceAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListEngagementResourceAssociationsCommand}.
 */
export interface ListEngagementResourceAssociationsCommandOutput
  extends ListEngagementResourceAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the associations between resources and engagements where the caller is a member and has at least one snapshot in the engagement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, ListEngagementResourceAssociationsCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, ListEngagementResourceAssociationsCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // ListEngagementResourceAssociationsRequest
 *   Catalog: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   EngagementIdentifier: "STRING_VALUE",
 *   ResourceType: "Opportunity",
 *   ResourceIdentifier: "STRING_VALUE",
 *   CreatedBy: "STRING_VALUE",
 * };
 * const command = new ListEngagementResourceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListEngagementResourceAssociationsResponse
 * //   EngagementResourceAssociationSummaries: [ // EngagementResourceAssociationSummaryList // required
 * //     { // EngagementResourceAssociationSummary
 * //       Catalog: "STRING_VALUE", // required
 * //       EngagementId: "STRING_VALUE",
 * //       ResourceType: "Opportunity",
 * //       ResourceId: "STRING_VALUE",
 * //       CreatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEngagementResourceAssociationsCommandInput - {@link ListEngagementResourceAssociationsCommandInput}
 * @returns {@link ListEngagementResourceAssociationsCommandOutput}
 * @see {@link ListEngagementResourceAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListEngagementResourceAssociationsCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not exist, or isn't visible with the current credentials.</p> <p>Suggested action: Verify that the resource ID is correct and the resource is in the expected AWS region. Check IAM permissions for accessing the resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error occurs when there are too many requests sent. Review the provided quotas and adapt your usage to avoid throttling.</p> <p>This error occurs when there are too many requests sent. Review the provided <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">Quotas</a> and retry after the provided delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service or business validation rules.</p> <p>Suggested action: Review the error message, including the failed fields and reasons, to correct the request payload.</p>
 *
 * @throws {@link PartnerCentralSellingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralSelling service.</p>
 *
 *
 * @public
 */
export class ListEngagementResourceAssociationsCommand extends $Command
  .classBuilder<
    ListEngagementResourceAssociationsCommandInput,
    ListEngagementResourceAssociationsCommandOutput,
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
  .s("AWSPartnerCentralSelling", "ListEngagementResourceAssociations", {})
  .n("PartnerCentralSellingClient", "ListEngagementResourceAssociationsCommand")
  .f(
    ListEngagementResourceAssociationsRequestFilterSensitiveLog,
    ListEngagementResourceAssociationsResponseFilterSensitiveLog
  )
  .ser(se_ListEngagementResourceAssociationsCommand)
  .de(de_ListEngagementResourceAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEngagementResourceAssociationsRequest;
      output: ListEngagementResourceAssociationsResponse;
    };
    sdk: {
      input: ListEngagementResourceAssociationsCommandInput;
      output: ListEngagementResourceAssociationsCommandOutput;
    };
  };
}
