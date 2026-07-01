// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListThemesRequest, ListThemesResponse } from "../models/models_0";
import { ListThemes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListThemesCommand}.
 */
export interface ListThemesCommandInput extends ListThemesRequest {}
/**
 * @public
 *
 * The output of {@link ListThemesCommand}.
 */
export interface ListThemesCommandOutput extends ListThemesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of themes for a specified Amplify app and backend
 *       environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, ListThemesCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, ListThemesCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * // import type { AmplifyUIBuilderClientConfig } from "@aws-sdk/client-amplifyuibuilder";
 * const config = {}; // type is AmplifyUIBuilderClientConfig
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // ListThemesRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListThemesCommand(input);
 * const response = await client.send(command);
 * // { // ListThemesResponse
 * //   entities: [ // ThemeSummaryList // required
 * //     { // ThemeSummary
 * //       appId: "STRING_VALUE", // required
 * //       environmentName: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThemesCommandInput - {@link ListThemesCommandInput}
 * @returns {@link ListThemesCommandOutput}
 * @see {@link ListThemesCommandInput} for command's `input` shape.
 * @see {@link ListThemesCommandOutput} for command's `response` shape.
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
export class ListThemesCommand extends command<ListThemesCommandInput, ListThemesCommandOutput>(
  _ep0,
  _mw0,
  "ListThemes",
  ListThemes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThemesRequest;
      output: ListThemesResponse;
    };
    sdk: {
      input: ListThemesCommandInput;
      output: ListThemesCommandOutput;
    };
  };
}
