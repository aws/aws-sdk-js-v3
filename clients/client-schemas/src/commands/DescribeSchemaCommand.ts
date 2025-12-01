// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSchemaRequest, DescribeSchemaResponse } from "../models/models_0";
import { DescribeSchema } from "../schemas/schemas_0";
import type { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSchemaCommand}.
 */
export interface DescribeSchemaCommandInput extends DescribeSchemaRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSchemaCommand}.
 */
export interface DescribeSchemaCommandOutput extends DescribeSchemaResponse, __MetadataBearer {}

/**
 * <p>Retrieve the schema definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DescribeSchemaCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DescribeSchemaCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
 * const client = new SchemasClient(config);
 * const input = { // DescribeSchemaRequest
 *   RegistryName: "STRING_VALUE", // required
 *   SchemaName: "STRING_VALUE", // required
 *   SchemaVersion: "STRING_VALUE",
 * };
 * const command = new DescribeSchemaCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSchemaResponse
 * //   Content: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   LastModified: new Date("TIMESTAMP"),
 * //   SchemaArn: "STRING_VALUE",
 * //   SchemaName: "STRING_VALUE",
 * //   SchemaVersion: "STRING_VALUE",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Type: "STRING_VALUE",
 * //   VersionCreatedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeSchemaCommandInput - {@link DescribeSchemaCommandInput}
 * @returns {@link DescribeSchemaCommandOutput}
 * @see {@link DescribeSchemaCommandInput} for command's `input` shape.
 * @see {@link DescribeSchemaCommandOutput} for command's `response` shape.
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
export class DescribeSchemaCommand extends $Command
  .classBuilder<
    DescribeSchemaCommandInput,
    DescribeSchemaCommandOutput,
    SchemasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SchemasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("schemas", "DescribeSchema", {})
  .n("SchemasClient", "DescribeSchemaCommand")
  .sc(DescribeSchema)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSchemaRequest;
      output: DescribeSchemaResponse;
    };
    sdk: {
      input: DescribeSchemaCommandInput;
      output: DescribeSchemaCommandOutput;
    };
  };
}
