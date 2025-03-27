// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRegistryRequest, UpdateRegistryResponse } from "../models/models_0";
import { de_UpdateRegistryCommand, se_UpdateRegistryCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRegistryCommand}.
 */
export interface UpdateRegistryCommandInput extends UpdateRegistryRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRegistryCommand}.
 */
export interface UpdateRegistryCommandOutput extends UpdateRegistryResponse, __MetadataBearer {}

/**
 * <p>Updates a registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, UpdateRegistryCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, UpdateRegistryCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const input = { // UpdateRegistryRequest
 *   Description: "STRING_VALUE",
 *   RegistryName: "STRING_VALUE", // required
 * };
 * const command = new UpdateRegistryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRegistryResponse
 * //   Description: "STRING_VALUE",
 * //   RegistryArn: "STRING_VALUE",
 * //   RegistryName: "STRING_VALUE",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRegistryCommandInput - {@link UpdateRegistryCommandInput}
 * @returns {@link UpdateRegistryCommandOutput}
 * @see {@link UpdateRegistryCommandInput} for command's `input` shape.
 * @see {@link UpdateRegistryCommandOutput} for command's `response` shape.
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
export class UpdateRegistryCommand extends $Command
  .classBuilder<
    UpdateRegistryCommandInput,
    UpdateRegistryCommandOutput,
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
  .s("schemas", "UpdateRegistry", {})
  .n("SchemasClient", "UpdateRegistryCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRegistryCommand)
  .de(de_UpdateRegistryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRegistryRequest;
      output: UpdateRegistryResponse;
    };
    sdk: {
      input: UpdateRegistryCommandInput;
      output: UpdateRegistryCommandOutput;
    };
  };
}
