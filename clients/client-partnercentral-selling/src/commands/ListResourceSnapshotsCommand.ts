// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListResourceSnapshotsRequest, ListResourceSnapshotsResponse } from "../models/models_0";
import { ListResourceSnapshots$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourceSnapshotsCommand}.
 */
export interface ListResourceSnapshotsCommandInput extends ListResourceSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceSnapshotsCommand}.
 */
export interface ListResourceSnapshotsCommandOutput extends ListResourceSnapshotsResponse, __MetadataBearer {}

/**
 * Retrieves a list of resource view snapshots based on specified criteria. This operation supports various use cases, including:
 *
 * - Fetching all snapshots associated with an engagement.
 * - Retrieving snapshots of a specific resource type within an engagement.
 * - Obtaining snapshots for a particular resource using a specified template.
 * - Accessing the latest snapshot of a resource within an engagement.
 * - Filtering snapshots by resource owner.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, ListResourceSnapshotsCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, ListResourceSnapshotsCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // ListResourceSnapshotsRequest
 *   Catalog: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   EngagementIdentifier: "STRING_VALUE", // required
 *   ResourceType: "Opportunity",
 *   ResourceIdentifier: "STRING_VALUE",
 *   ResourceSnapshotTemplateIdentifier: "STRING_VALUE",
 *   CreatedBy: "STRING_VALUE",
 * };
 * const command = new ListResourceSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceSnapshotsResponse
 * //   ResourceSnapshotSummaries: [ // ResourceSnapshotSummaryList // required
 * //     { // ResourceSnapshotSummary
 * //       Arn: "STRING_VALUE",
 * //       Revision: Number("int"),
 * //       ResourceType: "Opportunity",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceSnapshotTemplateName: "STRING_VALUE",
 * //       CreatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceSnapshotsCommandInput - {@link ListResourceSnapshotsCommandInput}
 * @returns {@link ListResourceSnapshotsCommandOutput}
 * @see {@link ListResourceSnapshotsCommandInput} for command's `input` shape.
 * @see {@link ListResourceSnapshotsCommandOutput} for command's `response` shape.
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
export class ListResourceSnapshotsCommand extends command<ListResourceSnapshotsCommandInput, ListResourceSnapshotsCommandOutput>(
  _ep0,
  _mw0,
  "ListResourceSnapshots",
  ListResourceSnapshots$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceSnapshotsRequest;
      output: ListResourceSnapshotsResponse;
    };
    sdk: {
      input: ListResourceSnapshotsCommandInput;
      output: ListResourceSnapshotsCommandOutput;
    };
  };
}
