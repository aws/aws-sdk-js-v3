// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchStartRecommendationsRequest, BatchStartRecommendationsResponse } from "../models/models_0";
import { de_BatchStartRecommendationsCommand, se_BatchStartRecommendationsCommand } from "../protocols/Aws_json1_1";

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
 * <p>Starts the analysis of up to 20 source databases to recommend target engines for each
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "BatchStartRecommendations", {})
  .n("DatabaseMigrationServiceClient", "BatchStartRecommendationsCommand")
  .f(void 0, void 0)
  .ser(se_BatchStartRecommendationsCommand)
  .de(de_BatchStartRecommendationsCommand)
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
