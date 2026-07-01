// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetIterableFormsRequest, BatchGetIterableFormsResponse } from "../models/models_0";
import { BatchGetIterableForms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetIterableFormsCommand}.
 */
export interface BatchGetIterableFormsCommandInput extends BatchGetIterableFormsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetIterableFormsCommand}.
 */
export interface BatchGetIterableFormsCommandOutput extends BatchGetIterableFormsResponse, __MetadataBearer {}

/**
 * <p>Retrieves multiple items from an iterable form on an asset in Glue Data Catalog in a single request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetIterableFormsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetIterableFormsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // BatchGetIterableFormsRequest
 *   AssetIdentifier: "STRING_VALUE", // required
 *   IterableFormName: "STRING_VALUE", // required
 *   ItemIdentifiers: [ // ItemIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetIterableFormsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetIterableFormsResponse
 * //   Items: [ // IterableFormItemList
 * //     { // IterableFormItem
 * //       ItemId: "STRING_VALUE",
 * //       ItemName: "STRING_VALUE",
 * //       GlossaryTerms: [ // GlossaryTermIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       Forms: { // AssetFormMap
 * //         "<keys>": { // AssetFormEntry
 * //           FormTypeId: "STRING_VALUE",
 * //           Content: "STRING_VALUE",
 * //         },
 * //       },
 * //       Attachments: {
 * //         "<keys>": {
 * //           FormTypeId: "STRING_VALUE",
 * //           Content: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   Errors: [ // ItemErrorList
 * //     { // ItemError
 * //       ItemIdentifier: "STRING_VALUE",
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetIterableFormsCommandInput - {@link BatchGetIterableFormsCommandInput}
 * @returns {@link BatchGetIterableFormsCommandOutput}
 * @see {@link BatchGetIterableFormsCommandInput} for command's `input` shape.
 * @see {@link BatchGetIterableFormsCommandOutput} for command's `response` shape.
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
export class BatchGetIterableFormsCommand extends command<BatchGetIterableFormsCommandInput, BatchGetIterableFormsCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetIterableForms",
  BatchGetIterableForms$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetIterableFormsRequest;
      output: BatchGetIterableFormsResponse;
    };
    sdk: {
      input: BatchGetIterableFormsCommandInput;
      output: BatchGetIterableFormsCommandOutput;
    };
  };
}
