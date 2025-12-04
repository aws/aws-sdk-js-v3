// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeCapabilityRequest, DescribeCapabilityResponse } from "../models/models_0";
import { DescribeCapability } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCapabilityCommand}.
 */
export interface DescribeCapabilityCommandInput extends DescribeCapabilityRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCapabilityCommand}.
 */
export interface DescribeCapabilityCommandOutput extends DescribeCapabilityResponse, __MetadataBearer {}

/**
 * <p>Returns detailed information about a specific managed capability in your Amazon EKS cluster, including its current status, configuration, health information, and any issues that may be affecting its operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeCapabilityCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeCapabilityCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // DescribeCapabilityRequest
 *   clusterName: "STRING_VALUE", // required
 *   capabilityName: "STRING_VALUE", // required
 * };
 * const command = new DescribeCapabilityCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCapabilityResponse
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
 * @param DescribeCapabilityCommandInput - {@link DescribeCapabilityCommandInput}
 * @returns {@link DescribeCapabilityCommandOutput}
 * @see {@link DescribeCapabilityCommandInput} for command's `input` shape.
 * @see {@link DescribeCapabilityCommandOutput} for command's `response` shape.
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
export class DescribeCapabilityCommand extends $Command
  .classBuilder<
    DescribeCapabilityCommandInput,
    DescribeCapabilityCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "DescribeCapability", {})
  .n("EKSClient", "DescribeCapabilityCommand")
  .sc(DescribeCapability)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCapabilityRequest;
      output: DescribeCapabilityResponse;
    };
    sdk: {
      input: DescribeCapabilityCommandInput;
      output: DescribeCapabilityCommandOutput;
    };
  };
}
