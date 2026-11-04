// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePodIdentityAssociationRequest, CreatePodIdentityAssociationResponse } from "../models/models_0";
import { CreatePodIdentityAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreatePodIdentityAssociationCommandOutput extends CreatePodIdentityAssociationResponse, __MetadataBearer {}

/**
 * Creates an EKS Pod Identity association between a service account in an Amazon EKS cluster and an IAM role with *EKS Pod Identity*. Use EKS Pod Identity to give temporary IAM credentials to Pods and the credentials are rotated automatically.
 *
 * Amazon EKS Pod Identity associations provide the ability to manage credentials for your applications, similar to the way that Amazon EC2 instance profiles provide credentials to Amazon EC2 instances.
 *
 * If a Pod uses a service account that has an association, Amazon EKS sets environment variables in the containers of the Pod. The environment variables configure the Amazon Web Services SDKs, including the Command Line Interface, to use the EKS Pod Identity credentials.
 *
 * EKS Pod Identity is a simpler method than *IAM roles for service accounts*, as this method doesn't use OIDC identity providers. Additionally, you can configure a role for EKS Pod Identity once, and reuse it across clusters.
 *
 * Similar to Amazon Web Services IAM behavior, EKS Pod Identity associations are eventually consistent, and may take several seconds to be effective after the initial API call returns successfully. You must design your applications to account for these potential delays. We recommend that you don’t include association create/updates in the critical, high-availability code paths of your application. Instead, make changes in a separate initialization or setup routine that you run less frequently.
 *
 * You can set a *target IAM role* in the same or a different account for advanced scenarios. With a target role, EKS Pod Identity automatically performs two role assumptions in sequence: first assuming the role in the association that is in this account, then using those credentials to assume the target IAM role. This process provides your Pod with temporary credentials that have the permissions defined in the target role, allowing secure access to resources in another Amazon Web Services account.
 *
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
 *   policy: "STRING_VALUE",
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
 * //     policy: "STRING_VALUE",
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
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is invalid given the state of the cluster. Check the state of the cluster and the associated operations.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * You have encountered a service limit on the specified resource.
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
export class CreatePodIdentityAssociationCommand extends command<CreatePodIdentityAssociationCommandInput, CreatePodIdentityAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreatePodIdentityAssociation",
  CreatePodIdentityAssociation$
) {
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
