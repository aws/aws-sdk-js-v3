// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetGlossaryTermInput, GetGlossaryTermOutput } from "../models/models_1";
import { GetGlossaryTerm$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetGlossaryTermCommand}.
 */
export interface GetGlossaryTermCommandInput extends GetGlossaryTermInput {}
/**
 * @public
 *
 * The output of {@link GetGlossaryTermCommand}.
 */
export interface GetGlossaryTermCommandOutput extends GetGlossaryTermOutput, __MetadataBearer {}

/**
 * Gets a business glossary term in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - Glossary term with identifier must exist in the domain.
 * - User must have permission on the glossary term.
 * - Domain must be accessible and active.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetGlossaryTermCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetGlossaryTermCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetGlossaryTermInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetGlossaryTermCommand(input);
 * const response = await client.send(command);
 * // { // GetGlossaryTermOutput
 * //   domainId: "STRING_VALUE", // required
 * //   glossaryId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
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
 * //   status: "ENABLED" || "DISABLED", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * //   usageRestrictions: [ // GlossaryUsageRestrictions
 * //     "ASSET_GOVERNED_TERMS",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetGlossaryTermCommandInput - {@link GetGlossaryTermCommandInput}
 * @returns {@link GetGlossaryTermCommandOutput}
 * @see {@link GetGlossaryTermCommandInput} for command's `input` shape.
 * @see {@link GetGlossaryTermCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
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
export class GetGlossaryTermCommand extends command<GetGlossaryTermCommandInput, GetGlossaryTermCommandOutput>(
  _ep0,
  _mw0,
  "GetGlossaryTerm",
  GetGlossaryTerm$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGlossaryTermInput;
      output: GetGlossaryTermOutput;
    };
    sdk: {
      input: GetGlossaryTermCommandInput;
      output: GetGlossaryTermCommandOutput;
    };
  };
}
