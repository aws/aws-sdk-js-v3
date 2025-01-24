// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePodIdentityAssociationRequest, UpdatePodIdentityAssociationResponse } from "../models/models_0";
import {
  de_UpdatePodIdentityAssociationCommand,
  se_UpdatePodIdentityAssociationCommand,
} from "../protocols/Aws_restJson1";

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
 * <p>Updates a EKS Pod Identity association. Only the IAM role can be changed; an association can't be moved
 *             between clusters, namespaces, or service accounts. If you need to edit the namespace
 *             or service account, you need to delete the association and then create a new
 *             association with your desired settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, UpdatePodIdentityAssociationCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, UpdatePodIdentityAssociationCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // UpdatePodIdentityAssociationRequest
 *   clusterName: "STRING_VALUE", // required
 *   associationId: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   clientRequestToken: "STRING_VALUE",
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWesleyFrontend", "UpdatePodIdentityAssociation", {})
  .n("EKSClient", "UpdatePodIdentityAssociationCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePodIdentityAssociationCommand)
  .de(de_UpdatePodIdentityAssociationCommand)
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
