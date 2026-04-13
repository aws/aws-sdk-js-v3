// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InterconnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InterconnectClient";
import type { AcceptConnectionProposalRequest, AcceptConnectionProposalResponse } from "../models/models_0";
import { AcceptConnectionProposal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptConnectionProposalCommand}.
 */
export interface AcceptConnectionProposalCommandInput extends AcceptConnectionProposalRequest {}
/**
 * @public
 *
 * The output of {@link AcceptConnectionProposalCommand}.
 */
export interface AcceptConnectionProposalCommandOutput extends AcceptConnectionProposalResponse, __MetadataBearer {}

/**
 * <p>Accepts a connection proposal which was generated at a supported partner's portal.</p> <p>The proposal contains the Environment and bandwidth that were chosen on the partner's portal and cannot be modified.</p> <p>Upon accepting the proposal a connection will be made between the AWS network as accessed via the selected Attach Point and the network previously selected network on the partner's portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InterconnectClient, AcceptConnectionProposalCommand } from "@aws-sdk/client-interconnect"; // ES Modules import
 * // const { InterconnectClient, AcceptConnectionProposalCommand } = require("@aws-sdk/client-interconnect"); // CommonJS import
 * // import type { InterconnectClientConfig } from "@aws-sdk/client-interconnect";
 * const config = {}; // type is InterconnectClientConfig
 * const client = new InterconnectClient(config);
 * const input = { // AcceptConnectionProposalRequest
 *   attachPoint: { // AttachPoint Union: only one key present
 *     directConnectGateway: "STRING_VALUE",
 *     arn: "STRING_VALUE",
 *   },
 *   activationKey: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AcceptConnectionProposalCommand(input);
 * const response = await client.send(command);
 * // { // AcceptConnectionProposalResponse
 * //   connection: { // Connection
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     description: "STRING_VALUE", // required
 * //     bandwidth: "STRING_VALUE", // required
 * //     attachPoint: { // AttachPoint Union: only one key present
 * //       directConnectGateway: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //     environmentId: "STRING_VALUE", // required
 * //     provider: { // Provider Union: only one key present
 * //       cloudServiceProvider: "STRING_VALUE",
 * //       lastMileProvider: "STRING_VALUE",
 * //     },
 * //     location: "STRING_VALUE", // required
 * //     type: "STRING_VALUE", // required
 * //     state: "available" || "requested" || "pending" || "down" || "deleting" || "deleted" || "failed" || "updating", // required
 * //     sharedId: "STRING_VALUE", // required
 * //     billingTier: Number("int"),
 * //     ownerAccount: "STRING_VALUE", // required
 * //     activationKey: "STRING_VALUE", // required
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param AcceptConnectionProposalCommandInput - {@link AcceptConnectionProposalCommandInput}
 * @returns {@link AcceptConnectionProposalCommandOutput}
 * @see {@link AcceptConnectionProposalCommandInput} for command's `input` shape.
 * @see {@link AcceptConnectionProposalCommandOutput} for command's `response` shape.
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
 * @example Accept Connection Proposal
 * ```javascript
 * //
 * const input = {
 *   activationKey: "<Activation Key Data>",
 *   attachPoint: {
 *     directConnectGateway: "90392BE3-219C-47FD-BBA5-03DF76D2542A"
 *   }
 * };
 * const command = new AcceptConnectionProposalCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   connection: {
 *     activationKey: "<Activation Key Data>",
 *     arn: "arn:aws:interconnect:us-east-1:000000000000:connection/mcc-abc12345",
 *     attachPoint: {
 *       directConnectGateway: "90392BE3-219C-47FD-BBA5-03DF76D2542A"
 *     },
 *     bandwidth: "1Gbps",
 *     description: "My MultiCloud Connection",
 *     environmentId: "mce-aws-acme-1",
 *     id: "mcc-abc12345",
 *     location: "acme-east",
 *     ownerAccount: "000000000000",
 *     provider: {
 *       cloudServiceProvider: "acme"
 *     },
 *     sharedId: "B0615F4D-E588-47AD-9D04-1449EAA61C91",
 *     state: "pending",
 *     type: "Multicloud"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AcceptConnectionProposalCommand extends $Command
  .classBuilder<
    AcceptConnectionProposalCommandInput,
    AcceptConnectionProposalCommandOutput,
    InterconnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InterconnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Interconnect", "AcceptConnectionProposal", {})
  .n("InterconnectClient", "AcceptConnectionProposalCommand")
  .sc(AcceptConnectionProposal$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptConnectionProposalRequest;
      output: AcceptConnectionProposalResponse;
    };
    sdk: {
      input: AcceptConnectionProposalCommandInput;
      output: AcceptConnectionProposalCommandOutput;
    };
  };
}
