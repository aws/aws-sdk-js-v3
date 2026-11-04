// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListReceivedDataGrantsRequest, ListReceivedDataGrantsResponse } from "../models/models_0";
import { ListReceivedDataGrants$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListReceivedDataGrantsCommand}.
 */
export interface ListReceivedDataGrantsCommandInput extends ListReceivedDataGrantsRequest {}
/**
 * @public
 *
 * The output of {@link ListReceivedDataGrantsCommand}.
 */
export interface ListReceivedDataGrantsCommandOutput extends ListReceivedDataGrantsResponse, __MetadataBearer {}

/**
 * This operation returns information about all received data grants.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, ListReceivedDataGrantsCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, ListReceivedDataGrantsCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // ListReceivedDataGrantsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   AcceptanceState: [ // AcceptanceStateFilterValues
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListReceivedDataGrantsCommand(input);
 * const response = await client.send(command);
 * // { // ListReceivedDataGrantsResponse
 * //   DataGrantSummaries: [ // ListOfReceivedDataGrantSummariesEntry
 * //     { // ReceivedDataGrantSummariesEntry
 * //       Name: "STRING_VALUE", // required
 * //       SenderPrincipal: "STRING_VALUE", // required
 * //       ReceiverPrincipal: "STRING_VALUE", // required
 * //       AcceptanceState: "STRING_VALUE", // required
 * //       AcceptedAt: new Date("TIMESTAMP"),
 * //       EndsAt: new Date("TIMESTAMP"),
 * //       DataSetId: "STRING_VALUE", // required
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
 * @param ListReceivedDataGrantsCommandInput - {@link ListReceivedDataGrantsCommandInput}
 * @returns {@link ListReceivedDataGrantsCommandOutput}
 * @see {@link ListReceivedDataGrantsCommandInput} for command's `input` shape.
 * @see {@link ListReceivedDataGrantsCommandOutput} for command's `response` shape.
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
export class ListReceivedDataGrantsCommand extends command<ListReceivedDataGrantsCommandInput, ListReceivedDataGrantsCommandOutput>(
  _ep0,
  _mw0,
  "ListReceivedDataGrants",
  ListReceivedDataGrants$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReceivedDataGrantsRequest;
      output: ListReceivedDataGrantsResponse;
    };
    sdk: {
      input: ListReceivedDataGrantsCommandInput;
      output: ListReceivedDataGrantsCommandOutput;
    };
  };
}
