// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDataSetRequest, UpdateDataSetResponse } from "../models/models_0";
import { de_UpdateDataSetCommand, se_UpdateDataSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataSetCommand}.
 */
export interface UpdateDataSetCommandInput extends UpdateDataSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataSetCommand}.
 */
export interface UpdateDataSetCommandOutput extends UpdateDataSetResponse, __MetadataBearer {}

/**
 * <p>This operation updates a data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, UpdateDataSetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, UpdateDataSetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // UpdateDataSetRequest
 *   DataSetId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 * };
 * const command = new UpdateDataSetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataSetResponse
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
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateDataSetCommandInput - {@link UpdateDataSetCommandInput}
 * @returns {@link UpdateDataSetCommandOutput}
 * @see {@link UpdateDataSetCommandInput} for command's `input` shape.
 * @see {@link UpdateDataSetCommandOutput} for command's `response` shape.
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
export class UpdateDataSetCommand extends $Command
  .classBuilder<
    UpdateDataSetCommandInput,
    UpdateDataSetCommandOutput,
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
  .s("DataExchange", "UpdateDataSet", {})
  .n("DataExchangeClient", "UpdateDataSetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDataSetCommand)
  .de(de_UpdateDataSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataSetRequest;
      output: UpdateDataSetResponse;
    };
    sdk: {
      input: UpdateDataSetCommandInput;
      output: UpdateDataSetCommandOutput;
    };
  };
}
