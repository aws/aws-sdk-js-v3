// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGlossariesRequest, ListGlossariesResponse } from "../models/models_2";
import { ListGlossaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListGlossariesCommand}.
 */
export interface ListGlossariesCommandInput extends ListGlossariesRequest {}
/**
 * @public
 *
 * The output of {@link ListGlossariesCommand}.
 */
export interface ListGlossariesCommandOutput extends ListGlossariesResponse, __MetadataBearer {}

/**
 * <p>Lists business glossaries in Glue Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListGlossariesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListGlossariesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListGlossariesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListGlossariesCommand(input);
 * const response = await client.send(command);
 * // { // ListGlossariesResponse
 * //   Items: [ // GlossaryItemList
 * //     { // GlossaryItem
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGlossariesCommandInput - {@link ListGlossariesCommandInput}
 * @returns {@link ListGlossariesCommandOutput}
 * @see {@link ListGlossariesCommandInput} for command's `input` shape.
 * @see {@link ListGlossariesCommandOutput} for command's `response` shape.
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
export class ListGlossariesCommand extends command<ListGlossariesCommandInput, ListGlossariesCommandOutput>(
  _ep0,
  _mw0,
  "ListGlossaries",
  ListGlossaries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGlossariesRequest;
      output: ListGlossariesResponse;
    };
    sdk: {
      input: ListGlossariesCommandInput;
      output: ListGlossariesCommandOutput;
    };
  };
}
