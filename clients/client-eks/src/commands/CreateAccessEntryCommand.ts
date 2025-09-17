// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAccessEntryRequest, CreateAccessEntryResponse } from "../models/models_0";
import { de_CreateAccessEntryCommand, se_CreateAccessEntryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessEntryCommand}.
 */
export interface CreateAccessEntryCommandInput extends CreateAccessEntryRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessEntryCommand}.
 */
export interface CreateAccessEntryCommandOutput extends CreateAccessEntryResponse, __MetadataBearer {}

/**
 * <p>Creates an access entry.</p>
 *          <p>An access entry allows an IAM principal to access your cluster. Access
 *             entries can replace the need to maintain entries in the <code>aws-auth</code>
 *             <code>ConfigMap</code> for authentication. You have the following options for
 *             authorizing an IAM principal to access Kubernetes objects on your cluster: Kubernetes
 *             role-based access control (RBAC), Amazon EKS, or both. Kubernetes RBAC authorization requires you
 *             to create and manage Kubernetes <code>Role</code>, <code>ClusterRole</code>,
 *                 <code>RoleBinding</code>, and <code>ClusterRoleBinding</code> objects, in addition
 *             to managing access entries. If you use Amazon EKS authorization exclusively, you don't need
 *             to create and manage Kubernetes <code>Role</code>, <code>ClusterRole</code>,
 *                 <code>RoleBinding</code>, and <code>ClusterRoleBinding</code> objects.</p>
 *          <p>For more information about access entries, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html">Access entries</a> in the
 *             <i>Amazon EKS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateAccessEntryCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateAccessEntryCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // CreateAccessEntryRequest
 *   clusterName: "STRING_VALUE", // required
 *   principalArn: "STRING_VALUE", // required
 *   kubernetesGroups: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientRequestToken: "STRING_VALUE",
 *   username: "STRING_VALUE",
 *   type: "STRING_VALUE",
 * };
 * const command = new CreateAccessEntryCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessEntryResponse
 * //   accessEntry: { // AccessEntry
 * //     clusterName: "STRING_VALUE",
 * //     principalArn: "STRING_VALUE",
 * //     kubernetesGroups: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     accessEntryArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     username: "STRING_VALUE",
 * //     type: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAccessEntryCommandInput - {@link CreateAccessEntryCommandInput}
 * @returns {@link CreateAccessEntryCommandOutput}
 * @see {@link CreateAccessEntryCommandInput} for command's `input` shape.
 * @see {@link CreateAccessEntryCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>You have encountered a service limit on the specified resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region
 *             specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 *
 * @public
 */
export class CreateAccessEntryCommand extends $Command
  .classBuilder<
    CreateAccessEntryCommandInput,
    CreateAccessEntryCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWesleyFrontend", "CreateAccessEntry", {})
  .n("EKSClient", "CreateAccessEntryCommand")
  .f(void 0, void 0)
  .ser(se_CreateAccessEntryCommand)
  .de(de_CreateAccessEntryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessEntryRequest;
      output: CreateAccessEntryResponse;
    };
    sdk: {
      input: CreateAccessEntryCommandInput;
      output: CreateAccessEntryCommandOutput;
    };
  };
}
