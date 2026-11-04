// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCapabilityRequest, CreateCapabilityResponse } from "../models/models_0";
import { CreateCapability$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCapabilityCommand}.
 */
export interface CreateCapabilityCommandInput extends CreateCapabilityRequest {}
/**
 * @public
 *
 * The output of {@link CreateCapabilityCommand}.
 */
export interface CreateCapabilityCommandOutput extends CreateCapabilityResponse, __MetadataBearer {}

/**
 * Creates a managed capability resource for an Amazon EKS cluster.
 *
 * Capabilities provide fully managed capabilities to build and scale with Kubernetes. When you create a capability, Amazon EKSprovisions and manages the infrastructure required to run the capability outside of your cluster. This approach reduces operational overhead and preserves cluster resources.
 *
 * You can only create one Capability of each type on a given Amazon EKS cluster. Valid types are Argo CD for declarative GitOps deployment, Amazon Web Services Controllers for Kubernetes (ACK) for resource management, and Kube Resource Orchestrator (KRO) for Kubernetes custom resource orchestration.
 *
 * For more information, see [EKS Capabilities](https://docs.aws.amazon.com/eks/latest/userguide/capabilities.html) in the *Amazon EKS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateCapabilityCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateCapabilityCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // CreateCapabilityRequest
 *   capabilityName: "STRING_VALUE", // required
 *   clusterName: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE",
 *   type: "ACK" || "KRO" || "ARGOCD", // required
 *   roleArn: "STRING_VALUE", // required
 *   configuration: { // CapabilityConfigurationRequest
 *     argoCd: { // ArgoCdConfigRequest
 *       namespace: "STRING_VALUE",
 *       awsIdc: { // ArgoCdAwsIdcConfigRequest
 *         idcInstanceArn: "STRING_VALUE", // required
 *         idcRegion: "STRING_VALUE",
 *       },
 *       rbacRoleMappings: [ // ArgoCdRoleMappingList
 *         { // ArgoCdRoleMapping
 *           role: "ADMIN" || "EDITOR" || "VIEWER", // required
 *           identities: [ // SsoIdentityList // required
 *             { // SsoIdentity
 *               id: "STRING_VALUE", // required
 *               type: "SSO_USER" || "SSO_GROUP", // required
 *             },
 *           ],
 *         },
 *       ],
 *       networkAccess: { // ArgoCdNetworkAccessConfigRequest
 *         vpceIds: [ // StringList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       endpointPrefix: "STRING_VALUE",
 *     },
 *     ack: { // AckConfigRequest
 *       enableCrossNamespace: true || false,
 *       disabledServices: [ // AckDisabledServicesList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   deletePropagationPolicy: "RETAIN", // required
 * };
 * const command = new CreateCapabilityCommand(input);
 * const response = await client.send(command);
 * // { // CreateCapabilityResponse
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
 * //         endpointPrefix: "STRING_VALUE",
 * //       },
 * //       ack: { // AckConfigResponse
 * //         enableCrossNamespace: true || false,
 * //         disabledServices: [ // AckDisabledServicesList
 * //           "STRING_VALUE",
 * //         ],
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
 * @param CreateCapabilityCommandInput - {@link CreateCapabilityCommandInput}
 * @returns {@link CreateCapabilityCommandOutput}
 * @see {@link CreateCapabilityCommandInput} for command's `input` shape.
 * @see {@link CreateCapabilityCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permissions to perform the requested operation. The [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the *IAM User Guide*.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid given the state of the cluster. Check the state of the cluster and the associated operations.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * You have encountered a service limit on the specified resource.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request or operation couldn't be performed because a service is throttling requests.
 *
 * @throws {@link EKSServiceException}
 *
 * Base exception class for all service exceptions from EKS service.
 *
 * @public
 */
export class CreateCapabilityCommand extends command<CreateCapabilityCommandInput, CreateCapabilityCommandOutput>(
  _ep0,
  _mw0,
  "CreateCapability",
  CreateCapability$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCapabilityRequest;
      output: CreateCapabilityResponse;
    };
    sdk: {
      input: CreateCapabilityCommandInput;
      output: CreateCapabilityCommandOutput;
    };
  };
}
