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
import { DescribeFleetAdvisorCollectorsRequest, DescribeFleetAdvisorCollectorsResponse } from "../models/models_0";
import {
  de_DescribeFleetAdvisorCollectorsCommand,
  se_DescribeFleetAdvisorCollectorsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetAdvisorCollectorsCommand}.
 */
export interface DescribeFleetAdvisorCollectorsCommandInput extends DescribeFleetAdvisorCollectorsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFleetAdvisorCollectorsCommand}.
 */
export interface DescribeFleetAdvisorCollectorsCommandOutput
  extends DescribeFleetAdvisorCollectorsResponse,
    __MetadataBearer {}

/**
 * <important>
 *             <p>
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/dms_fleet.advisor-end-of-support.html">Amazon Web Services DMS Fleet Advisor end of support</a>.
 * </p>
 *          </important>
 *          <p>Returns a list of the Fleet Advisor collectors in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeFleetAdvisorCollectorsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeFleetAdvisorCollectorsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeFleetAdvisorCollectorsRequest
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
 * const command = new DescribeFleetAdvisorCollectorsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetAdvisorCollectorsResponse
 * //   Collectors: [ // CollectorResponses
 * //     { // CollectorResponse
 * //       CollectorReferencedId: "STRING_VALUE",
 * //       CollectorName: "STRING_VALUE",
 * //       CollectorVersion: "STRING_VALUE",
 * //       VersionStatus: "UP_TO_DATE" || "OUTDATED" || "UNSUPPORTED",
 * //       Description: "STRING_VALUE",
 * //       S3BucketName: "STRING_VALUE",
 * //       ServiceAccessRoleArn: "STRING_VALUE",
 * //       CollectorHealthCheck: { // CollectorHealthCheck
 * //         CollectorStatus: "UNREGISTERED" || "ACTIVE",
 * //         LocalCollectorS3Access: true || false,
 * //         WebCollectorS3Access: true || false,
 * //         WebCollectorGrantedRoleBasedAccess: true || false,
 * //       },
 * //       LastDataReceived: "STRING_VALUE",
 * //       RegisteredDate: "STRING_VALUE",
 * //       CreatedDate: "STRING_VALUE",
 * //       ModifiedDate: "STRING_VALUE",
 * //       InventoryData: { // InventoryData
 * //         NumberOfDatabases: Number("int"),
 * //         NumberOfSchemas: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetAdvisorCollectorsCommandInput - {@link DescribeFleetAdvisorCollectorsCommandInput}
 * @returns {@link DescribeFleetAdvisorCollectorsCommandOutput}
 * @see {@link DescribeFleetAdvisorCollectorsCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetAdvisorCollectorsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
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
export class DescribeFleetAdvisorCollectorsCommand extends $Command
  .classBuilder<
    DescribeFleetAdvisorCollectorsCommandInput,
    DescribeFleetAdvisorCollectorsCommandOutput,
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
  .s("AmazonDMSv20160101", "DescribeFleetAdvisorCollectors", {})
  .n("DatabaseMigrationServiceClient", "DescribeFleetAdvisorCollectorsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFleetAdvisorCollectorsCommand)
  .de(de_DescribeFleetAdvisorCollectorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFleetAdvisorCollectorsRequest;
      output: DescribeFleetAdvisorCollectorsResponse;
    };
    sdk: {
      input: DescribeFleetAdvisorCollectorsCommandInput;
      output: DescribeFleetAdvisorCollectorsCommandOutput;
    };
  };
}
