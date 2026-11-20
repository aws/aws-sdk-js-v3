// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociatePublisherRequest } from "../models/models_0";
import { DisassociatePublisher$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociatePublisherCommand}.
 */
export interface DisassociatePublisherCommandInput extends DisassociatePublisherRequest {}
/**
 * @public
 *
 * The output of {@link DisassociatePublisherCommand}.
 */
export interface DisassociatePublisherCommandOutput extends __MetadataBearer {}

/**
 * Remove a registry record's publisher association and release its public identifier. A successful
 * call returns an empty response. Disassociating a registry record that has no association succeeds.
 * If another account created the association, the request fails with AccessDeniedException.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, DisassociatePublisherCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, DisassociatePublisherCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // DisassociatePublisherRequest
 *   recordArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociatePublisherCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociatePublisherCommandInput - {@link DisassociatePublisherCommandInput}
 * @returns {@link DisassociatePublisherCommandOutput}
 * @see {@link DisassociatePublisherCommandInput} for command's `input` shape.
 * @see {@link DisassociatePublisherCommandOutput} for command's `response` shape.
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
export class DisassociatePublisherCommand extends command<DisassociatePublisherCommandInput, DisassociatePublisherCommandOutput>(
  _ep0,
  _mw0,
  "DisassociatePublisher",
  DisassociatePublisher$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociatePublisherRequest;
      output: {};
    };
    sdk: {
      input: DisassociatePublisherCommandInput;
      output: DisassociatePublisherCommandOutput;
    };
  };
}
