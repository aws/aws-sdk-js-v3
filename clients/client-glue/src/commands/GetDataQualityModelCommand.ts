// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDataQualityModelRequest, GetDataQualityModelResponse } from "../models/models_2";
import { GetDataQualityModel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDataQualityModelCommand}.
 */
export interface GetDataQualityModelCommandInput extends GetDataQualityModelRequest {}
/**
 * @public
 *
 * The output of {@link GetDataQualityModelCommand}.
 */
export interface GetDataQualityModelCommandOutput extends GetDataQualityModelResponse, __MetadataBearer {}

/**
 * Retrieve the training status of the model along with more information (CompletedOn, StartedOn, FailureReason).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataQualityModelCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataQualityModelCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetDataQualityModelRequest
 *   StatisticId: "STRING_VALUE",
 *   ProfileId: "STRING_VALUE", // required
 * };
 * const command = new GetDataQualityModelCommand(input);
 * const response = await client.send(command);
 * // { // GetDataQualityModelResponse
 * //   Status: "RUNNING" || "SUCCEEDED" || "FAILED",
 * //   StartedOn: new Date("TIMESTAMP"),
 * //   CompletedOn: new Date("TIMESTAMP"),
 * //   FailureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDataQualityModelCommandInput - {@link GetDataQualityModelCommandInput}
 * @returns {@link GetDataQualityModelCommandOutput}
 * @see {@link GetDataQualityModelCommandInput} for command's `input` shape.
 * @see {@link GetDataQualityModelCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class GetDataQualityModelCommand extends command<GetDataQualityModelCommandInput, GetDataQualityModelCommandOutput>(
  _ep0,
  _mw0,
  "GetDataQualityModel",
  GetDataQualityModel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataQualityModelRequest;
      output: GetDataQualityModelResponse;
    };
    sdk: {
      input: GetDataQualityModelCommandInput;
      output: GetDataQualityModelCommandOutput;
    };
  };
}
