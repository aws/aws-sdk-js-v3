// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCodeBindingRequest, DescribeCodeBindingResponse } from "../models/models_0";
import { de_DescribeCodeBindingCommand, se_DescribeCodeBindingCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCodeBindingCommand}.
 */
export interface DescribeCodeBindingCommandInput extends DescribeCodeBindingRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCodeBindingCommand}.
 */
export interface DescribeCodeBindingCommandOutput extends DescribeCodeBindingResponse, __MetadataBearer {}

/**
 * <p>Describe the code binding URI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DescribeCodeBindingCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DescribeCodeBindingCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
 * const client = new SchemasClient(config);
 * const input = { // DescribeCodeBindingRequest
 *   Language: "STRING_VALUE", // required
 *   RegistryName: "STRING_VALUE", // required
 *   SchemaName: "STRING_VALUE", // required
 *   SchemaVersion: "STRING_VALUE",
 * };
 * const command = new DescribeCodeBindingCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCodeBindingResponse
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   LastModified: new Date("TIMESTAMP"),
 * //   SchemaVersion: "STRING_VALUE",
 * //   Status: "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED",
 * // };
 *
 * ```
 *
 * @param DescribeCodeBindingCommandInput - {@link DescribeCodeBindingCommandInput}
 * @returns {@link DescribeCodeBindingCommandOutput}
 * @see {@link DescribeCodeBindingCommandInput} for command's `input` shape.
 * @see {@link DescribeCodeBindingCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 *
 * @public
 */
export class DescribeCodeBindingCommand extends $Command
  .classBuilder<
    DescribeCodeBindingCommandInput,
    DescribeCodeBindingCommandOutput,
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
  .s("schemas", "DescribeCodeBinding", {})
  .n("SchemasClient", "DescribeCodeBindingCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCodeBindingCommand)
  .de(de_DescribeCodeBindingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCodeBindingRequest;
      output: DescribeCodeBindingResponse;
    };
    sdk: {
      input: DescribeCodeBindingCommandInput;
      output: DescribeCodeBindingCommandOutput;
    };
  };
}
