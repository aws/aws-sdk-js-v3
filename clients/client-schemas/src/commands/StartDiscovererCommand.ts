// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDiscovererRequest, StartDiscovererResponse } from "../models/models_0";
import { StartDiscoverer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartDiscovererCommand}.
 */
export interface StartDiscovererCommandInput extends StartDiscovererRequest {}
/**
 * @public
 *
 * The output of {@link StartDiscovererCommand}.
 */
export interface StartDiscovererCommandOutput extends StartDiscovererResponse, __MetadataBearer {}

/**
 * <p>Starts the discoverer</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, StartDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, StartDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
 * const client = new SchemasClient(config);
 * const input = { // StartDiscovererRequest
 *   DiscovererId: "STRING_VALUE", // required
 * };
 * const command = new StartDiscovererCommand(input);
 * const response = await client.send(command);
 * // { // StartDiscovererResponse
 * //   DiscovererId: "STRING_VALUE",
 * //   State: "STARTED" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StartDiscovererCommandInput - {@link StartDiscovererCommandInput}
 * @returns {@link StartDiscovererCommandOutput}
 * @see {@link StartDiscovererCommandInput} for command's `input` shape.
 * @see {@link StartDiscovererCommandOutput} for command's `response` shape.
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
export class StartDiscovererCommand extends command<StartDiscovererCommandInput, StartDiscovererCommandOutput>(
  _ep0,
  _mw0,
  "StartDiscoverer",
  StartDiscoverer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDiscovererRequest;
      output: StartDiscovererResponse;
    };
    sdk: {
      input: StartDiscovererCommandInput;
      output: StartDiscovererCommandOutput;
    };
  };
}
