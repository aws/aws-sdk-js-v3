// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { DisassociateGlossaryTermsRequest, DisassociateGlossaryTermsResponse } from "../models/models_1";
import { DisassociateGlossaryTerms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateGlossaryTermsCommand}.
 */
export interface DisassociateGlossaryTermsCommandInput extends DisassociateGlossaryTermsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateGlossaryTermsCommand}.
 */
export interface DisassociateGlossaryTermsCommandOutput extends DisassociateGlossaryTermsResponse, __MetadataBearer {}

/**
 * <p>Removes the association of one or more glossary terms from an asset in Glue Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DisassociateGlossaryTermsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DisassociateGlossaryTermsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DisassociateGlossaryTermsRequest
 *   Identifier: "STRING_VALUE", // required
 *   GlossaryTermIdentifiers: [ // GlossaryTermIdList // required
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DisassociateGlossaryTermsCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateGlossaryTermsResponse
 * //   Identifier: "STRING_VALUE",
 * //   GlossaryTerms: [ // GlossaryTermIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DisassociateGlossaryTermsCommandInput - {@link DisassociateGlossaryTermsCommandInput}
 * @returns {@link DisassociateGlossaryTermsCommandOutput}
 * @see {@link DisassociateGlossaryTermsCommandInput} for command's `input` shape.
 * @see {@link DisassociateGlossaryTermsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling threshhold was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DisassociateGlossaryTermsCommand extends $Command
  .classBuilder<
    DisassociateGlossaryTermsCommandInput,
    DisassociateGlossaryTermsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DisassociateGlossaryTerms", {})
  .n("GlueClient", "DisassociateGlossaryTermsCommand")
  .sc(DisassociateGlossaryTerms$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateGlossaryTermsRequest;
      output: DisassociateGlossaryTermsResponse;
    };
    sdk: {
      input: DisassociateGlossaryTermsCommandInput;
      output: DisassociateGlossaryTermsCommandOutput;
    };
  };
}
