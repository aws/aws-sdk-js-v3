// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDeploymentInput, GetDeploymentOutput } from "../models/models_0";
import { GetDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDeploymentCommand}.
 */
export interface GetDeploymentCommandInput extends GetDeploymentInput {}
/**
 * @public
 *
 * The output of {@link GetDeploymentCommand}.
 */
export interface GetDeploymentCommandOutput extends GetDeploymentOutput, __MetadataBearer {}

/**
 * <p>Retrieves the details of the specified deployment, including coverage information and any warnings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, GetDeploymentCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, GetDeploymentCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // GetDeploymentInput
 *   deploymentIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentOutput
 * //   deploymentId: "STRING_VALUE", // required
 * //   deploymentArn: "STRING_VALUE", // required
 * //   deploymentName: "STRING_VALUE", // required
 * //   deploymentDescription: "STRING_VALUE",
 * //   status: "DRAFT" || "ACTIVE" || "DISABLED", // required
 * //   deploymentConfiguration: { // DeploymentConfiguration
 * //     enableCrossAccountVisibility: true || false, // required
 * //   },
 * //   associatedPolicyList: [ // AssociatedPolicyList // required
 * //     { // AssociatedPolicy
 * //       policyArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   associatedScopeList: [ // AssociatedScopeList // required
 * //     { // AssociatedScope
 * //       scopeArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   version: "STRING_VALUE", // required
 * //   updateToken: "STRING_VALUE",
 * //   isSnapshot: true || false,
 * //   hasPublishedVersion: true || false,
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   deploymentCoverage: [ // DeploymentCoverageList
 * //     { // DeploymentCoverageEntry
 * //       firewallType: "WAF" || "SHIELD_ADVANCED", // required
 * //       policyArns: [ // DeploymentPolicyArnList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       inScopeResourceTypes: [ // DeploymentResourceTypeList // required
 * //         "AWS::ApiGateway::Stage" || "AWS::CloudFront::Distribution" || "AWS::EC2::EIP" || "AWS::ElasticLoadBalancingV2::LoadBalancer::application" || "AWS::ElasticLoadBalancing::LoadBalancer",
 * //       ],
 * //     },
 * //   ],
 * //   warnings: [ // DeploymentWarningList
 * //     { // DeploymentWarningEntry
 * //       code: "STRING_VALUE", // required
 * //       policyArn: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDeploymentCommandInput - {@link GetDeploymentCommandInput}
 * @returns {@link GetDeploymentCommandOutput}
 * @see {@link GetDeploymentCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an internal error in the service. This is a retryable error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource identifier is correct and that the resource exists, then try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Reduce your request rate and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. For details, see the <code>reason</code> and <code>fieldList</code> members of the response.</p>
 *
 * @throws {@link NetworkSecurityManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkSecurityManager service.</p>
 *
 *
 * @example Get a deployment
 * ```javascript
 * // Retrieves the current published version of a deployment by its base ARN, including per-firewall-type coverage showing which in-scope resource types each policy protects.
 * const input = {
 *   deploymentIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:deployment:def456"
 * };
 * const command = new GetDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   associatedPolicyList: [
 *     {
 *       policyArn: "arn:aws:network-security-manager:us-east-1:123456789012:policy:xyz789"
 *     }
 *   ],
 *   associatedScopeList: [
 *     {
 *       scopeArn: "arn:aws:network-security-manager:us-east-1:123456789012:scope:abc123"
 *     }
 *   ],
 *   deploymentArn: "arn:aws:network-security-manager:us-east-1:123456789012:deployment:def456",
 *   deploymentConfiguration: {
 *     enableCrossAccountVisibility: false
 *   },
 *   deploymentCoverage: [
 *     {
 *       firewallType: "WAF",
 *       inScopeResourceTypes: [
 *         "AWS::ElasticLoadBalancingV2::LoadBalancer::application",
 *         "AWS::CloudFront::Distribution"
 *       ],
 *       policyArns: [
 *         "arn:aws:network-security-manager:us-east-1:123456789012:policy:xyz789"
 *       ]
 *     }
 *   ],
 *   deploymentDescription: "Production deployment for US East 1 region",
 *   deploymentId: "def456",
 *   deploymentName: "prod-us-east-1-deployment",
 *   hasPublishedVersion: true,
 *   isSnapshot: false,
 *   status: "ACTIVE",
 *   updateToken: "f4a5b6c7-7d8e-4f9a-8b1c-1d2e3f4a5b6c",
 *   version: "1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetDeploymentCommand extends command<GetDeploymentCommandInput, GetDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "GetDeployment",
  GetDeployment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeploymentInput;
      output: GetDeploymentOutput;
    };
    sdk: {
      input: GetDeploymentCommandInput;
      output: GetDeploymentCommandOutput;
    };
  };
}
