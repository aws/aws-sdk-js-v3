// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListHostedZoneChangeBatchesRequest, ListHostedZoneChangeBatchesResponse } from "../models/models_0";
import { ListHostedZoneChangeBatches$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListHostedZoneChangeBatchesCommand}.
 */
export interface ListHostedZoneChangeBatchesCommandInput extends ListHostedZoneChangeBatchesRequest {}
/**
 * @public
 *
 * The output of {@link ListHostedZoneChangeBatchesCommand}.
 */
export interface ListHostedZoneChangeBatchesCommandOutput extends ListHostedZoneChangeBatchesResponse, __MetadataBearer {}

/**
 * <p>Lists the change batches in an Amazon Route 53 hosted zone. For each change batch, the response contains its change ID, the operation that submitted it, and when and by whom it was submitted. It also contains the request ID, the comment if there is one, and the number of changes. Use this list to review who changed the hosted zone and when.</p>
 *          <p>Each change batch records one <code>ChangeResourceRecordSets</code> or <code>CreateHostedZone</code> request. A <code>CreateHostedZone</code> change batch has a <code>ChangeCount</code> of 0.</p>
 *          <p>You can read a change batch for 365 days after it was submitted, but not from before the <code>RetentionStartsAt</code> time that <code>GetHostedZone</code> returns in <code>Features/ChangeHistory</code>. If Change History isn't turned on for the hosted zone, Route 53 returns a <code>FeatureNotEnabled</code> error.</p>
 *          <p>Results are paginated. To get the next page, use the <code>NextToken</code> value from the response. To get the changes in a change batch, use <code>GetHostedZoneChangeBatch</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHostedZoneChangeBatchesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHostedZoneChangeBatchesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListHostedZoneChangeBatchesRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   SubmittedAfter: "STRING_VALUE",
 *   SubmittedBefore: "STRING_VALUE",
 *   StartAfterChangeId: "STRING_VALUE",
 *   SortOrder: "ASCENDING" || "DESCENDING",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListHostedZoneChangeBatchesCommand(input);
 * const response = await client.send(command);
 * // { // ListHostedZoneChangeBatchesResponse
 * //   ChangeBatchSummaries: [ // ChangeBatchSummaries // required
 * //     { // ChangeBatchSummary
 * //       ChangeId: "STRING_VALUE", // required
 * //       Operation: "CreateHostedZone" || "DeleteHostedZone" || "ChangeResourceRecordSets", // required
 * //       SubmittedAt: new Date("TIMESTAMP"), // required
 * //       SubmittedBy: "STRING_VALUE",
 * //       RequestId: "STRING_VALUE",
 * //       Comment: "STRING_VALUE",
 * //       ChangeCount: Number("long"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHostedZoneChangeBatchesCommandInput - {@link ListHostedZoneChangeBatchesCommandInput}
 * @returns {@link ListHostedZoneChangeBatchesCommandOutput}
 * @see {@link ListHostedZoneChangeBatchesCommandInput} for command's `input` shape.
 * @see {@link ListHostedZoneChangeBatchesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link FeatureNotEnabled} (client fault)
 *  <p>This error occurs when a feature that the operation requires isn't turned on for the hosted zone. For example, the tier of the hosted zone doesn't include Change History. To resolve this error, turn on the feature, or move the hosted zone to a tier that includes it.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *  <p>The value that you specified to get the second or subsequent page of results is
 * 			invalid.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class ListHostedZoneChangeBatchesCommand extends command<ListHostedZoneChangeBatchesCommandInput, ListHostedZoneChangeBatchesCommandOutput>(
  _ep0,
  _mw0,
  "ListHostedZoneChangeBatches",
  ListHostedZoneChangeBatches$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHostedZoneChangeBatchesRequest;
      output: ListHostedZoneChangeBatchesResponse;
    };
    sdk: {
      input: ListHostedZoneChangeBatchesCommandInput;
      output: ListHostedZoneChangeBatchesCommandOutput;
    };
  };
}
