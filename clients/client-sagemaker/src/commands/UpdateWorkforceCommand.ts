// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateWorkforceRequest,
  UpdateWorkforceRequestFilterSensitiveLog,
  UpdateWorkforceResponse,
} from "../models/models_4";
import { de_UpdateWorkforceCommand, se_UpdateWorkforceCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Use this operation to update your workforce. You can use this operation to
 *         require that workers use specific IP addresses to work on tasks
 *         and to update your OpenID Connect (OIDC) Identity Provider (IdP) workforce configuration.</p>
 *          <p>The worker portal is now supported in VPC and public internet.</p>
 *          <p> Use <code>SourceIpConfig</code> to restrict worker access to tasks to a specific range of IP addresses.
 *         You specify allowed IP addresses by creating a list of up to ten <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>.
 *         By default, a workforce isn't restricted to specific IP addresses. If you specify a
 *             range of IP addresses, workers who attempt to access tasks using any IP address outside
 *             the specified range are denied and get a <code>Not Found</code> error message on
 *             the worker portal.</p>
 *          <p>To restrict access to all the workers in public internet, add the <code>SourceIpConfig</code> CIDR value as "10.0.0.0/16".</p>
 *          <important>
 *             <p>Amazon SageMaker does not support Source Ip restriction for worker portals in VPC.</p>
 *          </important>
 *          <p>Use <code>OidcConfig</code> to update the configuration of a workforce created using
 *             your own OIDC IdP. </p>
 *          <important>
 *             <p>You can only update your OIDC IdP configuration when there are no work teams
 *                 associated with your workforce. You can delete work teams using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkteam.html">DeleteWorkteam</a> operation.</p>
 *          </important>
 *          <p>After restricting access to a range of IP addresses or updating your OIDC IdP configuration with this operation, you
 *             can view details about your update workforce using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeWorkforce.html">DescribeWorkforce</a>
 *             operation.</p>
 *          <important>
 *             <p>This operation only applies to private workforces.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateWorkforceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateWorkforceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
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
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class UpdateWorkforceCommand extends $Command
  .classBuilder<
    UpdateWorkforceCommandInput,
    UpdateWorkforceCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "UpdateWorkforce", {})
  .n("SageMakerClient", "UpdateWorkforceCommand")
  .f(UpdateWorkforceRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateWorkforceCommand)
  .de(de_UpdateWorkforceCommand)
  .build() {}
