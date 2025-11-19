// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSessionEmbedUrlRequest, GetSessionEmbedUrlResponse } from "../models/models_4";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { GetSessionEmbedUrl } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSessionEmbedUrlCommand}.
 */
export interface GetSessionEmbedUrlCommandInput extends GetSessionEmbedUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionEmbedUrlCommand}.
 */
export interface GetSessionEmbedUrlCommandOutput extends GetSessionEmbedUrlResponse, __MetadataBearer {}

/**
 * <p>Generates a session URL and authorization code that you can use to embed the Amazon
 *                 Amazon Quick Sight console in your web server code. Use
 *                 <code>GetSessionEmbedUrl</code> where you want to provide an authoring portal that
 *             allows users to create data sources, datasets, analyses, and dashboards. The users who
 *             access an embedded Amazon Quick Sight console need belong to the author or admin security
 *             cohort. If you want to restrict permissions to some of these features, add a custom
 *             permissions profile to the user with the <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_UpdateUser.html">UpdateUser</a>
 *             </code> API operation. Use <code>
 *                <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/API_RegisterUser.html">RegisterUser</a>
 *             </code> API operation to add a new user with a custom
 *             permission profile attached. For more information, see the following sections in the
 *                     <i>Amazon Quick Suite User Guide</i>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics.html">Embedding
 *                         Analytics</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/quicksight/latest/user/customizing-permissions-to-the-quicksight-console.html">Customizing Access to the Amazon Quick Suite Console</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, GetSessionEmbedUrlCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, GetSessionEmbedUrlCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // GetSessionEmbedUrlRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   EntryPoint: "STRING_VALUE",
 *   SessionLifetimeInMinutes: Number("long"),
 *   UserArn: "STRING_VALUE",
 * };
 * const command = new GetSessionEmbedUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionEmbedUrlResponse
 * //   EmbedUrl: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSessionEmbedUrlCommandInput - {@link GetSessionEmbedUrlCommandInput}
 * @returns {@link GetSessionEmbedUrlCommandOutput}
 * @see {@link GetSessionEmbedUrlCommandInput} for command's `input` shape.
 * @see {@link GetSessionEmbedUrlCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
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
export class GetSessionEmbedUrlCommand extends $Command
  .classBuilder<
    GetSessionEmbedUrlCommandInput,
    GetSessionEmbedUrlCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "GetSessionEmbedUrl", {})
  .n("QuickSightClient", "GetSessionEmbedUrlCommand")
  .sc(GetSessionEmbedUrl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSessionEmbedUrlRequest;
      output: GetSessionEmbedUrlResponse;
    };
    sdk: {
      input: GetSessionEmbedUrlCommandInput;
      output: GetSessionEmbedUrlCommandOutput;
    };
  };
}
