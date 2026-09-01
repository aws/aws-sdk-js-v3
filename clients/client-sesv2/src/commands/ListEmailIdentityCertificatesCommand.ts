// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEmailIdentityCertificatesRequest, ListEmailIdentityCertificatesResponse } from "../models/models_0";
import { ListEmailIdentityCertificates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEmailIdentityCertificatesCommand}.
 */
export interface ListEmailIdentityCertificatesCommandInput extends ListEmailIdentityCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link ListEmailIdentityCertificatesCommand}.
 */
export interface ListEmailIdentityCertificatesCommandOutput extends ListEmailIdentityCertificatesResponse, __MetadataBearer {}

/**
 * <p>Lists the S/MIME certificates that are associated with the specified email identity.
 *             The results include certificates in all states, such as <code>PROVISIONING</code>,
 *             <code>ACTIVE</code>, <code>INACTIVE</code>, <code>DEPROVISIONING</code>, and
 *             <code>FAILED</code>.</p>
 *          <p>If a certificate has passed its expiration time, it's returned with a status of
 *             <code>FAILED</code>.</p>
 *          <p>We recommend using pagination to ensure that the operation returns quickly and
 *             successfully. When there are more results than fit in a single response, the response
 *             includes a <code>NextToken</code> value that you use in a subsequent call to retrieve
 *             the next set of results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListEmailIdentityCertificatesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListEmailIdentityCertificatesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // ListEmailIdentityCertificatesRequest
 *   EmailIdentity: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListEmailIdentityCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ListEmailIdentityCertificatesResponse
 * //   Certificates: [ // IdentityCertificateList
 * //     { // IdentityCertificate
 * //       FromAddress: "STRING_VALUE",
 * //       Status: "PROVISIONING" || "INACTIVE" || "DEPROVISIONING" || "ACTIVE" || "FAILED",
 * //       CertificateArn: "STRING_VALUE",
 * //       CertificateExpiryTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEmailIdentityCertificatesCommandInput - {@link ListEmailIdentityCertificatesCommandInput}
 * @returns {@link ListEmailIdentityCertificatesCommandOutput}
 * @see {@link ListEmailIdentityCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListEmailIdentityCertificatesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class ListEmailIdentityCertificatesCommand extends command<ListEmailIdentityCertificatesCommandInput, ListEmailIdentityCertificatesCommandOutput>(
  _ep0,
  _mw0,
  "ListEmailIdentityCertificates",
  ListEmailIdentityCertificates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEmailIdentityCertificatesRequest;
      output: ListEmailIdentityCertificatesResponse;
    };
    sdk: {
      input: ListEmailIdentityCertificatesCommandInput;
      output: ListEmailIdentityCertificatesCommandOutput;
    };
  };
}
