// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateAccessPolicyRequest, AssociateAccessPolicyResponse } from "../models/models_0";
import { de_AssociateAccessPolicyCommand, se_AssociateAccessPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateAccessPolicyCommand}.
 */
export interface AssociateAccessPolicyCommandInput extends AssociateAccessPolicyRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAccessPolicyCommand}.
 */
export interface AssociateAccessPolicyCommandOutput extends AssociateAccessPolicyResponse, __MetadataBearer {}

/**
 * <p>Associates an access policy and its scope to an access entry. For more information
 *             about associating access policies, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/access-policies.html">Associating and disassociating
 *                 access policies to and from access entries</a> in the <i>Amazon EKS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, AssociateAccessPolicyCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, AssociateAccessPolicyCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EKSClient(config);
 * const input = { // AssociateAccessPolicyRequest
 *   clusterName: "STRING_VALUE", // required
 *   principalArn: "STRING_VALUE", // required
 *   policyArn: "STRING_VALUE", // required
 *   accessScope: { // AccessScope
 *     type: "cluster" || "namespace",
 *     namespaces: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new AssociateAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAccessPolicyResponse
 * //   clusterName: "STRING_VALUE",
 * //   principalArn: "STRING_VALUE",
 * //   associatedAccessPolicy: { // AssociatedAccessPolicy
 * //     policyArn: "STRING_VALUE",
 * //     accessScope: { // AccessScope
 * //       type: "cluster" || "namespace",
 * //       namespaces: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     associatedAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateAccessPolicyCommandInput - {@link AssociateAccessPolicyCommandInput}
 * @returns {@link AssociateAccessPolicyCommandOutput}
 * @see {@link AssociateAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link AssociateAccessPolicyCommandOutput} for command's `response` shape.
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
export class AssociateAccessPolicyCommand extends $Command
  .classBuilder<
    AssociateAccessPolicyCommandInput,
    AssociateAccessPolicyCommandOutput,
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
  .s("AWSWesleyFrontend", "AssociateAccessPolicy", {})
  .n("EKSClient", "AssociateAccessPolicyCommand")
  .f(void 0, void 0)
  .ser(se_AssociateAccessPolicyCommand)
  .de(de_AssociateAccessPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAccessPolicyRequest;
      output: AssociateAccessPolicyResponse;
    };
    sdk: {
      input: AssociateAccessPolicyCommandInput;
      output: AssociateAccessPolicyCommandOutput;
    };
  };
}
