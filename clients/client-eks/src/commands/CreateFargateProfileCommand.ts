// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateFargateProfileRequest, CreateFargateProfileResponse } from "../models/models_0";
import { CreateFargateProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateFargateProfileCommand}.
 */
export interface CreateFargateProfileCommandInput extends CreateFargateProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateFargateProfileCommand}.
 */
export interface CreateFargateProfileCommandOutput extends CreateFargateProfileResponse, __MetadataBearer {}

/**
 * Creates an Fargate profile for your Amazon EKS cluster. You must have at least one Fargate profile in a cluster to be able to run pods on Fargate.
 *
 * The Fargate profile allows an administrator to declare which pods run on Fargate and specify which pods run on which Fargate profile. This declaration is done through the profile's selectors. Each profile can have up to five selectors that contain a namespace and labels. A namespace is required for every selector. The label field consists of multiple optional key-value pairs. Pods that match the selectors are scheduled on Fargate. If a to-be-scheduled pod matches any of the selectors in the Fargate profile, then that pod is run on Fargate.
 *
 * When you create a Fargate profile, you must specify a pod execution role to use with the pods that are scheduled with the profile. This role is added to the cluster's Kubernetes [Role Based Access Control](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) (RBAC) for authorization so that the `kubelet` that is running on the Fargate infrastructure can register with your Amazon EKS cluster so that it can appear in your cluster as a node. The pod execution role also provides IAM permissions to the Fargate infrastructure to allow read access to Amazon ECR image repositories. For more information, see [Pod Execution Role](https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html) in the *Amazon EKS User Guide*.
 *
 * Fargate profiles are immutable. However, you can create a new updated profile to replace an existing profile and then delete the original after the updated profile has finished creating.
 *
 * If any Fargate profiles in a cluster are in the `DELETING` status, you must wait for that Fargate profile to finish deleting before you can create any other profiles in that cluster.
 *
 * For more information, see [Fargate profile](https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html) in the *Amazon EKS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateFargateProfileCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateFargateProfileCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // CreateFargateProfileRequest
 *   fargateProfileName: "STRING_VALUE", // required
 *   clusterName: "STRING_VALUE", // required
 *   podExecutionRoleArn: "STRING_VALUE", // required
 *   subnets: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   selectors: [ // FargateProfileSelectors
 *     { // FargateProfileSelector
 *       namespace: "STRING_VALUE",
 *       labels: { // FargateProfileLabel
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   clientRequestToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateFargateProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateFargateProfileResponse
 * //   fargateProfile: { // FargateProfile
 * //     fargateProfileName: "STRING_VALUE",
 * //     fargateProfileArn: "STRING_VALUE",
 * //     clusterName: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     podExecutionRoleArn: "STRING_VALUE",
 * //     subnets: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     selectors: [ // FargateProfileSelectors
 * //       { // FargateProfileSelector
 * //         namespace: "STRING_VALUE",
 * //         labels: { // FargateProfileLabel
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     status: "CREATING" || "ACTIVE" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     health: { // FargateProfileHealth
 * //       issues: [ // FargateProfileIssueList
 * //         { // FargateProfileIssue
 * //           code: "PodExecutionRoleAlreadyInUse" || "AccessDenied" || "ClusterUnreachable" || "InternalFailure",
 * //           message: "STRING_VALUE",
 * //           resourceIds: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateFargateProfileCommandInput - {@link CreateFargateProfileCommandInput}
 * @returns {@link CreateFargateProfileCommandOutput}
 * @see {@link CreateFargateProfileCommandInput} for command's `input` shape.
 * @see {@link CreateFargateProfileCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *
 * These errors are usually caused by a client action. Actions can include using an action or resource on behalf of an [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) that doesn't have permissions to use the action or resource or specifying an identifier that is not valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid given the state of the cluster. Check the state of the cluster and the associated operations.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * You have encountered a service limit on the specified resource.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link UnsupportedAvailabilityZoneException} (client fault)
 *
 * At least one of your specified cluster subnets is in an Availability Zone that does not support Amazon EKS. The exception output specifies the supported Availability Zones for your account, from which you can choose subnets for your cluster.
 *
 * @throws {@link EKSServiceException}
 *
 * Base exception class for all service exceptions from EKS service.
 *
 * @public
 */
export class CreateFargateProfileCommand extends command<CreateFargateProfileCommandInput, CreateFargateProfileCommandOutput>(
  _ep0,
  _mw0,
  "CreateFargateProfile",
  CreateFargateProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFargateProfileRequest;
      output: CreateFargateProfileResponse;
    };
    sdk: {
      input: CreateFargateProfileCommandInput;
      output: CreateFargateProfileCommandOutput;
    };
  };
}
