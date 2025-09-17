// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaStoreDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreDataClient";
import { ListItemsRequest, ListItemsResponse } from "../models/models_0";
import { de_ListItemsCommand, se_ListItemsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Provides a list of metadata entries about folders and objects in the specified
 *          folder.</p>
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
 *  <p>The specified container was not found for the specified account.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link MediaStoreDataServiceException}
 * <p>Base exception class for all service exceptions from MediaStoreData service.</p>
 *
 *
 * @public
 */
export class ListItemsCommand extends $Command
  .classBuilder<
    ListItemsCommandInput,
    ListItemsCommandOutput,
    MediaStoreDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaStoreDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaStoreObject_20170901", "ListItems", {})
  .n("MediaStoreDataClient", "ListItemsCommand")
  .f(void 0, void 0)
  .ser(se_ListItemsCommand)
  .de(de_ListItemsCommand)
  .build() {
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
