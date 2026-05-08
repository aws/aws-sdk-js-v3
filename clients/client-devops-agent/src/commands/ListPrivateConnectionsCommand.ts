// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPrivateConnectionsInput, ListPrivateConnectionsOutput } from "../models/models_0";
import { ListPrivateConnections$ } from "../schemas/schemas_0";

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
 * Lists all Private Connections in the caller's account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, ListPrivateConnectionsCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, ListPrivateConnectionsCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = {};
 * const command = new ListPrivateConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPrivateConnectionsOutput
 * //   privateConnections: [ // PrivateConnectionSummaryList // required
 * //     { // PrivateConnectionSummary
 * //       name: "STRING_VALUE", // required
 * //       type: "SELF_MANAGED" || "SERVICE_MANAGED", // required
 * //       resourceGatewayId: "STRING_VALUE",
 * //       hostAddress: "STRING_VALUE",
 * //       vpcId: "STRING_VALUE",
 * //       resourceConfigurationId: "STRING_VALUE",
 * //       status: "ACTIVE" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED", // required
 * //       certificateExpiryTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPrivateConnectionsCommandInput - {@link ListPrivateConnectionsCommandInput}
 * @returns {@link ListPrivateConnectionsCommandOutput}
 * @see {@link ListPrivateConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListPrivateConnectionsCommandOutput} for command's `response` shape.
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
export class ListPrivateConnectionsCommand extends $Command
  .classBuilder<
    ListPrivateConnectionsCommandInput,
    ListPrivateConnectionsCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "ListPrivateConnections", {})
  .n("DevOpsAgentClient", "ListPrivateConnectionsCommand")
  .sc(ListPrivateConnections$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ListPrivateConnectionsOutput;
    };
    sdk: {
      input: ListPrivateConnectionsCommandInput;
      output: ListPrivateConnectionsCommandOutput;
    };
  };
}
