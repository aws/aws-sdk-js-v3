// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSchemaRequest } from "../models/models_0";
import { de_DeleteSchemaCommand, se_DeleteSchemaCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSchemaCommand}.
 */
export interface DeleteSchemaCommandInput extends DeleteSchemaRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSchemaCommand}.
 */
export interface DeleteSchemaCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete a schema definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DeleteSchemaCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DeleteSchemaCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const input = { // DeleteSchemaRequest
 *   RegistryName: "STRING_VALUE", // required
 *   SchemaName: "STRING_VALUE", // required
 * };
 * const command = new DeleteSchemaCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSchemaCommandInput - {@link DeleteSchemaCommandInput}
 * @returns {@link DeleteSchemaCommandOutput}
 * @see {@link DeleteSchemaCommandInput} for command's `input` shape.
 * @see {@link DeleteSchemaCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteSchemaCommand extends $Command
  .classBuilder<
    DeleteSchemaCommandInput,
    DeleteSchemaCommandOutput,
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
  .s("schemas", "DeleteSchema", {})
  .n("SchemasClient", "DeleteSchemaCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSchemaCommand)
  .de(de_DeleteSchemaCommand)
  .build() {}
