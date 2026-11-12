// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteResourceRecordSetProtectionsRequest,
  DeleteResourceRecordSetProtectionsResponse,
} from "../models/models_0";
import { DeleteResourceRecordSetProtections$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteResourceRecordSetProtectionsCommand}.
 */
export interface DeleteResourceRecordSetProtectionsCommandInput extends DeleteResourceRecordSetProtectionsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResourceRecordSetProtectionsCommand}.
 */
export interface DeleteResourceRecordSetProtectionsCommandOutput extends DeleteResourceRecordSetProtectionsResponse, __MetadataBearer {}

/**
 * <p>Deletes one or more resource record set protections from a hosted zone. After a protection is deleted, you can change the resource record sets that have that name and type by using <code>ChangeResourceRecordSets</code>.</p>
 *          <p>The request is atomic. Route 53 either deletes all of the protections in the request or none of them. If one or more entries fail, for example because no protection exists for the specified name and type, Route 53 returns an <code>InvalidResourceRecordSetProtectionBatch</code> error that lists the failing entries and the reason that each one failed.</p>
 *          <p>You can specify up to 100 protections in one request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteResourceRecordSetProtectionsCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteResourceRecordSetProtectionsCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // DeleteResourceRecordSetProtectionsRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   Protections: [ // ResourceRecordSetProtectionKeyBatch // required
 *     { // ResourceRecordSetProtectionKey
 *       RecordName: "STRING_VALUE", // required
 *       RecordType: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS", // required
 *     },
 *   ],
 * };
 * const command = new DeleteResourceRecordSetProtectionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourceRecordSetProtectionsCommandInput - {@link DeleteResourceRecordSetProtectionsCommandInput}
 * @returns {@link DeleteResourceRecordSetProtectionsCommandOutput}
 * @see {@link DeleteResourceRecordSetProtectionsCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceRecordSetProtectionsCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidResourceRecordSetProtectionBatch} (client fault)
 *  <p>One or more entries in the request couldn't be processed, so Route 53 didn't create or delete any of the protections in the request. The <code>Errors</code> element lists the failing entries and the reason that each one failed.</p>
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
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class DeleteResourceRecordSetProtectionsCommand extends command<DeleteResourceRecordSetProtectionsCommandInput, DeleteResourceRecordSetProtectionsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteResourceRecordSetProtections",
  DeleteResourceRecordSetProtections$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourceRecordSetProtectionsRequest;
      output: {};
    };
    sdk: {
      input: DeleteResourceRecordSetProtectionsCommandInput;
      output: DeleteResourceRecordSetProtectionsCommandOutput;
    };
  };
}
