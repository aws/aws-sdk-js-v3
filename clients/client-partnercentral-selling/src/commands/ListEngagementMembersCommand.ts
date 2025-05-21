// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListEngagementMembersRequest,
  ListEngagementMembersResponse,
  ListEngagementMembersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { de_ListEngagementMembersCommand, se_ListEngagementMembersCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEngagementMembersCommand}.
 */
export interface ListEngagementMembersCommandInput extends ListEngagementMembersRequest {}
/**
 * @public
 *
 * The output of {@link ListEngagementMembersCommand}.
 */
export interface ListEngagementMembersCommandOutput extends ListEngagementMembersResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details of member partners in an Engagement. This operation can only be invoked by members of the Engagement. The <code>ListEngagementMembers</code> operation allows you to fetch information about the members of a specific Engagement. This action is restricted to members of the Engagement being queried. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, ListEngagementMembersCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, ListEngagementMembersCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // ListEngagementMembersRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEngagementMembersCommand(input);
 * const response = await client.send(command);
 * // { // ListEngagementMembersResponse
 * //   EngagementMemberList: [ // EngagementMembers // required
 * //     { // EngagementMember
 * //       CompanyName: "STRING_VALUE",
 * //       WebsiteUrl: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEngagementMembersCommandInput - {@link ListEngagementMembersCommandInput}
 * @returns {@link ListEngagementMembersCommandOutput}
 * @see {@link ListEngagementMembersCommandInput} for command's `input` shape.
 * @see {@link ListEngagementMembersCommandOutput} for command's `response` shape.
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
export class ListEngagementMembersCommand extends $Command
  .classBuilder<
    ListEngagementMembersCommandInput,
    ListEngagementMembersCommandOutput,
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
  .s("AWSPartnerCentralSelling", "ListEngagementMembers", {})
  .n("PartnerCentralSellingClient", "ListEngagementMembersCommand")
  .f(void 0, ListEngagementMembersResponseFilterSensitiveLog)
  .ser(se_ListEngagementMembersCommand)
  .de(de_ListEngagementMembersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEngagementMembersRequest;
      output: ListEngagementMembersResponse;
    };
    sdk: {
      input: ListEngagementMembersCommandInput;
      output: ListEngagementMembersCommandOutput;
    };
  };
}
