// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type {
  ListNetworkMigrationMappingUpdatesRequest,
  ListNetworkMigrationMappingUpdatesResponse,
} from "../models/models_0";
import { ListNetworkMigrationMappingUpdates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNetworkMigrationMappingUpdatesCommand}.
 */
export interface ListNetworkMigrationMappingUpdatesCommandInput extends ListNetworkMigrationMappingUpdatesRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkMigrationMappingUpdatesCommand}.
 */
export interface ListNetworkMigrationMappingUpdatesCommandOutput extends ListNetworkMigrationMappingUpdatesResponse, __MetadataBearer {}

/**
 * <p>Lists mapping update jobs, which apply customer modifications to the generated network mappings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListNetworkMigrationMappingUpdatesCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListNetworkMigrationMappingUpdatesCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListNetworkMigrationMappingUpdatesRequest
 *   networkMigrationExecutionID: "STRING_VALUE", // required
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 *   filters: { // ListNetworkMigrationMappingUpdatesFilters
 *     jobIDs: [ // ListNetworkMigrationMappingUpdatesIDsFilter
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNetworkMigrationMappingUpdatesCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkMigrationMappingUpdatesResponse
 * //   items: [ // NetworkMigrationMappingUpdatesList
 * //     { // NetworkMigrationMappingUpdateJobDetails
 * //       jobID: "STRING_VALUE",
 * //       networkMigrationExecutionID: "STRING_VALUE",
 * //       networkMigrationDefinitionID: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //       status: "STRING_VALUE",
 * //       statusDetails: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkMigrationMappingUpdatesCommandInput - {@link ListNetworkMigrationMappingUpdatesCommandInput}
 * @returns {@link ListNetworkMigrationMappingUpdatesCommandOutput}
 * @see {@link ListNetworkMigrationMappingUpdatesCommandInput} for command's `input` shape.
 * @see {@link ListNetworkMigrationMappingUpdatesCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Reached throttling quota exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example Sample ListNetworkMigrationMappingUpdates call
 * ```javascript
 * //
 * const input = {
 *   networkMigrationDefinitionID: "nmd-01234567891234567",
 *   networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab"
 * };
 * const command = new ListNetworkMigrationMappingUpdatesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       createdAt: 1735334198,
 *       endedAt: 1735334258,
 *       jobID: "01234567-abcd-abcd-efab-0123456789ab",
 *       networkMigrationDefinitionID: "nmd-01234567891234567",
 *       networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab",
 *       status: "SUCCEEDED",
 *       statusDetails: "Job status details"
 *     }
 *   ],
 *   nextToken: "NextTokenId"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListNetworkMigrationMappingUpdatesCommand extends $Command
  .classBuilder<
    ListNetworkMigrationMappingUpdatesCommandInput,
    ListNetworkMigrationMappingUpdatesCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "ListNetworkMigrationMappingUpdates", {})
  .n("MgnClient", "ListNetworkMigrationMappingUpdatesCommand")
  .sc(ListNetworkMigrationMappingUpdates$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkMigrationMappingUpdatesRequest;
      output: ListNetworkMigrationMappingUpdatesResponse;
    };
    sdk: {
      input: ListNetworkMigrationMappingUpdatesCommandInput;
      output: ListNetworkMigrationMappingUpdatesCommandOutput;
    };
  };
}
