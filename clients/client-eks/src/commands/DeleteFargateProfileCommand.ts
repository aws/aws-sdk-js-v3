// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFargateProfileRequest, DeleteFargateProfileResponse } from "../models/models_0";
import { de_DeleteFargateProfileCommand, se_DeleteFargateProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFargateProfileCommand}.
 */
export interface DeleteFargateProfileCommandInput extends DeleteFargateProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFargateProfileCommand}.
 */
export interface DeleteFargateProfileCommandOutput extends DeleteFargateProfileResponse, __MetadataBearer {}

/**
 * <p>Deletes an Fargate profile.</p>
 *          <p>When you delete a Fargate profile, any <code>Pod</code> running on
 *                 Fargate that was created with the profile is deleted. If the
 *                 <code>Pod</code> matches another Fargate profile, then it is
 *             scheduled on Fargate with that profile. If it no longer matches any
 *                 Fargate profiles, then it's not scheduled on Fargate
 *             and may remain in a pending state.</p>
 *          <p>Only one Fargate profile in a cluster can be in the
 *                 <code>DELETING</code> status at a time. You must wait for a Fargate
 *             profile to finish deleting before you can delete any other profiles in that
 *             cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteFargateProfileCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteFargateProfileCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EKSClient(config);
 * const input = { // DeleteFargateProfileRequest
 *   clusterName: "STRING_VALUE", // required
 *   fargateProfileName: "STRING_VALUE", // required
 * };
 * const command = new DeleteFargateProfileCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFargateProfileResponse
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
 * @param DeleteFargateProfileCommandInput - {@link DeleteFargateProfileCommandInput}
 * @returns {@link DeleteFargateProfileCommandOutput}
 * @see {@link DeleteFargateProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteFargateProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region
 *                  specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 * @public
 */
export class DeleteFargateProfileCommand extends $Command
  .classBuilder<
    DeleteFargateProfileCommandInput,
    DeleteFargateProfileCommandOutput,
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
  .s("AWSWesleyFrontend", "DeleteFargateProfile", {})
  .n("EKSClient", "DeleteFargateProfileCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFargateProfileCommand)
  .de(de_DeleteFargateProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFargateProfileRequest;
      output: DeleteFargateProfileResponse;
    };
    sdk: {
      input: DeleteFargateProfileCommandInput;
      output: DeleteFargateProfileCommandOutput;
    };
  };
}
