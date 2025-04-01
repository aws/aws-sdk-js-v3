// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutCodeBindingRequest, PutCodeBindingResponse } from "../models/models_0";
import { de_PutCodeBindingCommand, se_PutCodeBindingCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutCodeBindingCommand}.
 */
export interface PutCodeBindingCommandInput extends PutCodeBindingRequest {}
/**
 * @public
 *
 * The output of {@link PutCodeBindingCommand}.
 */
export interface PutCodeBindingCommandOutput extends PutCodeBindingResponse, __MetadataBearer {}

/**
 * <p>Put code binding URI</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, PutCodeBindingCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, PutCodeBindingCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const input = { // PutCodeBindingRequest
 *   Language: "STRING_VALUE", // required
 *   RegistryName: "STRING_VALUE", // required
 *   SchemaName: "STRING_VALUE", // required
 *   SchemaVersion: "STRING_VALUE",
 * };
 * const command = new PutCodeBindingCommand(input);
 * const response = await client.send(command);
 * // { // PutCodeBindingResponse
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   LastModified: new Date("TIMESTAMP"),
 * //   SchemaVersion: "STRING_VALUE",
 * //   Status: "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED",
 * // };
 *
 * ```
 *
 * @param PutCodeBindingCommandInput - {@link PutCodeBindingCommandInput}
 * @returns {@link PutCodeBindingCommandOutput}
 * @see {@link PutCodeBindingCommandInput} for command's `input` shape.
 * @see {@link PutCodeBindingCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link GoneException} (client fault)
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
export class PutCodeBindingCommand extends $Command
  .classBuilder<
    PutCodeBindingCommandInput,
    PutCodeBindingCommandOutput,
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
  .s("schemas", "PutCodeBinding", {})
  .n("SchemasClient", "PutCodeBindingCommand")
  .f(void 0, void 0)
  .ser(se_PutCodeBindingCommand)
  .de(de_PutCodeBindingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutCodeBindingRequest;
      output: PutCodeBindingResponse;
    };
    sdk: {
      input: PutCodeBindingCommandInput;
      output: PutCodeBindingCommandOutput;
    };
  };
}
