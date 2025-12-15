// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { type GetCodeBindingSourceRequest, GetCodeBindingSourceResponse } from "../models/models_0";
import { GetCodeBindingSource$ } from "../schemas/schemas_0";
import type { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCodeBindingSourceCommand}.
 */
export interface GetCodeBindingSourceCommandInput extends GetCodeBindingSourceRequest {}
/**
 * @public
 */
export type GetCodeBindingSourceCommandOutputType = Omit<GetCodeBindingSourceResponse, "Body"> & {
  Body?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetCodeBindingSourceCommand}.
 */
export interface GetCodeBindingSourceCommandOutput extends GetCodeBindingSourceCommandOutputType, __MetadataBearer {}

/**
 * <p>Get the code binding source URI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, GetCodeBindingSourceCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, GetCodeBindingSourceCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
 * const client = new SchemasClient(config);
 * const input = { // GetCodeBindingSourceRequest
 *   Language: "STRING_VALUE", // required
 *   RegistryName: "STRING_VALUE", // required
 *   SchemaName: "STRING_VALUE", // required
 *   SchemaVersion: "STRING_VALUE",
 * };
 * const command = new GetCodeBindingSourceCommand(input);
 * const response = await client.send(command);
 * // { // GetCodeBindingSourceResponse
 * //   Body: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param GetCodeBindingSourceCommandInput - {@link GetCodeBindingSourceCommandInput}
 * @returns {@link GetCodeBindingSourceCommandOutput}
 * @see {@link GetCodeBindingSourceCommandInput} for command's `input` shape.
 * @see {@link GetCodeBindingSourceCommandOutput} for command's `response` shape.
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
export class GetCodeBindingSourceCommand extends $Command
  .classBuilder<
    GetCodeBindingSourceCommandInput,
    GetCodeBindingSourceCommandOutput,
    SchemasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SchemasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("schemas", "GetCodeBindingSource", {})
  .n("SchemasClient", "GetCodeBindingSourceCommand")
  .sc(GetCodeBindingSource$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCodeBindingSourceRequest;
      output: GetCodeBindingSourceResponse;
    };
    sdk: {
      input: GetCodeBindingSourceCommandInput;
      output: GetCodeBindingSourceCommandOutput;
    };
  };
}
