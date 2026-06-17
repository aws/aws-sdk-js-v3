// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { GetGlossaryTermRequest, GetGlossaryTermResponse } from "../models/models_2";
import { GetGlossaryTerm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGlossaryTermCommand}.
 */
export interface GetGlossaryTermCommandInput extends GetGlossaryTermRequest {}
/**
 * @public
 *
 * The output of {@link GetGlossaryTermCommand}.
 */
export interface GetGlossaryTermCommandOutput extends GetGlossaryTermResponse, __MetadataBearer {}

/**
 * <p>Retrieves a glossary term in Glue Data Catalog by its identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetGlossaryTermCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetGlossaryTermCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetGlossaryTermRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetGlossaryTermCommand(input);
 * const response = await client.send(command);
 * // { // GetGlossaryTermResponse
 * //   Id: "STRING_VALUE",
 * //   GlossaryId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   ShortDescription: "STRING_VALUE",
 * //   LongDescription: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetGlossaryTermCommandInput - {@link GetGlossaryTermCommandInput}
 * @returns {@link GetGlossaryTermCommandOutput}
 * @see {@link GetGlossaryTermCommandInput} for command's `input` shape.
 * @see {@link GetGlossaryTermCommandOutput} for command's `response` shape.
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
export class GetGlossaryTermCommand extends $Command
  .classBuilder<
    GetGlossaryTermCommandInput,
    GetGlossaryTermCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetGlossaryTerm", {})
  .n("GlueClient", "GetGlossaryTermCommand")
  .sc(GetGlossaryTerm$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGlossaryTermRequest;
      output: GetGlossaryTermResponse;
    };
    sdk: {
      input: GetGlossaryTermCommandInput;
      output: GetGlossaryTermCommandOutput;
    };
  };
}
