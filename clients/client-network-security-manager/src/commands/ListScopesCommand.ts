// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListScopesInput, ListScopesOutput } from "../models/models_0";
import { ListScopes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListScopesCommand}.
 */
export interface ListScopesCommandInput extends ListScopesInput {}
/**
 * @public
 *
 * The output of {@link ListScopesCommand}.
 */
export interface ListScopesCommandOutput extends ListScopesOutput, __MetadataBearer {}

/**
 * <p>Lists the scopes in the account. You can filter the results by status and page through them using <code>maxResults</code> and <code>nextToken</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, ListScopesCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, ListScopesCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // ListScopesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   status: "ACTIVE" || "DRAFT" || "DISABLED",
 * };
 * const command = new ListScopesCommand(input);
 * const response = await client.send(command);
 * // { // ListScopesOutput
 * //   nextToken: "STRING_VALUE",
 * //   scopes: [ // ScopeSummaryList // required
 * //     { // ScopeSummary
 * //       scopeId: "STRING_VALUE", // required
 * //       scopeArn: "STRING_VALUE", // required
 * //       scopeName: "STRING_VALUE",
 * //       status: "DRAFT" || "ACTIVE" || "DISABLED",
 * //       version: "STRING_VALUE",
 * //       hasPublishedVersion: true || false,
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListScopesCommandInput - {@link ListScopesCommandInput}
 * @returns {@link ListScopesCommandOutput}
 * @see {@link ListScopesCommandInput} for command's `input` shape.
 * @see {@link ListScopesCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an internal error in the service. This is a retryable error.</p>
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
 * @example List scopes
 * ```javascript
 * // Lists the published scopes in the account, one page at a time.
 * const input = {
 *   maxResults: 10,
 *   status: "ACTIVE"
 * };
 * const command = new ListScopesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "eyJsYXN0RXZhbHVhdGVkS2V5IjoiYWJjMTIzIn0=",
 *   scopes: [
 *     {
 *       hasPublishedVersion: true,
 *       scopeArn: "arn:aws:network-security-manager:us-east-1:123456789012:scope:abc123",
 *       scopeId: "abc123",
 *       scopeName: "production-web-apps",
 *       status: "ACTIVE",
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
export class ListScopesCommand extends command<ListScopesCommandInput, ListScopesCommandOutput>(
  _ep0,
  _mw0,
  "ListScopes",
  ListScopes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScopesInput;
      output: ListScopesOutput;
    };
    sdk: {
      input: ListScopesCommandInput;
      output: ListScopesCommandOutput;
    };
  };
}
