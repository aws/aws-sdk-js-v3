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
export type { __MetadataBearer };
export { $Command };
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
 * <p>Send the transactional data payload for the event with real-time data for analysis or monitoring. The real-time data events are stored in an Amazon Web Services service before being processed and stored in data lake. New data events are synced with data lake at 5 PM GMT everyday. The updated transactional data is available in data lake after ingestion.</p>
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
 * @example Successful SendDataIntegrationEvent for inboundorder event type
 * ```javascript
 * //
 * const input = {
 *   "data": "{\"id\": \"inbound-order-id-test-123\", \"tpartner_id\": \"partner-id-test-123\" }",
 *   "eventGroupId": "inboundOrderId",
 *   "eventTimestamp": 1515531081.123,
 *   "eventType": "scn.data.inboundorder",
 *   "instanceId": "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "eventId": "c4132c1d-8f60-44a2-9932-f723c4f7b8a7"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 * @example Successful SendDataIntegrationEvent for inboundorderline event type
 * ```javascript
 * //
 * const input = {
 *   "data": "{\"id\": \"inbound-order-line-id-test-123\", \"order_id\": \"order-id-test-123\", \"tpartner_id\": \"partner-id-test-123\", \"product_id\": \"product-id-test-123\", \"quantity_submitted\": \"100.0\" }",
 *   "eventGroupId": "inboundOrderLineId",
 *   "eventTimestamp": 1515531081.123,
 *   "eventType": "scn.data.inboundorderline",
 *   "instanceId": "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "eventId": "45d95db2-d106-40e0-aa98-f1204230a691"
 * }
 * *\/
 * // example id: example-2
 * ```
 *
 * @example Successful SendDataIntegrationEvent for inboundorderlineschedule event type
 * ```javascript
 * //
 * const input = {
 *   "data": "{\"id\": \"inbound-order-line-schedule-id-test-123\", \"order_id\": \"order-id-test-123\", \"order_line_id\": \"order-line-id-test-123\", \"product_id\": \"product-id-test-123\"}",
 *   "eventGroupId": "inboundOrderLineScheduleId",
 *   "eventTimestamp": 1515531081.123,
 *   "eventType": "scn.data.inboundorderlineschedule",
 *   "instanceId": "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "eventId": "5abba995-7735-4d1e-95c4-7cc93e48cf9f"
 * }
 * *\/
 * // example id: example-3
 * ```
 *
 * @example Successful SendDataIntegrationEvent for forecast event type
 * ```javascript
 * //
 * const input = {
 *   "data": "{\"snapshot_date\": \"1672470400000\", \"product_id\": \"product-id-test-123\", \"site_id\": \"site-id-test-123\", \"region_id\": \"region-id-test-123\", \"product_group_id\": \"product-group-id-test-123\", \"forecast_start_dttm\": \"1672470400000\", \"forecast_end_dttm\": \"1672470400000\" }",
 *   "eventGroupId": "forecastId",
 *   "eventTimestamp": 1515531081.123,
 *   "eventType": "scn.data.forecast",
 *   "instanceId": "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "eventId": "29312d5b-f499-4dcd-b017-3dab3cd34d61"
 * }
 * *\/
 * // example id: example-4
 * ```
 *
 * @example Successful SendDataIntegrationEvent for inventorylevel event type
 * ```javascript
 * //
 * const input = {
 *   "data": "{\"snapshot_date\": \"1672470400000\", \"site_id\": \"site-id-test-123\", \"product_id\": \"product-id-test-123\", \"on_hand_inventory\": \"100.0\", \"inv_condition\": \"good\", \"lot_number\": \"lot-number-test-123\"}",
 *   "eventGroupId": "inventoryLevelId",
 *   "eventTimestamp": 1515531081.123,
 *   "eventType": "scn.data.inventorylevel",
 *   "instanceId": "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "eventId": "3aa78324-acd8-4fdd-a19e-231ea003c2b3"
 * }
 * *\/
 * // example id: example-5
 * ```
 *
 * @example Successful SendDataIntegrationEvent for outboundorderline event type
 * ```javascript
 * //
 * const input = {
 *   "data": "{\"id\": \"outbound-orderline-id-test-123\", \"cust_order_id\": \"cust-order-id-test-123\", \"product_id\": \"product-id-test-123\" }",
 *   "eventGroupId": "outboundOrderLineId",
 *   "eventTimestamp": 1515531081.123,
 *   "eventType": "scn.data.outboundorderline",
 *   "instanceId": "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "eventId": "959b7ef9-5e2d-4795-b1ca-5b16a3eb6b89"
 * }
 * *\/
 * // example id: example-6
 * ```
 *
 * @example Successful SendDataIntegrationEvent for outboundshipment event type
 * ```javascript
 * //
 * const input = {
 *   "data": "{\"id\": \"outbound-shipment-id-test-123\", \"cust_order_id\": \"cust-order-id-test-123\", \"cust_order_line_id\": \"cust-order-line-id-test-123\", \"product_id\": \"product-id-test-123\" }",
 *   "eventGroupId": "outboundShipmentId",
 *   "eventTimestamp": 1515531081.123,
 *   "eventType": "scn.data.outboundshipment",
 *   "instanceId": "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "eventId": "59feded3-5e46-4126-81bf-0137ca176ee0"
 * }
 * *\/
 * // example id: example-7
 * ```
 *
 * @example Successful SendDataIntegrationEvent for processheader event type
 * ```javascript
 * //
 * const input = {
 *   "data": "{\"process_id\": \"process-id-test-123\" }",
 *   "eventGroupId": "processHeaderId",
 *   "eventTimestamp": 1515531081.123,
 *   "eventType": "scn.data.processheader",
 *   "instanceId": "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "eventId": "564130eb-2d8a-4550-a768-ddf0daf7b4a9"
 * }
 * *\/
 * // example id: example-8
 * ```
 *
 * @example Successful SendDataIntegrationEvent for processoperation event type
 * ```javascript
 * //
 * const input = {
 *   "data": "{\"process_operation_id\": \"process-operation-id-test-123\", \"process_id\": \"process-id-test-123\" }",
 *   "eventGroupId": "processOperationId",
 *   "eventTimestamp": 1515531081.123,
 *   "eventType": "scn.data.processoperation",
 *   "instanceId": "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "eventId": "db5df408-89c7-4b9f-a326-016f6c2b3396"
 * }
 * *\/
 * // example id: example-9
 * ```
 *
 * @example Successful SendDataIntegrationEvent for processproduct event type
 * ```javascript
 * //
 * const input = {
 *   "data": "{\"process_product_id\": \"process-product-id-test-123\", \"process_id\": \"process-id-test-123\" }",
 *   "eventGroupId": "processProductId",
 *   "eventTimestamp": 1515531081.123,
 *   "eventType": "scn.data.processproduct",
 *   "instanceId": "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "eventId": "6929b275-485e-4035-a798-99077ca6d669"
 * }
 * *\/
 * // example id: example-10
 * ```
 *
 * @example Successful SendDataIntegrationEvent for reservation event type
 * ```javascript
 * //
 * const input = {
 *   "data": "{\"reservation_id\": \"reservation-id-test-123\", \"reservation_detail_id\": \"reservation-detail-id-test-123\" }",
 *   "eventGroupId": "reservationId",
 *   "eventTimestamp": 1515531081.123,
 *   "eventType": "scn.data.reservation",
 *   "instanceId": "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "eventId": "f6c55a8b-fde2-44f6-848a-9b4336c77209"
 * }
 * *\/
 * // example id: example-11
 * ```
 *
 * @example Successful SendDataIntegrationEvent for shipment event type
 * ```javascript
 * //
 * const input = {
 *   "data": "{\"id\": \"shipment-id-test-123\", \"supplier_tpartner_id\": \"supplier-tpartner-id-test-123\", \"product_id\": \"product-id-test-123\", \"order_id\": \"order-id-test-123\", \"order_line_id\": \"order-line-id-test-123\", \"package_id\": \"package-id-test-123\" }",
 *   "eventGroupId": "shipmentId",
 *   "eventTimestamp": 1515531081.123,
 *   "eventType": "scn.data.shipment",
 *   "instanceId": "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "eventId": "61d079d8-3f56-49bb-b35a-c0271a4e4f0a"
 * }
 * *\/
 * // example id: example-12
 * ```
 *
 * @example Successful SendDataIntegrationEvent for shipmentstop event type
 * ```javascript
 * //
 * const input = {
 *   "data": "{\"shipment_stop_id\": \"shipment-stop-id-test-123\", \"shipment_id\": \"shipment-id-test-123\" }",
 *   "eventGroupId": "shipmentStopId",
 *   "eventTimestamp": 1515531081.123,
 *   "eventType": "scn.data.shipmentstop",
 *   "instanceId": "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "eventId": "3610992a-fc2f-4da4-9beb-724994622ba1"
 * }
 * *\/
 * // example id: example-13
 * ```
 *
 * @example Successful SendDataIntegrationEvent for shipmentstoporder event type
 * ```javascript
 * //
 * const input = {
 *   "data": "{\"shipment_stop_order_id\": \"shipment-stop-order-id-test-123\", \"shipment_stop_id\": \"shipment-stop-id-test-123\", \"shipment_id\": \"shipment-id-test-123\" }",
 *   "eventGroupId": "shipmentStopOrderId",
 *   "eventTimestamp": 1515531081.123,
 *   "eventType": "scn.data.shipmentstoporder",
 *   "instanceId": "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "eventId": "1d550a60-9321-4d25-a132-9dd4b2d9e934"
 * }
 * *\/
 * // example id: example-14
 * ```
 *
 * @example Successful SendDataIntegrationEvent for supplyplan event type
 * ```javascript
 * //
 * const input = {
 *   "data": "{\"supply_plan_id\": \"supply-plan-id-test-123\" }",
 *   "eventGroupId": "supplyPlanId",
 *   "eventTimestamp": 1515531081.123,
 *   "eventType": "scn.data.supplyplan",
 *   "instanceId": "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "eventId": "9abaee56-5dc4-4c31-8250-3206a651d8a1"
 * }
 * *\/
 * // example id: example-15
 * ```
 *
 */
export class SendDataIntegrationEventCommand extends $Command
  .classBuilder<
    SendDataIntegrationEventCommandInput,
    SendDataIntegrationEventCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
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
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendDataIntegrationEventRequest;
      output: SendDataIntegrationEventResponse;
    };
    sdk: {
      input: SendDataIntegrationEventCommandInput;
      output: SendDataIntegrationEventCommandOutput;
    };
  };
}
