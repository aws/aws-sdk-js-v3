// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreatePodIdentityAssociationRequest, CreatePodIdentityAssociationResponse } from "../models/models_0";
import { CreatePodIdentityAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePodIdentityAssociationCommand}.
 */
export interface CreatePodIdentityAssociationCommandInput extends CreatePodIdentityAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreatePodIdentityAssociationCommand}.
 */
export interface CreatePodIdentityAssociationCommandOutput
  extends CreatePodIdentityAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Creates an EKS Pod Identity association between a service account in an Amazon EKS cluster and an IAM role
 *             with <i>EKS Pod Identity</i>. Use EKS Pod Identity to give temporary IAM credentials to
 *             Pods and the credentials are rotated automatically.</p>
 *          <p>Amazon EKS Pod Identity associations provide the ability to manage credentials for your applications, similar to the way that Amazon EC2 instance profiles provide credentials to Amazon EC2 instances.</p>
 *          <p>If a Pod uses a service account that has an association, Amazon EKS sets environment variables
 *             in the containers of the Pod. The environment variables configure the Amazon Web Services SDKs,
 *             including the Command Line Interface, to use the EKS Pod Identity credentials.</p>
 *          <p>EKS Pod Identity is a simpler method than <i>IAM roles for service
 *                 accounts</i>, as this method doesn't use OIDC identity providers.
 *             Additionally, you can configure a role for EKS Pod Identity once, and reuse it across
 *             clusters.</p>
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
 * import { EKSClient, CreatePodIdentityAssociationCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreatePodIdentityAssociationCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // CreatePodIdentityAssociationRequest
 *   clusterName: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   serviceAccount: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   disableSessionTags: true || false,
 *   targetRoleArn: "STRING_VALUE",
 * };
 * const command = new CreatePodIdentityAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreatePodIdentityAssociationResponse
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
 * @param CreatePodIdentityAssociationCommandInput - {@link CreatePodIdentityAssociationCommandInput}
 * @returns {@link CreatePodIdentityAssociationCommandOutput}
 * @see {@link CreatePodIdentityAssociationCommandInput} for command's `input` shape.
 * @see {@link CreatePodIdentityAssociationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>You have encountered a service limit on the specified resource.</p>
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
export class CreatePodIdentityAssociationCommand extends $Command
  .classBuilder<
    CreatePodIdentityAssociationCommandInput,
    CreatePodIdentityAssociationCommandOutput,
    EKSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EKSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSWesleyFrontend", "CreatePodIdentityAssociation", {})
  .n("EKSClient", "CreatePodIdentityAssociationCommand")
  .sc(CreatePodIdentityAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePodIdentityAssociationRequest;
      output: CreatePodIdentityAssociationResponse;
    };
    sdk: {
      input: CreatePodIdentityAssociationCommandInput;
      output: CreatePodIdentityAssociationCommandOutput;
    };
  };
}
