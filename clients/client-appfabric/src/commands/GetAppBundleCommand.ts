// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAppBundleRequest, GetAppBundleResponse } from "../models/models_0";
import { GetAppBundle } from "../schemas/schemas_7_App";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAppBundleCommand}.
 */
export interface GetAppBundleCommandInput extends GetAppBundleRequest {}
/**
 * @public
 *
 * The output of {@link GetAppBundleCommand}.
 */
export interface GetAppBundleCommandOutput extends GetAppBundleResponse, __MetadataBearer {}

/**
 * <p>Returns information about an app bundle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, GetAppBundleCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, GetAppBundleCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // GetAppBundleRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetAppBundleCommand(input);
 * const response = await client.send(command);
 * // { // GetAppBundleResponse
 * //   appBundle: { // AppBundle
 * //     arn: "STRING_VALUE", // required
 * //     customerManagedKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAppBundleCommandInput - {@link GetAppBundleCommandInput}
 * @returns {@link GetAppBundleCommandOutput}
 * @see {@link GetAppBundleCommandInput} for command's `input` shape.
 * @see {@link GetAppBundleCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *          with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
export class GetAppBundleCommand extends $Command
  .classBuilder<
    GetAppBundleCommandInput,
    GetAppBundleCommandOutput,
    AppFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FabricFrontEndService", "GetAppBundle", {})
  .n("AppFabricClient", "GetAppBundleCommand")
  .sc(GetAppBundle)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAppBundleRequest;
      output: GetAppBundleResponse;
    };
    sdk: {
      input: GetAppBundleCommandInput;
      output: GetAppBundleCommandOutput;
    };
  };
}
