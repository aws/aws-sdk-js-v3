// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetRegistryInput, GetRegistryResponse } from "../models/models_2";
import { GetRegistry } from "../schemas/schemas_51_Schema";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRegistryCommand}.
 */
export interface GetRegistryCommandInput extends GetRegistryInput {}
/**
 * @public
 *
 * The output of {@link GetRegistryCommand}.
 */
export interface GetRegistryCommandOutput extends GetRegistryResponse, __MetadataBearer {}

/**
 * <p>Describes the specified registry in detail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetRegistryCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetRegistryCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetRegistryInput
 *   RegistryId: { // RegistryId
 *     RegistryName: "STRING_VALUE",
 *     RegistryArn: "STRING_VALUE",
 *   },
 * };
 * const command = new GetRegistryCommand(input);
 * const response = await client.send(command);
 * // { // GetRegistryResponse
 * //   RegistryName: "STRING_VALUE",
 * //   RegistryArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Status: "AVAILABLE" || "DELETING",
 * //   CreatedTime: "STRING_VALUE",
 * //   UpdatedTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRegistryCommandInput - {@link GetRegistryCommandInput}
 * @returns {@link GetRegistryCommandOutput}
 * @see {@link GetRegistryCommandInput} for command's `input` shape.
 * @see {@link GetRegistryCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetRegistryCommand extends $Command
  .classBuilder<
    GetRegistryCommandInput,
    GetRegistryCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetRegistry", {})
  .n("GlueClient", "GetRegistryCommand")
  .sc(GetRegistry)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRegistryInput;
      output: GetRegistryResponse;
    };
    sdk: {
      input: GetRegistryCommandInput;
      output: GetRegistryCommandOutput;
    };
  };
}
