// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateThemeRequest, UpdateThemeResponse } from "../models/models_0";
import { UpdateTheme } from "../schemas/schemas_3_Theme";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateThemeCommand}.
 */
export interface UpdateThemeCommandInput extends UpdateThemeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateThemeCommand}.
 */
export interface UpdateThemeCommandOutput extends UpdateThemeResponse, __MetadataBearer {}

/**
 * <p>Updates an existing theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, UpdateThemeCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, UpdateThemeCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * // import type { AmplifyUIBuilderClientConfig } from "@aws-sdk/client-amplifyuibuilder";
 * const config = {}; // type is AmplifyUIBuilderClientConfig
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // UpdateThemeRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   updatedTheme: { // UpdateThemeData
 *     id: "STRING_VALUE",
 *     name: "STRING_VALUE",
 *     values: [ // ThemeValuesList // required
 *       { // ThemeValues
 *         key: "STRING_VALUE",
 *         value: { // ThemeValue
 *           value: "STRING_VALUE",
 *           children: [
 *             {
 *               key: "STRING_VALUE",
 *               value: {
 *                 value: "STRING_VALUE",
 *                 children: "<ThemeValuesList>",
 *               },
 *             },
 *           ],
 *         },
 *       },
 *     ],
 *     overrides: "<ThemeValuesList>",
 *   },
 * };
 * const command = new UpdateThemeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateThemeResponse
 * //   entity: { // Theme
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
 * @param UpdateThemeCommandInput - {@link UpdateThemeCommandInput}
 * @returns {@link UpdateThemeCommandOutput}
 * @see {@link UpdateThemeCommandInput} for command's `input` shape.
 * @see {@link UpdateThemeCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource specified in the request conflicts with an existing resource.</p>
 *
 * @throws {@link AmplifyUIBuilderServiceException}
 * <p>Base exception class for all service exceptions from AmplifyUIBuilder service.</p>
 *
 *
 * @public
 */
export class UpdateThemeCommand extends $Command
  .classBuilder<
    UpdateThemeCommandInput,
    UpdateThemeCommandOutput,
    AmplifyUIBuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyUIBuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmplifyUIBuilder", "UpdateTheme", {})
  .n("AmplifyUIBuilderClient", "UpdateThemeCommand")
  .sc(UpdateTheme)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateThemeRequest;
      output: UpdateThemeResponse;
    };
    sdk: {
      input: UpdateThemeCommandInput;
      output: UpdateThemeCommandOutput;
    };
  };
}
