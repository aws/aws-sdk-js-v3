// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopDiscovererRequest, StopDiscovererResponse } from "../models/models_0";
import { StopDiscoverer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopDiscovererCommand}.
 */
export interface StopDiscovererCommandInput extends StopDiscovererRequest {}
/**
 * @public
 *
 * The output of {@link StopDiscovererCommand}.
 */
export interface StopDiscovererCommandOutput extends StopDiscovererResponse, __MetadataBearer {}

/**
 * <p>Stops the discoverer</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, StopDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, StopDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
 * const client = new SchemasClient(config);
 * const input = { // StopDiscovererRequest
 *   DiscovererId: "STRING_VALUE", // required
 * };
 * const command = new StopDiscovererCommand(input);
 * const response = await client.send(command);
 * // { // StopDiscovererResponse
 * //   DiscovererId: "STRING_VALUE",
 * //   State: "STARTED" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StopDiscovererCommandInput - {@link StopDiscovererCommandInput}
 * @returns {@link StopDiscovererCommandOutput}
 * @see {@link StopDiscovererCommandInput} for command's `input` shape.
 * @see {@link StopDiscovererCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 *
 * @public
 */
export class StopDiscovererCommand extends command<StopDiscovererCommandInput, StopDiscovererCommandOutput>(
  _ep0,
  _mw0,
  "StopDiscoverer",
  StopDiscoverer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopDiscovererRequest;
      output: StopDiscovererResponse;
    };
    sdk: {
      input: StopDiscovererCommandInput;
      output: StopDiscovererCommandOutput;
    };
  };
}
