// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEventActorsRequest, ListEventActorsResponse } from "../models/models_0";
import { ListEventActors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEventActorsCommand}.
 */
export interface ListEventActorsCommandInput extends ListEventActorsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventActorsCommand}.
 */
export interface ListEventActorsCommandOutput extends ListEventActorsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of the event actors in your account that are associated with events in the specified time window. An event actor is a client that is associated with one or more events. The operation returns up to the top 100 event actors by event count. Results are paginated. Use the <code>NextMarker</code> value from the response to retrieve the next batch of results. Currently, this operation supports API Security Amazon Web Services Managed Rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListEventActorsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListEventActorsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // ListEventActorsRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   TimeWindow: { // TimeWindow
 *     StartTime: new Date("TIMESTAMP"), // required
 *     EndTime: new Date("TIMESTAMP"), // required
 *   },
 *   SortBy: "EVENT_COUNT",
 *   Limit: Number("int"),
 *   NextMarker: "STRING_VALUE",
 * };
 * const command = new ListEventActorsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventActorsResponse
 * //   EventActors: [ // EventActorSummaryList // required
 * //     { // EventActorSummary
 * //       EventActorId: "STRING_VALUE", // required
 * //       ClientIp: "STRING_VALUE",
 * //       TlsFingerprint: "STRING_VALUE",
 * //       Asn: "STRING_VALUE",
 * //       AsnOrganization: "STRING_VALUE",
 * //       Country: "STRING_VALUE",
 * //       AuthFingerprint: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       EventCount: Number("int"),
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventActorsCommandInput - {@link ListEventActorsCommandInput}
 * @returns {@link ListEventActorsCommandOutput}
 * @see {@link ListEventActorsCommandInput} for command's `input` shape.
 * @see {@link ListEventActorsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 *
 * @public
 */
export class ListEventActorsCommand extends command<ListEventActorsCommandInput, ListEventActorsCommandOutput>(
  _ep0,
  _mw0,
  "ListEventActors",
  ListEventActors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventActorsRequest;
      output: ListEventActorsResponse;
    };
    sdk: {
      input: ListEventActorsCommandInput;
      output: ListEventActorsCommandOutput;
    };
  };
}
