// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreatePrivateConnectionInput, CreatePrivateConnectionOutput } from "../models/models_0";
import { CreatePrivateConnection$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePrivateConnectionCommand}.
 */
export interface CreatePrivateConnectionCommandInput extends CreatePrivateConnectionInput {}
/**
 * @public
 *
 * The output of {@link CreatePrivateConnectionCommand}.
 */
export interface CreatePrivateConnectionCommandOutput extends CreatePrivateConnectionOutput, __MetadataBearer {}

/**
 * <p>Creates a private connection for reaching a self-hosted provider instance over private networking using Amazon VPC Lattice.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, CreatePrivateConnectionCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, CreatePrivateConnectionCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // CreatePrivateConnectionInput
 *   privateConnectionName: "STRING_VALUE", // required
 *   mode: { // PrivateConnectionMode Union: only one key present
 *     serviceManaged: { // ServiceManagedInput
 *       hostAddress: "STRING_VALUE", // required
 *       vpcId: "STRING_VALUE", // required
 *       subnetIds: [ // PrivateConnectionSubnetIds // required
 *         "STRING_VALUE",
 *       ],
 *       securityGroupIds: [ // PrivateConnectionSecurityGroupIds
 *         "STRING_VALUE",
 *       ],
 *       ipAddressType: "IPV4" || "IPV6" || "DUAL_STACK",
 *       ipv4AddressesPerEni: Number("int"),
 *       portRanges: [ // PortRanges
 *         "STRING_VALUE",
 *       ],
 *       certificate: "STRING_VALUE",
 *       dnsResolution: "PUBLIC" || "IN_VPC",
 *     },
 *     selfManaged: { // SelfManagedInput
 *       resourceConfigurationId: "STRING_VALUE", // required
 *       certificate: "STRING_VALUE",
 *     },
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePrivateConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreatePrivateConnectionOutput
 * //   name: "STRING_VALUE", // required
 * //   type: "SERVICE_MANAGED" || "SELF_MANAGED", // required
 * //   status: "ACTIVE" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED", // required
 * //   resourceGatewayId: "STRING_VALUE",
 * //   hostAddress: "STRING_VALUE",
 * //   vpcId: "STRING_VALUE",
 * //   resourceConfigurationId: "STRING_VALUE",
 * //   certificateExpiryTime: new Date("TIMESTAMP"),
 * //   dnsResolution: "PUBLIC" || "IN_VPC",
 * //   failureMessage: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreatePrivateConnectionCommandInput - {@link CreatePrivateConnectionCommandInput}
 * @returns {@link CreatePrivateConnectionCommandOutput}
 * @see {@link CreatePrivateConnectionCommandInput} for command's `input` shape.
 * @see {@link CreatePrivateConnectionCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource identifier is correct and that the resource exists in the specified agent space or account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class CreatePrivateConnectionCommand extends $Command
  .classBuilder<
    CreatePrivateConnectionCommandInput,
    CreatePrivateConnectionCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "CreatePrivateConnection", {})
  .n("SecurityAgentClient", "CreatePrivateConnectionCommand")
  .sc(CreatePrivateConnection$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePrivateConnectionInput;
      output: CreatePrivateConnectionOutput;
    };
    sdk: {
      input: CreatePrivateConnectionCommandInput;
      output: CreatePrivateConnectionCommandOutput;
    };
  };
}
