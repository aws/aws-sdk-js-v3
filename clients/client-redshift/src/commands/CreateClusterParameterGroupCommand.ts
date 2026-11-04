// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateClusterParameterGroupMessage, CreateClusterParameterGroupResult } from "../models/models_0";
import { CreateClusterParameterGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an Amazon Redshift parameter group.
 *
 * Creating parameter groups is independent of creating clusters. You can associate a cluster with a parameter group when you create the cluster. You can also associate an existing cluster with a parameter group after the cluster is created by using ModifyCluster.
 *
 * Parameters in the parameter group define specific behavior that applies to the databases you create on the cluster. For more information about parameters and parameter groups, go to [Amazon Redshift Parameter Groups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html) in the *Amazon Redshift Cluster Management Guide*.
 *
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
 *
 * A cluster parameter group with the same name already exists.
 *
 * @throws {@link ClusterParameterGroupQuotaExceededFault} (client fault)
 *
 * The request would result in the user exceeding the allowed number of cluster parameter groups. For information about increasing your quota, go to [Limits in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @throws {@link InvalidTagFault} (client fault)
 *
 * The tag is invalid.
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *
 * You have exceeded the number of tags allowed.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class CreateClusterParameterGroupCommand extends command<CreateClusterParameterGroupCommandInput, CreateClusterParameterGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateClusterParameterGroup",
  CreateClusterParameterGroup$
) {
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
