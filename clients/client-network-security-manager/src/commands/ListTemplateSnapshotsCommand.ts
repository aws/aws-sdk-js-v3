// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTemplateSnapshotsInput, ListTemplateSnapshotsOutput } from "../models/models_0";
import { ListTemplateSnapshots$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTemplateSnapshotsCommand}.
 */
export interface ListTemplateSnapshotsCommandInput extends ListTemplateSnapshotsInput {}
/**
 * @public
 *
 * The output of {@link ListTemplateSnapshotsCommand}.
 */
export interface ListTemplateSnapshotsCommandOutput extends ListTemplateSnapshotsOutput, __MetadataBearer {}

/**
 * <p>Lists the snapshots of the specified template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, ListTemplateSnapshotsCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, ListTemplateSnapshotsCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // ListTemplateSnapshotsInput
 *   templateIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTemplateSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // ListTemplateSnapshotsOutput
 * //   nextToken: "STRING_VALUE",
 * //   snapshots: [ // TemplateSummaryList // required
 * //     { // TemplateSummary
 * //       templateId: "STRING_VALUE", // required
 * //       templateArn: "STRING_VALUE", // required
 * //       templateName: "STRING_VALUE", // required
 * //       status: "DRAFT" || "ACTIVE" || "DISABLED",
 * //       version: "STRING_VALUE",
 * //       hasPublishedVersion: true || false,
 * //       firewallType: "WAF",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTemplateSnapshotsCommandInput - {@link ListTemplateSnapshotsCommandInput}
 * @returns {@link ListTemplateSnapshotsCommandOutput}
 * @see {@link ListTemplateSnapshotsCommandInput} for command's `input` shape.
 * @see {@link ListTemplateSnapshotsCommandOutput} for command's `response` shape.
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
 * @example List the snapshots of a template
 * ```javascript
 * // Lists the immutable snapshots that have been created for a template.
 * const input = {
 *   maxResults: 10,
 *   templateIdentifier: "arn:aws:network-security-manager:us-east-1:123456789012:template:xyz789"
 * };
 * const command = new ListTemplateSnapshotsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   snapshots: [
 *     {
 *       firewallType: "WAF",
 *       status: "ACTIVE",
 *       templateArn: "arn:aws:network-security-manager:us-east-1:123456789012:template:xyz789:2",
 *       templateId: "xyz789",
 *       templateName: "standard-waf-template",
 *       updatedAt: "2026-08-20T12:00:00Z",
 *       version: "2"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListTemplateSnapshotsCommand extends command<ListTemplateSnapshotsCommandInput, ListTemplateSnapshotsCommandOutput>(
  _ep0,
  _mw0,
  "ListTemplateSnapshots",
  ListTemplateSnapshots$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTemplateSnapshotsInput;
      output: ListTemplateSnapshotsOutput;
    };
    sdk: {
      input: ListTemplateSnapshotsCommandInput;
      output: ListTemplateSnapshotsCommandOutput;
    };
  };
}
