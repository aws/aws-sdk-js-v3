// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { VerifyDomainIdentityRequest, VerifyDomainIdentityResponse } from "../models/models_0";
import { de_VerifyDomainIdentityCommand, se_VerifyDomainIdentityCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link VerifyDomainIdentityCommand}.
 */
export interface VerifyDomainIdentityCommandInput extends VerifyDomainIdentityRequest {}
/**
 * @public
 *
 * The output of {@link VerifyDomainIdentityCommand}.
 */
export interface VerifyDomainIdentityCommandOutput extends VerifyDomainIdentityResponse, __MetadataBearer {}

/**
 * <p>Adds a domain to the list of identities for your Amazon SES account in the current
 *             Amazon Web Services Region and attempts to verify it. For more information about verifying domains,
 *             see <a href="https://docs.aws.amazon.com/ses/latest/dg/verify-addresses-and-domains.html">Verifying Email Addresses and Domains</a> in the <i>Amazon SES Developer
 *                 Guide.</i>
 *          </p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, VerifyDomainIdentityCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, VerifyDomainIdentityCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // VerifyDomainIdentityRequest
 *   Domain: "STRING_VALUE", // required
 * };
 * const command = new VerifyDomainIdentityCommand(input);
 * const response = await client.send(command);
 * // { // VerifyDomainIdentityResponse
 * //   VerificationToken: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param VerifyDomainIdentityCommandInput - {@link VerifyDomainIdentityCommandInput}
 * @returns {@link VerifyDomainIdentityCommandOutput}
 * @see {@link VerifyDomainIdentityCommandInput} for command's `input` shape.
 * @see {@link VerifyDomainIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example VerifyDomainIdentity
 * ```javascript
 * // The following example starts the domain verification process with Amazon SES:
 * const input = {
 *   "Domain": "example.com"
 * };
 * const command = new VerifyDomainIdentityCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VerificationToken": "eoEmxw+YaYhb3h3iVJHuXMJXqeu1q1/wwmvjuEXAMPLE"
 * }
 * *\/
 * // example id: verifydomainidentity-1469049165936
 * ```
 *
 */
export class VerifyDomainIdentityCommand extends $Command
  .classBuilder<
    VerifyDomainIdentityCommandInput,
    VerifyDomainIdentityCommandOutput,
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
  .s("SimpleEmailService", "VerifyDomainIdentity", {})
  .n("SESClient", "VerifyDomainIdentityCommand")
  .f(void 0, void 0)
  .ser(se_VerifyDomainIdentityCommand)
  .de(de_VerifyDomainIdentityCommand)
  .build() {}
