// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssumeRoleForPodIdentityRequest, AssumeRoleForPodIdentityResponse } from "../models/models_0";
import { AssumeRoleForPodIdentity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssumeRoleForPodIdentityCommand}.
 */
export interface AssumeRoleForPodIdentityCommandInput extends AssumeRoleForPodIdentityRequest {}
/**
 * @public
 *
 * The output of {@link AssumeRoleForPodIdentityCommand}.
 */
export interface AssumeRoleForPodIdentityCommandOutput extends AssumeRoleForPodIdentityResponse, __MetadataBearer {}

/**
 * The Amazon EKS Auth API and the `AssumeRoleForPodIdentity` action are only used by the EKS Pod Identity Agent.
 *
 * We recommend that applications use the Amazon Web Services SDKs to connect to Amazon Web Services services; if credentials from an EKS Pod Identity association are available in the pod, the latest versions of the SDKs use them automatically.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSAuthClient, AssumeRoleForPodIdentityCommand } from "@aws-sdk/client-eks-auth"; // ES Modules import
 * // const { EKSAuthClient, AssumeRoleForPodIdentityCommand } = require("@aws-sdk/client-eks-auth"); // CommonJS import
 * // import type { EKSAuthClientConfig } from "@aws-sdk/client-eks-auth";
 * const config = {}; // type is EKSAuthClientConfig
 * const client = new EKSAuthClient(config);
 * const input = { // AssumeRoleForPodIdentityRequest
 *   clusterName: "STRING_VALUE", // required
 *   token: "STRING_VALUE", // required
 *   eksNodeName: "STRING_VALUE",
 *   instanceId: "STRING_VALUE",
 *   zone: "STRING_VALUE",
 * };
 * const command = new AssumeRoleForPodIdentityCommand(input);
 * const response = await client.send(command);
 * // { // AssumeRoleForPodIdentityResponse
 * //   subject: { // Subject
 * //     namespace: "STRING_VALUE", // required
 * //     serviceAccount: "STRING_VALUE", // required
 * //   },
 * //   audience: "STRING_VALUE", // required
 * //   podIdentityAssociation: { // PodIdentityAssociation
 * //     associationArn: "STRING_VALUE", // required
 * //     associationId: "STRING_VALUE", // required
 * //   },
 * //   assumedRoleUser: { // AssumedRoleUser
 * //     arn: "STRING_VALUE", // required
 * //     assumeRoleId: "STRING_VALUE", // required
 * //   },
 * //   credentials: { // Credentials
 * //     sessionToken: "STRING_VALUE", // required
 * //     secretAccessKey: "STRING_VALUE", // required
 * //     accessKeyId: "STRING_VALUE", // required
 * //     expiration: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param AssumeRoleForPodIdentityCommandInput - {@link AssumeRoleForPodIdentityCommandInput}
 * @returns {@link AssumeRoleForPodIdentityCommandOutput}
 * @see {@link AssumeRoleForPodIdentityCommandInput} for command's `input` shape.
 * @see {@link AssumeRoleForPodIdentityCommandOutput} for command's `response` shape.
 * @see {@link EKSAuthClientResolvedConfig | config} for EKSAuthClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permissions to perform the requested operation. The IAM principal making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the *IAM User Guide*.
 *
 * @throws {@link ExpiredTokenException} (client fault)
 *
 * The specified Kubernetes service account token is expired.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * These errors are usually caused by a server-side issue.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The specified parameter is invalid. Review the available parameters for the API request.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * This exception is thrown if the request contains a semantic error. The precise meaning will depend on the API, and will be documented in the error message.
 *
 * @throws {@link InvalidTokenException} (client fault)
 *
 * The specified Kubernetes service account token is invalid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is unavailable. Back off and retry the operation.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because your request rate is too high. Reduce the frequency of requests.
 *
 * @throws {@link EKSAuthServiceException}
 *
 * Base exception class for all service exceptions from EKSAuth service.
 *
 * @public
 */
export class AssumeRoleForPodIdentityCommand extends command<AssumeRoleForPodIdentityCommandInput, AssumeRoleForPodIdentityCommandOutput>(
  _ep0,
  _mw0,
  "AssumeRoleForPodIdentity",
  AssumeRoleForPodIdentity$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssumeRoleForPodIdentityRequest;
      output: AssumeRoleForPodIdentityResponse;
    };
    sdk: {
      input: AssumeRoleForPodIdentityCommandInput;
      output: AssumeRoleForPodIdentityCommandOutput;
    };
  };
}
