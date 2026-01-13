// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { ListRegistriesInput, ListRegistriesResponse } from "../models/models_2";
import { ListRegistries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRegistriesCommand}.
 */
export interface ListRegistriesCommandInput extends ListRegistriesInput {}
/**
 * @public
 *
 * The output of {@link ListRegistriesCommand}.
 */
export interface ListRegistriesCommandOutput extends ListRegistriesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of registries that you have created, with minimal registry information. Registries in the <code>Deleting</code> status will not be included in the results. Empty results will be returned if there are no registries available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListRegistriesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListRegistriesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListRegistriesInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRegistriesCommand(input);
 * const response = await client.send(command);
 * // { // ListRegistriesResponse
 * //   Registries: [ // RegistryListDefinition
 * //     { // RegistryListItem
 * //       RegistryName: "STRING_VALUE",
 * //       RegistryArn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: "AVAILABLE" || "DELETING",
 * //       CreatedTime: "STRING_VALUE",
 * //       UpdatedTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRegistriesCommandInput - {@link ListRegistriesCommandInput}
 * @returns {@link ListRegistriesCommandOutput}
 * @see {@link ListRegistriesCommandInput} for command's `input` shape.
 * @see {@link ListRegistriesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class ListRegistriesCommand extends $Command
  .classBuilder<
    ListRegistriesCommandInput,
    ListRegistriesCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "ListRegistries", {})
  .n("GlueClient", "ListRegistriesCommand")
  .sc(ListRegistries$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRegistriesInput;
      output: ListRegistriesResponse;
    };
    sdk: {
      input: ListRegistriesCommandInput;
      output: ListRegistriesCommandOutput;
    };
  };
}
