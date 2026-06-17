// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { ListGlossaryTermsRequest, ListGlossaryTermsResponse } from "../models/models_2";
import { ListGlossaryTerms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGlossaryTermsCommand}.
 */
export interface ListGlossaryTermsCommandInput extends ListGlossaryTermsRequest {}
/**
 * @public
 *
 * The output of {@link ListGlossaryTermsCommand}.
 */
export interface ListGlossaryTermsCommandOutput extends ListGlossaryTermsResponse, __MetadataBearer {}

/**
 * <p>Lists glossary terms within a business glossary in Glue Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListGlossaryTermsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListGlossaryTermsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListGlossaryTermsRequest
 *   GlossaryIdentifier: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListGlossaryTermsCommand(input);
 * const response = await client.send(command);
 * // { // ListGlossaryTermsResponse
 * //   Items: [ // GlossaryTermItemList
 * //     { // GlossaryTermItem
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       ShortDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGlossaryTermsCommandInput - {@link ListGlossaryTermsCommandInput}
 * @returns {@link ListGlossaryTermsCommandOutput}
 * @see {@link ListGlossaryTermsCommandInput} for command's `input` shape.
 * @see {@link ListGlossaryTermsCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling threshhold was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class ListGlossaryTermsCommand extends $Command
  .classBuilder<
    ListGlossaryTermsCommandInput,
    ListGlossaryTermsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "ListGlossaryTerms", {})
  .n("GlueClient", "ListGlossaryTermsCommand")
  .sc(ListGlossaryTerms$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGlossaryTermsRequest;
      output: ListGlossaryTermsResponse;
    };
    sdk: {
      input: ListGlossaryTermsCommandInput;
      output: ListGlossaryTermsCommandOutput;
    };
  };
}
