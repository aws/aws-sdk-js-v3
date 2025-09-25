// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDiscoveredSchemaRequest, GetDiscoveredSchemaResponse } from "../models/models_0";
import { GetDiscoveredSchema } from "../schemas/schemas_9_Schema";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDiscoveredSchemaCommand}.
 */
export interface GetDiscoveredSchemaCommandInput extends GetDiscoveredSchemaRequest {}
/**
 * @public
 *
 * The output of {@link GetDiscoveredSchemaCommand}.
 */
export interface GetDiscoveredSchemaCommandOutput extends GetDiscoveredSchemaResponse, __MetadataBearer {}

/**
 * <p>Get the discovered schema that was generated based on sampled events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, GetDiscoveredSchemaCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, GetDiscoveredSchemaCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
 * const client = new SchemasClient(config);
 * const input = { // GetDiscoveredSchemaRequest
 *   Events: [ // __listOfGetDiscoveredSchemaVersionItemInput // required
 *     "STRING_VALUE",
 *   ],
 *   Type: "OpenApi3" || "JSONSchemaDraft4", // required
 * };
 * const command = new GetDiscoveredSchemaCommand(input);
 * const response = await client.send(command);
 * // { // GetDiscoveredSchemaResponse
 * //   Content: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDiscoveredSchemaCommandInput - {@link GetDiscoveredSchemaCommandInput}
 * @returns {@link GetDiscoveredSchemaCommandOutput}
 * @see {@link GetDiscoveredSchemaCommandInput} for command's `input` shape.
 * @see {@link GetDiscoveredSchemaCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link InternalServerErrorException} (server fault)
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
export class GetDiscoveredSchemaCommand extends $Command
  .classBuilder<
    GetDiscoveredSchemaCommandInput,
    GetDiscoveredSchemaCommandOutput,
    SchemasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SchemasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("schemas", "GetDiscoveredSchema", {})
  .n("SchemasClient", "GetDiscoveredSchemaCommand")
  .sc(GetDiscoveredSchema)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDiscoveredSchemaRequest;
      output: GetDiscoveredSchemaResponse;
    };
    sdk: {
      input: GetDiscoveredSchemaCommandInput;
      output: GetDiscoveredSchemaCommandOutput;
    };
  };
}
