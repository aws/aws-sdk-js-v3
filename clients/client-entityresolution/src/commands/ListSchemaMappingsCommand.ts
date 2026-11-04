// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSchemaMappingsInput, ListSchemaMappingsOutput } from "../models/models_0";
import { ListSchemaMappings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSchemaMappingsCommand}.
 */
export interface ListSchemaMappingsCommandInput extends ListSchemaMappingsInput {}
/**
 * @public
 *
 * The output of {@link ListSchemaMappingsCommand}.
 */
export interface ListSchemaMappingsCommandOutput extends ListSchemaMappingsOutput, __MetadataBearer {}

/**
 * Returns a list of all the `SchemaMappings` that have been created for an Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, ListSchemaMappingsCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, ListSchemaMappingsCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // ListSchemaMappingsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSchemaMappingsCommand(input);
 * const response = await client.send(command);
 * // { // ListSchemaMappingsOutput
 * //   schemaList: [ // SchemaMappingList
 * //     { // SchemaMappingSummary
 * //       schemaName: "STRING_VALUE", // required
 * //       schemaArn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       hasWorkflows: true || false, // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSchemaMappingsCommandInput - {@link ListSchemaMappingsCommandInput}
 * @returns {@link ListSchemaMappingsCommandOutput}
 * @see {@link ListSchemaMappingsCommandInput} for command's `input` shape.
 * @see {@link ListSchemaMappingsCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Entity Resolution service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Entity Resolution.
 *
 * @throws {@link EntityResolutionServiceException}
 *
 * Base exception class for all service exceptions from EntityResolution service.
 *
 * @public
 */
export class ListSchemaMappingsCommand extends command<ListSchemaMappingsCommandInput, ListSchemaMappingsCommandOutput>(
  _ep0,
  _mw0,
  "ListSchemaMappings",
  ListSchemaMappings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSchemaMappingsInput;
      output: ListSchemaMappingsOutput;
    };
    sdk: {
      input: ListSchemaMappingsCommandInput;
      output: ListSchemaMappingsCommandOutput;
    };
  };
}
