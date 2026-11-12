// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateResourceRecordSetProtectionsRequest,
  CreateResourceRecordSetProtectionsResponse,
} from "../models/models_0";
import { CreateResourceRecordSetProtections$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateResourceRecordSetProtectionsCommand}.
 */
export interface CreateResourceRecordSetProtectionsCommandInput extends CreateResourceRecordSetProtectionsRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceRecordSetProtectionsCommand}.
 */
export interface CreateResourceRecordSetProtectionsCommandOutput extends CreateResourceRecordSetProtectionsResponse, __MetadataBearer {}

/**
 * <p>Creates one or more resource record set protections in a hosted zone. A protection applies to every resource record set in the hosted zone that has the specified name and type. While a protection exists, Route 53 rejects any <code>ChangeResourceRecordSets</code> request that creates, updates, or deletes a resource record set with that name and type, and returns an <code>InvalidChangeBatch</code> error. To change a protected resource record set, first delete its protection by using <code>DeleteResourceRecordSetProtections</code>.</p>
 *          <p>You can create a protection for a name and type that doesn't have a resource record set yet. In that case, Route 53 also rejects requests to create that resource record set.</p>
 *          <p>You can't delete a hosted zone that has protections. To delete the hosted zone, first delete all of its protections by using <code>DeleteResourceRecordSetProtections</code>.</p>
 *          <p>The request is atomic. Route 53 either creates all of the protections in the request or none of them. If one or more entries fail, the response is an error that lists the failing entries and the reason that each one failed. Route 53 checks for invalid entries before it checks for existing protections, so if any entry is invalid, the error lists only the invalid entries.</p>
 *          <p>The error that Route 53 returns depends on the failures:</p>
 *          <ul>
 *             <li>
 *                <p>If every entry already has a protection, Route 53 returns a <code>ProtectionAlreadyExists</code> error.</p>
 *             </li>
 *             <li>
 *                <p>For any other combination of failures, Route 53 returns an <code>InvalidResourceRecordSetProtectionBatch</code> error.</p>
 *             </li>
 *          </ul>
 *          <p>You can specify up to 100 protections in one request. The number of protections that you can have in a hosted zone is limited by a quota. If the request would exceed that quota, Route 53 returns a <code>LimitsExceeded</code> error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateResourceRecordSetProtectionsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateResourceRecordSetProtectionsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // CreateResourceRecordSetProtectionsRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   Protections: [ // ResourceRecordSetProtectionConfigBatch // required
 *     { // ResourceRecordSetProtectionConfig
 *       RecordName: "STRING_VALUE", // required
 *       RecordType: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS", // required
 *       Comment: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateResourceRecordSetProtectionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateResourceRecordSetProtectionsCommandInput - {@link CreateResourceRecordSetProtectionsCommandInput}
 * @returns {@link CreateResourceRecordSetProtectionsCommandOutput}
 * @see {@link CreateResourceRecordSetProtectionsCommandInput} for command's `input` shape.
 * @see {@link CreateResourceRecordSetProtectionsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidResourceRecordSetProtectionBatch} (client fault)
 *  <p>One or more entries in the request couldn't be processed, so Route 53 didn't create or delete any of the protections in the request. The <code>Errors</code> element lists the failing entries and the reason that each one failed.</p>
 *
 * @throws {@link LimitsExceeded} (client fault)
 *  <p>This operation can't be completed because the current account has reached the
 * 			limit on the resource you are trying to create. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the Amazon Web Services Support
 * 			Center.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link PriorRequestNotComplete} (client fault)
 *  <p>If Amazon Route 53 can't process a request before the next request arrives, it will
 * 			reject subsequent requests for the same hosted zone and return an <code>HTTP 400
 * 				error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly
 * 			for the same request, we recommend that you wait, in intervals of increasing duration,
 * 			before you try the request again.</p>
 *
 * @throws {@link ProtectionAlreadyExists} (client fault)
 *  <p>A protection already exists for every name and type in the request, so Route 53 didn't create any protections. The <code>Errors</code> element lists each entry.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class CreateResourceRecordSetProtectionsCommand extends command<CreateResourceRecordSetProtectionsCommandInput, CreateResourceRecordSetProtectionsCommandOutput>(
  _ep0,
  _mw0,
  "CreateResourceRecordSetProtections",
  CreateResourceRecordSetProtections$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResourceRecordSetProtectionsRequest;
      output: {};
    };
    sdk: {
      input: CreateResourceRecordSetProtectionsCommandInput;
      output: CreateResourceRecordSetProtectionsCommandOutput;
    };
  };
}
