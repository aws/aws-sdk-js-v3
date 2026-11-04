// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMetadataGenerationRunsInput, ListMetadataGenerationRunsOutput } from "../models/models_1";
import { ListMetadataGenerationRuns$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMetadataGenerationRunsCommand}.
 */
export interface ListMetadataGenerationRunsCommandInput extends ListMetadataGenerationRunsInput {}
/**
 * @public
 *
 * The output of {@link ListMetadataGenerationRunsCommand}.
 */
export interface ListMetadataGenerationRunsCommandOutput extends ListMetadataGenerationRunsOutput, __MetadataBearer {}

/**
 * Lists all metadata generation runs.
 *
 * Metadata generation runs represent automated processes that leverage AI/ML capabilities to create or enhance asset metadata at scale. This feature helps organizations maintain comprehensive and consistent metadata across large numbers of assets without manual intervention. It can automatically generate business descriptions, tags, and other metadata elements, significantly reducing the time and effort required for metadata management while improving consistency and completeness.
 *
 * Prerequisites:
 *
 * - Valid domain identifier.
 * - User must have access to metadata generation runs in the domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListMetadataGenerationRunsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListMetadataGenerationRunsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListMetadataGenerationRunsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   status: "SUBMITTED" || "IN_PROGRESS" || "CANCELED" || "SUCCEEDED" || "FAILED" || "PARTIALLY_SUCCEEDED",
 *   type: "BUSINESS_DESCRIPTIONS" || "BUSINESS_NAMES" || "BUSINESS_GLOSSARY_ASSOCIATIONS",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   targetIdentifier: "STRING_VALUE",
 * };
 * const command = new ListMetadataGenerationRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListMetadataGenerationRunsOutput
 * //   items: [ // MetadataGenerationRuns
 * //     { // MetadataGenerationRunItem
 * //       domainId: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       target: { // MetadataGenerationRunTarget
 * //         type: "ASSET", // required
 * //         identifier: "STRING_VALUE", // required
 * //         revision: "STRING_VALUE",
 * //       },
 * //       status: "SUBMITTED" || "IN_PROGRESS" || "CANCELED" || "SUCCEEDED" || "FAILED" || "PARTIALLY_SUCCEEDED",
 * //       type: "BUSINESS_DESCRIPTIONS" || "BUSINESS_NAMES" || "BUSINESS_GLOSSARY_ASSOCIATIONS",
 * //       types: [ // MetadataGenerationRunTypes
 * //         "BUSINESS_DESCRIPTIONS" || "BUSINESS_NAMES" || "BUSINESS_GLOSSARY_ASSOCIATIONS",
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //       owningProjectId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMetadataGenerationRunsCommandInput - {@link ListMetadataGenerationRunsCommandInput}
 * @returns {@link ListMetadataGenerationRunsCommandOutput}
 * @see {@link ListMetadataGenerationRunsCommandInput} for command's `input` shape.
 * @see {@link ListMetadataGenerationRunsCommandOutput} for command's `response` shape.
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
export class ListMetadataGenerationRunsCommand extends command<ListMetadataGenerationRunsCommandInput, ListMetadataGenerationRunsCommandOutput>(
  _ep0,
  _mw0,
  "ListMetadataGenerationRuns",
  ListMetadataGenerationRuns$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMetadataGenerationRunsInput;
      output: ListMetadataGenerationRunsOutput;
    };
    sdk: {
      input: ListMetadataGenerationRunsCommandInput;
      output: ListMetadataGenerationRunsCommandOutput;
    };
  };
}
