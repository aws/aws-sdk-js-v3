// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTemplateSnapshotInput, CreateTemplateSnapshotOutput } from "../models/models_0";
import { CreateTemplateSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTemplateSnapshotCommand}.
 */
export interface CreateTemplateSnapshotCommandInput extends CreateTemplateSnapshotInput {}
/**
 * @public
 *
 * The output of {@link CreateTemplateSnapshotCommand}.
 */
export interface CreateTemplateSnapshotCommandOutput extends CreateTemplateSnapshotOutput, __MetadataBearer {}

/**
 * <p>Creates a snapshot of the current published version of the specified template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, CreateTemplateSnapshotCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, CreateTemplateSnapshotCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // CreateTemplateSnapshotInput
 *   templateIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateTemplateSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateTemplateSnapshotOutput
 * //   templateId: "STRING_VALUE", // required
 * //   templateArn: "STRING_VALUE", // required
 * //   templateName: "STRING_VALUE", // required
 * //   templateDescription: "STRING_VALUE",
 * //   status: "DRAFT" || "ACTIVE" || "DISABLED", // required
 * //   version: "STRING_VALUE", // required
 * //   associatedRuleList: [ // AssociatedRuleList // required
 * //     { // AssociatedRule
 * //       ruleArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   updateToken: "STRING_VALUE",
 * //   isSnapshot: true || false,
 * //   hasPublishedVersion: true || false,
 * //   firewallType: "WAF", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateTemplateSnapshotCommandInput - {@link CreateTemplateSnapshotCommandInput}
 * @returns {@link CreateTemplateSnapshotCommandOutput}
 * @see {@link CreateTemplateSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateSnapshotCommandOutput} for command's `response` shape.
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
 * @example Create a template snapshot
 * ```javascript
 * // Creates an immutable snapshot of the current published version of a template. The snapshot is addressable by a version-qualified ARN.
 * const input = {
 *   clientToken: "550e8400-e29b-41d4-a716-446655440012",
 *   templateIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:template:xyz789"
 * };
 * const command = new CreateTemplateSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   associatedRuleList: [
 *     {
 *       ruleArn: "arn:aws:network-security-manager:us-east-1:123456789012:rule:abc123"
 *     }
 *   ],
 *   firewallType: "WAF",
 *   isSnapshot: true,
 *   status: "ACTIVE",
 *   templateArn: "arn:aws:network-security-manager:us-east-1:123456789012:template:xyz789:2",
 *   templateId: "xyz789",
 *   templateName: "standard-waf-template",
 *   updatedAt: "2026-08-20T12:00:00Z",
 *   version: "2"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateTemplateSnapshotCommand extends command<CreateTemplateSnapshotCommandInput, CreateTemplateSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "CreateTemplateSnapshot",
  CreateTemplateSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTemplateSnapshotInput;
      output: CreateTemplateSnapshotOutput;
    };
    sdk: {
      input: CreateTemplateSnapshotCommandInput;
      output: CreateTemplateSnapshotCommandOutput;
    };
  };
}
