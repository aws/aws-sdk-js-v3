// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetIdentityMailFromDomainAttributesRequest,
  GetIdentityMailFromDomainAttributesResponse,
} from "../models/models_0";
import {
  de_GetIdentityMailFromDomainAttributesCommand,
  se_GetIdentityMailFromDomainAttributesCommand,
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
 * The input for {@link GetIdentityMailFromDomainAttributesCommand}.
 */
export interface GetIdentityMailFromDomainAttributesCommandInput extends GetIdentityMailFromDomainAttributesRequest {}
/**
 * @public
 *
 * The output of {@link GetIdentityMailFromDomainAttributesCommand}.
 */
export interface GetIdentityMailFromDomainAttributesCommandOutput
  extends GetIdentityMailFromDomainAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Returns the custom MAIL FROM attributes for a list of identities (email addresses :
 *             domains).</p>
 *          <p>This operation is throttled at one request per second and can only get custom MAIL
 *             FROM attributes for up to 100 identities at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetIdentityMailFromDomainAttributesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetIdentityMailFromDomainAttributesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // GetIdentityMailFromDomainAttributesRequest
 *   Identities: [ // IdentityList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetIdentityMailFromDomainAttributesCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityMailFromDomainAttributesResponse
 * //   MailFromDomainAttributes: { // MailFromDomainAttributes // required
 * //     "<keys>": { // IdentityMailFromDomainAttributes
 * //       MailFromDomain: "STRING_VALUE", // required
 * //       MailFromDomainStatus: "Pending" || "Success" || "Failed" || "TemporaryFailure", // required
 * //       BehaviorOnMXFailure: "UseDefaultValue" || "RejectMessage", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIdentityMailFromDomainAttributesCommandInput - {@link GetIdentityMailFromDomainAttributesCommandInput}
 * @returns {@link GetIdentityMailFromDomainAttributesCommandOutput}
 * @see {@link GetIdentityMailFromDomainAttributesCommandInput} for command's `input` shape.
 * @see {@link GetIdentityMailFromDomainAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example GetIdentityMailFromDomainAttributes
 * ```javascript
 * // The following example returns the custom MAIL FROM attributes for an identity:
 * const input = {
 *   "Identities": [
 *     "example.com"
 *   ]
 * };
 * const command = new GetIdentityMailFromDomainAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "MailFromDomainAttributes": {
 *     "example.com": {
 *       "BehaviorOnMXFailure": "UseDefaultValue",
 *       "MailFromDomain": "bounces.example.com",
 *       "MailFromDomainStatus": "Success"
 *     }
 *   }
 * }
 * *\/
 * // example id: getidentitymailfromdomainattributes-1469123114860
 * ```
 *
 */
export class GetIdentityMailFromDomainAttributesCommand extends $Command
  .classBuilder<
    GetIdentityMailFromDomainAttributesCommandInput,
    GetIdentityMailFromDomainAttributesCommandOutput,
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
  .s("SimpleEmailService", "GetIdentityMailFromDomainAttributes", {})
  .n("SESClient", "GetIdentityMailFromDomainAttributesCommand")
  .f(void 0, void 0)
  .ser(se_GetIdentityMailFromDomainAttributesCommand)
  .de(de_GetIdentityMailFromDomainAttributesCommand)
  .build() {}
