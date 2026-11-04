// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDBClusterParameterGroupMessage, CreateDBClusterParameterGroupResult } from "../models/models_0";
import { CreateDBClusterParameterGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDBClusterParameterGroupCommand}.
 */
export interface CreateDBClusterParameterGroupCommandInput extends CreateDBClusterParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBClusterParameterGroupCommand}.
 */
export interface CreateDBClusterParameterGroupCommandOutput extends CreateDBClusterParameterGroupResult, __MetadataBearer {}

/**
 * Creates a new DB cluster parameter group.
 *
 * Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster.
 *
 * A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using `ModifyDBClusterParameterGroup`. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using `ModifyDBCluster`.
 *
 * When you associate a new DB cluster parameter group with a running Aurora DB cluster, reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.
 *
 * When you associate a new DB cluster parameter group with a running Multi-AZ DB cluster, reboot the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect.
 *
 * > **Important:** After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the `character_set_database` parameter. You can use the *Parameter Groups* option of the [Amazon RDS console](https://console.aws.amazon.com/rds/) or the `DescribeDBClusterParameters` operation to verify that your DB cluster parameter group has been created or modified.
 *
 * For more information on Amazon Aurora, see [What is Amazon Aurora?](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html) in the *Amazon Aurora User Guide*.
 *
 * For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBClusterParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBClusterParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // CreateDBClusterParameterGroupMessage
 *   DBClusterParameterGroupName: "STRING_VALUE", // required
 *   DBParameterGroupFamily: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBClusterParameterGroupResult
 * //   DBClusterParameterGroup: { // DBClusterParameterGroup
 * //     DBClusterParameterGroupName: "STRING_VALUE",
 * //     DBParameterGroupFamily: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     DBClusterParameterGroupArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDBClusterParameterGroupCommandInput - {@link CreateDBClusterParameterGroupCommandInput}
 * @returns {@link CreateDBClusterParameterGroupCommandOutput}
 * @see {@link CreateDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBParameterGroupAlreadyExistsFault} (client fault)
 *
 * A DB parameter group with the same name exists.
 *
 * @throws {@link DBParameterGroupQuotaExceededFault} (client fault)
 *
 * The request would result in the user exceeding the allowed number of DB parameter groups.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To create a DB cluster parameter group
 * ```javascript
 * // The following example creates a DB cluster parameter group.
 * const input = {
 *   DBClusterParameterGroupName: "mydbclusterparametergroup",
 *   DBParameterGroupFamily: "aurora5.6",
 *   Description: "My new cluster parameter group"
 * };
 * const command = new CreateDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBClusterParameterGroup: {
 *     DBClusterParameterGroupArn: "arn:aws:rds:us-east-1:123456789012:cluster-pg:mydbclusterparametergroup",
 *     DBClusterParameterGroupName: "mydbclusterparametergroup",
 *     DBParameterGroupFamily: "aurora5.6",
 *     Description: "My new cluster parameter group"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateDBClusterParameterGroupCommand extends command<CreateDBClusterParameterGroupCommandInput, CreateDBClusterParameterGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateDBClusterParameterGroup",
  CreateDBClusterParameterGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDBClusterParameterGroupMessage;
      output: CreateDBClusterParameterGroupResult;
    };
    sdk: {
      input: CreateDBClusterParameterGroupCommandInput;
      output: CreateDBClusterParameterGroupCommandOutput;
    };
  };
}
