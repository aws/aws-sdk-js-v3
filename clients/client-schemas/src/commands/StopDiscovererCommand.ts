// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopDiscovererRequest, StopDiscovererResponse } from "../models/models_0";
import { de_StopDiscovererCommand, se_StopDiscovererCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class StopDiscovererCommand extends $Command
  .classBuilder<
    StopDiscovererCommandInput,
    StopDiscovererCommandOutput,
    SchemasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SchemasClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("schemas", "StopDiscoverer", {})
  .n("SchemasClient", "StopDiscovererCommand")
  .f(void 0, void 0)
  .ser(se_StopDiscovererCommand)
  .de(de_StopDiscovererCommand)
  .build() {
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
