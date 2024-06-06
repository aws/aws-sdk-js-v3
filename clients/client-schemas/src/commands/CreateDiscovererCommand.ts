// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDiscovererRequest, CreateDiscovererResponse } from "../models/models_0";
import { de_CreateDiscovererCommand, se_CreateDiscovererCommand } from "../protocols/Aws_restJson1";
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SchemasClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("schemas", "CreateDiscoverer", {})
  .n("SchemasClient", "CreateDiscovererCommand")
  .f(void 0, void 0)
  .ser(se_CreateDiscovererCommand)
  .de(de_CreateDiscovererCommand)
  .build() {}
