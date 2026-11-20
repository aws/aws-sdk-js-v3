// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePublisherRequest } from "../models/models_0";
import { DeletePublisher$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePublisherCommand}.
 */
export interface DeletePublisherCommandInput extends DeletePublisherRequest {}
/**
 * @public
 *
 * The output of {@link DeletePublisherCommand}.
 */
export interface DeletePublisherCommandOutput extends __MetadataBearer {}

/**
 * Delete a publisher. A successful call returns an empty response. You can't delete a publisher
 * that has registry record associations; disassociate every registry record from it first. The
 * request fails with ConflictException while the publisher has associations or another delete is in
 * progress. Association removals can take a few seconds to be reflected, so a delete that follows a
 * disassociation can briefly fail with ConflictException; retry after a short wait. If the publisher
 * ARN names your account and the publisher doesn't exist, the request fails with
 * ResourceNotFoundException.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, DeletePublisherCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, DeletePublisherCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // DeletePublisherRequest
 *   publisherArn: "STRING_VALUE", // required
 * };
 * const command = new DeletePublisherCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePublisherCommandInput - {@link DeletePublisherCommandInput}
 * @returns {@link DeletePublisherCommandOutput}
 * @see {@link DeletePublisherCommandInput} for command's `input` shape.
 * @see {@link DeletePublisherCommandOutput} for command's `response` shape.
 * @see {@link AgentRegistryControlClientResolvedConfig | config} for AgentRegistryControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The caller is not authorized to perform the requested action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unexpected internal error; the caller may retry.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
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
export class DeletePublisherCommand extends command<DeletePublisherCommandInput, DeletePublisherCommandOutput>(
  _ep0,
  _mw0,
  "DeletePublisher",
  DeletePublisher$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePublisherRequest;
      output: {};
    };
    sdk: {
      input: DeletePublisherCommandInput;
      output: DeletePublisherCommandOutput;
    };
  };
}
