// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListItemsRequest, ListItemsResponse } from "../models/models_0";
import { ListItems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListItemsCommand}.
 */
export interface ListItemsCommandInput extends ListItemsRequest {}
/**
 * @public
 *
 * The output of {@link ListItemsCommand}.
 */
export interface ListItemsCommandOutput extends ListItemsResponse, __MetadataBearer {}

/**
 * Provides a list of metadata entries about folders and objects in the specified folder.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreDataClient, ListItemsCommand } from "@aws-sdk/client-mediastore-data"; // ES Modules import
 * // const { MediaStoreDataClient, ListItemsCommand } = require("@aws-sdk/client-mediastore-data"); // CommonJS import
 * // import type { MediaStoreDataClientConfig } from "@aws-sdk/client-mediastore-data";
 * const config = {}; // type is MediaStoreDataClientConfig
 * const client = new MediaStoreDataClient(config);
 * const input = { // ListItemsRequest
 *   Path: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListItemsResponse
 * //   Items: [ // ItemList
 * //     { // Item
 * //       Name: "STRING_VALUE",
 * //       Type: "OBJECT" || "FOLDER",
 * //       ETag: "STRING_VALUE",
 * //       LastModified: new Date("TIMESTAMP"),
 * //       ContentType: "STRING_VALUE",
 * //       ContentLength: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListItemsCommandInput - {@link ListItemsCommandInput}
 * @returns {@link ListItemsCommandOutput}
 * @see {@link ListItemsCommandInput} for command's `input` shape.
 * @see {@link ListItemsCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreDataClientResolvedConfig | config} for MediaStoreDataClient's `config` shape.
 *
 * @throws {@link ContainerNotFoundException} (client fault)
 *
 * The specified container was not found for the specified account.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link MediaStoreDataServiceException}
 *
 * Base exception class for all service exceptions from MediaStoreData service.
 *
 * @public
 */
export class ListItemsCommand extends command<ListItemsCommandInput, ListItemsCommandOutput>(
  _ep0,
  _mw0,
  "ListItems",
  ListItems$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListItemsRequest;
      output: ListItemsResponse;
    };
    sdk: {
      input: ListItemsCommandInput;
      output: ListItemsCommandOutput;
    };
  };
}
