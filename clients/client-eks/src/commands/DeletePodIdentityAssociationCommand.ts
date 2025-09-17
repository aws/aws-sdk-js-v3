// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePodIdentityAssociationRequest, DeletePodIdentityAssociationResponse } from "../models/models_0";
import {
  de_DeletePodIdentityAssociationCommand,
  se_DeletePodIdentityAssociationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePodIdentityAssociationCommand}.
 */
export interface DeletePodIdentityAssociationCommandInput extends DeletePodIdentityAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeletePodIdentityAssociationCommand}.
 */
export interface DeletePodIdentityAssociationCommandOutput
  extends DeletePodIdentityAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a EKS Pod Identity association.</p>
 *          <p>The temporary Amazon Web Services credentials from the previous IAM role session might still be valid until the session expiry. If you need to immediately revoke the temporary session credentials, then go to the role in the IAM console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeletePodIdentityAssociationCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeletePodIdentityAssociationCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // DeletePodIdentityAssociationRequest
 *   clusterName: "STRING_VALUE", // required
 *   associationId: "STRING_VALUE", // required
 * };
 * const command = new DeletePodIdentityAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DeletePodIdentityAssociationResponse
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
 * @param DeletePodIdentityAssociationCommandInput - {@link DeletePodIdentityAssociationCommandInput}
 * @returns {@link DeletePodIdentityAssociationCommandOutput}
 * @see {@link DeletePodIdentityAssociationCommandInput} for command's `input` shape.
 * @see {@link DeletePodIdentityAssociationCommandOutput} for command's `response` shape.
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
export class DeletePodIdentityAssociationCommand extends $Command
  .classBuilder<
    DeletePodIdentityAssociationCommandInput,
    DeletePodIdentityAssociationCommandOutput,
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
  .s("AWSWesleyFrontend", "DeletePodIdentityAssociation", {})
  .n("EKSClient", "DeletePodIdentityAssociationCommand")
  .f(void 0, void 0)
  .ser(se_DeletePodIdentityAssociationCommand)
  .de(de_DeletePodIdentityAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePodIdentityAssociationRequest;
      output: DeletePodIdentityAssociationResponse;
    };
    sdk: {
      input: DeletePodIdentityAssociationCommandInput;
      output: DeletePodIdentityAssociationCommandOutput;
    };
  };
}
