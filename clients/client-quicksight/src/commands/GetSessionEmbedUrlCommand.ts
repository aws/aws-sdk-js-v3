// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSessionEmbedUrlRequest, GetSessionEmbedUrlResponse } from "../models/models_4";
import { GetSessionEmbedUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Generates a session URL and authorization code that you can use to embed the Amazon Amazon Quick Sight console in your web server code. Use `GetSessionEmbedUrl` where you want to provide an authoring portal that allows users to create data sources, datasets, analyses, and dashboards. The users who access an embedded Amazon Quick Sight console need belong to the author or admin security cohort. If you want to restrict permissions to some of these features, add a custom permissions profile to the user with the `UpdateUser` API operation. Use `RegisterUser` API operation to add a new user with a custom permission profile attached. For more information, see the following sections in the *Amazon Quick User Guide*:
 *
 * - [Embedding Analytics](https://docs.aws.amazon.com/quicksight/latest/user/embedded-analytics.html)
 * - [Customizing Access to the Amazon Quick Console](https://docs.aws.amazon.com/quicksight/latest/user/customizing-permissions-to-the-quicksight-console.html)
 *
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
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
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
export class GetSessionEmbedUrlCommand extends command<GetSessionEmbedUrlCommandInput, GetSessionEmbedUrlCommandOutput>(
  _ep0,
  _mw0,
  "GetSessionEmbedUrl",
  GetSessionEmbedUrl$
) {
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
