// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDataSetsRequest, ListDataSetsResponse } from "../models/models_0";
import { ListDataSets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDataSetsCommand}.
 */
export interface ListDataSetsCommandInput extends ListDataSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataSetsCommand}.
 */
export interface ListDataSetsCommandOutput extends ListDataSetsResponse, __MetadataBearer {}

/**
 * This operation lists your data sets. When listing by origin OWNED, results are sorted by CreatedAt in descending order. When listing by origin ENTITLED, there is no order.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, ListDataSetsCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, ListDataSetsCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // ListDataSetsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Origin: "STRING_VALUE",
 * };
 * const command = new ListDataSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataSetsResponse
 * //   DataSets: [ // ListOfDataSetEntry
 * //     { // DataSetEntry
 * //       Arn: "STRING_VALUE", // required
 * //       AssetType: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       Description: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Origin: "STRING_VALUE", // required
 * //       OriginDetails: { // OriginDetails
 * //         ProductId: "STRING_VALUE",
 * //         DataGrantId: "STRING_VALUE",
 * //       },
 * //       SourceId: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataSetsCommandInput - {@link ListDataSetsCommandInput}
 * @returns {@link ListDataSetsCommandOutput}
 * @see {@link ListDataSetsCommandInput} for command's `input` shape.
 * @see {@link ListDataSetsCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception occurred with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was invalid.
 *
 * @throws {@link DataExchangeServiceException}
 *
 * Base exception class for all service exceptions from DataExchange service.
 *
 * @public
 */
export class ListDataSetsCommand extends command<ListDataSetsCommandInput, ListDataSetsCommandOutput>(
  _ep0,
  _mw0,
  "ListDataSets",
  ListDataSets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataSetsRequest;
      output: ListDataSetsResponse;
    };
    sdk: {
      input: ListDataSetsCommandInput;
      output: ListDataSetsCommandOutput;
    };
  };
}
