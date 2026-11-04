// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePrivateConnectionInput, DeletePrivateConnectionOutput } from "../models/models_0";
import { DeletePrivateConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePrivateConnectionCommand}.
 */
export interface DeletePrivateConnectionCommandInput extends DeletePrivateConnectionInput {}
/**
 * @public
 *
 * The output of {@link DeletePrivateConnectionCommand}.
 */
export interface DeletePrivateConnectionCommandOutput extends DeletePrivateConnectionOutput, __MetadataBearer {}

/**
 * Deletes a private connection.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, DeletePrivateConnectionCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, DeletePrivateConnectionCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // DeletePrivateConnectionInput
 *   privateConnectionName: "STRING_VALUE", // required
 * };
 * const command = new DeletePrivateConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DeletePrivateConnectionOutput
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
 * @param DeletePrivateConnectionCommandInput - {@link DeletePrivateConnectionCommandInput}
 * @returns {@link DeletePrivateConnectionCommandOutput}
 * @see {@link DeletePrivateConnectionCommandInput} for command's `input` shape.
 * @see {@link DeletePrivateConnectionCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found. Verify that the resource identifier is correct and that the resource exists in the specified agent space or account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link SecurityAgentServiceException}
 *
 * Base exception class for all service exceptions from SecurityAgent service.
 *
 * @public
 */
export class DeletePrivateConnectionCommand extends command<DeletePrivateConnectionCommandInput, DeletePrivateConnectionCommandOutput>(
  _ep0,
  _mw0,
  "DeletePrivateConnection",
  DeletePrivateConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePrivateConnectionInput;
      output: DeletePrivateConnectionOutput;
    };
    sdk: {
      input: DeletePrivateConnectionCommandInput;
      output: DeletePrivateConnectionCommandOutput;
    };
  };
}
