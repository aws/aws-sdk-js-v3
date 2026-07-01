// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDiscovererRequest, UpdateDiscovererResponse } from "../models/models_0";
import { UpdateDiscoverer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDiscovererCommand}.
 */
export interface UpdateDiscovererCommandInput extends UpdateDiscovererRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDiscovererCommand}.
 */
export interface UpdateDiscovererCommandOutput extends UpdateDiscovererResponse, __MetadataBearer {}

/**
 * <p>Updates the discoverer</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, UpdateDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, UpdateDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
 * const client = new SchemasClient(config);
 * const input = { // UpdateDiscovererRequest
 *   Description: "STRING_VALUE",
 *   DiscovererId: "STRING_VALUE", // required
 *   CrossAccount: true || false,
 * };
 * const command = new UpdateDiscovererCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDiscovererResponse
 * //   Description: "STRING_VALUE",
 * //   DiscovererArn: "STRING_VALUE",
 * //   DiscovererId: "STRING_VALUE",
 * //   SourceArn: "STRING_VALUE",
 * //   State: "STARTED" || "STOPPED",
 * //   CrossAccount: true || false,
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDiscovererCommandInput - {@link UpdateDiscovererCommandInput}
 * @returns {@link UpdateDiscovererCommandOutput}
 * @see {@link UpdateDiscovererCommandInput} for command's `input` shape.
 * @see {@link UpdateDiscovererCommandOutput} for command's `response` shape.
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
export class UpdateDiscovererCommand extends command<UpdateDiscovererCommandInput, UpdateDiscovererCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDiscoverer",
  UpdateDiscoverer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDiscovererRequest;
      output: UpdateDiscovererResponse;
    };
    sdk: {
      input: UpdateDiscovererCommandInput;
      output: UpdateDiscovererCommandOutput;
    };
  };
}
