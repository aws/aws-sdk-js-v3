// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeConnectionProposalRequest, DescribeConnectionProposalResponse } from "../models/models_0";
import { DescribeConnectionProposal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeConnectionProposalCommand}.
 */
export interface DescribeConnectionProposalCommandInput extends DescribeConnectionProposalRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectionProposalCommand}.
 */
export interface DescribeConnectionProposalCommandOutput extends DescribeConnectionProposalResponse, __MetadataBearer {}

/**
 * <p>Describes the details of a connection proposal generated at a partner's portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InterconnectClient, DescribeConnectionProposalCommand } from "@aws-sdk/client-interconnect"; // ES Modules import
 * // const { InterconnectClient, DescribeConnectionProposalCommand } = require("@aws-sdk/client-interconnect"); // CommonJS import
 * // import type { InterconnectClientConfig } from "@aws-sdk/client-interconnect";
 * const config = {}; // type is InterconnectClientConfig
 * const client = new InterconnectClient(config);
 * const input = { // DescribeConnectionProposalRequest
 *   activationKey: "STRING_VALUE", // required
 * };
 * const command = new DescribeConnectionProposalCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectionProposalResponse
 * //   bandwidth: "STRING_VALUE", // required
 * //   environmentId: "STRING_VALUE", // required
 * //   provider: { // Provider Union: only one key present
 * //     cloudServiceProvider: "STRING_VALUE",
 * //     lastMileProvider: "STRING_VALUE",
 * //   },
 * //   location: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DescribeConnectionProposalCommandInput - {@link DescribeConnectionProposalCommandInput}
 * @returns {@link DescribeConnectionProposalCommandOutput}
 * @see {@link DescribeConnectionProposalCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionProposalCommandOutput} for command's `response` shape.
 * @see {@link InterconnectClientResolvedConfig | config} for InterconnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The calling principal is not allowed to access the specified resource, or the resource does not exist.</p>
 *
 * @throws {@link InterconnectClientException} (client fault)
 *  <p>The request was denied due to incorrect client supplied parameters.</p>
 *
 * @throws {@link InterconnectServerException} (server fault)
 *  <p>The request resulted in an exception internal to the service.</p>
 *
 * @throws {@link InterconnectValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request specifies a resource that does not exist on the server.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The requested operation would result in the calling principal exceeding their allotted quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link InterconnectServiceException}
 * <p>Base exception class for all service exceptions from Interconnect service.</p>
 *
 *
 * @example Describe Connection Proposal
 * ```javascript
 * //
 * const input = {
 *   activationKey: "<Activation Key Data>"
 * };
 * const command = new DescribeConnectionProposalCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   bandwidth: "1Gbps",
 *   environmentId: "mce-aws-acme-1",
 *   location: "acme-east",
 *   provider: {
 *     cloudServiceProvider: "acme"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeConnectionProposalCommand extends command<DescribeConnectionProposalCommandInput, DescribeConnectionProposalCommandOutput>(
  _ep0,
  _mw0,
  "DescribeConnectionProposal",
  DescribeConnectionProposal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConnectionProposalRequest;
      output: DescribeConnectionProposalResponse;
    };
    sdk: {
      input: DescribeConnectionProposalCommandInput;
      output: DescribeConnectionProposalCommandOutput;
    };
  };
}
