// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAPIKeyRequest, CreateAPIKeyResponse } from "../models/models_0";
import { CreateAPIKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an API key that contains a set of token domains.
 *
 * API keys are required for the integration of the CAPTCHA API in your JavaScript client applications. The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see [WAF client application integration](https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html) in the *WAF Developer Guide*.
 *
 * You can use a single key for up to 5 domains. After you generate a key, you can copy it for use in your JavaScript integration.
 *
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
 * @throws {@link WAFLimitsExceededException} (client fault)
 *
 * WAF couldn’t perform the operation because you exceeded your resource limit. For example, the maximum number of `WebACL` objects that you can create for an Amazon Web Services account. For more information, see [WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *WAF Developer Guide*.
 *
 * @throws {@link WAFV2ServiceException}
 *
 * Base exception class for all service exceptions from WAFV2 service.
 *
 * @public
 */
export class CreateAPIKeyCommand extends command<CreateAPIKeyCommandInput, CreateAPIKeyCommandOutput>(
  _ep0,
  _mw0,
  "CreateAPIKey",
  CreateAPIKey$
) {
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
