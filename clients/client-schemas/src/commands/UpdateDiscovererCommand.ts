// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDiscovererRequest, UpdateDiscovererResponse } from "../models/models_0";
import { UpdateDiscoverer } from "../schemas/schemas_0";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class UpdateDiscovererCommand extends $Command
  .classBuilder<
    UpdateDiscovererCommandInput,
    UpdateDiscovererCommandOutput,
    SchemasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SchemasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("schemas", "UpdateDiscoverer", {})
  .n("SchemasClient", "UpdateDiscovererCommand")
  .sc(UpdateDiscoverer)
  .build() {
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
