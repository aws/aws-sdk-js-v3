// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListEngagementResourceAssociationsRequest,
  ListEngagementResourceAssociationsResponse,
} from "../models/models_0";
import { ListEngagementResourceAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListEngagementResourceAssociationsCommandOutput extends ListEngagementResourceAssociationsResponse, __MetadataBearer {}

/**
 * Lists the associations between resources and engagements where the caller is a member and has at least one snapshot in the engagement.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, ListEngagementResourceAssociationsCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, ListEngagementResourceAssociationsCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
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
 *
 * This error occurs when you don't have permission to perform the requested action.
 *
 * You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.
 *
 * Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This error occurs when the specified resource can't be found. The resource might not exist, or isn't visible with the current credentials.
 *
 * Suggested action: Verify that the resource ID is correct and the resource is in the expected AWS region. Check IAM permissions for accessing the resource.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * This error occurs when there are too many requests sent. Review the provided quotas and adapt your usage to avoid throttling.
 *
 * This error occurs when there are too many requests sent. Review the provided [Quotas](https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html) and retry after the provided delay.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service or business validation rules.
 *
 * Suggested action: Review the error message, including the failed fields and reasons, to correct the request payload.
 *
 * @throws {@link PartnerCentralSellingServiceException}
 *
 * Base exception class for all service exceptions from PartnerCentralSelling service.
 *
 * @public
 */
export class ListEngagementResourceAssociationsCommand extends command<ListEngagementResourceAssociationsCommandInput, ListEngagementResourceAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListEngagementResourceAssociations",
  ListEngagementResourceAssociations$
) {
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
