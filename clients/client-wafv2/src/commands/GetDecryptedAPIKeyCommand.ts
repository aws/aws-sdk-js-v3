// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDecryptedAPIKeyRequest, GetDecryptedAPIKeyResponse } from "../models/models_0";
import { GetDecryptedAPIKey } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDecryptedAPIKeyCommand}.
 */
export interface GetDecryptedAPIKeyCommandInput extends GetDecryptedAPIKeyRequest {}
/**
 * @public
 *
 * The output of {@link GetDecryptedAPIKeyCommand}.
 */
export interface GetDecryptedAPIKeyCommandOutput extends GetDecryptedAPIKeyResponse, __MetadataBearer {}

/**
 * <p>Returns your API key in decrypted form. Use this to check the token domains that you have defined for the key. </p>
 *          <p>API keys are required for the integration of the CAPTCHA API in your JavaScript client applications.
 *            The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users.
 *            For more information about the CAPTCHA JavaScript integration, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetDecryptedAPIKeyCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetDecryptedAPIKeyCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // GetDecryptedAPIKeyRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   APIKey: "STRING_VALUE", // required
 * };
 * const command = new GetDecryptedAPIKeyCommand(input);
 * const response = await client.send(command);
 * // { // GetDecryptedAPIKeyResponse
 * //   TokenDomains: [ // TokenDomains
 * //     "STRING_VALUE",
 * //   ],
 * //   CreationTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetDecryptedAPIKeyCommandInput - {@link GetDecryptedAPIKeyCommandInput}
 * @returns {@link GetDecryptedAPIKeyCommandOutput}
 * @see {@link GetDecryptedAPIKeyCommandInput} for command's `input` shape.
 * @see {@link GetDecryptedAPIKeyCommandOutput} for command's `response` shape.
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
 * @throws {@link WAFInvalidResourceException} (client fault)
 *  <p>WAF couldn’t perform the operation because the resource that you requested isn’t
 *          valid. Check the resource, and try again.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 *
 * @public
 */
export class GetDecryptedAPIKeyCommand extends $Command
  .classBuilder<
    GetDecryptedAPIKeyCommandInput,
    GetDecryptedAPIKeyCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20190729", "GetDecryptedAPIKey", {})
  .n("WAFV2Client", "GetDecryptedAPIKeyCommand")
  .sc(GetDecryptedAPIKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDecryptedAPIKeyRequest;
      output: GetDecryptedAPIKeyResponse;
    };
    sdk: {
      input: GetDecryptedAPIKeyCommandInput;
      output: GetDecryptedAPIKeyCommandOutput;
    };
  };
}
