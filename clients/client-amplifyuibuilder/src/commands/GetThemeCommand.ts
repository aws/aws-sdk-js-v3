// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetThemeRequest, GetThemeResponse } from "../models/models_0";
import { de_GetThemeCommand, se_GetThemeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetThemeCommand}.
 */
export interface GetThemeCommandInput extends GetThemeRequest {}
/**
 * @public
 *
 * The output of {@link GetThemeCommand}.
 */
export interface GetThemeCommandOutput extends GetThemeResponse, __MetadataBearer {}

/**
 * <p>Returns an existing theme for an Amplify app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, GetThemeCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, GetThemeCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * // import type { AmplifyUIBuilderClientConfig } from "@aws-sdk/client-amplifyuibuilder";
 * const config = {}; // type is AmplifyUIBuilderClientConfig
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // GetThemeRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetThemeCommand(input);
 * const response = await client.send(command);
 * // { // GetThemeResponse
 * //   theme: { // Theme
 * //     appId: "STRING_VALUE", // required
 * //     environmentName: "STRING_VALUE", // required
 * //     id: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     values: [ // ThemeValuesList // required
 * //       { // ThemeValues
 * //         key: "STRING_VALUE",
 * //         value: { // ThemeValue
 * //           value: "STRING_VALUE",
 * //           children: [
 * //             {
 * //               key: "STRING_VALUE",
 * //               value: {
 * //                 value: "STRING_VALUE",
 * //                 children: "<ThemeValuesList>",
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     overrides: "<ThemeValuesList>",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetThemeCommandInput - {@link GetThemeCommandInput}
 * @returns {@link GetThemeCommandOutput}
 * @see {@link GetThemeCommandInput} for command's `input` shape.
 * @see {@link GetThemeCommandOutput} for command's `response` shape.
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
export class GetThemeCommand extends $Command
  .classBuilder<
    GetThemeCommandInput,
    GetThemeCommandOutput,
    AmplifyUIBuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyUIBuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmplifyUIBuilder", "GetTheme", {})
  .n("AmplifyUIBuilderClient", "GetThemeCommand")
  .f(void 0, void 0)
  .ser(se_GetThemeCommand)
  .de(de_GetThemeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetThemeRequest;
      output: GetThemeResponse;
    };
    sdk: {
      input: GetThemeCommandInput;
      output: GetThemeCommandOutput;
    };
  };
}
