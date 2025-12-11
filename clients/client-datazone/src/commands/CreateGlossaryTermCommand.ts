// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateGlossaryTermInput, CreateGlossaryTermOutput } from "../models/models_0";
import { CreateGlossaryTerm } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGlossaryTermCommand}.
 */
export interface CreateGlossaryTermCommandInput extends CreateGlossaryTermInput {}
/**
 * @public
 *
 * The output of {@link CreateGlossaryTermCommand}.
 */
export interface CreateGlossaryTermCommandOutput extends CreateGlossaryTermOutput, __MetadataBearer {}

/**
 * <p>Creates a business glossary term.</p> <p>A glossary term represents an individual entry within the Amazon DataZone glossary, serving as a standardized definition for a specific business concept or data element. Each term can include rich metadata such as detailed definitions, synonyms, related terms, and usage examples. Glossary terms can be linked directly to data assets, providing business context to technical data elements. This linking capability helps users understand the business meaning of data fields and ensures consistent interpretation across different systems and teams. Terms can also have relationships with other terms, creating a semantic network that reflects the complexity of business concepts.</p> <p>Prerequisites:</p> <ul> <li> <p>Domain must exist. </p> </li> <li> <p>Glossary must exist.</p> </li> <li> <p>The term name must be unique within the glossary.</p> </li> <li> <p>Ensure term does not conflict with existing terms in hierarchy.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateGlossaryTermCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateGlossaryTermCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateGlossaryTermInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   glossaryIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   status: "ENABLED" || "DISABLED",
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
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateGlossaryTermCommand(input);
 * const response = await client.send(command);
 * // { // CreateGlossaryTermOutput
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
 * @param CreateGlossaryTermCommandInput - {@link CreateGlossaryTermCommandInput}
 * @returns {@link CreateGlossaryTermCommandOutput}
 * @see {@link CreateGlossaryTermCommandInput} for command's `input` shape.
 * @see {@link CreateGlossaryTermCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class CreateGlossaryTermCommand extends $Command
  .classBuilder<
    CreateGlossaryTermCommandInput,
    CreateGlossaryTermCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "CreateGlossaryTerm", {})
  .n("DataZoneClient", "CreateGlossaryTermCommand")
  .sc(CreateGlossaryTerm)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGlossaryTermInput;
      output: CreateGlossaryTermOutput;
    };
    sdk: {
      input: CreateGlossaryTermCommandInput;
      output: CreateGlossaryTermCommandOutput;
    };
  };
}
