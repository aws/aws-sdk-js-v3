// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListFormsRequest, ListFormsResponse } from "../models/models_0";
import { de_ListFormsCommand, se_ListFormsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFormsCommand}.
 */
export interface ListFormsCommandInput extends ListFormsRequest {}
/**
 * @public
 *
 * The output of {@link ListFormsCommand}.
 */
export interface ListFormsCommandOutput extends ListFormsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of forms for a specified Amplify app and backend environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, ListFormsCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, ListFormsCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // ListFormsRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListFormsCommand(input);
 * const response = await client.send(command);
 * // { // ListFormsResponse
 * //   entities: [ // FormSummaryList // required
 * //     { // FormSummary
 * //       appId: "STRING_VALUE", // required
 * //       dataType: { // FormDataTypeConfig
 * //         dataSourceType: "STRING_VALUE", // required
 * //         dataTypeName: "STRING_VALUE", // required
 * //       },
 * //       environmentName: "STRING_VALUE", // required
 * //       formActionType: "create" || "update", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFormsCommandInput - {@link ListFormsCommandInput}
 * @returns {@link ListFormsCommandOutput}
 * @see {@link ListFormsCommandInput} for command's `input` shape.
 * @see {@link ListFormsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListFormsCommand extends $Command
  .classBuilder<
    ListFormsCommandInput,
    ListFormsCommandOutput,
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
  .s("AmplifyUIBuilder", "ListForms", {})
  .n("AmplifyUIBuilderClient", "ListFormsCommand")
  .f(void 0, void 0)
  .ser(se_ListFormsCommand)
  .de(de_ListFormsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFormsRequest;
      output: ListFormsResponse;
    };
    sdk: {
      input: ListFormsCommandInput;
      output: ListFormsCommandOutput;
    };
  };
}
