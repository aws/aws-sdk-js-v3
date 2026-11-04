// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartIngestionRequest, StartIngestionResponse } from "../models/models_0";
import { StartIngestion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartIngestionCommand}.
 */
export interface StartIngestionCommandInput extends StartIngestionRequest {}
/**
 * @public
 *
 * The output of {@link StartIngestionCommand}.
 */
export interface StartIngestionCommandOutput extends StartIngestionResponse, __MetadataBearer {}

/**
 * Starts (enables) an ingestion, which collects data from an application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, StartIngestionCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, StartIngestionCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // StartIngestionRequest
 *   ingestionIdentifier: "STRING_VALUE", // required
 *   appBundleIdentifier: "STRING_VALUE", // required
 * };
 * const command = new StartIngestionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartIngestionCommandInput - {@link StartIngestionCommandInput}
 * @returns {@link StartIngestionCommandOutput}
 * @see {@link StartIngestionCommandInput} for command's `input` shape.
 * @see {@link StartIngestionCommandOutput} for command's `response` shape.
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
export class StartIngestionCommand extends command<StartIngestionCommandInput, StartIngestionCommandOutput>(
  _ep0,
  _mw0,
  "StartIngestion",
  StartIngestion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartIngestionRequest;
      output: {};
    };
    sdk: {
      input: StartIngestionCommandInput;
      output: StartIngestionCommandOutput;
    };
  };
}
