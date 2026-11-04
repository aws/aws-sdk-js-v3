// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWorkforceRequest, UpdateWorkforceResponse } from "../models/models_5";
import { UpdateWorkforce$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateWorkforceCommand}.
 */
export interface UpdateWorkforceCommandInput extends UpdateWorkforceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkforceCommand}.
 */
export interface UpdateWorkforceCommandOutput extends UpdateWorkforceResponse, __MetadataBearer {}

/**
 * Use this operation to update your workforce. You can use this operation to require that workers use specific IP addresses to work on tasks and to update your OpenID Connect (OIDC) Identity Provider (IdP) workforce configuration.
 *
 * The worker portal is now supported in VPC and public internet.
 *
 * Use `SourceIpConfig` to restrict worker access to tasks to a specific range of IP addresses. You specify allowed IP addresses by creating a list of up to ten [CIDRs](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html). By default, a workforce isn't restricted to specific IP addresses. If you specify a range of IP addresses, workers who attempt to access tasks using any IP address outside the specified range are denied and get a `Not Found` error message on the worker portal.
 *
 * To restrict public internet access for all workers, configure the `SourceIpConfig` CIDR value. For example, when using `SourceIpConfig` with an `IpAddressType` of `IPv4`, you can restrict access to the IPv4 CIDR block "10.0.0.0/16". When using an `IpAddressType` of `dualstack`, you can specify both the IPv4 and IPv6 CIDR blocks, such as "10.0.0.0/16" for IPv4 only, "2001:db8:1234:1a00::/56" for IPv6 only, or "10.0.0.0/16" and "2001:db8:1234:1a00::/56" for dual stack.
 *
 * > **Important:** Amazon SageMaker does not support Source Ip restriction for worker portals in VPC.
 *
 * Use `OidcConfig` to update the configuration of a workforce created using your own OIDC IdP.
 *
 * > **Important:** You can only update your OIDC IdP configuration when there are no work teams associated with your workforce. You can delete work teams using the [DeleteWorkteam](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkteam.html) operation.
 *
 * After restricting access to a range of IP addresses or updating your OIDC IdP configuration with this operation, you can view details about your update workforce using the [DescribeWorkforce](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeWorkforce.html) operation.
 *
 * > **Important:** This operation only applies to private workforces.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateWorkforceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateWorkforceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // UpdateWorkforceRequest
 *   WorkforceName: "STRING_VALUE", // required
 *   SourceIpConfig: { // SourceIpConfig
 *     Cidrs: [ // Cidrs // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   OidcConfig: { // OidcConfig
 *     ClientId: "STRING_VALUE", // required
 *     ClientSecret: "STRING_VALUE", // required
 *     Issuer: "STRING_VALUE", // required
 *     AuthorizationEndpoint: "STRING_VALUE", // required
 *     TokenEndpoint: "STRING_VALUE", // required
 *     UserInfoEndpoint: "STRING_VALUE", // required
 *     LogoutEndpoint: "STRING_VALUE", // required
 *     JwksUri: "STRING_VALUE", // required
 *     Scope: "STRING_VALUE",
 *     AuthenticationRequestExtraParams: { // AuthenticationRequestExtraParams
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   WorkforceVpcConfig: { // WorkforceVpcConfigRequest
 *     VpcId: "STRING_VALUE",
 *     SecurityGroupIds: [ // WorkforceSecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *     Subnets: [ // WorkforceSubnets
 *       "STRING_VALUE",
 *     ],
 *   },
 *   IpAddressType: "ipv4" || "dualstack",
 * };
 * const command = new UpdateWorkforceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkforceResponse
 * //   Workforce: { // Workforce
 * //     WorkforceName: "STRING_VALUE", // required
 * //     WorkforceArn: "STRING_VALUE", // required
 * //     LastUpdatedDate: new Date("TIMESTAMP"),
 * //     SourceIpConfig: { // SourceIpConfig
 * //       Cidrs: [ // Cidrs // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     SubDomain: "STRING_VALUE",
 * //     CognitoConfig: { // CognitoConfig
 * //       UserPool: "STRING_VALUE", // required
 * //       ClientId: "STRING_VALUE", // required
 * //     },
 * //     OidcConfig: { // OidcConfigForResponse
 * //       ClientId: "STRING_VALUE",
 * //       Issuer: "STRING_VALUE",
 * //       AuthorizationEndpoint: "STRING_VALUE",
 * //       TokenEndpoint: "STRING_VALUE",
 * //       UserInfoEndpoint: "STRING_VALUE",
 * //       LogoutEndpoint: "STRING_VALUE",
 * //       JwksUri: "STRING_VALUE",
 * //       Scope: "STRING_VALUE",
 * //       AuthenticationRequestExtraParams: { // AuthenticationRequestExtraParams
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     WorkforceVpcConfig: { // WorkforceVpcConfigResponse
 * //       VpcId: "STRING_VALUE", // required
 * //       SecurityGroupIds: [ // WorkforceSecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Subnets: [ // WorkforceSubnets // required
 * //         "STRING_VALUE",
 * //       ],
 * //       VpcEndpointId: "STRING_VALUE",
 * //     },
 * //     Status: "Initializing" || "Updating" || "Deleting" || "Failed" || "Active",
 * //     FailureReason: "STRING_VALUE",
 * //     IpAddressType: "ipv4" || "dualstack",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWorkforceCommandInput - {@link UpdateWorkforceCommandInput}
 * @returns {@link UpdateWorkforceCommandOutput}
 * @see {@link UpdateWorkforceCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkforceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict when you attempted to modify a SageMaker entity such as an `Experiment` or `Artifact`.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class UpdateWorkforceCommand extends command<UpdateWorkforceCommandInput, UpdateWorkforceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWorkforce",
  UpdateWorkforce$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkforceRequest;
      output: UpdateWorkforceResponse;
    };
    sdk: {
      input: UpdateWorkforceCommandInput;
      output: UpdateWorkforceCommandOutput;
    };
  };
}
