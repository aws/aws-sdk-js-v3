// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePodIdentityAssociationRequest, UpdatePodIdentityAssociationResponse } from "../models/models_0";
import { UpdatePodIdentityAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePodIdentityAssociationCommand}.
 */
export interface UpdatePodIdentityAssociationCommandInput extends UpdatePodIdentityAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePodIdentityAssociationCommand}.
 */
export interface UpdatePodIdentityAssociationCommandOutput
  extends UpdatePodIdentityAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Updates a EKS Pod Identity association. In an update, you can change the IAM role, the target IAM role, or <code>disableSessionTags</code>.
 *             You must change at least one of these in an update. An association can't be moved
 *             between clusters, namespaces, or service accounts. If you need to edit the namespace
 *             or service account, you need to delete the association and then create a new
 *             association with your desired settings.</p>
 *          <p>Similar to Amazon Web Services IAM behavior, EKS Pod Identity associations are eventually consistent,
 *             and may take several seconds to be effective after the initial API call returns
 *             successfully. You must design your applications to account for these potential delays.
 *             We recommend that you don’t include association create/updates in the
 *             critical, high-availability code paths of your application. Instead, make changes in a
 *             separate initialization or setup routine that you run less frequently.</p>
 *          <p>You can set a <i>target IAM role</i> in the same or a different
 *             account for advanced scenarios. With a target role, EKS Pod Identity automatically performs two
 *             role assumptions in sequence: first assuming the role in the association that is in this
 *             account, then using those credentials to assume the target IAM role. This process
 *             provides your Pod with temporary credentials that have the permissions defined in the
 *             target role, allowing secure access to resources in another Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdatePodIdentityAssociationCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdatePodIdentityAssociationCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // UpdatePodIdentityAssociationRequest
 *   clusterName: "STRING_VALUE", // required
 *   associationId: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   clientRequestToken: "STRING_VALUE",
 *   disableSessionTags: true || false,
 *   targetRoleArn: "STRING_VALUE",
 * };
 * const command = new UpdatePodIdentityAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePodIdentityAssociationResponse
 * //   association: { // PodIdentityAssociation
 * //     clusterName: "STRING_VALUE",
 * //     namespace: "STRING_VALUE",
 * //     serviceAccount: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     associationArn: "STRING_VALUE",
 * //     associationId: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     ownerArn: "STRING_VALUE",
 * //     disableSessionTags: true || false,
 * //     targetRoleArn: "STRING_VALUE",
 * //     externalId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdatePodIdentityAssociationCommandInput - {@link UpdatePodIdentityAssociationCommandInput}
 * @returns {@link UpdatePodIdentityAssociationCommandOutput}
 * @see {@link UpdatePodIdentityAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdatePodIdentityAssociationCommandOutput} for command's `response` shape.
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
export class UpdatePodIdentityAssociationCommand extends $Command
  .classBuilder<
    UpdatePodIdentityAssociationCommandInput,
    UpdatePodIdentityAssociationCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "UpdatePodIdentityAssociation", {})
  .n("EKSClient", "UpdatePodIdentityAssociationCommand")
  .sc(UpdatePodIdentityAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePodIdentityAssociationRequest;
      output: UpdatePodIdentityAssociationResponse;
    };
    sdk: {
      input: UpdatePodIdentityAssociationCommandInput;
      output: UpdatePodIdentityAssociationCommandOutput;
    };
  };
}
