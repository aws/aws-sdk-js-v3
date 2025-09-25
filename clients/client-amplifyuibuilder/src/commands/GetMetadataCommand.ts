// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetMetadataRequest, GetMetadataResponse } from "../models/models_0";
import { GetMetadata } from "../schemas/schemas_4_Resource";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMetadataCommand}.
 */
export interface GetMetadataCommandInput extends GetMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetMetadataCommand}.
 */
export interface GetMetadataCommandOutput extends GetMetadataResponse, __MetadataBearer {}

/**
 * <p>Returns existing metadata for an Amplify app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, GetMetadataCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, GetMetadataCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * // import type { AmplifyUIBuilderClientConfig } from "@aws-sdk/client-amplifyuibuilder";
 * const config = {}; // type is AmplifyUIBuilderClientConfig
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // GetMetadataRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 * };
 * const command = new GetMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetMetadataResponse
 * //   features: { // FeaturesMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMetadataCommandInput - {@link GetMetadataCommandInput}
 * @returns {@link GetMetadataCommandOutput}
 * @see {@link GetMetadataCommandInput} for command's `input` shape.
 * @see {@link GetMetadataCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You don't have permission to perform this operation.</p>
 *
 * @throws {@link AmplifyUIBuilderServiceException}
 * <p>Base exception class for all service exceptions from AmplifyUIBuilder service.</p>
 *
 *
 * @public
 */
export class GetMetadataCommand extends $Command
  .classBuilder<
    GetMetadataCommandInput,
    GetMetadataCommandOutput,
    AmplifyUIBuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyUIBuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmplifyUIBuilder", "GetMetadata", {})
  .n("AmplifyUIBuilderClient", "GetMetadataCommand")
  .sc(GetMetadata)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMetadataRequest;
      output: GetMetadataResponse;
    };
    sdk: {
      input: GetMetadataCommandInput;
      output: GetMetadataCommandOutput;
    };
  };
}
