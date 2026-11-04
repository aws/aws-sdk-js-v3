// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateGlossaryTermInput, UpdateGlossaryTermOutput } from "../models/models_1";
import { UpdateGlossaryTerm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateGlossaryTermCommand}.
 */
export interface UpdateGlossaryTermCommandInput extends UpdateGlossaryTermInput {}
/**
 * @public
 *
 * The output of {@link UpdateGlossaryTermCommand}.
 */
export interface UpdateGlossaryTermCommandOutput extends UpdateGlossaryTermOutput, __MetadataBearer {}

/**
 * Updates a business glossary term in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - Glossary term must exist in the specified domain.
 * - New name must not conflict with existing terms in the same glossary.
 * - User must have permissions on the term.
 * - The term must not be in DELETED status.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateGlossaryTermCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateGlossaryTermCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // UpdateGlossaryTermInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   glossaryIdentifier: "STRING_VALUE",
 *   identifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   shortDescription: "STRING_VALUE",
 *   longDescription: "STRING_VALUE",
 *   termRelations: { // TermRelations
 *     isA: [ // GlossaryTerms
 *       "STRING_VALUE",
 *     ],
 *     classifies: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   status: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateGlossaryTermCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGlossaryTermOutput
 * //   id: "STRING_VALUE", // required
 * //   domainId: "STRING_VALUE", // required
 * //   glossaryId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "ENABLED" || "DISABLED", // required
 * //   shortDescription: "STRING_VALUE",
 * //   longDescription: "STRING_VALUE",
 * //   termRelations: { // TermRelations
 * //     isA: [ // GlossaryTerms
 * //       "STRING_VALUE",
 * //     ],
 * //     classifies: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   usageRestrictions: [ // GlossaryUsageRestrictions
 * //     "ASSET_GOVERNED_TERMS",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateGlossaryTermCommandInput - {@link UpdateGlossaryTermCommandInput}
 * @returns {@link UpdateGlossaryTermCommandOutput}
 * @see {@link UpdateGlossaryTermCommandInput} for command's `input` shape.
 * @see {@link UpdateGlossaryTermCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class UpdateGlossaryTermCommand extends command<UpdateGlossaryTermCommandInput, UpdateGlossaryTermCommandOutput>(
  _ep0,
  _mw0,
  "UpdateGlossaryTerm",
  UpdateGlossaryTerm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGlossaryTermInput;
      output: UpdateGlossaryTermOutput;
    };
    sdk: {
      input: UpdateGlossaryTermCommandInput;
      output: UpdateGlossaryTermCommandOutput;
    };
  };
}
