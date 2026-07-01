// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIterableFormsRequest, ListIterableFormsResponse } from "../models/models_2";
import { ListIterableForms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIterableFormsCommand}.
 */
export interface ListIterableFormsCommandInput extends ListIterableFormsRequest {}
/**
 * @public
 *
 * The output of {@link ListIterableFormsCommand}.
 */
export interface ListIterableFormsCommandOutput extends ListIterableFormsResponse, __MetadataBearer {}

/**
 * <p>Lists the items in an iterable form on an asset in Glue Data Catalog. For example, lists the columns of a table asset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListIterableFormsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListIterableFormsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListIterableFormsRequest
 *   AssetIdentifier: "STRING_VALUE", // required
 *   IterableFormName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListIterableFormsCommand(input);
 * const response = await client.send(command);
 * // { // ListIterableFormsResponse
 * //   Items: [ // IterableFormListItemList
 * //     { // IterableFormListItem
 * //       ItemId: "STRING_VALUE",
 * //       ItemName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       GlossaryTerms: [ // GlossaryTermIdList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIterableFormsCommandInput - {@link ListIterableFormsCommandInput}
 * @returns {@link ListIterableFormsCommandOutput}
 * @see {@link ListIterableFormsCommandInput} for command's `input` shape.
 * @see {@link ListIterableFormsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
export class ListIterableFormsCommand extends command<ListIterableFormsCommandInput, ListIterableFormsCommandOutput>(
  _ep0,
  _mw0,
  "ListIterableForms",
  ListIterableForms$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIterableFormsRequest;
      output: ListIterableFormsResponse;
    };
    sdk: {
      input: ListIterableFormsCommandInput;
      output: ListIterableFormsCommandOutput;
    };
  };
}
