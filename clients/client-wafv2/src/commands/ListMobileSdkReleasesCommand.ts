// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMobileSdkReleasesRequest, ListMobileSdkReleasesResponse } from "../models/models_0";
import { de_ListMobileSdkReleasesCommand, se_ListMobileSdkReleasesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMobileSdkReleasesCommand}.
 */
export interface ListMobileSdkReleasesCommandInput extends ListMobileSdkReleasesRequest {}
/**
 * @public
 *
 * The output of {@link ListMobileSdkReleasesCommand}.
 */
export interface ListMobileSdkReleasesCommandOutput extends ListMobileSdkReleasesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of the available releases for the mobile SDK and the specified device
 *          platform. </p>
 *          <p>The mobile SDK is not generally available. Customers who have access to the mobile SDK can use it to establish and manage WAF tokens for use in HTTP(S) requests from a mobile device to WAF. For more information, see
 * <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-application-integration.html">WAF client application integration</a> in the <i>WAF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListMobileSdkReleasesCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListMobileSdkReleasesCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // ListMobileSdkReleasesRequest
 *   Platform: "IOS" || "ANDROID", // required
 *   NextMarker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListMobileSdkReleasesCommand(input);
 * const response = await client.send(command);
 * // { // ListMobileSdkReleasesResponse
 * //   ReleaseSummaries: [ // ReleaseSummaries
 * //     { // ReleaseSummary
 * //       ReleaseVersion: "STRING_VALUE",
 * //       Timestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMobileSdkReleasesCommandInput - {@link ListMobileSdkReleasesCommandInput}
 * @returns {@link ListMobileSdkReleasesCommandOutput}
 * @see {@link ListMobileSdkReleasesCommandInput} for command's `input` shape.
 * @see {@link ListMobileSdkReleasesCommandOutput} for command's `response` shape.
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
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 *
 * @public
 */
export class ListMobileSdkReleasesCommand extends $Command
  .classBuilder<
    ListMobileSdkReleasesCommandInput,
    ListMobileSdkReleasesCommandOutput,
    WAFV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_20190729", "ListMobileSdkReleases", {})
  .n("WAFV2Client", "ListMobileSdkReleasesCommand")
  .f(void 0, void 0)
  .ser(se_ListMobileSdkReleasesCommand)
  .de(de_ListMobileSdkReleasesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMobileSdkReleasesRequest;
      output: ListMobileSdkReleasesResponse;
    };
    sdk: {
      input: ListMobileSdkReleasesCommandInput;
      output: ListMobileSdkReleasesCommandOutput;
    };
  };
}
