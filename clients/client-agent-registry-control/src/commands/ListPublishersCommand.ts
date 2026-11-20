// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPublishersRequest, ListPublishersResponse } from "../models/models_0";
import { ListPublishers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPublishersCommand}.
 */
export interface ListPublishersCommandInput extends ListPublishersRequest {}
/**
 * @public
 *
 * The output of {@link ListPublishersCommand}.
 */
export interface ListPublishersCommandOutput extends ListPublishersResponse, __MetadataBearer {}

/**
 * List the publishers your account owns, followed by the ACTIVE publishers shared with your account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, ListPublishersCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, ListPublishersCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // ListPublishersRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPublishersCommand(input);
 * const response = await client.send(command);
 * // { // ListPublishersResponse
 * //   items: [ // PublisherSummaryList // required
 * //     { // PublisherSummary
 * //       value: { // Identifier Union: only one key present
 * //         domain: "STRING_VALUE",
 * //       },
 * //       identifierType: "DOMAIN",
 * //       status: "ACTION_REQUIRED" || "ACTIVE" || "FAILED" || "SUSPENDED" || "DELETING", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       publisherArn: "STRING_VALUE", // required
 * //       associationCount: Number("int"),
 * //       pendingAssociationApprovalCount: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPublishersCommandInput - {@link ListPublishersCommandInput}
 * @returns {@link ListPublishersCommandOutput}
 * @see {@link ListPublishersCommandInput} for command's `input` shape.
 * @see {@link ListPublishersCommandOutput} for command's `response` shape.
 * @see {@link AgentRegistryControlClientResolvedConfig | config} for AgentRegistryControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The caller is not authorized to perform the requested action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unexpected internal error; the caller may retry.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling; the caller may retry after a delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation of one or more input fields.</p>
 *
 * @throws {@link AgentRegistryControlServiceException}
 * <p>Base exception class for all service exceptions from AgentRegistryControl service.</p>
 *
 *
 * @public
 */
export class ListPublishersCommand extends command<ListPublishersCommandInput, ListPublishersCommandOutput>(
  _ep0,
  _mw0,
  "ListPublishers",
  ListPublishers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPublishersRequest;
      output: ListPublishersResponse;
    };
    sdk: {
      input: ListPublishersCommandInput;
      output: ListPublishersCommandOutput;
    };
  };
}
