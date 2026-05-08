// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InterconnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InterconnectClient";
import type { UpdateConnectionRequest, UpdateConnectionResponse } from "../models/models_0";
import { UpdateConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectionCommand}.
 */
export interface UpdateConnectionCommandInput extends UpdateConnectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectionCommand}.
 */
export interface UpdateConnectionCommandOutput extends UpdateConnectionResponse, __MetadataBearer {}

/**
 * <p>Modifies an existing connection. Currently we support modifications to the connection's description and/or bandwidth.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InterconnectClient, UpdateConnectionCommand } from "@aws-sdk/client-interconnect"; // ES Modules import
 * // const { InterconnectClient, UpdateConnectionCommand } = require("@aws-sdk/client-interconnect"); // CommonJS import
 * // import type { InterconnectClientConfig } from "@aws-sdk/client-interconnect";
 * const config = {}; // type is InterconnectClientConfig
 * const client = new InterconnectClient(config);
 * const input = { // UpdateConnectionRequest
 *   identifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   bandwidth: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateConnectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConnectionResponse
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
 * @param UpdateConnectionCommandInput - {@link UpdateConnectionCommandInput}
 * @returns {@link UpdateConnectionCommandOutput}
 * @see {@link UpdateConnectionCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectionCommandOutput} for command's `response` shape.
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
 * @example Update Connection Description
 * ```javascript
 * //
 * const input = {
 *   description: "Changed Description",
 *   identifier: "mcc-abc12345"
 * };
 * const command = new UpdateConnectionCommand(input);
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
 *     description: "changed Description",
 *     environmentId: "mce-aws-acme-1",
 *     id: "mcc-abc12345",
 *     location: "acme-east",
 *     ownerAccount: "000000000000",
 *     provider: {
 *       cloudServiceProvider: "acme"
 *     },
 *     sharedId: "B0615F4D-E588-47AD-9D04-1449EAA61C91",
 *     state: "available",
 *     type: "Multicloud"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Update Connection Bandwidth
 * ```javascript
 * //
 * const input = {
 *   bandwidth: "2Gbps",
 *   identifier: "mcc-abc12345"
 * };
 * const command = new UpdateConnectionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   connection: {
 *     activationKey: "<Activation Key Data>",
 *     arn: "arn:aws:interconnect:us-east-1:000000000000:connection/mcc-abc12345",
 *     attachPoint: {
 *       directConnectGateway: "90392BE3-219C-47FD-BBA5-03DF76D2542A"
 *     },
 *     bandwidth: "2Gbps",
 *     description: "changed Description",
 *     environmentId: "mce-aws-acme-1",
 *     id: "mcc-abc12345",
 *     location: "acme-east",
 *     ownerAccount: "000000000000",
 *     provider: {
 *       cloudServiceProvider: "acme"
 *     },
 *     sharedId: "B0615F4D-E588-47AD-9D04-1449EAA61C91",
 *     state: "updating",
 *     type: "Multicloud"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateConnectionCommand extends $Command
  .classBuilder<
    UpdateConnectionCommandInput,
    UpdateConnectionCommandOutput,
    InterconnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InterconnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Interconnect", "UpdateConnection", {})
  .n("InterconnectClient", "UpdateConnectionCommand")
  .sc(UpdateConnection$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectionRequest;
      output: UpdateConnectionResponse;
    };
    sdk: {
      input: UpdateConnectionCommandInput;
      output: UpdateConnectionCommandOutput;
    };
  };
}
