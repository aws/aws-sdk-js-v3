// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateGlossaryTermsRequest, DisassociateGlossaryTermsResponse } from "../models/models_1";
import { DisassociateGlossaryTerms$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Removes the association of one or more glossary terms from an asset in Glue Data Catalog.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DisassociateGlossaryTermsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DisassociateGlossaryTermsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DisassociateGlossaryTermsRequest
 *   AssetIdentifier: "STRING_VALUE", // required
 *   IterableFormName: "STRING_VALUE",
 *   ItemIdentifier: "STRING_VALUE",
 *   GlossaryTermIdentifiers: [ // GlossaryTermIdList // required
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DisassociateGlossaryTermsCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateGlossaryTermsResponse
 * //   AssetIdentifier: "STRING_VALUE",
 * //   IterableFormName: "STRING_VALUE",
 * //   ItemIdentifier: "STRING_VALUE",
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
 *
 * Access to a resource was denied.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling threshhold was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class DisassociateGlossaryTermsCommand extends command<DisassociateGlossaryTermsCommandInput, DisassociateGlossaryTermsCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateGlossaryTerms",
  DisassociateGlossaryTerms$
) {
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
