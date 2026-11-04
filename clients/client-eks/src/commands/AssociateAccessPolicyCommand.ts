// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateAccessPolicyRequest, AssociateAccessPolicyResponse } from "../models/models_0";
import { AssociateAccessPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Associates an access policy and its scope to an access entry. For more information about associating access policies, see [Associating and disassociating access policies to and from access entries](https://docs.aws.amazon.com/eks/latest/userguide/access-policies.html) in the *Amazon EKS User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, AssociateAccessPolicyCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, AssociateAccessPolicyCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
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
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid given the state of the cluster. Check the state of the cluster and the associated operations.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found. You can view your available clusters with `ListClusters`. You can view your available managed node groups with `ListNodegroups`. Amazon EKS clusters and node groups are Amazon Web Services Region specific.
 *
 * @throws {@link ServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link EKSServiceException}
 *
 * Base exception class for all service exceptions from EKS service.
 *
 * @public
 */
export class AssociateAccessPolicyCommand extends command<AssociateAccessPolicyCommandInput, AssociateAccessPolicyCommandOutput>(
  _ep0,
  _mw0,
  "AssociateAccessPolicy",
  AssociateAccessPolicy$
) {
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
