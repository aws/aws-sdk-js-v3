// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTemplateInput, UpdateTemplateOutput } from "../models/models_0";
import { UpdateTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTemplateCommand}.
 */
export interface UpdateTemplateCommandInput extends UpdateTemplateInput {}
/**
 * @public
 *
 * The output of {@link UpdateTemplateCommand}.
 */
export interface UpdateTemplateCommandOutput extends UpdateTemplateOutput, __MetadataBearer {}

/**
 * <p>Updates the specified template. To prevent conflicting concurrent updates, provide the current <code>updateToken</code>. Use <code>isPublished</code> to publish the update or keep the template as a draft.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, UpdateTemplateCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, UpdateTemplateCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // UpdateTemplateInput
 *   templateIdentifier: "STRING_VALUE", // required
 *   updateToken: "STRING_VALUE", // required
 *   templateDescription: "STRING_VALUE",
 *   associatedRuleList: [ // RuleReferenceList
 *     { // RuleReference
 *       ruleIdentifier: "STRING_VALUE", // required
 *     },
 *   ],
 *   isPublished: true || false, // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTemplateOutput
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
 * @param UpdateTemplateCommandInput - {@link UpdateTemplateCommandInput}
 * @returns {@link UpdateTemplateCommandOutput}
 * @see {@link UpdateTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateTemplateCommandOutput} for command's `response` shape.
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
 * @example Update a template and publish it
 * ```javascript
 * // Updates the template's description and rule associations and publishes the change. The updateToken from the most recent read is required for optimistic locking.
 * const input = {
 *   associatedRuleList: [
 *     {
 *       ruleIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:rule:abc123"
 *     }
 *   ],
 *   isPublished: true,
 *   templateDescription: "Standard WAF template with baseline rule groups - updated",
 *   templateIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:template:xyz789",
 *   updateToken: "d2e3f4a5-5b6c-4d7e-8f9a-9b0c1d2e3f4a"
 * };
 * const command = new UpdateTemplateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   associatedRuleList: [
 *     {
 *       ruleArn: "arn:aws:network-security-manager:us-east-1:123456789012:rule:abc123"
 *     }
 *   ],
 *   firewallType: "WAF",
 *   hasPublishedVersion: true,
 *   isSnapshot: false,
 *   status: "ACTIVE",
 *   templateArn: "arn:aws:network-security-manager:us-east-1:123456789012:template:xyz789",
 *   templateDescription: "Standard WAF template with baseline rule groups - updated",
 *   templateId: "xyz789",
 *   templateName: "standard-waf-template",
 *   updateToken: "e3f4a5b6-6c7d-4e8f-9a0b-0c1d2e3f4a5b",
 *   updatedAt: "2026-08-20T12:00:00Z",
 *   version: "2"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateTemplateCommand extends command<UpdateTemplateCommandInput, UpdateTemplateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTemplate",
  UpdateTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTemplateInput;
      output: UpdateTemplateOutput;
    };
    sdk: {
      input: UpdateTemplateCommandInput;
      output: UpdateTemplateCommandOutput;
    };
  };
}
