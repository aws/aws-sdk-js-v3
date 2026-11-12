// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListResourceRecordSetProtectionsRequest,
  ListResourceRecordSetProtectionsResponse,
} from "../models/models_0";
import { ListResourceRecordSetProtections$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListResourceRecordSetProtectionsCommand}.
 */
export interface ListResourceRecordSetProtectionsCommandInput extends ListResourceRecordSetProtectionsRequest {}
/**
 * @public
 *
 * The output of {@link ListResourceRecordSetProtectionsCommand}.
 */
export interface ListResourceRecordSetProtectionsCommandOutput extends ListResourceRecordSetProtectionsResponse, __MetadataBearer {}

/**
 * <p>Lists the resource record set protections in a hosted zone. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 *          <p>If the response includes a <code>NextToken</code> element, there are more protections to list. To get the next page of results, submit another request and specify the value of <code>NextToken</code> in the <code>NextToken</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListResourceRecordSetProtectionsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListResourceRecordSetProtectionsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListResourceRecordSetProtectionsRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   StartRecordName: "STRING_VALUE",
 *   StartRecordType: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListResourceRecordSetProtectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListResourceRecordSetProtectionsResponse
 * //   ResourceRecordSetProtections: [ // ResourceRecordSetProtections // required
 * //     { // ResourceRecordSetProtection
 * //       RecordName: "STRING_VALUE", // required
 * //       RecordType: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS", // required
 * //       Comment: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListResourceRecordSetProtectionsCommandInput - {@link ListResourceRecordSetProtectionsCommandInput}
 * @returns {@link ListResourceRecordSetProtectionsCommandOutput}
 * @see {@link ListResourceRecordSetProtectionsCommandInput} for command's `input` shape.
 * @see {@link ListResourceRecordSetProtectionsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
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
export class ListResourceRecordSetProtectionsCommand extends command<ListResourceRecordSetProtectionsCommandInput, ListResourceRecordSetProtectionsCommandOutput>(
  _ep0,
  _mw0,
  "ListResourceRecordSetProtections",
  ListResourceRecordSetProtections$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListResourceRecordSetProtectionsRequest;
      output: ListResourceRecordSetProtectionsResponse;
    };
    sdk: {
      input: ListResourceRecordSetProtectionsCommandInput;
      output: ListResourceRecordSetProtectionsCommandOutput;
    };
  };
}
