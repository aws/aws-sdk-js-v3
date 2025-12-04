// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetMobileSdkReleaseRequest, GetMobileSdkReleaseResponse } from "../models/models_0";
import { GetMobileSdkRelease } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMobileSdkReleaseCommand}.
 */
export interface GetMobileSdkReleaseCommandInput extends GetMobileSdkReleaseRequest {}
/**
 * @public
 *
 * The output of {@link GetMobileSdkReleaseCommand}.
 */
export interface GetMobileSdkReleaseCommandOutput extends GetMobileSdkReleaseResponse, __MetadataBearer {}

/**
 * <p>Retrieves information for the specified mobile SDK release, including release notes and
 *          tags.</p>
 *          <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see
 * <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, GetMobileSdkReleaseCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, GetMobileSdkReleaseCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // GetMobileSdkReleaseRequest
 *   Platform: "IOS" || "ANDROID", // required
 *   ReleaseVersion: "STRING_VALUE", // required
 * };
 * const command = new GetMobileSdkReleaseCommand(input);
 * const response = await client.send(command);
 * // { // GetMobileSdkReleaseResponse
 * //   MobileSdkRelease: { // MobileSdkRelease
 * //     ReleaseVersion: "STRING_VALUE",
 * //     Timestamp: new Date("TIMESTAMP"),
 * //     ReleaseNotes: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMobileSdkReleaseCommandInput - {@link GetMobileSdkReleaseCommandInput}
 * @returns {@link GetMobileSdkReleaseCommandOutput}
 * @see {@link GetMobileSdkReleaseCommandInput} for command's `input` shape.
 * @see {@link GetMobileSdkReleaseCommandOutput} for command's `response` shape.
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
export class GetMobileSdkReleaseCommand extends $Command
  .classBuilder<
    GetMobileSdkReleaseCommandInput,
    GetMobileSdkReleaseCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWAF_20190729", "GetMobileSdkRelease", {})
  .n("WAFV2Client", "GetMobileSdkReleaseCommand")
  .sc(GetMobileSdkRelease)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMobileSdkReleaseRequest;
      output: GetMobileSdkReleaseResponse;
    };
    sdk: {
      input: GetMobileSdkReleaseCommandInput;
      output: GetMobileSdkReleaseCommandOutput;
    };
  };
}
