// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListComponentsRequest, ListComponentsResponse } from "../models/models_0";
import { de_ListComponentsCommand, se_ListComponentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListComponentsCommand}.
 */
export interface ListComponentsCommandInput extends ListComponentsRequest {}
/**
 * @public
 *
 * The output of {@link ListComponentsCommand}.
 */
export interface ListComponentsCommandOutput extends ListComponentsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of components for a specified Amplify app and backend
 *       environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, ListComponentsCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, ListComponentsCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // ListComponentsRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListComponentsCommand(input);
 * const response = await client.send(command);
 * // { // ListComponentsResponse
 * //   entities: [ // ComponentSummaryList // required
 * //     { // ComponentSummary
 * //       appId: "STRING_VALUE", // required
 * //       environmentName: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       componentType: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListComponentsCommandInput - {@link ListComponentsCommandInput}
 * @returns {@link ListComponentsCommandOutput}
 * @see {@link ListComponentsCommandInput} for command's `input` shape.
 * @see {@link ListComponentsCommandOutput} for command's `response` shape.
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
export class ListComponentsCommand extends $Command
  .classBuilder<
    ListComponentsCommandInput,
    ListComponentsCommandOutput,
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
  .s("AmplifyUIBuilder", "ListComponents", {})
  .n("AmplifyUIBuilderClient", "ListComponentsCommand")
  .f(void 0, void 0)
  .ser(se_ListComponentsCommand)
  .de(de_ListComponentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListComponentsRequest;
      output: ListComponentsResponse;
    };
    sdk: {
      input: ListComponentsCommandInput;
      output: ListComponentsCommandOutput;
    };
  };
}
