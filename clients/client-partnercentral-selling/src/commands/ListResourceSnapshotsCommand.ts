// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListResourceSnapshotsRequest, ListResourceSnapshotsResponse } from "../models/models_0";
import type {
  PartnerCentralSellingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralSellingClient";
import { ListResourceSnapshots$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves a list of resource view snapshots based on specified criteria. This operation supports various use cases, including: </p> <ul> <li> <p>Fetching all snapshots associated with an engagement.</p> </li> <li> <p>Retrieving snapshots of a specific resource type within an engagement.</p> </li> <li> <p>Obtaining snapshots for a particular resource using a specified template.</p> </li> <li> <p>Accessing the latest snapshot of a resource within an engagement.</p> </li> <li> <p>Filtering snapshots by resource owner.</p> </li> </ul>
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
export class ListResourceSnapshotsCommand extends $Command
  .classBuilder<
    ListResourceSnapshotsCommandInput,
    ListResourceSnapshotsCommandOutput,
    PartnerCentralSellingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralSellingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPartnerCentralSelling", "ListResourceSnapshots", {})
  .n("PartnerCentralSellingClient", "ListResourceSnapshotsCommand")
  .sc(ListResourceSnapshots$)
  .build() {
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
