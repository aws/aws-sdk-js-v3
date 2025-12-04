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
import type { CreateFleetAdvisorCollectorRequest, CreateFleetAdvisorCollectorResponse } from "../models/models_0";
import { CreateFleetAdvisorCollector } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFleetAdvisorCollectorCommand}.
 */
export interface CreateFleetAdvisorCollectorCommandInput extends CreateFleetAdvisorCollectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateFleetAdvisorCollectorCommand}.
 */
export interface CreateFleetAdvisorCollectorCommandOutput
  extends CreateFleetAdvisorCollectorResponse,
    __MetadataBearer {}

/**
 * <important>
 *             <p>
 * End of support notice: On May 20, 2026, Amazon Web Services will end support for Amazon Web Services DMS Fleet Advisor;. After May 20, 2026, you will no longer be able to access the Amazon Web Services DMS Fleet Advisor; console or Amazon Web Services DMS Fleet Advisor; resources. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/dms_fleet.advisor-end-of-support.html">Amazon Web Services DMS Fleet Advisor end of support</a>.
 * </p>
 *          </important>
 *          <p>Creates a Fleet Advisor collector using the specified parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateFleetAdvisorCollectorCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateFleetAdvisorCollectorCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CreateFleetAdvisorCollectorRequest
 *   CollectorName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ServiceAccessRoleArn: "STRING_VALUE", // required
 *   S3BucketName: "STRING_VALUE", // required
 * };
 * const command = new CreateFleetAdvisorCollectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateFleetAdvisorCollectorResponse
 * //   CollectorReferencedId: "STRING_VALUE",
 * //   CollectorName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   ServiceAccessRoleArn: "STRING_VALUE",
 * //   S3BucketName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFleetAdvisorCollectorCommandInput - {@link CreateFleetAdvisorCollectorCommandInput}
 * @returns {@link CreateFleetAdvisorCollectorCommandOutput}
 * @see {@link CreateFleetAdvisorCollectorCommandInput} for command's `input` shape.
 * @see {@link CreateFleetAdvisorCollectorCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 * @throws {@link S3AccessDeniedFault} (client fault)
 *  <p>Insufficient privileges are preventing access to an Amazon S3 object.</p>
 *
 * @throws {@link S3ResourceNotFoundFault} (client fault)
 *  <p>A specified Amazon S3 bucket, bucket folder, or other object can't be
 *             found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @public
 */
export class CreateFleetAdvisorCollectorCommand extends $Command
  .classBuilder<
    CreateFleetAdvisorCollectorCommandInput,
    CreateFleetAdvisorCollectorCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "CreateFleetAdvisorCollector", {})
  .n("DatabaseMigrationServiceClient", "CreateFleetAdvisorCollectorCommand")
  .sc(CreateFleetAdvisorCollector)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFleetAdvisorCollectorRequest;
      output: CreateFleetAdvisorCollectorResponse;
    };
    sdk: {
      input: CreateFleetAdvisorCollectorCommandInput;
      output: CreateFleetAdvisorCollectorCommandOutput;
    };
  };
}
