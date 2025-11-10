// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteThemeRequest } from "../models/models_0";
import { DeleteTheme } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteThemeCommand}.
 */
export interface DeleteThemeCommandInput extends DeleteThemeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteThemeCommand}.
 */
export interface DeleteThemeCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a theme from an Amplify app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, DeleteThemeCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, DeleteThemeCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * // import type { AmplifyUIBuilderClientConfig } from "@aws-sdk/client-amplifyuibuilder";
 * const config = {}; // type is AmplifyUIBuilderClientConfig
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // DeleteThemeRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteThemeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteThemeCommandInput - {@link DeleteThemeCommandInput}
 * @returns {@link DeleteThemeCommandOutput}
 * @see {@link DeleteThemeCommandInput} for command's `input` shape.
 * @see {@link DeleteThemeCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link AmplifyUIBuilderServiceException}
 * <p>Base exception class for all service exceptions from AmplifyUIBuilder service.</p>
 *
 *
 * @public
 */
export class DeleteThemeCommand extends $Command
  .classBuilder<
    DeleteThemeCommandInput,
    DeleteThemeCommandOutput,
    AmplifyUIBuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyUIBuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmplifyUIBuilder", "DeleteTheme", {})
  .n("AmplifyUIBuilderClient", "DeleteThemeCommand")
  .sc(DeleteTheme)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteThemeRequest;
      output: {};
    };
    sdk: {
      input: DeleteThemeCommandInput;
      output: DeleteThemeCommandOutput;
    };
  };
}
