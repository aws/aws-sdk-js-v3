// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ExportSchemaRequest, ExportSchemaResponse } from "../models/models_0";
import { ExportSchema } from "../schemas/schemas_2_Binding";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportSchemaCommand}.
 */
export interface ExportSchemaCommandInput extends ExportSchemaRequest {}
/**
 * @public
 *
 * The output of {@link ExportSchemaCommand}.
 */
export interface ExportSchemaCommandOutput extends ExportSchemaResponse, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, ExportSchemaCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, ExportSchemaCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
 * const client = new SchemasClient(config);
 * const input = { // ExportSchemaRequest
 *   RegistryName: "STRING_VALUE", // required
 *   SchemaName: "STRING_VALUE", // required
 *   SchemaVersion: "STRING_VALUE",
 *   Type: "STRING_VALUE", // required
 * };
 * const command = new ExportSchemaCommand(input);
 * const response = await client.send(command);
 * // { // ExportSchemaResponse
 * //   Content: "STRING_VALUE",
 * //   SchemaArn: "STRING_VALUE",
 * //   SchemaName: "STRING_VALUE",
 * //   SchemaVersion: "STRING_VALUE",
 * //   Type: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportSchemaCommandInput - {@link ExportSchemaCommandInput}
 * @returns {@link ExportSchemaCommandOutput}
 * @see {@link ExportSchemaCommandInput} for command's `input` shape.
 * @see {@link ExportSchemaCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 *
 */
export class ExportSchemaCommand extends $Command
  .classBuilder<
    ExportSchemaCommandInput,
    ExportSchemaCommandOutput,
    SchemasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SchemasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("schemas", "ExportSchema", {})
  .n("SchemasClient", "ExportSchemaCommand")
  .sc(ExportSchema)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportSchemaRequest;
      output: ExportSchemaResponse;
    };
    sdk: {
      input: ExportSchemaCommandInput;
      output: ExportSchemaCommandOutput;
    };
  };
}
