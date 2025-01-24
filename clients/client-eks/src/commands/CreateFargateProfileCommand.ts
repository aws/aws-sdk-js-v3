// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateFargateProfileRequest, CreateFargateProfileResponse } from "../models/models_0";
import { de_CreateFargateProfileCommand, se_CreateFargateProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates an Fargate profile for your Amazon EKS cluster. You
 *             must have at least one Fargate profile in a cluster to be able to run
 *             pods on Fargate.</p>
 *          <p>The Fargate profile allows an administrator to declare which pods run
 *             on Fargate and specify which pods run on which Fargate
 *             profile. This declaration is done through the profile's selectors. Each profile can have
 *             up to five selectors that contain a namespace and labels. A namespace is required for
 *             every selector. The label field consists of multiple optional key-value pairs. Pods that
 *             match the selectors are scheduled on Fargate. If a to-be-scheduled pod
 *             matches any of the selectors in the Fargate profile, then that pod is run
 *             on Fargate.</p>
 *          <p>When you create a Fargate profile, you must specify a pod execution
 *             role to use with the pods that are scheduled with the profile. This role is added to the
 *             cluster's Kubernetes <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Role Based
 *                 Access Control</a> (RBAC) for authorization so that the <code>kubelet</code>
 *             that is running on the Fargate infrastructure can register with your
 *                 Amazon EKS cluster so that it can appear in your cluster as a node. The pod
 *             execution role also provides IAM permissions to the Fargate infrastructure to
 *             allow read access to Amazon ECR image repositories. For
 *             more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the <i>Amazon EKS User Guide</i>.</p>
 *          <p>Fargate profiles are immutable. However, you can create a new updated
 *             profile to replace an existing profile and then delete the original after the updated
 *             profile has finished creating.</p>
 *          <p>If any Fargate profiles in a cluster are in the <code>DELETING</code>
 *             status, you must wait for that Fargate profile to finish deleting before
 *             you can create any other profiles in that cluster.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/fargate-profile.html">Fargate profile</a> in the
 *             <i>Amazon EKS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateFargateProfileCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateFargateProfileCommand } = require("@aws-sdk/client-eks"); // CommonJS import
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
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a> that doesn't have permissions to use
 *             the action or resource or specifying an identifier that is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>You have encountered a service limit on the specified resource.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link UnsupportedAvailabilityZoneException} (client fault)
 *  <p>At least one of your specified cluster subnets is in an Availability Zone that does
 *             not support Amazon EKS. The exception output specifies the supported
 *             Availability Zones for your account, from which you can choose subnets for your
 *             cluster.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 * @public
 */
export class CreateFargateProfileCommand extends $Command
  .classBuilder<
    CreateFargateProfileCommandInput,
    CreateFargateProfileCommandOutput,
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
  .s("AWSWesleyFrontend", "CreateFargateProfile", {})
  .n("EKSClient", "CreateFargateProfileCommand")
  .f(void 0, void 0)
  .ser(se_CreateFargateProfileCommand)
  .de(de_CreateFargateProfileCommand)
  .build() {
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
