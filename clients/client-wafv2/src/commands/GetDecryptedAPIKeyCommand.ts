// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDecryptedAPIKeyRequest, GetDecryptedAPIKeyResponse } from "../models/models_0";
import { GetDecryptedAPIKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns your API key in decrypted form. Use this to check the token domains that you have defined for the key.
 *
 * API keys are required for the integration of the CAPTCHA API in your JavaScript client applications. The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see [WAF client application integration](https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html) in the *WAF Developer Guide*.
 *
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
 *
 * Your request is valid, but WAF couldn’t perform the operation because of a system problem. Retry your request.
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *
 * The operation isn't valid.
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *
 * The operation failed because WAF didn't recognize a parameter in the request. For example:
 *
 * - You specified a parameter name or value that isn't valid.
 * - Your nested statement isn't valid. You might have tried to nest a statement that can’t be nested.
 * - You tried to update a `WebACL` with a `DefaultAction` that isn't among the types available at DefaultAction.
 * - Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL can't be associated.
 *
 * @throws {@link WAFInvalidResourceException} (client fault)
 *
 * WAF couldn’t perform the operation because the resource that you requested isn’t valid. Check the resource, and try again.
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *
 * WAF couldn’t perform the operation because your resource doesn't exist. If you've just created a resource that you're using in this operation, you might just need to wait a few minutes. It can take from a few seconds to a number of minutes for changes to propagate.
 *
 * @throws {@link WAFV2ServiceException}
 *
 * Base exception class for all service exceptions from WAFV2 service.
 *
 * @public
 */
export class GetDecryptedAPIKeyCommand extends command<GetDecryptedAPIKeyCommandInput, GetDecryptedAPIKeyCommandOutput>(
  _ep0,
  _mw0,
  "GetDecryptedAPIKey",
  GetDecryptedAPIKey$
) {
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
