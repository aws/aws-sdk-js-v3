// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAppBundlesRequest, ListAppBundlesResponse } from "../models/models_0";
import { ListAppBundles } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppBundlesCommand}.
 */
export interface ListAppBundlesCommandInput extends ListAppBundlesRequest {}
/**
 * @public
 *
 * The output of {@link ListAppBundlesCommand}.
 */
export interface ListAppBundlesCommandOutput extends ListAppBundlesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of app bundles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, ListAppBundlesCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, ListAppBundlesCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // ListAppBundlesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAppBundlesCommand(input);
 * const response = await client.send(command);
 * // { // ListAppBundlesResponse
 * //   appBundleSummaryList: [ // AppBundleSummaryList // required
 * //     { // AppBundleSummary
 * //       arn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppBundlesCommandInput - {@link ListAppBundlesCommandInput}
 * @returns {@link ListAppBundlesCommandOutput}
 * @see {@link ListAppBundlesCommandInput} for command's `input` shape.
 * @see {@link ListAppBundlesCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *          with an internal server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link AppFabricServiceException}
 * <p>Base exception class for all service exceptions from AppFabric service.</p>
 *
 *
 * @public
 */
export class ListAppBundlesCommand extends $Command
  .classBuilder<
    ListAppBundlesCommandInput,
    ListAppBundlesCommandOutput,
    AppFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FabricFrontEndService", "ListAppBundles", {})
  .n("AppFabricClient", "ListAppBundlesCommand")
  .sc(ListAppBundles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppBundlesRequest;
      output: ListAppBundlesResponse;
    };
    sdk: {
      input: ListAppBundlesCommandInput;
      output: ListAppBundlesCommandOutput;
    };
  };
}
