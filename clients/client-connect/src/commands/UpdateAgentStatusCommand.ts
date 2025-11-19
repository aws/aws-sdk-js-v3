// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAgentStatusRequest } from "../models/models_2";
import { UpdateAgentStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAgentStatusCommand}.
 */
export interface UpdateAgentStatusCommandInput extends UpdateAgentStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAgentStatusCommand}.
 */
export interface UpdateAgentStatusCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates agent status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateAgentStatusCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateAgentStatusCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateAgentStatusRequest
 *   InstanceId: "STRING_VALUE", // required
 *   AgentStatusId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   State: "ENABLED" || "DISABLED",
 *   DisplayOrder: Number("int"),
 *   ResetOrderNumber: true || false,
 * };
 * const command = new UpdateAgentStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAgentStatusCommandInput - {@link UpdateAgentStatusCommandInput}
 * @returns {@link UpdateAgentStatusCommandOutput}
 * @see {@link UpdateAgentStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentStatusCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateAgentStatusCommand extends $Command
  .classBuilder<
    UpdateAgentStatusCommandInput,
    UpdateAgentStatusCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateAgentStatus", {})
  .n("ConnectClient", "UpdateAgentStatusCommand")
  .sc(UpdateAgentStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAgentStatusRequest;
      output: {};
    };
    sdk: {
      input: UpdateAgentStatusCommandInput;
      output: UpdateAgentStatusCommandOutput;
    };
  };
}
