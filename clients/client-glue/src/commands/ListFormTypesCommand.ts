// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFormTypesRequest, ListFormTypesResponse } from "../models/models_2";
import { ListFormTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFormTypesCommand}.
 */
export interface ListFormTypesCommandInput extends ListFormTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListFormTypesCommand}.
 */
export interface ListFormTypesCommandOutput extends ListFormTypesResponse, __MetadataBearer {}

/**
 * Lists the form types defined in Glue Data Catalog.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListFormTypesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListFormTypesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListFormTypesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFormTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListFormTypesResponse
 * //   Items: [ // FormTypeItemList // required
 * //     { // FormTypeItem
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFormTypesCommandInput - {@link ListFormTypesCommandInput}
 * @returns {@link ListFormTypesCommandOutput}
 * @see {@link ListFormTypesCommandInput} for command's `input` shape.
 * @see {@link ListFormTypesCommandOutput} for command's `response` shape.
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
export class ListFormTypesCommand extends command<ListFormTypesCommandInput, ListFormTypesCommandOutput>(
  _ep0,
  _mw0,
  "ListFormTypes",
  ListFormTypes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFormTypesRequest;
      output: ListFormTypesResponse;
    };
    sdk: {
      input: ListFormTypesCommandInput;
      output: ListFormTypesCommandOutput;
    };
  };
}
