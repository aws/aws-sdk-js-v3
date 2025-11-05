// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAnycastIpListsRequest, ListAnycastIpListsResult } from "../models/models_1";
import { de_ListAnycastIpListsCommand, se_ListAnycastIpListsCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAnycastIpListsCommand}.
 */
export interface ListAnycastIpListsCommandInput extends ListAnycastIpListsRequest {}
/**
 * @public
 *
 * The output of {@link ListAnycastIpListsCommand}.
 */
export interface ListAnycastIpListsCommandOutput extends ListAnycastIpListsResult, __MetadataBearer {}

/**
 * <p>Lists your Anycast static IP lists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListAnycastIpListsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListAnycastIpListsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListAnycastIpListsRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListAnycastIpListsCommand(input);
 * const response = await client.send(command);
 * // { // ListAnycastIpListsResult
 * //   AnycastIpLists: { // AnycastIpListCollection
 * //     Items: [ // AnycastIpListSummaries
 * //       { // AnycastIpListSummary
 * //         Id: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //         Status: "STRING_VALUE", // required
 * //         Arn: "STRING_VALUE", // required
 * //         IpCount: Number("int"), // required
 * //         LastModifiedTime: new Date("TIMESTAMP"), // required
 * //         IpAddressType: "ipv4" || "ipv6" || "dualstack",
 * //         ETag: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Marker: "STRING_VALUE", // required
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     IsTruncated: true || false, // required
 * //     Quantity: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param ListAnycastIpListsCommandInput - {@link ListAnycastIpListsCommandInput}
 * @returns {@link ListAnycastIpListsCommandOutput}
 * @see {@link ListAnycastIpListsCommandInput} for command's `input` shape.
 * @see {@link ListAnycastIpListsCommandOutput} for command's `response` shape.
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
export class ListAnycastIpListsCommand extends $Command
  .classBuilder<
    ListAnycastIpListsCommandInput,
    ListAnycastIpListsCommandOutput,
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
  .s("Cloudfront2020_05_31", "ListAnycastIpLists", {})
  .n("CloudFrontClient", "ListAnycastIpListsCommand")
  .f(void 0, void 0)
  .ser(se_ListAnycastIpListsCommand)
  .de(de_ListAnycastIpListsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnycastIpListsRequest;
      output: ListAnycastIpListsResult;
    };
    sdk: {
      input: ListAnycastIpListsCommandInput;
      output: ListAnycastIpListsCommandOutput;
    };
  };
}
