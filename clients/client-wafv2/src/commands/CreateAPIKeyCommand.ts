// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAPIKeyRequest, CreateAPIKeyResponse } from "../models/models_0";
import { CreateAPIKey } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAPIKeyCommand}.
 */
export interface CreateAPIKeyCommandInput extends CreateAPIKeyRequest {}
/**
 * @public
 *
 * The output of {@link CreateAPIKeyCommand}.
 */
export interface CreateAPIKeyCommandOutput extends CreateAPIKeyResponse, __MetadataBearer {}

/**
 * <p>Creates an API key that contains a set of token domains.</p>
 *          <p>API keys are required for the integration of the CAPTCHA API in your JavaScript client applications.
 *            The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users.
 *            For more information about the CAPTCHA JavaScript integration, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>
 *          <p>You can use a single key for up to 5 domains. After you generate a key, you can copy it for use in your JavaScript
 *            integration. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, CreateAPIKeyCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, CreateAPIKeyCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // CreateAPIKeyRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   TokenDomains: [ // APIKeyTokenDomains // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateAPIKeyCommand(input);
 * const response = await client.send(command);
 * // { // CreateAPIKeyResponse
 * //   APIKey: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAPIKeyCommandInput - {@link CreateAPIKeyCommandInput}
 * @returns {@link CreateAPIKeyCommandOutput}
 * @see {@link CreateAPIKeyCommandInput} for command's `input` shape.
 * @see {@link CreateAPIKeyCommandOutput} for command's `response` shape.
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
 * @throws {@link WAFLimitsExceededException} (client fault)
 *  <p>WAF couldn’t perform the operation because you exceeded your resource limit. For
 *          example, the maximum number of <code>WebACL</code> objects that you can create for an Amazon Web Services
 *          account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
 *             <i>WAF Developer Guide</i>.</p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 *
 * @public
 */
export class CreateAPIKeyCommand extends $Command
  .classBuilder<
    CreateAPIKeyCommandInput,
    CreateAPIKeyCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20190729", "CreateAPIKey", {})
  .n("WAFV2Client", "CreateAPIKeyCommand")
  .sc(CreateAPIKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAPIKeyRequest;
      output: CreateAPIKeyResponse;
    };
    sdk: {
      input: CreateAPIKeyCommandInput;
      output: CreateAPIKeyCommandOutput;
    };
  };
}
