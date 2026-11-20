// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPublisherAssociationsRequest, ListPublisherAssociationsResponse } from "../models/models_0";
import { ListPublisherAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPublisherAssociationsCommand}.
 */
export interface ListPublisherAssociationsCommandInput extends ListPublisherAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListPublisherAssociationsCommand}.
 */
export interface ListPublisherAssociationsCommandOutput extends ListPublisherAssociationsResponse, __MetadataBearer {}

/**
 * List the registry record associations your account created. Pass publisherArn to list only the
 * associations for that publisher; omit it to list associations across all publishers. Results are
 * eventually consistent, so an association you just created or removed can take a few seconds to
 * appear in or disappear from the list.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, ListPublisherAssociationsCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, ListPublisherAssociationsCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // ListPublisherAssociationsRequest
 *   publisherArn: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPublisherAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListPublisherAssociationsResponse
 * //   items: [ // PublisherAssociationList // required
 * //     { // PublisherAssociation
 * //       recordArn: "STRING_VALUE", // required
 * //       publicIdentifier: "STRING_VALUE", // required
 * //       publisher: "STRING_VALUE", // required
 * //       status: "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "SUSPENDED", // required
 * //       statusReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPublisherAssociationsCommandInput - {@link ListPublisherAssociationsCommandInput}
 * @returns {@link ListPublisherAssociationsCommandOutput}
 * @see {@link ListPublisherAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListPublisherAssociationsCommandOutput} for command's `response` shape.
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
export class ListPublisherAssociationsCommand extends command<ListPublisherAssociationsCommandInput, ListPublisherAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListPublisherAssociations",
  ListPublisherAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPublisherAssociationsRequest;
      output: ListPublisherAssociationsResponse;
    };
    sdk: {
      input: ListPublisherAssociationsCommandInput;
      output: ListPublisherAssociationsCommandOutput;
    };
  };
}
