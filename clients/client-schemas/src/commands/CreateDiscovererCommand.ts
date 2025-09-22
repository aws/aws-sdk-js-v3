// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDiscovererRequest, CreateDiscovererResponse } from "../models/models_0";
import { CreateDiscoverer } from "../schemas/schemas_3_Discoverer";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDiscovererCommand}.
 */
export interface CreateDiscovererCommandInput extends CreateDiscovererRequest {}
/**
 * @public
 *
 * The output of {@link CreateDiscovererCommand}.
 */
export interface CreateDiscovererCommandOutput extends CreateDiscovererResponse, __MetadataBearer {}

/**
 * <p>Creates a discoverer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, CreateDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, CreateDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
 * const client = new SchemasClient(config);
 * const input = { // CreateDiscovererRequest
 *   Description: "STRING_VALUE",
 *   SourceArn: "STRING_VALUE", // required
 *   CrossAccount: true || false,
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDiscovererCommand(input);
 * const response = await client.send(command);
 * // { // CreateDiscovererResponse
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
 * @param CreateDiscovererCommandInput - {@link CreateDiscovererCommandInput}
 * @returns {@link CreateDiscovererCommandOutput}
 * @see {@link CreateDiscovererCommandInput} for command's `input` shape.
 * @see {@link CreateDiscovererCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link ConflictException} (client fault)
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link InternalServerErrorException} (server fault)
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
export class CreateDiscovererCommand extends $Command
  .classBuilder<
    CreateDiscovererCommandInput,
    CreateDiscovererCommandOutput,
    SchemasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SchemasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("schemas", "CreateDiscoverer", {})
  .n("SchemasClient", "CreateDiscovererCommand")
  .sc(CreateDiscoverer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDiscovererRequest;
      output: CreateDiscovererResponse;
    };
    sdk: {
      input: CreateDiscovererCommandInput;
      output: CreateDiscovererCommandOutput;
    };
  };
}
