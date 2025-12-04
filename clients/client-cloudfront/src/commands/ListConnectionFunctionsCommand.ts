// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListConnectionFunctionsRequest, ListConnectionFunctionsResult } from "../models/models_1";
import { ListConnectionFunctions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConnectionFunctionsCommand}.
 */
export interface ListConnectionFunctionsCommandInput extends ListConnectionFunctionsRequest {}
/**
 * @public
 *
 * The output of {@link ListConnectionFunctionsCommand}.
 */
export interface ListConnectionFunctionsCommandOutput extends ListConnectionFunctionsResult, __MetadataBearer {}

/**
 * <p>Lists connection functions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListConnectionFunctionsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListConnectionFunctionsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListConnectionFunctionsRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   Stage: "DEVELOPMENT" || "LIVE",
 * };
 * const command = new ListConnectionFunctionsCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectionFunctionsResult
 * //   NextMarker: "STRING_VALUE",
 * //   ConnectionFunctions: [ // ConnectionFunctionSummaryList
 * //     { // ConnectionFunctionSummary
 * //       Name: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       ConnectionFunctionConfig: { // FunctionConfig
 * //         Comment: "STRING_VALUE", // required
 * //         Runtime: "cloudfront-js-1.0" || "cloudfront-js-2.0", // required
 * //         KeyValueStoreAssociations: { // KeyValueStoreAssociations
 * //           Quantity: Number("int"), // required
 * //           Items: [ // KeyValueStoreAssociationList
 * //             { // KeyValueStoreAssociation
 * //               KeyValueStoreARN: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       ConnectionFunctionArn: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE", // required
 * //       Stage: "DEVELOPMENT" || "LIVE", // required
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListConnectionFunctionsCommandInput - {@link ListConnectionFunctionsCommandInput}
 * @returns {@link ListConnectionFunctionsCommandOutput}
 * @see {@link ListConnectionFunctionsCommandInput} for command's `input` shape.
 * @see {@link ListConnectionFunctionsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
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
export class ListConnectionFunctionsCommand extends $Command
  .classBuilder<
    ListConnectionFunctionsCommandInput,
    ListConnectionFunctionsCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "ListConnectionFunctions", {})
  .n("CloudFrontClient", "ListConnectionFunctionsCommand")
  .sc(ListConnectionFunctions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectionFunctionsRequest;
      output: ListConnectionFunctionsResult;
    };
    sdk: {
      input: ListConnectionFunctionsCommandInput;
      output: ListConnectionFunctionsCommandOutput;
    };
  };
}
