// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetDashboardEmbedUrlRequest,
  GetDashboardEmbedUrlResponse,
  GetDashboardEmbedUrlResponseFilterSensitiveLog,
} from "../models/models_4";
import { de_GetDashboardEmbedUrlCommand, se_GetDashboardEmbedUrlCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDashboardEmbedUrlCommand}.
 */
export interface GetDashboardEmbedUrlCommandInput extends GetDashboardEmbedUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetDashboardEmbedUrlCommand}.
 */
export interface GetDashboardEmbedUrlCommandOutput extends GetDashboardEmbedUrlResponse, __MetadataBearer {}

/**
 * <p>Generates a temporary session URL and authorization code(bearer token) that you can
 *             use to embed an Amazon Quick Sight read-only dashboard in your website or application.
 *             Before you use this command, make sure that you have configured the dashboards and
 *             permissions. </p>
 *          <p>Currently, you can use <code>GetDashboardEmbedURL</code> only from the server, not
 *             from the user's browser. The following rules apply to the generated URL:</p>
 *          <ul>
 *             <li>
 *                <p>They must be used together.</p>
 *             </li>
 *             <li>
 *                <p>They can be used one time only.</p>
 *             </li>
 *             <li>
 *                <p>They are valid for 5 minutes after you run this command.</p>
 *             </li>
 *             <li>
 *                <p>You are charged only when the URL is used or there is interaction with QuickSight.</p>
 *             </li>
 *             <li>
 *                <p>The resulting user session is valid for 15 minutes (default) up to 10 hours
 *                     (maximum). You can use the optional <code>SessionLifetimeInMinutes</code>
 *                     parameter to customize session duration.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics-deprecated.html">Embedding Analytics
 *                 Using GetDashboardEmbedUrl</a> in the <i>Amazon QuickSight User
 *                 Guide</i>.</p>
 *          <p>For more information about the high-level steps for embedding and for an interactive
 *             demo of the ways you can customize embedding, visit the <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-portal.html">Amazon QuickSight
 *                 Developer Portal</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, GetDashboardEmbedUrlCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, GetDashboardEmbedUrlCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // GetDashboardEmbedUrlRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DashboardId: "STRING_VALUE", // required
 *   IdentityType: "IAM" || "QUICKSIGHT" || "ANONYMOUS", // required
 *   SessionLifetimeInMinutes: Number("long"),
 *   UndoRedoDisabled: true || false,
 *   ResetDisabled: true || false,
 *   StatePersistenceEnabled: true || false,
 *   UserArn: "STRING_VALUE",
 *   Namespace: "STRING_VALUE",
 *   AdditionalDashboardIds: [ // AdditionalDashboardIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetDashboardEmbedUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetDashboardEmbedUrlResponse
 * //   EmbedUrl: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDashboardEmbedUrlCommandInput - {@link GetDashboardEmbedUrlCommandInput}
 * @returns {@link GetDashboardEmbedUrlCommandOutput}
 * @see {@link GetDashboardEmbedUrlCommandInput} for command's `input` shape.
 * @see {@link GetDashboardEmbedUrlCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link DomainNotWhitelistedException} (client fault)
 *  <p>The domain specified isn't on the allow list. All domains for embedded dashboards must be
 * 			added to the approved list by an Amazon Quick Suite admin.</p>
 *
 * @throws {@link IdentityTypeNotSupportedException} (client fault)
 *  <p>The identity type specified isn't supported. Supported identity types include
 * 				<code>IAM</code> and <code>QUICKSIGHT</code>.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link QuickSightUserNotFoundException} (client fault)
 *  <p>The user with the provided name isn't found. This error can happen in any operation
 * 			that requires finding a user based on a provided user name, such as
 * 				<code>DeleteUser</code>, <code>DescribeUser</code>, and so on.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link SessionLifetimeInMinutesInvalidException} (client fault)
 *  <p>The number of minutes specified for the lifetime of a session isn't valid. The session
 * 			lifetime must be 15-600 minutes.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedPricingPlanException} (client fault)
 *  <p>This error indicates that you are calling an embedding operation in Amazon Quick Sight
 * 			without the required pricing plan on your Amazon Web Services account. Before you can use embedding
 * 			for anonymous users, a Quick Suite administrator needs to add capacity pricing to Quick Sight. You
 * 		    can do this on the <b>Manage Quick Suite</b> page. </p>
 *          <p>After capacity pricing is added, you can use the
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html">GetDashboardEmbedUrl</a>
 *             </code> API operation with the
 *             <code>--identity-type ANONYMOUS</code> option.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon Quick Suite
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class GetDashboardEmbedUrlCommand extends $Command
  .classBuilder<
    GetDashboardEmbedUrlCommandInput,
    GetDashboardEmbedUrlCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "GetDashboardEmbedUrl", {})
  .n("QuickSightClient", "GetDashboardEmbedUrlCommand")
  .f(void 0, GetDashboardEmbedUrlResponseFilterSensitiveLog)
  .ser(se_GetDashboardEmbedUrlCommand)
  .de(de_GetDashboardEmbedUrlCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDashboardEmbedUrlRequest;
      output: GetDashboardEmbedUrlResponse;
    };
    sdk: {
      input: GetDashboardEmbedUrlCommandInput;
      output: GetDashboardEmbedUrlCommandOutput;
    };
  };
}
