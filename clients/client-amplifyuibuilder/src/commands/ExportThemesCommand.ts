// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExportThemesRequest, ExportThemesResponse } from "../models/models_0";
import { ExportThemes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportThemesCommand}.
 */
export interface ExportThemesCommandInput extends ExportThemesRequest {}
/**
 * @public
 *
 * The output of {@link ExportThemesCommand}.
 */
export interface ExportThemesCommandOutput extends ExportThemesResponse, __MetadataBearer {}

/**
 * <p>Exports theme configurations to code that is ready to integrate into an Amplify app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, ExportThemesCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, ExportThemesCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * // import type { AmplifyUIBuilderClientConfig } from "@aws-sdk/client-amplifyuibuilder";
 * const config = {}; // type is AmplifyUIBuilderClientConfig
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // ExportThemesRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ExportThemesCommand(input);
 * const response = await client.send(command);
 * // { // ExportThemesResponse
 * //   entities: [ // ThemeList // required
 * //     { // Theme
 * //       appId: "STRING_VALUE", // required
 * //       environmentName: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //       values: [ // ThemeValuesList // required
 * //         { // ThemeValues
 * //           key: "STRING_VALUE",
 * //           value: { // ThemeValue
 * //             value: "STRING_VALUE",
 * //             children: [
 * //               {
 * //                 key: "STRING_VALUE",
 * //                 value: {
 * //                   value: "STRING_VALUE",
 * //                   children: "<ThemeValuesList>",
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       overrides: "<ThemeValuesList>",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportThemesCommandInput - {@link ExportThemesCommandInput}
 * @returns {@link ExportThemesCommandOutput}
 * @see {@link ExportThemesCommandInput} for command's `input` shape.
 * @see {@link ExportThemesCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link AmplifyUIBuilderServiceException}
 * <p>Base exception class for all service exceptions from AmplifyUIBuilder service.</p>
 *
 *
 * @public
 */
export class ExportThemesCommand extends $Command
  .classBuilder<
    ExportThemesCommandInput,
    ExportThemesCommandOutput,
    AmplifyUIBuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyUIBuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmplifyUIBuilder", "ExportThemes", {})
  .n("AmplifyUIBuilderClient", "ExportThemesCommand")
  .sc(ExportThemes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportThemesRequest;
      output: ExportThemesResponse;
    };
    sdk: {
      input: ExportThemesCommandInput;
      output: ExportThemesCommandOutput;
    };
  };
}
