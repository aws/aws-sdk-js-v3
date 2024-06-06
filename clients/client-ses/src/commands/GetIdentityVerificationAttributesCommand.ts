// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetIdentityVerificationAttributesRequest,
  GetIdentityVerificationAttributesResponse,
} from "../models/models_0";
import {
  de_GetIdentityVerificationAttributesCommand,
  se_GetIdentityVerificationAttributesCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIdentityVerificationAttributesCommand}.
 */
export interface GetIdentityVerificationAttributesCommandInput extends GetIdentityVerificationAttributesRequest {}
/**
 * @public
 *
 * The output of {@link GetIdentityVerificationAttributesCommand}.
 */
export interface GetIdentityVerificationAttributesCommandOutput
  extends GetIdentityVerificationAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Given a list of identities (email addresses and/or domains), returns the verification
 *             status and (for domain identities) the verification token for each identity.</p>
 *          <p>The verification status of an email address is "Pending" until the email address owner
 *             clicks the link within the verification email that Amazon SES sent to that address. If the
 *             email address owner clicks the link within 24 hours, the verification status of the
 *             email address changes to "Success". If the link is not clicked within 24 hours, the
 *             verification status changes to "Failed." In that case, to verify the email address, you
 *             must restart the verification process from the beginning.</p>
 *          <p>For domain identities, the domain's verification status is "Pending" as Amazon SES searches
 *             for the required TXT record in the DNS settings of the domain. When Amazon SES detects the
 *             record, the domain's verification status changes to "Success". If Amazon SES is unable to
 *             detect the record within 72 hours, the domain's verification status changes to "Failed."
 *             In that case, to verify the domain, you must restart the verification process from the
 *             beginning.</p>
 *          <p>This operation is throttled at one request per second and can only get verification
 *             attributes for up to 100 identities at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetIdentityVerificationAttributesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetIdentityVerificationAttributesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // GetIdentityVerificationAttributesRequest
 *   Identities: [ // IdentityList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetIdentityVerificationAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityVerificationAttributesResponse
 * //   VerificationAttributes: { // VerificationAttributes // required
 * //     "<keys>": { // IdentityVerificationAttributes
 * //       VerificationStatus: "Pending" || "Success" || "Failed" || "TemporaryFailure" || "NotStarted", // required
 * //       VerificationToken: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIdentityVerificationAttributesCommandInput - {@link GetIdentityVerificationAttributesCommandInput}
 * @returns {@link GetIdentityVerificationAttributesCommandOutput}
 * @see {@link GetIdentityVerificationAttributesCommandInput} for command's `input` shape.
 * @see {@link GetIdentityVerificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example GetIdentityVerificationAttributes
 * ```javascript
 * // The following example returns the verification status and the verification token for a domain identity:
 * const input = {
 *   "Identities": [
 *     "example.com"
 *   ]
 * };
 * const command = new GetIdentityVerificationAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VerificationAttributes": {
 *     "example.com": {
 *       "VerificationStatus": "Success",
 *       "VerificationToken": "EXAMPLE3VYb9EDI2nTOQRi/Tf6MI/6bD6THIGiP1MVY="
 *     }
 *   }
 * }
 * *\/
 * // example id: getidentityverificationattributes-1469124205897
 * ```
 *
 */
export class GetIdentityVerificationAttributesCommand extends $Command
  .classBuilder<
    GetIdentityVerificationAttributesCommandInput,
    GetIdentityVerificationAttributesCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "GetIdentityVerificationAttributes", {})
  .n("SESClient", "GetIdentityVerificationAttributesCommand")
  .f(void 0, void 0)
  .ser(se_GetIdentityVerificationAttributesCommand)
  .de(de_GetIdentityVerificationAttributesCommand)
  .build() {}
