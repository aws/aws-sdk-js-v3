// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GenerateMobileSdkReleaseUrlRequest, GenerateMobileSdkReleaseUrlResponse } from "../models/models_0";
import { GenerateMobileSdkReleaseUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GenerateMobileSdkReleaseUrlCommand}.
 */
export interface GenerateMobileSdkReleaseUrlCommandInput extends GenerateMobileSdkReleaseUrlRequest {}
/**
 * @public
 *
 * The output of {@link GenerateMobileSdkReleaseUrlCommand}.
 */
export interface GenerateMobileSdkReleaseUrlCommandOutput extends GenerateMobileSdkReleaseUrlResponse, __MetadataBearer {}

/**
 * Generates a presigned download URL for the specified release of the mobile SDK.
 *
 * The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see [WAF client application integration](https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html) in the *WAF Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GenerateMobileSdkReleaseUrlCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GenerateMobileSdkReleaseUrlCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // GenerateMobileSdkReleaseUrlRequest
 *   Platform: "IOS" || "ANDROID", // required
 *   ReleaseVersion: "STRING_VALUE", // required
 * };
 * const command = new GenerateMobileSdkReleaseUrlCommand(input);
 * const response = await client.send(command);
 * // { // GenerateMobileSdkReleaseUrlResponse
 * //   Url: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GenerateMobileSdkReleaseUrlCommandInput - {@link GenerateMobileSdkReleaseUrlCommandInput}
 * @returns {@link GenerateMobileSdkReleaseUrlCommandOutput}
 * @see {@link GenerateMobileSdkReleaseUrlCommandInput} for command's `input` shape.
 * @see {@link GenerateMobileSdkReleaseUrlCommandOutput} for command's `response` shape.
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
export class GenerateMobileSdkReleaseUrlCommand extends command<GenerateMobileSdkReleaseUrlCommandInput, GenerateMobileSdkReleaseUrlCommandOutput>(
  _ep0,
  _mw0,
  "GenerateMobileSdkReleaseUrl",
  GenerateMobileSdkReleaseUrl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateMobileSdkReleaseUrlRequest;
      output: GenerateMobileSdkReleaseUrlResponse;
    };
    sdk: {
      input: GenerateMobileSdkReleaseUrlCommandInput;
      output: GenerateMobileSdkReleaseUrlCommandOutput;
    };
  };
}
