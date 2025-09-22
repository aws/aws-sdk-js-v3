// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListReceivedDataGrantsRequest, ListReceivedDataGrantsResponse } from "../models/models_0";
import { ListReceivedDataGrants } from "../schemas/schemas_2_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This operation returns information about all received data grants.</p>
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
 *  <p>Access to the resource is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link DataExchangeServiceException}
 * <p>Base exception class for all service exceptions from DataExchange service.</p>
 *
 *
 * @public
 */
export class ListReceivedDataGrantsCommand extends $Command
  .classBuilder<
    ListReceivedDataGrantsCommandInput,
    ListReceivedDataGrantsCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataExchange", "ListReceivedDataGrants", {})
  .n("DataExchangeClient", "ListReceivedDataGrantsCommand")
  .sc(ListReceivedDataGrants)
  .build() {
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
