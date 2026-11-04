// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDataSetRequest, UpdateDataSetResponse } from "../models/models_0";
import { UpdateDataSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * This operation updates a data set.
 *
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
export class UpdateDataSetCommand extends command<UpdateDataSetCommandInput, UpdateDataSetCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDataSet",
  UpdateDataSet$
) {
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
