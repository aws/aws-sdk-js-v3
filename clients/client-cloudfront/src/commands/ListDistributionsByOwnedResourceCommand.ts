// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDistributionsByOwnedResourceRequest, ListDistributionsByOwnedResourceResult } from "../models/models_1";
import {
  de_ListDistributionsByOwnedResourceCommand,
  se_ListDistributionsByOwnedResourceCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListDistributionsByOwnedResourceCommandOutput
  extends ListDistributionsByOwnedResourceResult,
    __MetadataBearer {}

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
export class ListDistributionsByOwnedResourceCommand extends $Command
  .classBuilder<
    ListDistributionsByOwnedResourceCommandInput,
    ListDistributionsByOwnedResourceCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "ListDistributionsByOwnedResource", {})
  .n("CloudFrontClient", "ListDistributionsByOwnedResourceCommand")
  .f(void 0, void 0)
  .ser(se_ListDistributionsByOwnedResourceCommand)
  .de(de_ListDistributionsByOwnedResourceCommand)
  .build() {
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
