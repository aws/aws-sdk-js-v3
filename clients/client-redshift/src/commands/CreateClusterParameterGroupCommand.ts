// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateClusterParameterGroupMessage, CreateClusterParameterGroupResult } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateClusterParameterGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateClusterParameterGroupCommand}.
 */
export interface CreateClusterParameterGroupCommandInput extends CreateClusterParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateClusterParameterGroupCommand}.
 */
export interface CreateClusterParameterGroupCommandOutput extends CreateClusterParameterGroupResult, __MetadataBearer {}

/**
 * <p>Creates an Amazon Redshift parameter group.</p>
 *          <p>Creating parameter groups is independent of creating clusters. You can associate a
 *             cluster with a parameter group when you create the cluster. You can also associate an
 *             existing cluster with a parameter group after the cluster is created by using <a>ModifyCluster</a>. </p>
 *          <p>Parameters in the parameter group define specific behavior that applies to the
 *             databases you create on the cluster.
 * For more information about parameters and parameter groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateClusterParameterGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateClusterParameterGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // CreateClusterParameterGroupMessage
 *   ParameterGroupName: "STRING_VALUE", // required
 *   ParameterGroupFamily: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateClusterParameterGroupResult
 * //   ClusterParameterGroup: { // ClusterParameterGroup
 * //     ParameterGroupName: "STRING_VALUE",
 * //     ParameterGroupFamily: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateClusterParameterGroupCommandInput - {@link CreateClusterParameterGroupCommandInput}
 * @returns {@link CreateClusterParameterGroupCommandOutput}
 * @see {@link CreateClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterParameterGroupAlreadyExistsFault} (client fault)
 *  <p>A cluster parameter group with the same name already exists.</p>
 *
 * @throws {@link ClusterParameterGroupQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of cluster
 *             parameter groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *  <p>You have exceeded the number of tags allowed.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class CreateClusterParameterGroupCommand extends $Command
  .classBuilder<
    CreateClusterParameterGroupCommandInput,
    CreateClusterParameterGroupCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "CreateClusterParameterGroup", {})
  .n("RedshiftClient", "CreateClusterParameterGroupCommand")
  .sc(CreateClusterParameterGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClusterParameterGroupMessage;
      output: CreateClusterParameterGroupResult;
    };
    sdk: {
      input: CreateClusterParameterGroupCommandInput;
      output: CreateClusterParameterGroupCommandOutput;
    };
  };
}
