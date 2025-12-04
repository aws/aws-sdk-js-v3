// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeRecommendationsRequest, DescribeRecommendationsResponse } from "../models/models_0";
import { DescribeRecommendations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRecommendationsCommand}.
 */
export interface DescribeRecommendationsCommandInput extends DescribeRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRecommendationsCommand}.
 */
export interface DescribeRecommendationsCommandOutput extends DescribeRecommendationsResponse, __MetadataBearer {}

/**
 * <important>
 *             <p>
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/dms_fleet.advisor-end-of-support.html">Amazon Web Services DMS Fleet Advisor end of support</a>.
 * </p>
 *          </important>
 *          <p>Returns a paginated list of target engine recommendations for your source
 *             databases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeRecommendationsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeRecommendationsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeRecommendationsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecommendationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Recommendations: [ // RecommendationList
 * //     { // Recommendation
 * //       DatabaseId: "STRING_VALUE",
 * //       EngineName: "STRING_VALUE",
 * //       CreatedDate: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       Preferred: true || false,
 * //       Settings: { // RecommendationSettings
 * //         InstanceSizingType: "STRING_VALUE", // required
 * //         WorkloadType: "STRING_VALUE", // required
 * //       },
 * //       Data: { // RecommendationData
 * //         RdsEngine: { // RdsRecommendation
 * //           RequirementsToTarget: { // RdsRequirements
 * //             EngineEdition: "STRING_VALUE",
 * //             InstanceVcpu: Number("double"),
 * //             InstanceMemory: Number("double"),
 * //             StorageSize: Number("int"),
 * //             StorageIops: Number("int"),
 * //             DeploymentOption: "STRING_VALUE",
 * //             EngineVersion: "STRING_VALUE",
 * //           },
 * //           TargetConfiguration: { // RdsConfiguration
 * //             EngineEdition: "STRING_VALUE",
 * //             InstanceType: "STRING_VALUE",
 * //             InstanceVcpu: Number("double"),
 * //             InstanceMemory: Number("double"),
 * //             StorageType: "STRING_VALUE",
 * //             StorageSize: Number("int"),
 * //             StorageIops: Number("int"),
 * //             DeploymentOption: "STRING_VALUE",
 * //             EngineVersion: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeRecommendationsCommandInput - {@link DescribeRecommendationsCommandInput}
 * @returns {@link DescribeRecommendationsCommandOutput}
 * @see {@link DescribeRecommendationsCommandInput} for command's `input` shape.
 * @see {@link DescribeRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @public
 */
export class DescribeRecommendationsCommand extends $Command
  .classBuilder<
    DescribeRecommendationsCommandInput,
    DescribeRecommendationsCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeRecommendations", {})
  .n("DatabaseMigrationServiceClient", "DescribeRecommendationsCommand")
  .sc(DescribeRecommendations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRecommendationsRequest;
      output: DescribeRecommendationsResponse;
    };
    sdk: {
      input: DescribeRecommendationsCommandInput;
      output: DescribeRecommendationsCommandOutput;
    };
  };
}
