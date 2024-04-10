// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  SendDataIntegrationEventRequest,
  SendDataIntegrationEventRequestFilterSensitiveLog,
  SendDataIntegrationEventResponse,
} from "../models/models_0";
import { de_SendDataIntegrationEventCommand, se_SendDataIntegrationEventCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SendDataIntegrationEventCommand}.
 */
export interface SendDataIntegrationEventCommandInput extends SendDataIntegrationEventRequest {}
/**
 * @public
 *
 * The output of {@link SendDataIntegrationEventCommand}.
 */
export interface SendDataIntegrationEventCommandOutput extends SendDataIntegrationEventResponse, __MetadataBearer {}

/**
 * <p>Send transactional data events with real-time data for analysis or monitoring.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, SendDataIntegrationEventCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, SendDataIntegrationEventCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * const client = new SupplyChainClient(config);
 * const input = { // SendDataIntegrationEventRequest
 *   instanceId: "STRING_VALUE", // required
 *   eventType: "scn.data.forecast" || "scn.data.inventorylevel" || "scn.data.inboundorder" || "scn.data.inboundorderline" || "scn.data.inboundorderlineschedule" || "scn.data.outboundorderline" || "scn.data.outboundshipment" || "scn.data.processheader" || "scn.data.processoperation" || "scn.data.processproduct" || "scn.data.reservation" || "scn.data.shipment" || "scn.data.shipmentstop" || "scn.data.shipmentstoporder" || "scn.data.supplyplan", // required
 *   data: "STRING_VALUE", // required
 *   eventGroupId: "STRING_VALUE", // required
 *   eventTimestamp: new Date("TIMESTAMP"),
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * // { // SendDataIntegrationEventResponse
 * //   eventId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SendDataIntegrationEventCommandInput - {@link SendDataIntegrationEventCommandInput}
 * @returns {@link SendDataIntegrationEventCommandOutput}
 * @see {@link SendDataIntegrationEventCommandInput} for command's `input` shape.
 * @see {@link SendDataIntegrationEventCommandOutput} for command's `response` shape.
 * @see {@link SupplyChainClientResolvedConfig | config} for SupplyChainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the required privileges to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link SupplyChainServiceException}
 * <p>Base exception class for all service exceptions from SupplyChain service.</p>
 *
 * @public
 */
export class SendDataIntegrationEventCommand extends $Command
  .classBuilder<
    SendDataIntegrationEventCommandInput,
    SendDataIntegrationEventCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SupplyChainClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GalaxyPublicAPIGateway", "SendDataIntegrationEvent", {})
  .n("SupplyChainClient", "SendDataIntegrationEventCommand")
  .f(SendDataIntegrationEventRequestFilterSensitiveLog, void 0)
  .ser(se_SendDataIntegrationEventCommand)
  .de(de_SendDataIntegrationEventCommand)
  .build() {}
