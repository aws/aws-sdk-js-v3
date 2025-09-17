// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListEngagementInvitationsRequest,
  ListEngagementInvitationsRequestFilterSensitiveLog,
  ListEngagementInvitationsResponse,
  ListEngagementInvitationsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { de_ListEngagementInvitationsCommand, se_ListEngagementInvitationsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEngagementInvitationsCommand}.
 */
export interface ListEngagementInvitationsCommandInput extends ListEngagementInvitationsRequest {}
/**
 * @public
 *
 * The output of {@link ListEngagementInvitationsCommand}.
 */
export interface ListEngagementInvitationsCommandOutput extends ListEngagementInvitationsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of engagement invitations sent to the partner. This allows partners to view all pending or past engagement invitations, helping them track opportunities shared by AWS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, ListEngagementInvitationsCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, ListEngagementInvitationsCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // ListEngagementInvitationsRequest
 *   Catalog: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Sort: { // OpportunityEngagementInvitationSort
 *     SortOrder: "ASCENDING" || "DESCENDING", // required
 *     SortBy: "InvitationDate", // required
 *   },
 *   PayloadType: [ // EngagementInvitationsPayloadType
 *     "OpportunityInvitation",
 *   ],
 *   ParticipantType: "SENDER" || "RECEIVER", // required
 *   Status: [ // InvitationStatusList
 *     "ACCEPTED" || "PENDING" || "REJECTED" || "EXPIRED",
 *   ],
 *   EngagementIdentifier: [ // EngagementIdentifiers
 *     "STRING_VALUE",
 *   ],
 *   SenderAwsAccountId: [ // AwsAccountIdOrAliasList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListEngagementInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // ListEngagementInvitationsResponse
 * //   EngagementInvitationSummaries: [ // EngagementInvitationSummaries
 * //     { // EngagementInvitationSummary
 * //       Arn: "STRING_VALUE",
 * //       PayloadType: "OpportunityInvitation",
 * //       Id: "STRING_VALUE", // required
 * //       EngagementId: "STRING_VALUE",
 * //       EngagementTitle: "STRING_VALUE",
 * //       Status: "ACCEPTED" || "PENDING" || "REJECTED" || "EXPIRED",
 * //       InvitationDate: new Date("TIMESTAMP"),
 * //       ExpirationDate: new Date("TIMESTAMP"),
 * //       SenderAwsAccountId: "STRING_VALUE",
 * //       SenderCompanyName: "STRING_VALUE",
 * //       Receiver: { // Receiver Union: only one key present
 * //         Account: { // AccountReceiver
 * //           Alias: "STRING_VALUE",
 * //           AwsAccountId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       Catalog: "STRING_VALUE", // required
 * //       ParticipantType: "SENDER" || "RECEIVER",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEngagementInvitationsCommandInput - {@link ListEngagementInvitationsCommandInput}
 * @returns {@link ListEngagementInvitationsCommandOutput}
 * @see {@link ListEngagementInvitationsCommandInput} for command's `input` shape.
 * @see {@link ListEngagementInvitationsCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.</p> <p>Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.</p>
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
export class ListEngagementInvitationsCommand extends $Command
  .classBuilder<
    ListEngagementInvitationsCommandInput,
    ListEngagementInvitationsCommandOutput,
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
  .s("AWSPartnerCentralSelling", "ListEngagementInvitations", {})
  .n("PartnerCentralSellingClient", "ListEngagementInvitationsCommand")
  .f(ListEngagementInvitationsRequestFilterSensitiveLog, ListEngagementInvitationsResponseFilterSensitiveLog)
  .ser(se_ListEngagementInvitationsCommand)
  .de(de_ListEngagementInvitationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEngagementInvitationsRequest;
      output: ListEngagementInvitationsResponse;
    };
    sdk: {
      input: ListEngagementInvitationsCommandInput;
      output: ListEngagementInvitationsCommandOutput;
    };
  };
}
