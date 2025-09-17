// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListInvalidationsForDistributionTenantRequest,
  ListInvalidationsForDistributionTenantResult,
} from "../models/models_1";
import {
  de_ListInvalidationsForDistributionTenantCommand,
  se_ListInvalidationsForDistributionTenantCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInvalidationsForDistributionTenantCommand}.
 */
export interface ListInvalidationsForDistributionTenantCommandInput
  extends ListInvalidationsForDistributionTenantRequest {}
/**
 * @public
 *
 * The output of {@link ListInvalidationsForDistributionTenantCommand}.
 */
export interface ListInvalidationsForDistributionTenantCommandOutput
  extends ListInvalidationsForDistributionTenantResult,
    __MetadataBearer {}

/**
 * <p>Lists the invalidations for a distribution tenant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListInvalidationsForDistributionTenantCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListInvalidationsForDistributionTenantCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListInvalidationsForDistributionTenantRequest
 *   Id: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListInvalidationsForDistributionTenantCommand(input);
 * const response = await client.send(command);
 * // { // ListInvalidationsForDistributionTenantResult
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
 * @param ListInvalidationsForDistributionTenantCommandInput - {@link ListInvalidationsForDistributionTenantCommandInput}
 * @returns {@link ListInvalidationsForDistributionTenantCommandOutput}
 * @see {@link ListInvalidationsForDistributionTenantCommandInput} for command's `input` shape.
 * @see {@link ListInvalidationsForDistributionTenantCommandOutput} for command's `response` shape.
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
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class ListInvalidationsForDistributionTenantCommand extends $Command
  .classBuilder<
    ListInvalidationsForDistributionTenantCommandInput,
    ListInvalidationsForDistributionTenantCommandOutput,
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
  .s("Cloudfront2020_05_31", "ListInvalidationsForDistributionTenant", {})
  .n("CloudFrontClient", "ListInvalidationsForDistributionTenantCommand")
  .f(void 0, void 0)
  .ser(se_ListInvalidationsForDistributionTenantCommand)
  .de(de_ListInvalidationsForDistributionTenantCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInvalidationsForDistributionTenantRequest;
      output: ListInvalidationsForDistributionTenantResult;
    };
    sdk: {
      input: ListInvalidationsForDistributionTenantCommandInput;
      output: ListInvalidationsForDistributionTenantCommandOutput;
    };
  };
}
