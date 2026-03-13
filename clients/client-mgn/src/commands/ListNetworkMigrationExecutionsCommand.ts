// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type { ListNetworkMigrationExecutionsRequest, ListNetworkMigrationExecutionsResponse } from "../models/models_0";
import { ListNetworkMigrationExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNetworkMigrationExecutionsCommand}.
 */
export interface ListNetworkMigrationExecutionsCommandInput extends ListNetworkMigrationExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkMigrationExecutionsCommand}.
 */
export interface ListNetworkMigrationExecutionsCommandOutput extends ListNetworkMigrationExecutionsResponse, __MetadataBearer {}

/**
 * <p>Lists network migration execution instances for a given definition, showing the status and progress of each execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListNetworkMigrationExecutionsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListNetworkMigrationExecutionsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListNetworkMigrationExecutionsRequest
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 *   filters: { // ListNetworkMigrationExecutionRequestFilters
 *     networkMigrationExecutionIDs: [ // NetworkMigrationExecutionIDsFilter
 *       "STRING_VALUE",
 *     ],
 *     networkMigrationExecutionStatuses: [ // NetworkMigrationExecutionStatusesFilter
 *       "STRING_VALUE",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListNetworkMigrationExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkMigrationExecutionsResponse
 * //   items: [ // NetworkMigrationExecutionsList
 * //     { // NetworkMigrationExecution
 * //       networkMigrationDefinitionID: "STRING_VALUE",
 * //       networkMigrationExecutionID: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       stage: "STRING_VALUE",
 * //       activity: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkMigrationExecutionsCommandInput - {@link ListNetworkMigrationExecutionsCommandInput}
 * @returns {@link ListNetworkMigrationExecutionsCommandOutput}
 * @see {@link ListNetworkMigrationExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListNetworkMigrationExecutionsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example Sample ListNetworkMigrationExecutions call
 * ```javascript
 * //
 * const input = {
 *   networkMigrationDefinitionID: "nmd-01234567891234567"
 * };
 * const command = new ListNetworkMigrationExecutionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       activity: "CODE_GENERATION",
 *       createdAt: 1735334198,
 *       networkMigrationDefinitionID: "nmd-01234567891234567",
 *       networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab",
 *       stage: "CODE_GENERATION",
 *       status: "SUCCEEDED",
 *       tags:       { /* empty *\/ },
 *       updatedAt: 1735334198
 *     }
 *   ],
 *   nextToken: "NextTokenId"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListNetworkMigrationExecutionsCommand extends $Command
  .classBuilder<
    ListNetworkMigrationExecutionsCommandInput,
    ListNetworkMigrationExecutionsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "ListNetworkMigrationExecutions", {})
  .n("MgnClient", "ListNetworkMigrationExecutionsCommand")
  .sc(ListNetworkMigrationExecutions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkMigrationExecutionsRequest;
      output: ListNetworkMigrationExecutionsResponse;
    };
    sdk: {
      input: ListNetworkMigrationExecutionsCommandInput;
      output: ListNetworkMigrationExecutionsCommandOutput;
    };
  };
}
