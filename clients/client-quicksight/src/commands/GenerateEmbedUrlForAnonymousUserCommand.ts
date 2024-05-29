// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GenerateEmbedUrlForAnonymousUserRequest,
  GenerateEmbedUrlForAnonymousUserRequestFilterSensitiveLog,
  GenerateEmbedUrlForAnonymousUserResponse,
  GenerateEmbedUrlForAnonymousUserResponseFilterSensitiveLog,
} from "../models/models_3";
import {
  de_GenerateEmbedUrlForAnonymousUserCommand,
  se_GenerateEmbedUrlForAnonymousUserCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GenerateEmbedUrlForAnonymousUserCommand}.
 */
export interface GenerateEmbedUrlForAnonymousUserCommandInput extends GenerateEmbedUrlForAnonymousUserRequest {}
/**
 * @public
 *
 * The output of {@link GenerateEmbedUrlForAnonymousUserCommand}.
 */
export interface GenerateEmbedUrlForAnonymousUserCommandOutput
  extends GenerateEmbedUrlForAnonymousUserResponse,
    __MetadataBearer {}

/**
 * <p>Generates an embed URL that you can use to embed an Amazon QuickSight dashboard or visual in your website, without having to register any reader users. Before you use this action, make sure that you have configured the dashboards and permissions.</p>
 *          <p>The following rules apply to the generated URL:</p>
 *          <ul>
 *             <li>
 *                <p>It contains a temporary bearer token. It is valid for 5 minutes after it is generated. Once redeemed within this period, it cannot be re-used again.</p>
 *             </li>
 *             <li>
 *                <p>The URL validity period should not be confused with the actual session lifetime that can be customized using the <code>
 *                      <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GenerateEmbedUrlForAnonymousUser.html#QS-GenerateEmbedUrlForAnonymousUser-request-SessionLifetimeInMinutes">SessionLifetimeInMinutes</a>
 *                   </code> parameter. The resulting user session is valid for 15 minutes (minimum) to 10 hours (maximum). The default session duration is 10 hours.</p>
 *             </li>
 *             <li>
 *                <p>You are charged only when the URL is used or there is interaction with Amazon QuickSight.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics.html">Embedded Analytics</a> in the <i>Amazon QuickSight User
 *             Guide</i>.</p>
 *          <p>For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the <a href="https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-portal.html">Amazon QuickSight Developer Portal</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, GenerateEmbedUrlForAnonymousUserCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, GenerateEmbedUrlForAnonymousUserCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // GenerateEmbedUrlForAnonymousUserRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   SessionLifetimeInMinutes: Number("long"),
 *   Namespace: "STRING_VALUE", // required
 *   SessionTags: [ // SessionTagList
 *     { // SessionTag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   AuthorizedResourceArns: [ // ArnList // required
 *     "STRING_VALUE",
 *   ],
 *   ExperienceConfiguration: { // AnonymousUserEmbeddingExperienceConfiguration
 *     Dashboard: { // AnonymousUserDashboardEmbeddingConfiguration
 *       InitialDashboardId: "STRING_VALUE", // required
 *     },
 *     DashboardVisual: { // AnonymousUserDashboardVisualEmbeddingConfiguration
 *       InitialDashboardVisualId: { // DashboardVisualId
 *         DashboardId: "STRING_VALUE", // required
 *         SheetId: "STRING_VALUE", // required
 *         VisualId: "STRING_VALUE", // required
 *       },
 *     },
 *     QSearchBar: { // AnonymousUserQSearchBarEmbeddingConfiguration
 *       InitialTopicId: "STRING_VALUE", // required
 *     },
 *     GenerativeQnA: { // AnonymousUserGenerativeQnAEmbeddingConfiguration
 *       InitialTopicId: "STRING_VALUE", // required
 *     },
 *   },
 *   AllowedDomains: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GenerateEmbedUrlForAnonymousUserCommand(input);
 * const response = await client.send(command);
 * // { // GenerateEmbedUrlForAnonymousUserResponse
 * //   EmbedUrl: "STRING_VALUE", // required
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * //   AnonymousUserArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GenerateEmbedUrlForAnonymousUserCommandInput - {@link GenerateEmbedUrlForAnonymousUserCommandInput}
 * @returns {@link GenerateEmbedUrlForAnonymousUserCommandOutput}
 * @see {@link GenerateEmbedUrlForAnonymousUserCommandInput} for command's `input` shape.
 * @see {@link GenerateEmbedUrlForAnonymousUserCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
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
 *  <p>This error indicates that you are calling an embedding operation in Amazon QuickSight
 * 			without the required pricing plan on your Amazon Web Services account. Before you can use embedding
 * 			for anonymous users, a QuickSight administrator needs to add capacity pricing to Amazon QuickSight. You
 * 		    can do this on the <b>Manage Amazon QuickSight</b> page. </p>
 *          <p>After capacity pricing is added, you can use the
 *             <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_GetDashboardEmbedUrl.html">GetDashboardEmbedUrl</a>
 *             </code> API operation with the
 *             <code>--identity-type ANONYMOUS</code> option.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 * @public
 */
export class GenerateEmbedUrlForAnonymousUserCommand extends $Command
  .classBuilder<
    GenerateEmbedUrlForAnonymousUserCommandInput,
    GenerateEmbedUrlForAnonymousUserCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "GenerateEmbedUrlForAnonymousUser", {})
  .n("QuickSightClient", "GenerateEmbedUrlForAnonymousUserCommand")
  .f(
    GenerateEmbedUrlForAnonymousUserRequestFilterSensitiveLog,
    GenerateEmbedUrlForAnonymousUserResponseFilterSensitiveLog
  )
  .ser(se_GenerateEmbedUrlForAnonymousUserCommand)
  .de(de_GenerateEmbedUrlForAnonymousUserCommand)
  .build() {}
