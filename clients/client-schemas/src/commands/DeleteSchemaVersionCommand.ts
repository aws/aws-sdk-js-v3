// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSchemaVersionRequest } from "../models/models_0";
import { DeleteSchemaVersion } from "../schemas/schemas_0";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSchemaVersionCommand}.
 */
export interface DeleteSchemaVersionCommandInput extends DeleteSchemaVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSchemaVersionCommand}.
 */
export interface DeleteSchemaVersionCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete the schema version definition</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DeleteSchemaVersionCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DeleteSchemaVersionCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
 * const client = new SchemasClient(config);
 * const input = { // DeleteSchemaVersionRequest
 *   RegistryName: "STRING_VALUE", // required
 *   SchemaName: "STRING_VALUE", // required
 *   SchemaVersion: "STRING_VALUE", // required
 * };
 * const command = new DeleteSchemaVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSchemaVersionCommandInput - {@link DeleteSchemaVersionCommandInput}
 * @returns {@link DeleteSchemaVersionCommandOutput}
 * @see {@link DeleteSchemaVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteSchemaVersionCommandOutput} for command's `response` shape.
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
export class DeleteSchemaVersionCommand extends $Command
  .classBuilder<
    DeleteSchemaVersionCommandInput,
    DeleteSchemaVersionCommandOutput,
    SchemasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SchemasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("schemas", "DeleteSchemaVersion", {})
  .n("SchemasClient", "DeleteSchemaVersionCommand")
  .sc(DeleteSchemaVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSchemaVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteSchemaVersionCommandInput;
      output: DeleteSchemaVersionCommandOutput;
    };
  };
}
