// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAssociatedAccessPoliciesRequest, ListAssociatedAccessPoliciesResponse } from "../models/models_0";
import { ListAssociatedAccessPolicies } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssociatedAccessPoliciesCommand}.
 */
export interface ListAssociatedAccessPoliciesCommandInput extends ListAssociatedAccessPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociatedAccessPoliciesCommand}.
 */
export interface ListAssociatedAccessPoliciesCommandOutput
  extends ListAssociatedAccessPoliciesResponse,
    __MetadataBearer {}

/**
 * <p>Lists the access policies associated with an access entry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListAssociatedAccessPoliciesCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListAssociatedAccessPoliciesCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // ListAssociatedAccessPoliciesRequest
 *   clusterName: "STRING_VALUE", // required
 *   principalArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAssociatedAccessPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedAccessPoliciesResponse
 * //   clusterName: "STRING_VALUE",
 * //   principalArn: "STRING_VALUE",
 * //   nextToken: "STRING_VALUE",
 * //   associatedAccessPolicies: [ // AssociatedAccessPoliciesList
 * //     { // AssociatedAccessPolicy
 * //       policyArn: "STRING_VALUE",
 * //       accessScope: { // AccessScope
 * //         type: "cluster" || "namespace",
 * //         namespaces: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       associatedAt: new Date("TIMESTAMP"),
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAssociatedAccessPoliciesCommandInput - {@link ListAssociatedAccessPoliciesCommandInput}
 * @returns {@link ListAssociatedAccessPoliciesCommandOutput}
 * @see {@link ListAssociatedAccessPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedAccessPoliciesCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
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
export class ListAssociatedAccessPoliciesCommand extends $Command
  .classBuilder<
    ListAssociatedAccessPoliciesCommandInput,
    ListAssociatedAccessPoliciesCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "ListAssociatedAccessPolicies", {})
  .n("EKSClient", "ListAssociatedAccessPoliciesCommand")
  .sc(ListAssociatedAccessPolicies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociatedAccessPoliciesRequest;
      output: ListAssociatedAccessPoliciesResponse;
    };
    sdk: {
      input: ListAssociatedAccessPoliciesCommandInput;
      output: ListAssociatedAccessPoliciesCommandOutput;
    };
  };
}
