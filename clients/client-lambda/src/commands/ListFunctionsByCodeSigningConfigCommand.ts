// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import type {
  ListFunctionsByCodeSigningConfigRequest,
  ListFunctionsByCodeSigningConfigResponse,
} from "../models/models_0";
import { ListFunctionsByCodeSigningConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFunctionsByCodeSigningConfigCommand}.
 */
export interface ListFunctionsByCodeSigningConfigCommandInput extends ListFunctionsByCodeSigningConfigRequest {}
/**
 * @public
 *
 * The output of {@link ListFunctionsByCodeSigningConfigCommand}.
 */
export interface ListFunctionsByCodeSigningConfigCommandOutput
  extends ListFunctionsByCodeSigningConfigResponse,
    __MetadataBearer {}

/**
 * <p>List the functions that use the specified code signing configuration. You can use this method prior to deleting a code signing configuration, to verify that no functions are using it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListFunctionsByCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListFunctionsByCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // ListFunctionsByCodeSigningConfigRequest
 *   CodeSigningConfigArn: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListFunctionsByCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * // { // ListFunctionsByCodeSigningConfigResponse
 * //   NextMarker: "STRING_VALUE",
 * //   FunctionArns: [ // FunctionArnList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFunctionsByCodeSigningConfigCommandInput - {@link ListFunctionsByCodeSigningConfigCommandInput}
 * @returns {@link ListFunctionsByCodeSigningConfigCommandOutput}
 * @see {@link ListFunctionsByCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link ListFunctionsByCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 *
 * @public
 */
export class ListFunctionsByCodeSigningConfigCommand extends $Command
  .classBuilder<
    ListFunctionsByCodeSigningConfigCommandInput,
    ListFunctionsByCodeSigningConfigCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "ListFunctionsByCodeSigningConfig", {})
  .n("LambdaClient", "ListFunctionsByCodeSigningConfigCommand")
  .sc(ListFunctionsByCodeSigningConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFunctionsByCodeSigningConfigRequest;
      output: ListFunctionsByCodeSigningConfigResponse;
    };
    sdk: {
      input: ListFunctionsByCodeSigningConfigCommandInput;
      output: ListFunctionsByCodeSigningConfigCommandOutput;
    };
  };
}
