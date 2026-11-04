// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDataSetRequest, CreateDataSetResponse } from "../models/models_0";
import { CreateDataSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * This operation creates a data set.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, CreateDataSetCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, CreateDataSetCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
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
 * @param CreateDataSetCommandInput - {@link CreateDataSetCommandInput}
 * @returns {@link CreateDataSetCommandOutput}
 * @see {@link CreateDataSetCommandInput} for command's `input` shape.
 * @see {@link CreateDataSetCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceLimitExceededException} (client fault)
 *
 * The request has exceeded the quotas imposed by the service.
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
export class CreateDataSetCommand extends command<CreateDataSetCommandInput, CreateDataSetCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataSet",
  CreateDataSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataSetRequest;
      output: CreateDataSetResponse;
    };
    sdk: {
      input: CreateDataSetCommandInput;
      output: CreateDataSetCommandOutput;
    };
  };
}
