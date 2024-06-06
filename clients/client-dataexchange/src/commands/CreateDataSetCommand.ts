// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDataSetRequest, CreateDataSetResponse } from "../models/models_0";
import { de_CreateDataSetCommand, se_CreateDataSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataSetCommand}.
 */
export interface CreateDataSetCommandInput extends CreateDataSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataSetCommand}.
 */
export interface CreateDataSetCommandOutput extends CreateDataSetResponse, __MetadataBearer {}

/**
 * <p>This operation creates a data set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, CreateDataSetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, CreateDataSetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const input = { // CreateDataSetRequest
 *   AssetType: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Tags: { // MapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDataSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataSetResponse
 * //   Arn: "STRING_VALUE",
 * //   AssetType: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   Description: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Origin: "STRING_VALUE",
 * //   OriginDetails: { // OriginDetails
 * //     ProductId: "STRING_VALUE",
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
 * @param CreateDataSetCommandInput - {@link CreateDataSetCommandInput}
 * @returns {@link CreateDataSetCommandOutput}
 * @see {@link CreateDataSetCommandInput} for command's `input` shape.
 * @see {@link CreateDataSetCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the resource is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ServiceLimitExceededException} (client fault)
 *  <p>The request has exceeded the quotas imposed by the service.</p>
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
export class CreateDataSetCommand extends $Command
  .classBuilder<
    CreateDataSetCommandInput,
    CreateDataSetCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataExchange", "CreateDataSet", {})
  .n("DataExchangeClient", "CreateDataSetCommand")
  .f(void 0, void 0)
  .ser(se_CreateDataSetCommand)
  .de(de_CreateDataSetCommand)
  .build() {}
