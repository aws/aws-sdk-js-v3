// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListCloudFrontOriginAccessIdentitiesRequest,
  ListCloudFrontOriginAccessIdentitiesResult,
} from "../models/models_1";
import { ListCloudFrontOriginAccessIdentities } from "../schemas/schemas_49_ListCloudFrontOriginAccessIdentities";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCloudFrontOriginAccessIdentitiesCommand}.
 */
export interface ListCloudFrontOriginAccessIdentitiesCommandInput extends ListCloudFrontOriginAccessIdentitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListCloudFrontOriginAccessIdentitiesCommand}.
 */
export interface ListCloudFrontOriginAccessIdentitiesCommandOutput
  extends ListCloudFrontOriginAccessIdentitiesResult,
    __MetadataBearer {}

/**
 * <p>Lists origin access identities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListCloudFrontOriginAccessIdentitiesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListCloudFrontOriginAccessIdentitiesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListCloudFrontOriginAccessIdentitiesRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListCloudFrontOriginAccessIdentitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListCloudFrontOriginAccessIdentitiesResult
 * //   CloudFrontOriginAccessIdentityList: { // CloudFrontOriginAccessIdentityList
 * //     Marker: "STRING_VALUE", // required
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     IsTruncated: true || false, // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // CloudFrontOriginAccessIdentitySummaryList
 * //       { // CloudFrontOriginAccessIdentitySummary
 * //         Id: "STRING_VALUE", // required
 * //         S3CanonicalUserId: "STRING_VALUE", // required
 * //         Comment: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListCloudFrontOriginAccessIdentitiesCommandInput - {@link ListCloudFrontOriginAccessIdentitiesCommandInput}
 * @returns {@link ListCloudFrontOriginAccessIdentitiesCommandOutput}
 * @see {@link ListCloudFrontOriginAccessIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListCloudFrontOriginAccessIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
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
export class ListCloudFrontOriginAccessIdentitiesCommand extends $Command
  .classBuilder<
    ListCloudFrontOriginAccessIdentitiesCommandInput,
    ListCloudFrontOriginAccessIdentitiesCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "ListCloudFrontOriginAccessIdentities", {})
  .n("CloudFrontClient", "ListCloudFrontOriginAccessIdentitiesCommand")
  .sc(ListCloudFrontOriginAccessIdentities)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCloudFrontOriginAccessIdentitiesRequest;
      output: ListCloudFrontOriginAccessIdentitiesResult;
    };
    sdk: {
      input: ListCloudFrontOriginAccessIdentitiesCommandInput;
      output: ListCloudFrontOriginAccessIdentitiesCommandOutput;
    };
  };
}
