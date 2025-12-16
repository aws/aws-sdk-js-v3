// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPodIdentityAssociationsRequest, ListPodIdentityAssociationsResponse } from "../models/models_0";
import { ListPodIdentityAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPodIdentityAssociationsCommand}.
 */
export interface ListPodIdentityAssociationsCommandInput extends ListPodIdentityAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListPodIdentityAssociationsCommand}.
 */
export interface ListPodIdentityAssociationsCommandOutput
  extends ListPodIdentityAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>List the EKS Pod Identity associations in a cluster. You can filter the list by the namespace that the
 *             association is in or the service account that the association uses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListPodIdentityAssociationsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListPodIdentityAssociationsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // ListPodIdentityAssociationsRequest
 *   clusterName: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE",
 *   serviceAccount: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPodIdentityAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListPodIdentityAssociationsResponse
 * //   associations: [ // PodIdentityAssociationSummaries
 * //     { // PodIdentityAssociationSummary
 * //       clusterName: "STRING_VALUE",
 * //       namespace: "STRING_VALUE",
 * //       serviceAccount: "STRING_VALUE",
 * //       associationArn: "STRING_VALUE",
 * //       associationId: "STRING_VALUE",
 * //       ownerArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPodIdentityAssociationsCommandInput - {@link ListPodIdentityAssociationsCommandInput}
 * @returns {@link ListPodIdentityAssociationsCommandOutput}
 * @see {@link ListPodIdentityAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListPodIdentityAssociationsCommandOutput} for command's `response` shape.
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
export class ListPodIdentityAssociationsCommand extends $Command
  .classBuilder<
    ListPodIdentityAssociationsCommandInput,
    ListPodIdentityAssociationsCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "ListPodIdentityAssociations", {})
  .n("EKSClient", "ListPodIdentityAssociationsCommand")
  .sc(ListPodIdentityAssociations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPodIdentityAssociationsRequest;
      output: ListPodIdentityAssociationsResponse;
    };
    sdk: {
      input: ListPodIdentityAssociationsCommandInput;
      output: ListPodIdentityAssociationsCommandOutput;
    };
  };
}
