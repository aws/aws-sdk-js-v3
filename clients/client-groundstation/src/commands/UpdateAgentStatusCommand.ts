// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { UpdateAgentStatusRequest, UpdateAgentStatusResponse } from "../models/models_0";
import { de_UpdateAgentStatusCommand, se_UpdateAgentStatusCommand } from "../protocols/Aws_restJson1";

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
export interface UpdateAgentStatusCommandOutput extends UpdateAgentStatusResponse, __MetadataBearer {}

/**
 * <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Update the status of the agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, UpdateAgentStatusCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, UpdateAgentStatusCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // UpdateAgentStatusRequest
 *   agentId: "STRING_VALUE", // required
 *   taskId: "STRING_VALUE", // required
 *   aggregateStatus: { // AggregateStatus
 *     status: "SUCCESS" || "FAILED" || "ACTIVE" || "INACTIVE", // required
 *     signatureMap: { // SignatureMap
 *       "<keys>": true || false,
 *     },
 *   },
 *   componentStatuses: [ // ComponentStatusList // required
 *     { // ComponentStatusData
 *       componentType: "STRING_VALUE", // required
 *       capabilityArn: "STRING_VALUE", // required
 *       status: "SUCCESS" || "FAILED" || "ACTIVE" || "INACTIVE", // required
 *       bytesSent: Number("long"),
 *       bytesReceived: Number("long"),
 *       packetsDropped: Number("long"),
 *       dataflowId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateAgentStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAgentStatusResponse
 * //   agentId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateAgentStatusCommandInput - {@link UpdateAgentStatusCommandInput}
 * @returns {@link UpdateAgentStatusCommandOutput}
 * @see {@link UpdateAgentStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentStatusCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 *
 * @public
 */
export class UpdateAgentStatusCommand extends $Command
  .classBuilder<
    UpdateAgentStatusCommandInput,
    UpdateAgentStatusCommandOutput,
    GroundStationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GroundStationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GroundStation", "UpdateAgentStatus", {})
  .n("GroundStationClient", "UpdateAgentStatusCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAgentStatusCommand)
  .de(de_UpdateAgentStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAgentStatusRequest;
      output: UpdateAgentStatusResponse;
    };
    sdk: {
      input: UpdateAgentStatusCommandInput;
      output: UpdateAgentStatusCommandOutput;
    };
  };
}
