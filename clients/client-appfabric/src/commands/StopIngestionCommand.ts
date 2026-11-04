// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopIngestionRequest, StopIngestionResponse } from "../models/models_0";
import { StopIngestion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopIngestionCommand}.
 */
export interface StopIngestionCommandInput extends StopIngestionRequest {}
/**
 * @public
 *
 * The output of {@link StopIngestionCommand}.
 */
export interface StopIngestionCommandOutput extends StopIngestionResponse, __MetadataBearer {}

/**
 * Stops (disables) an ingestion.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, StopIngestionCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, StopIngestionCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // StopIngestionRequest
 *   ingestionIdentifier: "STRING_VALUE", // required
 *   appBundleIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StopIngestionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopIngestionCommandInput - {@link StopIngestionCommandInput}
 * @returns {@link StopIngestionCommandOutput}
 * @see {@link StopIngestionCommandInput} for command's `input` shape.
 * @see {@link StopIngestionCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request has created a conflict. Check the request parameters and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AppFabricServiceException}
 *
 * Base exception class for all service exceptions from AppFabric service.
 *
 * @public
 */
export class StopIngestionCommand extends command<StopIngestionCommandInput, StopIngestionCommandOutput>(
  _ep0,
  _mw0,
  "StopIngestion",
  StopIngestion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopIngestionRequest;
      output: {};
    };
    sdk: {
      input: StopIngestionCommandInput;
      output: StopIngestionCommandOutput;
    };
  };
}
