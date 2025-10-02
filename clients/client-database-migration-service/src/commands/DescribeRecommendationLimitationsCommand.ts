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
import {
  DescribeRecommendationLimitationsRequest,
  DescribeRecommendationLimitationsResponse,
} from "../models/models_0";
import {
  de_DescribeRecommendationLimitationsCommand,
  se_DescribeRecommendationLimitationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRecommendationLimitationsCommand}.
 */
export interface DescribeRecommendationLimitationsCommandInput extends DescribeRecommendationLimitationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRecommendationLimitationsCommand}.
 */
export interface DescribeRecommendationLimitationsCommandOutput
  extends DescribeRecommendationLimitationsResponse,
    __MetadataBearer {}

/**
 * <important>
 *             <p>
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/dms_fleet.advisor-end-of-support.html">Amazon Web Services DMS Fleet Advisor end of support</a>.
 * </p>
 *          </important>
 *          <p>Returns a paginated list of limitations for recommendations of target Amazon Web Services
 *             engines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeRecommendationLimitationsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeRecommendationLimitationsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeRecommendationLimitationsRequest
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
 * const command = new DescribeRecommendationLimitationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecommendationLimitationsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Limitations: [ // LimitationList
 * //     { // Limitation
 * //       DatabaseId: "STRING_VALUE",
 * //       EngineName: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Impact: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeRecommendationLimitationsCommandInput - {@link DescribeRecommendationLimitationsCommandInput}
 * @returns {@link DescribeRecommendationLimitationsCommandOutput}
 * @see {@link DescribeRecommendationLimitationsCommandInput} for command's `input` shape.
 * @see {@link DescribeRecommendationLimitationsCommandOutput} for command's `response` shape.
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
export class DescribeRecommendationLimitationsCommand extends $Command
  .classBuilder<
    DescribeRecommendationLimitationsCommandInput,
    DescribeRecommendationLimitationsCommandOutput,
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
  .s("AmazonDMSv20160101", "DescribeRecommendationLimitations", {})
  .n("DatabaseMigrationServiceClient", "DescribeRecommendationLimitationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRecommendationLimitationsCommand)
  .de(de_DescribeRecommendationLimitationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRecommendationLimitationsRequest;
      output: DescribeRecommendationLimitationsResponse;
    };
    sdk: {
      input: DescribeRecommendationLimitationsCommandInput;
      output: DescribeRecommendationLimitationsCommandOutput;
    };
  };
}
