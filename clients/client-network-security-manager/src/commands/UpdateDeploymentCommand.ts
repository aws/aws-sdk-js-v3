// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDeploymentInput, UpdateDeploymentOutput } from "../models/models_0";
import { UpdateDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDeploymentCommand}.
 */
export interface UpdateDeploymentCommandInput extends UpdateDeploymentInput {}
/**
 * @public
 *
 * The output of {@link UpdateDeploymentCommand}.
 */
export interface UpdateDeploymentCommandOutput extends UpdateDeploymentOutput, __MetadataBearer {}

/**
 * <p>Updates the specified deployment. To prevent conflicting concurrent updates, provide the current <code>updateToken</code>. Use <code>isPublished</code> to publish the update or keep the deployment as a draft.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, UpdateDeploymentCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, UpdateDeploymentCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // UpdateDeploymentInput
 *   deploymentIdentifier: "STRING_VALUE", // required
 *   updateToken: "STRING_VALUE", // required
 *   deploymentDescription: "STRING_VALUE",
 *   deploymentConfiguration: { // DeploymentConfiguration
 *     enableCrossAccountVisibility: true || false, // required
 *   },
 *   associatedPolicyList: [ // PolicyReferenceList
 *     { // PolicyReference
 *       policyIdentifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   associatedScopeList: [ // ScopeReferenceList
 *     { // ScopeReference
 *       scopeIdentifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   isPublished: true || false, // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDeploymentOutput
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
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateDeploymentCommandInput - {@link UpdateDeploymentCommandInput}
 * @returns {@link UpdateDeploymentCommandOutput}
 * @see {@link UpdateDeploymentCommandInput} for command's `input` shape.
 * @see {@link UpdateDeploymentCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource. For example, the resource was modified concurrently, or it is in a state that does not allow the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an internal error in the service. This is a retryable error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource identifier is correct and that the resource exists, then try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota.</p>
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
 * @example Update a deployment and publish it
 * ```javascript
 * // Updates the deployment's associations and publishes the change. The response includes deploymentCoverage showing which resource types the associated policies can protect. The updateToken from the most recent read is required for optimistic locking.
 * const input = {
 *   associatedPolicyList: [
 *     {
 *       policyIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:policy:xyz789"
 *     }
 *   ],
 *   associatedScopeList: [
 *     {
 *       scopeIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:scope:abc123"
 *     }
 *   ],
 *   deploymentConfiguration: {
 *     enableCrossAccountVisibility: true
 *   },
 *   deploymentDescription: "Production deployment for US East 1 region - updated",
 *   deploymentIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:deployment:def456",
 *   isPublished: true,
 *   updateToken: "f4a5b6c7-7d8e-4f9a-8b1c-1d2e3f4a5b6c"
 * };
 * const command = new UpdateDeploymentCommand(input);
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
 *     enableCrossAccountVisibility: true
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
 *   deploymentDescription: "Production deployment for US East 1 region - updated",
 *   deploymentId: "def456",
 *   deploymentName: "prod-us-east-1-deployment",
 *   hasPublishedVersion: true,
 *   isSnapshot: false,
 *   status: "ACTIVE",
 *   updateToken: "a5b6c7d8-8e9f-4a0b-9c1d-2e3f4a5b6c7d",
 *   updatedAt: "2026-08-20T12:00:00Z",
 *   version: "2"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateDeploymentCommand extends command<UpdateDeploymentCommandInput, UpdateDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDeployment",
  UpdateDeployment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDeploymentInput;
      output: UpdateDeploymentOutput;
    };
    sdk: {
      input: UpdateDeploymentCommandInput;
      output: UpdateDeploymentCommandOutput;
    };
  };
}
