// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDistributionsByVpcOriginIdRequest, ListDistributionsByVpcOriginIdResult } from "../models/models_1";
import { ListDistributionsByVpcOriginId$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDistributionsByVpcOriginIdCommand}.
 */
export interface ListDistributionsByVpcOriginIdCommandInput extends ListDistributionsByVpcOriginIdRequest {}
/**
 * @public
 *
 * The output of {@link ListDistributionsByVpcOriginIdCommand}.
 */
export interface ListDistributionsByVpcOriginIdCommandOutput
  extends ListDistributionsByVpcOriginIdResult,
    __MetadataBearer {}

/**
 * <p>List CloudFront distributions by their VPC origin ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByVpcOriginIdCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByVpcOriginIdCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListDistributionsByVpcOriginIdRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   VpcOriginId: "STRING_VALUE", // required
 * };
 * const command = new ListDistributionsByVpcOriginIdCommand(input);
 * const response = await client.send(command);
 * // { // ListDistributionsByVpcOriginIdResult
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
 * @param ListDistributionsByVpcOriginIdCommandInput - {@link ListDistributionsByVpcOriginIdCommandInput}
 * @returns {@link ListDistributionsByVpcOriginIdCommandOutput}
 * @see {@link ListDistributionsByVpcOriginIdCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByVpcOriginIdCommandOutput} for command's `response` shape.
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
 * @example To list distributions by VPC origin ID
 * ```javascript
 * // The following command lists distributions by VPC origin ID:
 * const input = {
 *   VpcOriginId: "vo_BQwjxxQxjCaBcQLzJUFkDM"
 * };
 * const command = new ListDistributionsByVpcOriginIdCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DistributionIdList: {
 *     IsTruncated: false,
 *     Items:     [],
 *     Marker: "a",
 *     MaxItems: 100,
 *     Quantity: 0
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDistributionsByVpcOriginIdCommand extends $Command
  .classBuilder<
    ListDistributionsByVpcOriginIdCommandInput,
    ListDistributionsByVpcOriginIdCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "ListDistributionsByVpcOriginId", {})
  .n("CloudFrontClient", "ListDistributionsByVpcOriginIdCommand")
  .sc(ListDistributionsByVpcOriginId$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDistributionsByVpcOriginIdRequest;
      output: ListDistributionsByVpcOriginIdResult;
    };
    sdk: {
      input: ListDistributionsByVpcOriginIdCommandInput;
      output: ListDistributionsByVpcOriginIdCommandOutput;
    };
  };
}
