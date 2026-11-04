// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTemplateInput, GetTemplateOutput } from "../models/models_0";
import { GetTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTemplateCommand}.
 */
export interface GetTemplateCommandInput extends GetTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetTemplateCommand}.
 */
export interface GetTemplateCommandOutput extends GetTemplateOutput, __MetadataBearer {}

/**
 * Retrieves the details of the specified template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, GetTemplateCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, GetTemplateCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // GetTemplateInput
 *   templateIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetTemplateOutput
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
 * @param GetTemplateCommandInput - {@link GetTemplateCommandInput}
 * @returns {@link GetTemplateCommandOutput}
 * @see {@link GetTemplateCommandInput} for command's `input` shape.
 * @see {@link GetTemplateCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing failed because of an internal error in the service. This is a retryable error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found. Verify that the resource identifier is correct and that the resource exists, then try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling. Reduce your request rate and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed validation. For details, see the `reason` and `fieldList` members of the response.
 *
 * @throws {@link NetworkSecurityManagerServiceException}
 *
 * Base exception class for all service exceptions from NetworkSecurityManager service.
 *
 * @example Get a template
 * ```javascript
 * // Retrieves the current published version of a template by its base ARN, including its associated rules.
 * const input = {
 *   templateIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:template:xyz789"
 * };
 * const command = new GetTemplateCommand(input);
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
 *   templateDescription: "Standard WAF template with baseline rule groups",
 *   templateId: "xyz789",
 *   templateName: "standard-waf-template",
 *   updateToken: "d2e3f4a5-5b6c-4d7e-8f9a-9b0c1d2e3f4a",
 *   version: "1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetTemplateCommand extends command<GetTemplateCommandInput, GetTemplateCommandOutput>(
  _ep0,
  _mw0,
  "GetTemplate",
  GetTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTemplateInput;
      output: GetTemplateOutput;
    };
    sdk: {
      input: GetTemplateCommandInput;
      output: GetTemplateCommandOutput;
    };
  };
}
