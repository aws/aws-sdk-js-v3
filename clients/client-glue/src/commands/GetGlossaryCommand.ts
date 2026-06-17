// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { GetGlossaryRequest, GetGlossaryResponse } from "../models/models_2";
import { GetGlossary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGlossaryCommand}.
 */
export interface GetGlossaryCommandInput extends GetGlossaryRequest {}
/**
 * @public
 *
 * The output of {@link GetGlossaryCommand}.
 */
export interface GetGlossaryCommandOutput extends GetGlossaryResponse, __MetadataBearer {}

/**
 * <p>Retrieves a business glossary in Glue Data Catalog by its identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetGlossaryCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetGlossaryCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetGlossaryRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetGlossaryCommand(input);
 * const response = await client.send(command);
 * // { // GetGlossaryResponse
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGlossaryCommandInput - {@link GetGlossaryCommandInput}
 * @returns {@link GetGlossaryCommandOutput}
 * @see {@link GetGlossaryCommandInput} for command's `input` shape.
 * @see {@link GetGlossaryCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling threshhold was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetGlossaryCommand extends $Command
  .classBuilder<
    GetGlossaryCommandInput,
    GetGlossaryCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetGlossary", {})
  .n("GlueClient", "GetGlossaryCommand")
  .sc(GetGlossary$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGlossaryRequest;
      output: GetGlossaryResponse;
    };
    sdk: {
      input: GetGlossaryCommandInput;
      output: GetGlossaryCommandOutput;
    };
  };
}
