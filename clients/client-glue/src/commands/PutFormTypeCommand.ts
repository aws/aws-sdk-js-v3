// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { PutFormTypeRequest, PutFormTypeResponse } from "../models/models_2";
import { PutFormType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutFormTypeCommand}.
 */
export interface PutFormTypeCommandInput extends PutFormTypeRequest {}
/**
 * @public
 *
 * The output of {@link PutFormTypeCommand}.
 */
export interface PutFormTypeCommandOutput extends PutFormTypeResponse, __MetadataBearer {}

/**
 * <p>Creates or updates a form type in Glue Data Catalog. A form type defines the schema for structured metadata that can be attached to assets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutFormTypeCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutFormTypeCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // PutFormTypeRequest
 *   Name: "STRING_VALUE", // required
 *   Schema: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new PutFormTypeCommand(input);
 * const response = await client.send(command);
 * // { // PutFormTypeResponse
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Schema: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutFormTypeCommandInput - {@link PutFormTypeCommandInput}
 * @returns {@link PutFormTypeCommandOutput}
 * @see {@link PutFormTypeCommandInput} for command's `input` shape.
 * @see {@link PutFormTypeCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
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
export class PutFormTypeCommand extends $Command
  .classBuilder<
    PutFormTypeCommandInput,
    PutFormTypeCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "PutFormType", {})
  .n("GlueClient", "PutFormTypeCommand")
  .sc(PutFormType$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutFormTypeRequest;
      output: PutFormTypeResponse;
    };
    sdk: {
      input: PutFormTypeCommandInput;
      output: PutFormTypeCommandOutput;
    };
  };
}
