// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDeploymentInput, CreateDeploymentOutput } from "../models/models_0";
import { CreateDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDeploymentCommand}.
 */
export interface CreateDeploymentCommandInput extends CreateDeploymentInput {}
/**
 * @public
 *
 * The output of {@link CreateDeploymentCommand}.
 */
export interface CreateDeploymentCommandOutput extends CreateDeploymentOutput, __MetadataBearer {}

/**
 * <p>Creates a deployment. A deployment applies one or more policies to the accounts and resources selected by a scope. Use <code>isPublished</code> to create the deployment in published (<code>ACTIVE</code>) or draft (<code>DRAFT</code>) state. The response includes coverage information and any warnings about the deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, CreateDeploymentCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, CreateDeploymentCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // CreateDeploymentInput
 *   clientToken: "STRING_VALUE",
 *   deploymentName: "STRING_VALUE", // required
 *   deploymentDescription: "STRING_VALUE",
 *   deploymentConfiguration: { // DeploymentConfiguration
 *     enableCrossAccountVisibility: true || false, // required
 *   },
 *   associatedPolicyList: [ // PolicyReferenceList // required
 *     { // PolicyReference
 *       policyIdentifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   associatedScopeList: [ // ScopeReferenceList // required
 *     { // ScopeReference
 *       scopeIdentifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   isPublished: true || false,
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeploymentOutput
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
 * @param CreateDeploymentCommandInput - {@link CreateDeploymentCommandInput}
 * @returns {@link CreateDeploymentCommandOutput}
 * @see {@link CreateDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable. This is a retryable error.</p>
 *
 * @throws {@link TagPolicyViolationException} (client fault)
 *  <p>The request violates a tag policy that is in effect for the account or organization.</p>
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
 * @example Create a deployment
 * ```javascript
 * // Creates a new deployment in draft state.
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
 *   clientToken: "550e8400-e29b-41d4-a716-446655440003",
 *   deploymentConfiguration: {
 *     enableCrossAccountVisibility: false
 *   },
 *   deploymentDescription: "Production deployment for US East 1 region",
 *   deploymentName: "prod-us-east-1-deployment",
 *   isPublished: false
 * };
 * const command = new CreateDeploymentCommand(input);
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
 *   deploymentDescription: "Production deployment for US East 1 region",
 *   deploymentId: "def456",
 *   deploymentName: "prod-us-east-1-deployment",
 *   hasPublishedVersion: false,
 *   isSnapshot: false,
 *   status: "DRAFT",
 *   updateToken: "f4a5b6c7-7d8e-4f9a-8b1c-1d2e3f4a5b6c",
 *   version: "1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateDeploymentCommand extends command<CreateDeploymentCommandInput, CreateDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "CreateDeployment",
  CreateDeployment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeploymentInput;
      output: CreateDeploymentOutput;
    };
    sdk: {
      input: CreateDeploymentCommandInput;
      output: CreateDeploymentCommandOutput;
    };
  };
}
