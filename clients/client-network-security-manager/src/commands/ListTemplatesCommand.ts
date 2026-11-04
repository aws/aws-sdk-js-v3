// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTemplatesInput, ListTemplatesOutput } from "../models/models_0";
import { ListTemplates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTemplatesCommand}.
 */
export interface ListTemplatesCommandInput extends ListTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListTemplatesCommand}.
 */
export interface ListTemplatesCommandOutput extends ListTemplatesOutput, __MetadataBearer {}

/**
 * Lists the templates in the account. You can filter the results by status and page through them using `maxResults` and `nextToken`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, ListTemplatesCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, ListTemplatesCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // ListTemplatesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   status: "ACTIVE" || "DRAFT" || "DISABLED",
 * };
 * const command = new ListTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListTemplatesOutput
 * //   nextToken: "STRING_VALUE",
 * //   templates: [ // TemplateSummaryList // required
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
 * @param ListTemplatesCommandInput - {@link ListTemplatesCommandInput}
 * @returns {@link ListTemplatesCommandOutput}
 * @see {@link ListTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListTemplatesCommandOutput} for command's `response` shape.
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
 * @example List templates
 * ```javascript
 * // Lists the published templates in the account, one page at a time.
 * const input = {
 *   maxResults: 10,
 *   status: "ACTIVE"
 * };
 * const command = new ListTemplatesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   templates: [
 *     {
 *       firewallType: "WAF",
 *       hasPublishedVersion: true,
 *       status: "ACTIVE",
 *       templateArn: "arn:aws:network-security-manager:us-east-1:123456789012:template:xyz789",
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
export class ListTemplatesCommand extends command<ListTemplatesCommandInput, ListTemplatesCommandOutput>(
  _ep0,
  _mw0,
  "ListTemplates",
  ListTemplates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTemplatesInput;
      output: ListTemplatesOutput;
    };
    sdk: {
      input: ListTemplatesCommandInput;
      output: ListTemplatesCommandOutput;
    };
  };
}
