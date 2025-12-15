// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutCodeBindingRequest, PutCodeBindingResponse } from "../models/models_0";
import { PutCodeBinding$ } from "../schemas/schemas_0";
import type { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

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
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("schemas", "PutCodeBinding", {})
  .n("SchemasClient", "PutCodeBindingCommand")
  .sc(PutCodeBinding$)
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
