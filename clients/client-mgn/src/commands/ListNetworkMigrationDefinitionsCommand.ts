// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type {
  ListNetworkMigrationDefinitionsRequest,
  ListNetworkMigrationDefinitionsResponse,
} from "../models/models_0";
import { ListNetworkMigrationDefinitions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNetworkMigrationDefinitionsCommand}.
 */
export interface ListNetworkMigrationDefinitionsCommandInput extends ListNetworkMigrationDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkMigrationDefinitionsCommand}.
 */
export interface ListNetworkMigrationDefinitionsCommandOutput extends ListNetworkMigrationDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Lists all network migration definitions in the account, with optional filtering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListNetworkMigrationDefinitionsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListNetworkMigrationDefinitionsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListNetworkMigrationDefinitionsRequest
 *   filters: { // ListNetworkMigrationDefinitionsRequestFilters
 *     networkMigrationDefinitionIDs: [ // NetworkMigrationDefintionsIDsFilter
 *       "STRING_VALUE",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListNetworkMigrationDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkMigrationDefinitionsResponse
 * //   items: [ // NetworkMigrationDefinitionSummariesList
 * //     { // NetworkMigrationDefinitionSummary
 * //       networkMigrationDefinitionID: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       sourceEnvironment: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       scopeTags: { // ScopeTagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkMigrationDefinitionsCommandInput - {@link ListNetworkMigrationDefinitionsCommandInput}
 * @returns {@link ListNetworkMigrationDefinitionsCommandOutput}
 * @see {@link ListNetworkMigrationDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListNetworkMigrationDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example Sample ListNetworkMigrationDefinitions call
 * ```javascript
 * //
 * const input = {
 *   filters: {
 *     networkMigrationDefinitionIDs: [
 *       "nmd-01234567891234567"
 *     ]
 *   }
 * };
 * const command = new ListNetworkMigrationDefinitionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       name: "network1",
 *       networkMigrationDefinitionID: "nmd-01234567891234567",
 *       sourceEnvironment: "NSX"
 *     }
 *   ],
 *   nextToken: "NextTokenId"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListNetworkMigrationDefinitionsCommand extends $Command
  .classBuilder<
    ListNetworkMigrationDefinitionsCommandInput,
    ListNetworkMigrationDefinitionsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "ListNetworkMigrationDefinitions", {})
  .n("MgnClient", "ListNetworkMigrationDefinitionsCommand")
  .sc(ListNetworkMigrationDefinitions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkMigrationDefinitionsRequest;
      output: ListNetworkMigrationDefinitionsResponse;
    };
    sdk: {
      input: ListNetworkMigrationDefinitionsCommandInput;
      output: ListNetworkMigrationDefinitionsCommandOutput;
    };
  };
}
