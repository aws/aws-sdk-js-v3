// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListKeyGroupsRequest, ListKeyGroupsResult } from "../models/models_1";
import { ListKeyGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKeyGroupsCommand}.
 */
export interface ListKeyGroupsCommandInput extends ListKeyGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListKeyGroupsCommand}.
 */
export interface ListKeyGroupsCommandOutput extends ListKeyGroupsResult, __MetadataBearer {}

/**
 * <p>Gets a list of key groups.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListKeyGroupsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListKeyGroupsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListKeyGroupsRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListKeyGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListKeyGroupsResult
 * //   KeyGroupList: { // KeyGroupList
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // KeyGroupSummaryList
 * //       { // KeyGroupSummary
 * //         KeyGroup: { // KeyGroup
 * //           Id: "STRING_VALUE", // required
 * //           LastModifiedTime: new Date("TIMESTAMP"), // required
 * //           KeyGroupConfig: { // KeyGroupConfig
 * //             Name: "STRING_VALUE", // required
 * //             Items: [ // PublicKeyIdList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             Comment: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListKeyGroupsCommandInput - {@link ListKeyGroupsCommandInput}
 * @returns {@link ListKeyGroupsCommandOutput}
 * @see {@link ListKeyGroupsCommandInput} for command's `input` shape.
 * @see {@link ListKeyGroupsCommandOutput} for command's `response` shape.
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
export class ListKeyGroupsCommand extends $Command
  .classBuilder<
    ListKeyGroupsCommandInput,
    ListKeyGroupsCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "ListKeyGroups", {})
  .n("CloudFrontClient", "ListKeyGroupsCommand")
  .sc(ListKeyGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKeyGroupsRequest;
      output: ListKeyGroupsResult;
    };
    sdk: {
      input: ListKeyGroupsCommandInput;
      output: ListKeyGroupsCommandOutput;
    };
  };
}
