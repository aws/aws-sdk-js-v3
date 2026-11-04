// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGlossaryTermsRequest, ListGlossaryTermsResponse } from "../models/models_2";
import { ListGlossaryTerms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists glossary terms within a business glossary in Glue Data Catalog.
 *
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
 *
 * Access to a resource was denied.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling threshhold was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class ListGlossaryTermsCommand extends command<ListGlossaryTermsCommandInput, ListGlossaryTermsCommandOutput>(
  _ep0,
  _mw0,
  "ListGlossaryTerms",
  ListGlossaryTerms$
) {
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
