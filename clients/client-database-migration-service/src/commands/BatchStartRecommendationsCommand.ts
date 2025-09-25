// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchStartRecommendationsRequest, BatchStartRecommendationsResponse } from "../models/models_0";
import { BatchStartRecommendations } from "../schemas/schemas_21_Recommendations";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchStartRecommendationsCommand}.
 */
export interface BatchStartRecommendationsCommandInput extends BatchStartRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link BatchStartRecommendationsCommand}.
 */
export interface BatchStartRecommendationsCommandOutput extends BatchStartRecommendationsResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/dms_fleet.advisor-end-of-support.html">Amazon Web Services DMS Fleet Advisor end of support</a>.
 * </p>
 *          </important>
 *          <p>Starts the analysis of up to 20 source databases to recommend target engines for each
 *             source database. This is a batch version of <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartRecommendations.html">StartRecommendations</a>.</p>
 *          <p>The result of analysis of each source database is reported individually in the
 *             response. Because the batch request can result in a combination of successful and
 *             unsuccessful actions, you should check for batch errors even when the call returns an
 *             HTTP status code of <code>200</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, BatchStartRecommendationsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, BatchStartRecommendationsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // BatchStartRecommendationsRequest
 *   Data: [ // StartRecommendationsRequestEntryList
 *     { // StartRecommendationsRequestEntry
 *       DatabaseId: "STRING_VALUE", // required
 *       Settings: { // RecommendationSettings
 *         InstanceSizingType: "STRING_VALUE", // required
 *         WorkloadType: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchStartRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // BatchStartRecommendationsResponse
 * //   ErrorEntries: [ // BatchStartRecommendationsErrorEntryList
 * //     { // BatchStartRecommendationsErrorEntry
 * //       DatabaseId: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       Code: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchStartRecommendationsCommandInput - {@link BatchStartRecommendationsCommandInput}
 * @returns {@link BatchStartRecommendationsCommandOutput}
 * @see {@link BatchStartRecommendationsCommandInput} for command's `input` shape.
 * @see {@link BatchStartRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @public
 */
export class BatchStartRecommendationsCommand extends $Command
  .classBuilder<
    BatchStartRecommendationsCommandInput,
    BatchStartRecommendationsCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "BatchStartRecommendations", {})
  .n("DatabaseMigrationServiceClient", "BatchStartRecommendationsCommand")
  .sc(BatchStartRecommendations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchStartRecommendationsRequest;
      output: BatchStartRecommendationsResponse;
    };
    sdk: {
      input: BatchStartRecommendationsCommandInput;
      output: BatchStartRecommendationsCommandOutput;
    };
  };
}
