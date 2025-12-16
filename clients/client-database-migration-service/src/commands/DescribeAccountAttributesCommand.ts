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
import type { DescribeAccountAttributesMessage, DescribeAccountAttributesResponse } from "../models/models_0";
import { DescribeAccountAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountAttributesCommand}.
 */
export interface DescribeAccountAttributesCommandInput extends DescribeAccountAttributesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeAccountAttributesCommand}.
 */
export interface DescribeAccountAttributesCommandOutput extends DescribeAccountAttributesResponse, __MetadataBearer {}

/**
 * <p>Lists all of the DMS attributes for a customer account. These attributes include DMS
 *          quotas for the account and a unique account identifier in a particular DMS region. DMS
 *          quotas include a list of resource quotas supported by the account, such as the number of
 *          replication instances allowed. The description for each resource quota, includes the quota
 *          name, current usage toward that quota, and the quota's maximum value. DMS uses the unique
 *          account identifier to name each artifact used by DMS in the given region.</p>
 *          <p>This command does not take any parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeAccountAttributesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeAccountAttributesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = {};
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountAttributesResponse
 * //   AccountQuotas: [ // AccountQuotaList
 * //     { // AccountQuota
 * //       AccountQuotaName: "STRING_VALUE",
 * //       Used: Number("long"),
 * //       Max: Number("long"),
 * //     },
 * //   ],
 * //   UniqueAccountIdentifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAccountAttributesCommandInput - {@link DescribeAccountAttributesCommandInput}
 * @returns {@link DescribeAccountAttributesCommandOutput}
 * @see {@link DescribeAccountAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAttributesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Describe acount attributes
 * ```javascript
 * // Lists all of the AWS DMS attributes for a customer account. The attributes include AWS DMS quotas for the account, such as the number of replication instances allowed. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value. This operation does not take any parameters.
 * const input = { /* empty *\/ };
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AccountQuotas: [
 *     {
 *       AccountQuotaName: "ReplicationInstances",
 *       Max: 20,
 *       Used: 0
 *     },
 *     {
 *       AccountQuotaName: "AllocatedStorage",
 *       Max: 20,
 *       Used: 0
 *     },
 *     {
 *       AccountQuotaName: "Endpoints",
 *       Max: 20,
 *       Used: 0
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeAccountAttributesCommand extends $Command
  .classBuilder<
    DescribeAccountAttributesCommandInput,
    DescribeAccountAttributesCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeAccountAttributes", {})
  .n("DatabaseMigrationServiceClient", "DescribeAccountAttributesCommand")
  .sc(DescribeAccountAttributes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeAccountAttributesResponse;
    };
    sdk: {
      input: DescribeAccountAttributesCommandInput;
      output: DescribeAccountAttributesCommandOutput;
    };
  };
}
