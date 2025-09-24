// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAgentStatusRequest, CreateAgentStatusResponse } from "../models/models_0";
import { CreateAgentStatus } from "../schemas/schemas_8_Status";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAgentStatusCommand}.
 */
export interface CreateAgentStatusCommandInput extends CreateAgentStatusRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgentStatusCommand}.
 */
export interface CreateAgentStatusCommandOutput extends CreateAgentStatusResponse, __MetadataBearer {}

/**
 * <p>Creates an agent status for the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateAgentStatusCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateAgentStatusCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateAgentStatusRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   State: "ENABLED" || "DISABLED", // required
 *   DisplayOrder: Number("int"),
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAgentStatusCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentStatusResponse
 * //   AgentStatusARN: "STRING_VALUE",
 * //   AgentStatusId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAgentStatusCommandInput - {@link CreateAgentStatusCommandInput}
 * @returns {@link CreateAgentStatusCommandOutput}
 * @see {@link CreateAgentStatusCommandInput} for command's `input` shape.
 * @see {@link CreateAgentStatusCommandOutput} for command's `response` shape.
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
export class CreateAgentStatusCommand extends $Command
  .classBuilder<
    CreateAgentStatusCommandInput,
    CreateAgentStatusCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreateAgentStatus", {})
  .n("ConnectClient", "CreateAgentStatusCommand")
  .sc(CreateAgentStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgentStatusRequest;
      output: CreateAgentStatusResponse;
    };
    sdk: {
      input: CreateAgentStatusCommandInput;
      output: CreateAgentStatusCommandOutput;
    };
  };
}
