// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDBClusterParameterGroupMessage, CreateDBClusterParameterGroupResult } from "../models/models_0";
import { CreateDBClusterParameterGroup } from "../schemas/schemas_16_BClusterParameter";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface CreateDBClusterParameterGroupCommandOutput
  extends CreateDBClusterParameterGroupResult,
    __MetadataBearer {}

/**
 * <p>Creates a new cluster parameter group.</p>
 *          <p>Parameters in a cluster parameter group apply to all of the
 *             instances in a cluster.</p>
 *          <p>A cluster parameter group is initially created with the default
 *             parameters for the database engine used by instances in the cluster.
 *             In Amazon DocumentDB, you cannot make modifications directly to the
 *             <code>default.docdb3.6</code> cluster parameter group. If your
 *             Amazon DocumentDB cluster is using the default cluster parameter group and you
 *             want to modify a value in it, you must first <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-create.html">
 *                 create a new parameter group</a>
 *             or <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-copy.html">
 *                 copy an existing parameter group</a>,
 *             modify it, and then apply the modified parameter group to your
 *             cluster. For the new cluster parameter group and associated settings
 *             to take effect, you must then reboot the instances in the cluster
 *             without failover. For more information,
 *             see <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/cluster_parameter_group-modify.html">
 *                 Modifying Amazon DocumentDB Cluster Parameter Groups</a>.
 *             </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, CreateDBClusterParameterGroupCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, CreateDBClusterParameterGroupCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
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
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBParameterGroupAlreadyExistsFault} (client fault)
 *  <p>A parameter group with the same name already exists.</p>
 *
 * @throws {@link DBParameterGroupQuotaExceededFault} (client fault)
 *  <p>This request would cause you to exceed the allowed number of parameter groups.</p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 *
 * @public
 */
export class CreateDBClusterParameterGroupCommand extends $Command
  .classBuilder<
    CreateDBClusterParameterGroupCommandInput,
    CreateDBClusterParameterGroupCommandOutput,
    DocDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "CreateDBClusterParameterGroup", {})
  .n("DocDBClient", "CreateDBClusterParameterGroupCommand")
  .sc(CreateDBClusterParameterGroup)
  .build() {
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
