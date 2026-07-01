// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePrivateConnectionInput, DescribePrivateConnectionOutput } from "../models/models_0";
import { DescribePrivateConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribePrivateConnectionCommand}.
 */
export interface DescribePrivateConnectionCommandInput extends DescribePrivateConnectionInput {}
/**
 * @public
 *
 * The output of {@link DescribePrivateConnectionCommand}.
 */
export interface DescribePrivateConnectionCommandOutput extends DescribePrivateConnectionOutput, __MetadataBearer {}

/**
 * <p>Retrieves the details of a private connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, DescribePrivateConnectionCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, DescribePrivateConnectionCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // DescribePrivateConnectionInput
 *   privateConnectionName: "STRING_VALUE", // required
 * };
 * const command = new DescribePrivateConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DescribePrivateConnectionOutput
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
 * @param DescribePrivateConnectionCommandInput - {@link DescribePrivateConnectionCommandInput}
 * @returns {@link DescribePrivateConnectionCommandOutput}
 * @see {@link DescribePrivateConnectionCommandInput} for command's `input` shape.
 * @see {@link DescribePrivateConnectionCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class DescribePrivateConnectionCommand extends command<DescribePrivateConnectionCommandInput, DescribePrivateConnectionCommandOutput>(
  _ep0,
  _mw0,
  "DescribePrivateConnection",
  DescribePrivateConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePrivateConnectionInput;
      output: DescribePrivateConnectionOutput;
    };
    sdk: {
      input: DescribePrivateConnectionCommandInput;
      output: DescribePrivateConnectionCommandOutput;
    };
  };
}
