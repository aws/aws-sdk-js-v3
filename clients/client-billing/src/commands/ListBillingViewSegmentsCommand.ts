// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBillingViewSegmentsRequest, ListBillingViewSegmentsResponse } from "../models/models_0";
import { ListBillingViewSegments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBillingViewSegmentsCommand}.
 */
export interface ListBillingViewSegmentsCommandInput extends ListBillingViewSegmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListBillingViewSegmentsCommand}.
 */
export interface ListBillingViewSegmentsCommandOutput extends ListBillingViewSegmentsResponse, __MetadataBearer {}

/**
 * <p>Lists the segments of a billing view over a given time period. Each segment identifies the billing domain (<code>PRO_FORMA</code> or <code>BILLABLE</code>) and the account relationships that apply during its time range.</p> <p>If you don't provide an <code>arn</code>, the response includes segments for the caller's <code>PRIMARY</code> billing view.</p> <p>If a mid-period change occurs, the response includes multiple segments, each with its own time range. The response omits hidden segments, so the segments it returns might not cover the entire requested time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, ListBillingViewSegmentsCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, ListBillingViewSegmentsCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // ListBillingViewSegmentsRequest
 *   timeRange: { // BillingViewSegmentTimeRange
 *     beginDateInclusive: new Date("TIMESTAMP"),
 *     endDateExclusive: new Date("TIMESTAMP"),
 *   },
 *   arn: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBillingViewSegmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListBillingViewSegmentsResponse
 * //   items: [ // BillingViewSegmentsList // required
 * //     { // BillingViewSegmentsListElement
 * //       domain: "BILLABLE" || "PRO_FORMA",
 * //       timeRange: { // BillingViewSegmentTimeRange
 * //         beginDateInclusive: new Date("TIMESTAMP"),
 * //         endDateExclusive: new Date("TIMESTAMP"),
 * //       },
 * //       billingTransferAccountId: "STRING_VALUE",
 * //       managementAccountId: "STRING_VALUE",
 * //       billingGroupPrimaryAccountId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBillingViewSegmentsCommandInput - {@link ListBillingViewSegmentsCommandInput}
 * @returns {@link ListBillingViewSegmentsCommandOutput}
 * @see {@link ListBillingViewSegmentsCommandInput} for command's `input` shape.
 * @see {@link ListBillingViewSegmentsCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link BillingViewHealthStatusException} (client fault)
 *  <p> Exception thrown when a billing view's health status prevents an operation from being performed. This may occur if the billing view is in a state other than <code>HEALTHY</code>.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ARN in the request doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 *
 * @throws {@link BillingServiceException}
 * <p>Base exception class for all service exceptions from Billing service.</p>
 *
 *
 * @example Invoke ListBillingViewSegments
 * ```javascript
 * //
 * const input = {
 *   timeRange: {
 *     beginDateInclusive: 1719792000,
 *     endDateExclusive: 1722470400
 *   }
 * };
 * const command = new ListBillingViewSegmentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       billingGroupPrimaryAccountId: "333333333333",
 *       billingTransferAccountId: "111111111111",
 *       domain: "BILLABLE",
 *       managementAccountId: "222222222222",
 *       timeRange: {
 *         beginDateInclusive: 1719792000,
 *         endDateExclusive: 1722470400
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Error example for ListBillingViewSegments
 * ```javascript
 * //
 * const input = {
 *   timeRange: {
 *     beginDateInclusive: 1722470400,
 *     endDateExclusive: 1719792000
 *   }
 * };
 * const command = new ListBillingViewSegmentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ListBillingViewSegmentsCommand extends command<ListBillingViewSegmentsCommandInput, ListBillingViewSegmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListBillingViewSegments",
  ListBillingViewSegments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBillingViewSegmentsRequest;
      output: ListBillingViewSegmentsResponse;
    };
    sdk: {
      input: ListBillingViewSegmentsCommandInput;
      output: ListBillingViewSegmentsCommandOutput;
    };
  };
}
