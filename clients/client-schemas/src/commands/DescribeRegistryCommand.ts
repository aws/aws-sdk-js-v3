// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeRegistryRequest, DescribeRegistryResponse } from "../models/models_0";
import { DescribeRegistry$ } from "../schemas/schemas_0";
import type { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRegistryCommand}.
 */
export interface DescribeRegistryCommandInput extends DescribeRegistryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRegistryCommand}.
 */
export interface DescribeRegistryCommandOutput extends DescribeRegistryResponse, __MetadataBearer {}

/**
 * <p>Describes the registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DescribeRegistryCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DescribeRegistryCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
 * const client = new SchemasClient(config);
 * const input = { // DescribeRegistryRequest
 *   RegistryName: "STRING_VALUE", // required
 * };
 * const command = new DescribeRegistryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRegistryResponse
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
 * @param DescribeRegistryCommandInput - {@link DescribeRegistryCommandInput}
 * @returns {@link DescribeRegistryCommandOutput}
 * @see {@link DescribeRegistryCommandInput} for command's `input` shape.
 * @see {@link DescribeRegistryCommandOutput} for command's `response` shape.
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
export class DescribeRegistryCommand extends $Command
  .classBuilder<
    DescribeRegistryCommandInput,
    DescribeRegistryCommandOutput,
    SchemasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SchemasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("schemas", "DescribeRegistry", {})
  .n("SchemasClient", "DescribeRegistryCommand")
  .sc(DescribeRegistry$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRegistryRequest;
      output: DescribeRegistryResponse;
    };
    sdk: {
      input: DescribeRegistryCommandInput;
      output: DescribeRegistryCommandOutput;
    };
  };
}
