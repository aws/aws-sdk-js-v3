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
 * <p>Send the data payload for the event with real-time data for analysis or monitoring. The real-time data events are stored in an Amazon Web Services service before being processed and stored in data lake.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, SendDataIntegrationEventCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, SendDataIntegrationEventCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * // import type { SupplyChainClientConfig } from "@aws-sdk/client-supplychain";
 * const config = {}; // type is SupplyChainClientConfig
 * const client = new SupplyChainClient(config);
 * const input = { // SendDataIntegrationEventRequest
 *   instanceId: "STRING_VALUE", // required
 *   eventType: "scn.data.forecast" || "scn.data.inventorylevel" || "scn.data.inboundorder" || "scn.data.inboundorderline" || "scn.data.inboundorderlineschedule" || "scn.data.outboundorderline" || "scn.data.outboundshipment" || "scn.data.processheader" || "scn.data.processoperation" || "scn.data.processproduct" || "scn.data.reservation" || "scn.data.shipment" || "scn.data.shipmentstop" || "scn.data.shipmentstoporder" || "scn.data.supplyplan" || "scn.data.dataset", // required
 *   data: "STRING_VALUE", // required
 *   eventGroupId: "STRING_VALUE", // required
 *   eventTimestamp: new Date("TIMESTAMP"),
 *   clientToken: "STRING_VALUE",
 *   datasetTarget: { // DataIntegrationEventDatasetTargetConfiguration
 *     datasetIdentifier: "STRING_VALUE", // required
 *     operationType: "APPEND" || "UPSERT" || "DELETE", // required
 *   },
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
 *
 * @example Successful SendDataIntegrationEvent for inboundorder event type
 * ```javascript
 * //
 * const input = {
 *   data: `{"id": "inbound-order-id-test-123", "tpartner_id": "partner-id-test-123" }`,
 *   eventGroupId: "inboundOrderId",
 *   eventTimestamp: 1.515531081123E9,
 *   eventType: "scn.data.inboundorder",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eventId: "c4132c1d-8f60-44a2-9932-f723c4f7b8a7"
 * }
 * *\/
 * ```
 *
 * @example Successful SendDataIntegrationEvent for inboundorderline event type
 * ```javascript
 * //
 * const input = {
 *   data: `{"id": "inbound-order-line-id-test-123", "order_id": "order-id-test-123", "tpartner_id": "partner-id-test-123", "product_id": "product-id-test-123", "quantity_submitted": "100.0" }`,
 *   eventGroupId: "inboundOrderLineId",
 *   eventTimestamp: 1.515531081123E9,
 *   eventType: "scn.data.inboundorderline",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eventId: "45d95db2-d106-40e0-aa98-f1204230a691"
 * }
 * *\/
 * ```
 *
 * @example Successful SendDataIntegrationEvent for inboundorderlineschedule event type
 * ```javascript
 * //
 * const input = {
 *   data: `{"id": "inbound-order-line-schedule-id-test-123", "order_id": "order-id-test-123", "order_line_id": "order-line-id-test-123", "product_id": "product-id-test-123"}`,
 *   eventGroupId: "inboundOrderLineScheduleId",
 *   eventTimestamp: 1.515531081123E9,
 *   eventType: "scn.data.inboundorderlineschedule",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eventId: "5abba995-7735-4d1e-95c4-7cc93e48cf9f"
 * }
 * *\/
 * ```
 *
 * @example Successful SendDataIntegrationEvent for forecast event type
 * ```javascript
 * //
 * const input = {
 *   data: `{"snapshot_date": "1672470400000", "product_id": "product-id-test-123", "site_id": "site-id-test-123", "region_id": "region-id-test-123", "product_group_id": "product-group-id-test-123", "forecast_start_dttm": "1672470400000", "forecast_end_dttm": "1672470400000" }`,
 *   eventGroupId: "forecastId",
 *   eventTimestamp: 1.515531081123E9,
 *   eventType: "scn.data.forecast",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eventId: "29312d5b-f499-4dcd-b017-3dab3cd34d61"
 * }
 * *\/
 * ```
 *
 * @example Successful SendDataIntegrationEvent for inventorylevel event type
 * ```javascript
 * //
 * const input = {
 *   data: `{"snapshot_date": "1672470400000", "site_id": "site-id-test-123", "product_id": "product-id-test-123", "on_hand_inventory": "100.0", "inv_condition": "good", "lot_number": "lot-number-test-123"}`,
 *   eventGroupId: "inventoryLevelId",
 *   eventTimestamp: 1.515531081123E9,
 *   eventType: "scn.data.inventorylevel",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eventId: "3aa78324-acd8-4fdd-a19e-231ea003c2b3"
 * }
 * *\/
 * ```
 *
 * @example Successful SendDataIntegrationEvent for outboundorderline event type
 * ```javascript
 * //
 * const input = {
 *   data: `{"id": "outbound-orderline-id-test-123", "cust_order_id": "cust-order-id-test-123", "product_id": "product-id-test-123" }`,
 *   eventGroupId: "outboundOrderLineId",
 *   eventTimestamp: 1.515531081123E9,
 *   eventType: "scn.data.outboundorderline",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eventId: "959b7ef9-5e2d-4795-b1ca-5b16a3eb6b89"
 * }
 * *\/
 * ```
 *
 * @example Successful SendDataIntegrationEvent for outboundshipment event type
 * ```javascript
 * //
 * const input = {
 *   data: `{"id": "outbound-shipment-id-test-123", "cust_order_id": "cust-order-id-test-123", "cust_order_line_id": "cust-order-line-id-test-123", "product_id": "product-id-test-123" }`,
 *   eventGroupId: "outboundShipmentId",
 *   eventTimestamp: 1.515531081123E9,
 *   eventType: "scn.data.outboundshipment",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eventId: "59feded3-5e46-4126-81bf-0137ca176ee0"
 * }
 * *\/
 * ```
 *
 * @example Successful SendDataIntegrationEvent for processheader event type
 * ```javascript
 * //
 * const input = {
 *   data: `{"process_id": "process-id-test-123" }`,
 *   eventGroupId: "processHeaderId",
 *   eventTimestamp: 1.515531081123E9,
 *   eventType: "scn.data.processheader",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eventId: "564130eb-2d8a-4550-a768-ddf0daf7b4a9"
 * }
 * *\/
 * ```
 *
 * @example Successful SendDataIntegrationEvent for processoperation event type
 * ```javascript
 * //
 * const input = {
 *   data: `{"process_operation_id": "process-operation-id-test-123", "process_id": "process-id-test-123" }`,
 *   eventGroupId: "processOperationId",
 *   eventTimestamp: 1.515531081123E9,
 *   eventType: "scn.data.processoperation",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eventId: "db5df408-89c7-4b9f-a326-016f6c2b3396"
 * }
 * *\/
 * ```
 *
 * @example Successful SendDataIntegrationEvent for processproduct event type
 * ```javascript
 * //
 * const input = {
 *   data: `{"process_product_id": "process-product-id-test-123", "process_id": "process-id-test-123" }`,
 *   eventGroupId: "processProductId",
 *   eventTimestamp: 1.515531081123E9,
 *   eventType: "scn.data.processproduct",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eventId: "6929b275-485e-4035-a798-99077ca6d669"
 * }
 * *\/
 * ```
 *
 * @example Successful SendDataIntegrationEvent for reservation event type
 * ```javascript
 * //
 * const input = {
 *   data: `{"reservation_id": "reservation-id-test-123", "reservation_detail_id": "reservation-detail-id-test-123" }`,
 *   eventGroupId: "reservationId",
 *   eventTimestamp: 1.515531081123E9,
 *   eventType: "scn.data.reservation",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eventId: "f6c55a8b-fde2-44f6-848a-9b4336c77209"
 * }
 * *\/
 * ```
 *
 * @example Successful SendDataIntegrationEvent for shipment event type
 * ```javascript
 * //
 * const input = {
 *   data: `{"id": "shipment-id-test-123", "supplier_tpartner_id": "supplier-tpartner-id-test-123", "product_id": "product-id-test-123", "order_id": "order-id-test-123", "order_line_id": "order-line-id-test-123", "package_id": "package-id-test-123" }`,
 *   eventGroupId: "shipmentId",
 *   eventTimestamp: 1.515531081123E9,
 *   eventType: "scn.data.shipment",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eventId: "61d079d8-3f56-49bb-b35a-c0271a4e4f0a"
 * }
 * *\/
 * ```
 *
 * @example Successful SendDataIntegrationEvent for shipmentstop event type
 * ```javascript
 * //
 * const input = {
 *   data: `{"shipment_stop_id": "shipment-stop-id-test-123", "shipment_id": "shipment-id-test-123" }`,
 *   eventGroupId: "shipmentStopId",
 *   eventTimestamp: 1.515531081123E9,
 *   eventType: "scn.data.shipmentstop",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eventId: "3610992a-fc2f-4da4-9beb-724994622ba1"
 * }
 * *\/
 * ```
 *
 * @example Successful SendDataIntegrationEvent for shipmentstoporder event type
 * ```javascript
 * //
 * const input = {
 *   data: `{"shipment_stop_order_id": "shipment-stop-order-id-test-123", "shipment_stop_id": "shipment-stop-id-test-123", "shipment_id": "shipment-id-test-123" }`,
 *   eventGroupId: "shipmentStopOrderId",
 *   eventTimestamp: 1.515531081123E9,
 *   eventType: "scn.data.shipmentstoporder",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eventId: "1d550a60-9321-4d25-a132-9dd4b2d9e934"
 * }
 * *\/
 * ```
 *
 * @example Successful SendDataIntegrationEvent for supplyplan event type
 * ```javascript
 * //
 * const input = {
 *   data: `{"supply_plan_id": "supply-plan-id-test-123" }`,
 *   eventGroupId: "supplyPlanId",
 *   eventTimestamp: 1.515531081123E9,
 *   eventType: "scn.data.supplyplan",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eventId: "9abaee56-5dc4-4c31-8250-3206a651d8a1"
 * }
 * *\/
 * ```
 *
 * @example Successful SendDataIntegrationEvent for dataset event type
 * ```javascript
 * //
 * const input = {
 *   data: `{"dataset_id": "datset-id-test-123" }`,
 *   datasetTarget: {
 *     datasetIdentifier: "arn:aws:scn:us-west-2:135808960812:instance/8928ae12-15e5-4441-825d-ec2184f0a43a/namespaces/asc/datasets/product",
 *     operationType: "APPEND"
 *   },
 *   eventGroupId: "datasetId",
 *   eventTimestamp: 1.515531081123E9,
 *   eventType: "scn.data.dataset",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new SendDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   eventId: "19739c8e-cd2e-4cbc-a2f7-0dc43239f042"
 * }
 * *\/
 * ```
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
