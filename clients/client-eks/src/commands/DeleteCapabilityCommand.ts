// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCapabilityRequest, DeleteCapabilityResponse } from "../models/models_0";
import { DeleteCapability } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCapabilityCommand}.
 */
export interface DeleteCapabilityCommandInput extends DeleteCapabilityRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCapabilityCommand}.
 */
export interface DeleteCapabilityCommandOutput extends DeleteCapabilityResponse, __MetadataBearer {}

/**
 * <p>Deletes a managed capability from your Amazon EKS cluster. When you delete a capability, Amazon EKS removes the capability infrastructure but retains all resources that were managed by the capability.</p>
 *          <p>Before deleting a capability, you should delete all Kubernetes resources that were created by the capability. After the capability is deleted, these resources become difficult to manage because the controller that managed them is no longer available. To delete resources before removing the capability, use <code>kubectl delete</code> or remove them through your GitOps workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteCapabilityCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteCapabilityCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // DeleteCapabilityRequest
 *   clusterName: "STRING_VALUE", // required
 *   capabilityName: "STRING_VALUE", // required
 * };
 * const command = new DeleteCapabilityCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCapabilityResponse
 * //   capability: { // Capability
 * //     capabilityName: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     clusterName: "STRING_VALUE",
 * //     type: "ACK" || "KRO" || "ARGOCD",
 * //     roleArn: "STRING_VALUE",
 * //     status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "DELETING" || "DELETE_FAILED" || "ACTIVE" || "DEGRADED",
 * //     version: "STRING_VALUE",
 * //     configuration: { // CapabilityConfigurationResponse
 * //       argoCd: { // ArgoCdConfigResponse
 * //         namespace: "STRING_VALUE",
 * //         awsIdc: { // ArgoCdAwsIdcConfigResponse
 * //           idcInstanceArn: "STRING_VALUE",
 * //           idcRegion: "STRING_VALUE",
 * //           idcManagedApplicationArn: "STRING_VALUE",
 * //         },
 * //         rbacRoleMappings: [ // ArgoCdRoleMappingList
 * //           { // ArgoCdRoleMapping
 * //             role: "ADMIN" || "EDITOR" || "VIEWER", // required
 * //             identities: [ // SsoIdentityList // required
 * //               { // SsoIdentity
 * //                 id: "STRING_VALUE", // required
 * //                 type: "SSO_USER" || "SSO_GROUP", // required
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         networkAccess: { // ArgoCdNetworkAccessConfigResponse
 * //           vpceIds: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         serverUrl: "STRING_VALUE",
 * //       },
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     health: { // CapabilityHealth
 * //       issues: [ // CapabilityIssueList
 * //         { // CapabilityIssue
 * //           code: "AccessDenied" || "ClusterUnreachable",
 * //           message: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     deletePropagationPolicy: "RETAIN",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteCapabilityCommandInput - {@link DeleteCapabilityCommandInput}
 * @returns {@link DeleteCapabilityCommandOutput}
 * @see {@link DeleteCapabilityCommandInput} for command's `input` shape.
 * @see {@link DeleteCapabilityCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a>
 *             making the request must have at least one IAM permissions policy attached that grants
 *             the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access
 *                 management</a> in the <i>IAM User Guide</i>. </p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
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
export class DeleteCapabilityCommand extends $Command
  .classBuilder<
    DeleteCapabilityCommandInput,
    DeleteCapabilityCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "DeleteCapability", {})
  .n("EKSClient", "DeleteCapabilityCommand")
  .sc(DeleteCapability)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCapabilityRequest;
      output: DeleteCapabilityResponse;
    };
    sdk: {
      input: DeleteCapabilityCommandInput;
      output: DeleteCapabilityCommandOutput;
    };
  };
}
