// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GenerateEmbedUrlForRegisteredUserWithIdentityRequest,
  GenerateEmbedUrlForRegisteredUserWithIdentityResponse,
  GenerateEmbedUrlForRegisteredUserWithIdentityResponseFilterSensitiveLog,
} from "../models/models_4";
import {
  de_GenerateEmbedUrlForRegisteredUserWithIdentityCommand,
  se_GenerateEmbedUrlForRegisteredUserWithIdentityCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateEmbedUrlForRegisteredUserWithIdentityCommand}.
 */
export interface GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput
  extends GenerateEmbedUrlForRegisteredUserWithIdentityRequest {}
/**
 * @public
 *
 * The output of {@link GenerateEmbedUrlForRegisteredUserWithIdentityCommand}.
 */
export interface GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput
  extends GenerateEmbedUrlForRegisteredUserWithIdentityResponse,
    __MetadataBearer {}

/**
 * <p>Generates an embed URL that you can use to embed an Amazon QuickSight experience in your website. This action can be used for any type of user that is registered in an Amazon QuickSight account that uses IAM Identity Center for authentication. This API requires <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/trustedidentitypropagation-overview.html#types-identity-enhanced-iam-role-sessions">identity-enhanced IAM Role sessions</a> for the authenticated user that the API call is being made for.</p>
 *          <p>This API uses <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/trustedidentitypropagation.html">trusted identity propagation</a> to ensure that an end user is authenticated and receives the embed URL that is specific to that user. The IAM Identity Center application that the user has logged into needs to have <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/trustedidentitypropagation-using-customermanagedapps-specify-trusted-apps.html">trusted Identity Propagation enabled for Amazon QuickSight</a> with the scope value set to <code>quicksight:read</code>. Before you use this action, make sure that you have configured the relevant Amazon QuickSight resource and permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, GenerateEmbedUrlForRegisteredUserWithIdentityCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, GenerateEmbedUrlForRegisteredUserWithIdentityCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // GenerateEmbedUrlForRegisteredUserWithIdentityRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   SessionLifetimeInMinutes: Number("long"),
 *   ExperienceConfiguration: { // RegisteredUserEmbeddingExperienceConfiguration
 *     Dashboard: { // RegisteredUserDashboardEmbeddingConfiguration
 *       InitialDashboardId: "STRING_VALUE", // required
 *       FeatureConfigurations: { // RegisteredUserDashboardFeatureConfigurations
 *         StatePersistence: { // StatePersistenceConfigurations
 *           Enabled: true || false, // required
 *         },
 *         SharedView: { // SharedViewConfigurations
 *           Enabled: true || false, // required
 *         },
 *         Bookmarks: { // BookmarksConfigurations
 *           Enabled: true || false, // required
 *         },
 *       },
 *     },
 *     QuickSightConsole: { // RegisteredUserQuickSightConsoleEmbeddingConfiguration
 *       InitialPath: "STRING_VALUE",
 *       FeatureConfigurations: { // RegisteredUserConsoleFeatureConfigurations
 *         StatePersistence: {
 *           Enabled: true || false, // required
 *         },
 *         SharedView: {
 *           Enabled: true || false, // required
 *         },
 *       },
 *     },
 *     QSearchBar: { // RegisteredUserQSearchBarEmbeddingConfiguration
 *       InitialTopicId: "STRING_VALUE",
 *     },
 *     DashboardVisual: { // RegisteredUserDashboardVisualEmbeddingConfiguration
 *       InitialDashboardVisualId: { // DashboardVisualId
 *         DashboardId: "STRING_VALUE", // required
 *         SheetId: "STRING_VALUE", // required
 *         VisualId: "STRING_VALUE", // required
 *       },
 *     },
 *     GenerativeQnA: { // RegisteredUserGenerativeQnAEmbeddingConfiguration
 *       InitialTopicId: "STRING_VALUE",
 *     },
 *   },
 *   AllowedDomains: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GenerateEmbedUrlForRegisteredUserWithIdentityCommand(input);
 * const response = await client.send(command);
 * // { // GenerateEmbedUrlForRegisteredUserWithIdentityResponse
 * //   EmbedUrl: "STRING_VALUE", // required
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput - {@link GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput}
 * @returns {@link GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput}
 * @see {@link GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput} for command's `input` shape.
 * @see {@link GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput} for command's `response` shape.
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
 * @throws {@link QuickSightUserNotFoundException} (client fault)
 *  <p>The user with the provided name isn't found. This error can happen in any operation
 * 			that requires finding a user based on a provided user name, such as
 * 				<code>DeleteUser</code>, <code>DescribeUser</code>, and so on.</p>
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
export class GenerateEmbedUrlForRegisteredUserWithIdentityCommand extends $Command
  .classBuilder<
    GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput,
    GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput,
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
  .s("QuickSight_20180401", "GenerateEmbedUrlForRegisteredUserWithIdentity", {})
  .n("QuickSightClient", "GenerateEmbedUrlForRegisteredUserWithIdentityCommand")
  .f(void 0, GenerateEmbedUrlForRegisteredUserWithIdentityResponseFilterSensitiveLog)
  .ser(se_GenerateEmbedUrlForRegisteredUserWithIdentityCommand)
  .de(de_GenerateEmbedUrlForRegisteredUserWithIdentityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateEmbedUrlForRegisteredUserWithIdentityRequest;
      output: GenerateEmbedUrlForRegisteredUserWithIdentityResponse;
    };
    sdk: {
      input: GenerateEmbedUrlForRegisteredUserWithIdentityCommandInput;
      output: GenerateEmbedUrlForRegisteredUserWithIdentityCommandOutput;
    };
  };
}
