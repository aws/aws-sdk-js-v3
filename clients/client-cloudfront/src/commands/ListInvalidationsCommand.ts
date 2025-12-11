// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListInvalidationsRequest, ListInvalidationsResult } from "../models/models_1";
import { ListInvalidations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInvalidationsCommand}.
 */
export interface ListInvalidationsCommandInput extends ListInvalidationsRequest {}
/**
 * @public
 *
 * The output of {@link ListInvalidationsCommand}.
 */
export interface ListInvalidationsCommandOutput extends ListInvalidationsResult, __MetadataBearer {}

/**
 * <p>Lists invalidation batches.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListInvalidationsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListInvalidationsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListInvalidationsRequest
 *   DistributionId: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListInvalidationsCommand(input);
 * const response = await client.send(command);
 * // { // ListInvalidationsResult
 * //   InvalidationList: { // InvalidationList
 * //     Marker: "STRING_VALUE", // required
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     IsTruncated: true || false, // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // InvalidationSummaryList
 * //       { // InvalidationSummary
 * //         Id: "STRING_VALUE", // required
 * //         CreateTime: new Date("TIMESTAMP"), // required
 * //         Status: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListInvalidationsCommandInput - {@link ListInvalidationsCommandInput}
 * @returns {@link ListInvalidationsCommandOutput}
 * @see {@link ListInvalidationsCommandInput} for command's `input` shape.
 * @see {@link ListInvalidationsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchDistribution} (client fault)
 *  <p>The specified distribution does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class ListInvalidationsCommand extends $Command
  .classBuilder<
    ListInvalidationsCommandInput,
    ListInvalidationsCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "ListInvalidations", {})
  .n("CloudFrontClient", "ListInvalidationsCommand")
  .sc(ListInvalidations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInvalidationsRequest;
      output: ListInvalidationsResult;
    };
    sdk: {
      input: ListInvalidationsCommandInput;
      output: ListInvalidationsCommandOutput;
    };
  };
}
