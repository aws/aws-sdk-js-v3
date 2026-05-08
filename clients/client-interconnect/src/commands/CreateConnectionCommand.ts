// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InterconnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InterconnectClient";
import type { CreateConnectionRequest, CreateConnectionResponse } from "../models/models_0";
import { CreateConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectionCommand}.
 */
export interface CreateConnectionCommandInput extends CreateConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectionCommand}.
 */
export interface CreateConnectionCommandOutput extends CreateConnectionResponse, __MetadataBearer {}

/**
 * <p>Initiates the process to create a Connection across the specified Environment. </p> <p>The Environment dictates the specified partner and location to which the other end of the connection should attach. You can see a list of the available Environments by calling <a>ListEnvironments</a> </p> <p>The Attach Point specifies where within the AWS Network your connection will logically connect.</p> <p>After a successful call to this method, the resulting <a>Connection</a> will return an Activation Key which will need to be brought to the specific partner's portal to confirm the <a>Connection</a> on both sides. (See <a>Environment$activationPageUrl</a> for a direct link to the partner portal). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InterconnectClient, CreateConnectionCommand } from "@aws-sdk/client-interconnect"; // ES Modules import
 * // const { InterconnectClient, CreateConnectionCommand } = require("@aws-sdk/client-interconnect"); // CommonJS import
 * // import type { InterconnectClientConfig } from "@aws-sdk/client-interconnect";
 * const config = {}; // type is InterconnectClientConfig
 * const client = new InterconnectClient(config);
 * const input = { // CreateConnectionRequest
 *   description: "STRING_VALUE",
 *   bandwidth: "STRING_VALUE", // required
 *   attachPoint: { // AttachPoint Union: only one key present
 *     directConnectGateway: "STRING_VALUE",
 *     arn: "STRING_VALUE",
 *   },
 *   environmentId: "STRING_VALUE", // required
 *   remoteAccount: { // RemoteAccountIdentifier Union: only one key present
 *     identifier: "STRING_VALUE",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectionResponse
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
 * @param CreateConnectionCommandInput - {@link CreateConnectionCommandInput}
 * @returns {@link CreateConnectionCommandOutput}
 * @see {@link CreateConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionCommandOutput} for command's `response` shape.
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
 * @example Create Connection on specific environment
 * ```javascript
 * //
 * const input = {
 *   attachPoint: {
 *     directConnectGateway: "90392BE3-219C-47FD-BBA5-03DF76D2542A"
 *   },
 *   bandwidth: "1Gbps",
 *   environmentId: "mce-aws-acme-1",
 *   remoteAccount: {
 *     identifier: "PartnerAccountDetails"
 *   }
 * };
 * const command = new CreateConnectionCommand(input);
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
 *     state: "requested",
 *     type: "Multicloud"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateConnectionCommand extends $Command
  .classBuilder<
    CreateConnectionCommandInput,
    CreateConnectionCommandOutput,
    InterconnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InterconnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Interconnect", "CreateConnection", {})
  .n("InterconnectClient", "CreateConnectionCommand")
  .sc(CreateConnection$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectionRequest;
      output: CreateConnectionResponse;
    };
    sdk: {
      input: CreateConnectionCommandInput;
      output: CreateConnectionCommandOutput;
    };
  };
}
