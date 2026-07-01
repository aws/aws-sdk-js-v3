// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListDistributionsByOwnedResourceRequest,
  ListDistributionsByOwnedResourceResult,
} from "../models/models_1";
import { ListDistributionsByOwnedResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDistributionsByOwnedResourceCommand}.
 */
export interface ListDistributionsByOwnedResourceCommandInput extends ListDistributionsByOwnedResourceRequest {}
/**
 * @public
 *
 * The output of {@link ListDistributionsByOwnedResourceCommand}.
 */
export interface ListDistributionsByOwnedResourceCommandOutput extends ListDistributionsByOwnedResourceResult, __MetadataBearer {}

/**
 * <p>Lists the CloudFront distributions that are associated with the specified resource that you own.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByOwnedResourceCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByOwnedResourceCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListDistributionsByOwnedResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListDistributionsByOwnedResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListDistributionsByOwnedResourceResult
 * //   DistributionList: { // DistributionIdOwnerList
 * //     Marker: "STRING_VALUE", // required
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     IsTruncated: true || false, // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // DistributionIdOwnerItemList
 * //       { // DistributionIdOwner
 * //         DistributionId: "STRING_VALUE", // required
 * //         OwnerAccountId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListDistributionsByOwnedResourceCommandInput - {@link ListDistributionsByOwnedResourceCommandInput}
 * @returns {@link ListDistributionsByOwnedResourceCommandOutput}
 * @see {@link ListDistributionsByOwnedResourceCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByOwnedResourceCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this Amazon Web Services Region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class ListDistributionsByOwnedResourceCommand extends command<ListDistributionsByOwnedResourceCommandInput, ListDistributionsByOwnedResourceCommandOutput>(
  _ep0,
  _mw0,
  "ListDistributionsByOwnedResource",
  ListDistributionsByOwnedResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDistributionsByOwnedResourceRequest;
      output: ListDistributionsByOwnedResourceResult;
    };
    sdk: {
      input: ListDistributionsByOwnedResourceCommandInput;
      output: ListDistributionsByOwnedResourceCommandOutput;
    };
  };
}
