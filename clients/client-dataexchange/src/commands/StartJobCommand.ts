// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartJobRequest, StartJobResponse } from "../models/models_0";
import { StartJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartJobCommand}.
 */
export interface StartJobCommandInput extends StartJobRequest {}
/**
 * @public
 *
 * The output of {@link StartJobCommand}.
 */
export interface StartJobCommandOutput extends StartJobResponse, __MetadataBearer {}

/**
 * This operation starts a job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, StartJobCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, StartJobCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // StartJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new StartJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartJobCommandInput - {@link StartJobCommandInput}
 * @returns {@link StartJobCommandOutput}
 * @see {@link StartJobCommandInput} for command's `input` shape.
 * @see {@link StartJobCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to the resource is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request couldn't be completed because it conflicted with the current state of the resource.
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
export class StartJobCommand extends command<StartJobCommandInput, StartJobCommandOutput>(
  _ep0,
  _mw0,
  "StartJob",
  StartJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartJobRequest;
      output: {};
    };
    sdk: {
      input: StartJobCommandInput;
      output: StartJobCommandOutput;
    };
  };
}
