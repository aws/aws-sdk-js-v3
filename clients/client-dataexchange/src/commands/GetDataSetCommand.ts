// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDataSetRequest, GetDataSetResponse } from "../models/models_0";
import { GetDataSet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataSetCommand}.
 */
export interface GetDataSetCommandInput extends GetDataSetRequest {}
/**
 * @public
 *
 * The output of {@link GetDataSetCommand}.
 */
export interface GetDataSetCommandOutput extends GetDataSetResponse, __MetadataBearer {}

/**
 * <p>This operation returns information about a data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, GetDataSetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, GetDataSetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // GetDataSetRequest
 *   DataSetId: "STRING_VALUE", // required
 * };
 * const command = new GetDataSetCommand(input);
 * const response = await client.send(command);
 * // { // GetDataSetResponse
 * //   Arn: "STRING_VALUE",
 * //   AssetType: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Origin: "STRING_VALUE",
 * //   OriginDetails: { // OriginDetails
 * //     ProductId: "STRING_VALUE",
 * //     DataGrantId: "STRING_VALUE",
 * //   },
 * //   SourceId: "STRING_VALUE",
 * //   Tags: { // MapOf__string
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetDataSetCommandInput - {@link GetDataSetCommandInput}
 * @returns {@link GetDataSetCommandOutput}
 * @see {@link GetDataSetCommandInput} for command's `input` shape.
 * @see {@link GetDataSetCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
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
export class GetDataSetCommand extends $Command
  .classBuilder<
    GetDataSetCommandInput,
    GetDataSetCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataExchange", "GetDataSet", {})
  .n("DataExchangeClient", "GetDataSetCommand")
  .sc(GetDataSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataSetRequest;
      output: GetDataSetResponse;
    };
    sdk: {
      input: GetDataSetCommandInput;
      output: GetDataSetCommandOutput;
    };
  };
}
