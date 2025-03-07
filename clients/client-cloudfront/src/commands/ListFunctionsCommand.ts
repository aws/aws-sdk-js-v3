// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListFunctionsRequest, ListFunctionsResult } from "../models/models_1";
import { de_ListFunctionsCommand, se_ListFunctionsCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFunctionsCommand}.
 */
export interface ListFunctionsCommandInput extends ListFunctionsRequest {}
/**
 * @public
 *
 * The output of {@link ListFunctionsCommand}.
 */
export interface ListFunctionsCommandOutput extends ListFunctionsResult, __MetadataBearer {}

/**
 * <p>Gets a list of all CloudFront functions in your Amazon Web Services account.</p>
 *          <p>You can optionally apply a filter to return only the functions that are in the
 * 			specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p>
 *          <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListFunctionsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListFunctionsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // ListFunctionsRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   Stage: "DEVELOPMENT" || "LIVE",
 * };
 * const command = new ListFunctionsCommand(input);
 * const response = await client.send(command);
 * // { // ListFunctionsResult
 * //   FunctionList: { // FunctionList
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // FunctionSummaryList
 * //       { // FunctionSummary
 * //         Name: "STRING_VALUE", // required
 * //         Status: "STRING_VALUE",
 * //         FunctionConfig: { // FunctionConfig
 * //           Comment: "STRING_VALUE", // required
 * //           Runtime: "cloudfront-js-1.0" || "cloudfront-js-2.0", // required
 * //           KeyValueStoreAssociations: { // KeyValueStoreAssociations
 * //             Quantity: Number("int"), // required
 * //             Items: [ // KeyValueStoreAssociationList
 * //               { // KeyValueStoreAssociation
 * //                 KeyValueStoreARN: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         FunctionMetadata: { // FunctionMetadata
 * //           FunctionARN: "STRING_VALUE", // required
 * //           Stage: "DEVELOPMENT" || "LIVE",
 * //           CreatedTime: new Date("TIMESTAMP"),
 * //           LastModifiedTime: new Date("TIMESTAMP"), // required
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListFunctionsCommandInput - {@link ListFunctionsCommandInput}
 * @returns {@link ListFunctionsCommandOutput}
 * @see {@link ListFunctionsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
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
 * @public
 */
export class ListFunctionsCommand extends $Command
  .classBuilder<
    ListFunctionsCommandInput,
    ListFunctionsCommandOutput,
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
  .s("Cloudfront2020_05_31", "ListFunctions", {})
  .n("CloudFrontClient", "ListFunctionsCommand")
  .f(void 0, void 0)
  .ser(se_ListFunctionsCommand)
  .de(de_ListFunctionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFunctionsRequest;
      output: ListFunctionsResult;
    };
    sdk: {
      input: ListFunctionsCommandInput;
      output: ListFunctionsCommandOutput;
    };
  };
}
