// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type { ListNetworkMigrationMappingsRequest, ListNetworkMigrationMappingsResponse } from "../models/models_0";
import { ListNetworkMigrationMappings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNetworkMigrationMappingsCommand}.
 */
export interface ListNetworkMigrationMappingsCommandInput extends ListNetworkMigrationMappingsRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkMigrationMappingsCommand}.
 */
export interface ListNetworkMigrationMappingsCommandOutput extends ListNetworkMigrationMappingsResponse, __MetadataBearer {}

/**
 * <p>Lists network migration mapping jobs, which analyze and create relationships between source and target network resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListNetworkMigrationMappingsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListNetworkMigrationMappingsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListNetworkMigrationMappingsRequest
 *   networkMigrationExecutionID: "STRING_VALUE", // required
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 *   filters: { // ListNetworkMigrationMappingsFilters
 *     jobIDs: [ // ListNetworkMigrationMappingsIDsFilter
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNetworkMigrationMappingsCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkMigrationMappingsResponse
 * //   items: [ // NetworkMigrationMappingsList
 * //     { // NetworkMigrationMappingJobDetails
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
 * @param ListNetworkMigrationMappingsCommandInput - {@link ListNetworkMigrationMappingsCommandInput}
 * @returns {@link ListNetworkMigrationMappingsCommandOutput}
 * @see {@link ListNetworkMigrationMappingsCommandInput} for command's `input` shape.
 * @see {@link ListNetworkMigrationMappingsCommandOutput} for command's `response` shape.
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
 * @example Sample ListNetworkMigrationMappings call
 * ```javascript
 * //
 * const input = {
 *   networkMigrationDefinitionID: "nmd-01234567891234567",
 *   networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab"
 * };
 * const command = new ListNetworkMigrationMappingsCommand(input);
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
export class ListNetworkMigrationMappingsCommand extends $Command
  .classBuilder<
    ListNetworkMigrationMappingsCommandInput,
    ListNetworkMigrationMappingsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "ListNetworkMigrationMappings", {})
  .n("MgnClient", "ListNetworkMigrationMappingsCommand")
  .sc(ListNetworkMigrationMappings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkMigrationMappingsRequest;
      output: ListNetworkMigrationMappingsResponse;
    };
    sdk: {
      input: ListNetworkMigrationMappingsCommandInput;
      output: ListNetworkMigrationMappingsCommandOutput;
    };
  };
}
