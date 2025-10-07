// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRepositorySyncDefinitionsInput, ListRepositorySyncDefinitionsOutput } from "../models/models_0";
import {
  de_ListRepositorySyncDefinitionsCommand,
  se_ListRepositorySyncDefinitionsCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRepositorySyncDefinitionsCommand}.
 */
export interface ListRepositorySyncDefinitionsCommandInput extends ListRepositorySyncDefinitionsInput {}
/**
 * @public
 *
 * The output of {@link ListRepositorySyncDefinitionsCommand}.
 */
export interface ListRepositorySyncDefinitionsCommandOutput
  extends ListRepositorySyncDefinitionsOutput,
    __MetadataBearer {}

/**
 * <p>List repository sync definitions with detail data.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListRepositorySyncDefinitionsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListRepositorySyncDefinitionsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListRepositorySyncDefinitionsInput
 *   repositoryName: "STRING_VALUE", // required
 *   repositoryProvider: "STRING_VALUE", // required
 *   syncType: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRepositorySyncDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRepositorySyncDefinitionsOutput
 * //   nextToken: "STRING_VALUE",
 * //   syncDefinitions: [ // RepositorySyncDefinitionList // required
 * //     { // RepositorySyncDefinition
 * //       target: "STRING_VALUE", // required
 * //       parent: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //       directory: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRepositorySyncDefinitionsCommandInput - {@link ListRepositorySyncDefinitionsCommandInput}
 * @returns {@link ListRepositorySyncDefinitionsCommandOutput}
 * @see {@link ListRepositorySyncDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListRepositorySyncDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 *
 * @public
 */
export class ListRepositorySyncDefinitionsCommand extends $Command
  .classBuilder<
    ListRepositorySyncDefinitionsCommandInput,
    ListRepositorySyncDefinitionsCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsProton20200720", "ListRepositorySyncDefinitions", {})
  .n("ProtonClient", "ListRepositorySyncDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_ListRepositorySyncDefinitionsCommand)
  .de(de_ListRepositorySyncDefinitionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRepositorySyncDefinitionsInput;
      output: ListRepositorySyncDefinitionsOutput;
    };
    sdk: {
      input: ListRepositorySyncDefinitionsCommandInput;
      output: ListRepositorySyncDefinitionsCommandOutput;
    };
  };
}
