// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateGlossaryTermsRequest, AssociateGlossaryTermsResponse } from "../models/models_0";
import { AssociateGlossaryTerms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateGlossaryTermsCommand}.
 */
export interface AssociateGlossaryTermsCommandInput extends AssociateGlossaryTermsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateGlossaryTermsCommand}.
 */
export interface AssociateGlossaryTermsCommandOutput extends AssociateGlossaryTermsResponse, __MetadataBearer {}

/**
 * <p>Associates one or more glossary terms with an asset in Glue Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, AssociateGlossaryTermsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, AssociateGlossaryTermsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // AssociateGlossaryTermsRequest
 *   AssetIdentifier: "STRING_VALUE", // required
 *   GlossaryTermIdentifiers: [ // GlossaryTermIdList // required
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new AssociateGlossaryTermsCommand(input);
 * const response = await client.send(command);
 * // { // AssociateGlossaryTermsResponse
 * //   AssetIdentifier: "STRING_VALUE",
 * //   GlossaryTerms: [ // GlossaryTermIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssociateGlossaryTermsCommandInput - {@link AssociateGlossaryTermsCommandInput}
 * @returns {@link AssociateGlossaryTermsCommandOutput}
 * @see {@link AssociateGlossaryTermsCommandInput} for command's `input` shape.
 * @see {@link AssociateGlossaryTermsCommandOutput} for command's `response` shape.
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
export class AssociateGlossaryTermsCommand extends command<AssociateGlossaryTermsCommandInput, AssociateGlossaryTermsCommandOutput>(
  _ep0,
  _mw0,
  "AssociateGlossaryTerms",
  AssociateGlossaryTerms$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateGlossaryTermsRequest;
      output: AssociateGlossaryTermsResponse;
    };
    sdk: {
      input: AssociateGlossaryTermsCommandInput;
      output: AssociateGlossaryTermsCommandOutput;
    };
  };
}
