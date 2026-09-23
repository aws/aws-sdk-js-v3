// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePolicySnapshotInput, CreatePolicySnapshotOutput } from "../models/models_0";
import { CreatePolicySnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePolicySnapshotCommand}.
 */
export interface CreatePolicySnapshotCommandInput extends CreatePolicySnapshotInput {}
/**
 * @public
 *
 * The output of {@link CreatePolicySnapshotCommand}.
 */
export interface CreatePolicySnapshotCommandOutput extends CreatePolicySnapshotOutput, __MetadataBearer {}

/**
 * <p>Creates a snapshot of the current published version of the specified policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, CreatePolicySnapshotCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, CreatePolicySnapshotCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // CreatePolicySnapshotInput
 *   policyIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePolicySnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreatePolicySnapshotOutput
 * //   policyId: "STRING_VALUE", // required
 * //   policyArn: "STRING_VALUE", // required
 * //   policyName: "STRING_VALUE", // required
 * //   policyDescription: "STRING_VALUE",
 * //   status: "DRAFT" || "ACTIVE" || "DISABLED", // required
 * //   priority: Number("int"), // required
 * //   associatedTemplateAndRuleList: [ // AssociatedTemplateAndRuleList // required
 * //     { // AssociatedTemplateOrRule Union: only one key present
 * //       templateArn: "STRING_VALUE",
 * //       ruleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   version: "STRING_VALUE", // required
 * //   updateToken: "STRING_VALUE",
 * //   isSnapshot: true || false,
 * //   hasPublishedVersion: true || false,
 * //   firewallType: "WAF" || "SHIELD_ADVANCED", // required
 * //   policyConfiguration: { // PolicyConfiguration
 * //     remediationEnabled: true || false, // required
 * //     resourcesCleanUp: true || false, // required
 * //     wafConfig: { // WafConfig
 * //       existingCustomerWebACLResolution: "RETROFIT" || "OVERRIDE_ASSOCIATION" || "NO_REMEDIATION", // required
 * //       conflictResolution: "MERGE_WHERE_APPLICABLE", // required
 * //     },
 * //   },
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreatePolicySnapshotCommandInput - {@link CreatePolicySnapshotCommandInput}
 * @returns {@link CreatePolicySnapshotCommandOutput}
 * @see {@link CreatePolicySnapshotCommandInput} for command's `input` shape.
 * @see {@link CreatePolicySnapshotCommandOutput} for command's `response` shape.
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
 * @example Create a policy snapshot
 * ```javascript
 * // Creates an immutable snapshot of the current published version of a policy. The snapshot is addressable by a version-qualified ARN.
 * const input = {
 *   clientToken: "550e8400-e29b-41d4-a716-446655440013",
 *   policyIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:policy:xyz789"
 * };
 * const command = new CreatePolicySnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   associatedTemplateAndRuleList: [
 *     {
 *       templateArn: "arn:aws:network-security-manager:us-east-1:123456789012:template:xyz789"
 *     }
 *   ],
 *   firewallType: "WAF",
 *   isSnapshot: true,
 *   policyArn: "arn:aws:network-security-manager:us-east-1:123456789012:policy:xyz789:2",
 *   policyConfiguration: {
 *     remediationEnabled: true,
 *     resourcesCleanUp: false,
 *     wafConfig: {
 *       conflictResolution: "MERGE_WHERE_APPLICABLE",
 *       existingCustomerWebACLResolution: "NO_REMEDIATION"
 *     }
 *   },
 *   policyId: "xyz789",
 *   policyName: "web-app-waf-policy",
 *   priority: 2,
 *   status: "ACTIVE",
 *   updatedAt: "2026-08-20T12:00:00Z",
 *   version: "2"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreatePolicySnapshotCommand extends command<CreatePolicySnapshotCommandInput, CreatePolicySnapshotCommandOutput>(
  _ep0,
  _mw0,
  "CreatePolicySnapshot",
  CreatePolicySnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePolicySnapshotInput;
      output: CreatePolicySnapshotOutput;
    };
    sdk: {
      input: CreatePolicySnapshotCommandInput;
      output: CreatePolicySnapshotCommandOutput;
    };
  };
}
