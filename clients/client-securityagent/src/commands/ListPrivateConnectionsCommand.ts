// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPrivateConnectionsInput, ListPrivateConnectionsOutput } from "../models/models_0";
import { ListPrivateConnections$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPrivateConnectionsCommand}.
 */
export interface ListPrivateConnectionsCommandInput extends ListPrivateConnectionsInput {}
/**
 * @public
 *
 * The output of {@link ListPrivateConnectionsCommand}.
 */
export interface ListPrivateConnectionsCommandOutput extends ListPrivateConnectionsOutput, __MetadataBearer {}

/**
 * <p>Lists the private connections in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListPrivateConnectionsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListPrivateConnectionsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListPrivateConnectionsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPrivateConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPrivateConnectionsOutput
 * //   privateConnections: [ // PrivateConnectionList // required
 * //     { // PrivateConnectionSummary
 * //       name: "STRING_VALUE", // required
 * //       type: "SERVICE_MANAGED" || "SELF_MANAGED", // required
 * //       status: "ACTIVE" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED", // required
 * //       resourceGatewayId: "STRING_VALUE",
 * //       hostAddress: "STRING_VALUE",
 * //       vpcId: "STRING_VALUE",
 * //       resourceConfigurationId: "STRING_VALUE",
 * //       certificateExpiryTime: new Date("TIMESTAMP"),
 * //       dnsResolution: "PUBLIC" || "IN_VPC",
 * //       failureMessage: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPrivateConnectionsCommandInput - {@link ListPrivateConnectionsCommandInput}
 * @returns {@link ListPrivateConnectionsCommandOutput}
 * @see {@link ListPrivateConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListPrivateConnectionsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of your request.</p>
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
export class ListPrivateConnectionsCommand extends $Command
  .classBuilder<
    ListPrivateConnectionsCommandInput,
    ListPrivateConnectionsCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "ListPrivateConnections", {})
  .n("SecurityAgentClient", "ListPrivateConnectionsCommand")
  .sc(ListPrivateConnections$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPrivateConnectionsInput;
      output: ListPrivateConnectionsOutput;
    };
    sdk: {
      input: ListPrivateConnectionsCommandInput;
      output: ListPrivateConnectionsCommandOutput;
    };
  };
}
