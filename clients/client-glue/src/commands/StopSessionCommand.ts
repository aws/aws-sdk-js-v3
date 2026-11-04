// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopSessionRequest, StopSessionResponse } from "../models/models_3";
import { StopSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopSessionCommand}.
 */
export interface StopSessionCommandInput extends StopSessionRequest {}
/**
 * @public
 *
 * The output of {@link StopSessionCommand}.
 */
export interface StopSessionCommandOutput extends StopSessionResponse, __MetadataBearer {}

/**
 * Stops the session.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopSessionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopSessionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StopSessionRequest
 *   Id: "STRING_VALUE", // required
 *   RequestOrigin: "STRING_VALUE",
 * };
 * const command = new StopSessionCommand(input);
 * const response = await client.send(command);
 * // { // StopSessionResponse
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopSessionCommandInput - {@link StopSessionCommandInput}
 * @returns {@link StopSessionCommandOutput}
 * @see {@link StopSessionCommandInput} for command's `input` shape.
 * @see {@link StopSessionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link IllegalSessionStateException} (client fault)
 *
 * The session is in an invalid state to perform a requested operation.
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
export class StopSessionCommand extends command<StopSessionCommandInput, StopSessionCommandOutput>(
  _ep0,
  _mw0,
  "StopSession",
  StopSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopSessionRequest;
      output: StopSessionResponse;
    };
    sdk: {
      input: StopSessionCommandInput;
      output: StopSessionCommandOutput;
    };
  };
}
