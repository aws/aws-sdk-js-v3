// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreatePrivateConnectionInput, CreatePrivateConnectionOutput } from "../models/models_0";
import { CreatePrivateConnection$ } from "../schemas/schemas_0";

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
 * Creates a Private Connection to a target resource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, CreatePrivateConnectionCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, CreatePrivateConnectionCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // CreatePrivateConnectionInput
 *   name: "STRING_VALUE", // required
 *   mode: { // PrivateConnectionMode Union: only one key present
 *     serviceManaged: { // ServiceManagedInput
 *       hostAddress: "STRING_VALUE", // required
 *       vpcId: "STRING_VALUE", // required
 *       subnetIds: [ // ListOfSubnetIds // required
 *         "STRING_VALUE",
 *       ],
 *       securityGroupIds: [ // ListOfSecurityGroupIds
 *         "STRING_VALUE",
 *       ],
 *       ipAddressType: "IPV4" || "IPV6" || "DUAL_STACK",
 *       ipv4AddressesPerEni: Number("int"),
 *       portRanges: [ // PortRanges
 *         "STRING_VALUE",
 *       ],
 *       certificate: "STRING_VALUE",
 *     },
 *     selfManaged: { // SelfManagedInput
 *       resourceConfigurationId: "STRING_VALUE", // required
 *       certificate: "STRING_VALUE",
 *     },
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePrivateConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreatePrivateConnectionOutput
 * //   name: "STRING_VALUE", // required
 * //   type: "SELF_MANAGED" || "SERVICE_MANAGED", // required
 * //   resourceGatewayId: "STRING_VALUE",
 * //   hostAddress: "STRING_VALUE",
 * //   vpcId: "STRING_VALUE",
 * //   resourceConfigurationId: "STRING_VALUE",
 * //   status: "ACTIVE" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED", // required
 * //   certificateExpiryTime: new Date("TIMESTAMP"),
 * //   tags: { // Tags
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
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  One or more parameters provided in the request are invalid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed the service quota limit.
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class CreatePrivateConnectionCommand extends $Command
  .classBuilder<
    CreatePrivateConnectionCommandInput,
    CreatePrivateConnectionCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "CreatePrivateConnection", {})
  .n("DevOpsAgentClient", "CreatePrivateConnectionCommand")
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
