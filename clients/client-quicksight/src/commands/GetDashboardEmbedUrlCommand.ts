// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDashboardEmbedUrlRequest, GetDashboardEmbedUrlResponse } from "../models/models_4";
import { GetDashboardEmbedUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Generates a temporary session URL and authorization code(bearer token) that you can use to embed an Amazon Quick Sight read-only dashboard in your website or application. Before you use this command, make sure that you have configured the dashboards and permissions.
 *
 * Currently, you can use `GetDashboardEmbedURL` only from the server, not from the user's browser. The following rules apply to the generated URL:
 *
 * - They must be used together.
 * - They can be used one time only.
 * - They are valid for 5 minutes after you run this command.
 * - You are charged only when the URL is used or there is interaction with Quick.
 * - The resulting user session is valid for 15 minutes (default) up to 10 hours (maximum). You can use the optional `SessionLifetimeInMinutes` parameter to customize session duration.
 *
 * For more information, see [Embedding Analytics Using GetDashboardEmbedUrl](https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics-deprecated.html) in the *Amazon Quick User Guide*.
 *
 * For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the [Amazon Quick Developer Portal](https://docs.aws.amazon.com/quicksight/latest/user/quicksight-dev-portal.html).
 *
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
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link DomainNotWhitelistedException} (client fault)
 *
 * The domain specified isn't on the allow list. All domains for embedded dashboards must be added to the approved list by an Amazon Quick Suite admin.
 *
 * @throws {@link IdentityTypeNotSupportedException} (client fault)
 *
 * The identity type specified isn't supported. Supported identity types include `IAM` and `QUICKSIGHT`.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link QuickSightUserNotFoundException} (client fault)
 *
 * The user with the provided name isn't found. This error can happen in any operation that requires finding a user based on a provided user name, such as `DeleteUser`, `DescribeUser`, and so on.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The resource specified already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link SessionLifetimeInMinutesInvalidException} (client fault)
 *
 * The number of minutes specified for the lifetime of a session isn't valid. The session lifetime must be 15-600 minutes.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link UnsupportedPricingPlanException} (client fault)
 *
 * This error indicates that you are calling an embedding operation in Amazon Quick Sight without the required pricing plan on your Amazon Web Services account. Before you can use embedding for anonymous users, a Quick Suite administrator needs to add capacity pricing to Quick Sight. You can do this on the **Manage Quick Suite** page.
 *
 * After capacity pricing is added, you can use the `GetDashboardEmbedUrl` API operation with the `--identity-type ANONYMOUS` option.
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *
 * This error indicates that you are calling an operation on an Amazon Quick Suite subscription where the edition doesn't include support for that operation. Amazon Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and capability is available in every edition.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class GetDashboardEmbedUrlCommand extends command<GetDashboardEmbedUrlCommandInput, GetDashboardEmbedUrlCommandOutput>(
  _ep0,
  _mw0,
  "GetDashboardEmbedUrl",
  GetDashboardEmbedUrl$
) {
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
