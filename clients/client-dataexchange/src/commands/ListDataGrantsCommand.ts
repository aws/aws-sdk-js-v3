// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDataGrantsRequest, ListDataGrantsResponse } from "../models/models_0";
import { de_ListDataGrantsCommand, se_ListDataGrantsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This operation returns information about all data grants.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, ListDataGrantsCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, ListDataGrantsCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class ListDataGrantsCommand extends $Command
  .classBuilder<
    ListDataGrantsCommandInput,
    ListDataGrantsCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataExchange", "ListDataGrants", {})
  .n("DataExchangeClient", "ListDataGrantsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataGrantsCommand)
  .de(de_ListDataGrantsCommand)
  .build() {
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
