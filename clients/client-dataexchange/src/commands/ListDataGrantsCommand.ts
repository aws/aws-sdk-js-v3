// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDataGrantsRequest, ListDataGrantsResponse } from "../models/models_0";
import { ListDataGrants$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDataGrantsCommand}.
 */
export interface ListDataGrantsCommandInput extends ListDataGrantsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataGrantsCommand}.
 */
export interface ListDataGrantsCommandOutput extends ListDataGrantsResponse, __MetadataBearer {}

/**
 * This operation returns information about all data grants.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, ListDataGrantsCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, ListDataGrantsCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // ListDataGrantsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDataGrantsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataGrantsResponse
 * //   DataGrantSummaries: [ // ListOfDataGrantSummaryEntry
 * //     { // DataGrantSummaryEntry
 * //       Name: "STRING_VALUE", // required
 * //       SenderPrincipal: "STRING_VALUE", // required
 * //       ReceiverPrincipal: "STRING_VALUE", // required
 * //       AcceptanceState: "STRING_VALUE", // required
 * //       AcceptedAt: new Date("TIMESTAMP"),
 * //       EndsAt: new Date("TIMESTAMP"),
 * //       DataSetId: "STRING_VALUE", // required
 * //       SourceDataSetId: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataGrantsCommandInput - {@link ListDataGrantsCommandInput}
 * @returns {@link ListDataGrantsCommandOutput}
 * @see {@link ListDataGrantsCommandInput} for command's `input` shape.
 * @see {@link ListDataGrantsCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to the resource is denied.
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
export class ListDataGrantsCommand extends command<ListDataGrantsCommandInput, ListDataGrantsCommandOutput>(
  _ep0,
  _mw0,
  "ListDataGrants",
  ListDataGrants$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataGrantsRequest;
      output: ListDataGrantsResponse;
    };
    sdk: {
      input: ListDataGrantsCommandInput;
      output: ListDataGrantsCommandOutput;
    };
  };
}
