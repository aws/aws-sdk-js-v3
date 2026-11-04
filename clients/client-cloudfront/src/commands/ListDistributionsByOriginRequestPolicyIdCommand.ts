// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListDistributionsByOriginRequestPolicyIdRequest,
  ListDistributionsByOriginRequestPolicyIdResult,
} from "../models/models_1";
import { ListDistributionsByOriginRequestPolicyId$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDistributionsByOriginRequestPolicyIdCommand}.
 */
export interface ListDistributionsByOriginRequestPolicyIdCommandInput extends ListDistributionsByOriginRequestPolicyIdRequest {}
/**
 * @public
 *
 * The output of {@link ListDistributionsByOriginRequestPolicyIdCommand}.
 */
export interface ListDistributionsByOriginRequestPolicyIdCommandOutput extends ListDistributionsByOriginRequestPolicyIdResult, __MetadataBearer {}

/**
 * Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified origin request policy.
 *
 * You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the `NextMarker` value from the current response as the `Marker` value in the subsequent request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByOriginRequestPolicyIdCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByOriginRequestPolicyIdCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListDistributionsByOriginRequestPolicyIdRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   OriginRequestPolicyId: "STRING_VALUE", // required
 * };
 * const command = new ListDistributionsByOriginRequestPolicyIdCommand(input);
 * const response = await client.send(command);
 * // { // ListDistributionsByOriginRequestPolicyIdResult
 * //   DistributionIdList: { // DistributionIdList
 * //     Marker: "STRING_VALUE", // required
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     IsTruncated: true || false, // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // DistributionIdListSummary
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListDistributionsByOriginRequestPolicyIdCommandInput - {@link ListDistributionsByOriginRequestPolicyIdCommandInput}
 * @returns {@link ListDistributionsByOriginRequestPolicyIdCommandOutput}
 * @see {@link ListDistributionsByOriginRequestPolicyIdCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByOriginRequestPolicyIdCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link NoSuchOriginRequestPolicy} (client fault)
 *
 * The origin request policy does not exist.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class ListDistributionsByOriginRequestPolicyIdCommand extends command<ListDistributionsByOriginRequestPolicyIdCommandInput, ListDistributionsByOriginRequestPolicyIdCommandOutput>(
  _ep0,
  _mw0,
  "ListDistributionsByOriginRequestPolicyId",
  ListDistributionsByOriginRequestPolicyId$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDistributionsByOriginRequestPolicyIdRequest;
      output: ListDistributionsByOriginRequestPolicyIdResult;
    };
    sdk: {
      input: ListDistributionsByOriginRequestPolicyIdCommandInput;
      output: ListDistributionsByOriginRequestPolicyIdCommandOutput;
    };
  };
}
