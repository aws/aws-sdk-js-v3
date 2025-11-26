// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDiscovererRequest } from "../models/models_0";
import { DeleteDiscoverer } from "../schemas/schemas_0";
import type { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDiscovererCommand}.
 */
export interface DeleteDiscovererCommandInput extends DeleteDiscovererRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDiscovererCommand}.
 */
export interface DeleteDiscovererCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a discoverer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DeleteDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DeleteDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
 * const client = new SchemasClient(config);
 * const input = { // DeleteDiscovererRequest
 *   DiscovererId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDiscovererCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDiscovererCommandInput - {@link DeleteDiscovererCommandInput}
 * @returns {@link DeleteDiscovererCommandOutput}
 * @see {@link DeleteDiscovererCommandInput} for command's `input` shape.
 * @see {@link DeleteDiscovererCommandOutput} for command's `response` shape.
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
export class DeleteDiscovererCommand extends $Command
  .classBuilder<
    DeleteDiscovererCommandInput,
    DeleteDiscovererCommandOutput,
    SchemasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SchemasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("schemas", "DeleteDiscoverer", {})
  .n("SchemasClient", "DeleteDiscovererCommand")
  .sc(DeleteDiscoverer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDiscovererRequest;
      output: {};
    };
    sdk: {
      input: DeleteDiscovererCommandInput;
      output: DeleteDiscovererCommandOutput;
    };
  };
}
