// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDataIntegrationEventRequest, GetDataIntegrationEventResponse } from "../models/models_0";
import { GetDataIntegrationEvent } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataIntegrationEventCommand}.
 */
export interface GetDataIntegrationEventCommandInput extends GetDataIntegrationEventRequest {}
/**
 * @public
 *
 * The output of {@link GetDataIntegrationEventCommand}.
 */
export interface GetDataIntegrationEventCommandOutput extends GetDataIntegrationEventResponse, __MetadataBearer {}

/**
 * <p>Enables you to programmatically view an Amazon Web Services Supply Chain Data Integration Event. Developers can view the eventType, eventGroupId, eventTimestamp, datasetTarget, datasetLoadExecution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, GetDataIntegrationEventCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, GetDataIntegrationEventCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * // import type { SupplyChainClientConfig } from "@aws-sdk/client-supplychain";
 * const config = {}; // type is SupplyChainClientConfig
 * const client = new SupplyChainClient(config);
 * const input = { // GetDataIntegrationEventRequest
 *   instanceId: "STRING_VALUE", // required
 *   eventId: "STRING_VALUE", // required
 * };
 * const command = new GetDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * // { // GetDataIntegrationEventResponse
 * //   event: { // DataIntegrationEvent
 * //     instanceId: "STRING_VALUE", // required
 * //     eventId: "STRING_VALUE", // required
 * //     eventType: "scn.data.forecast" || "scn.data.inventorylevel" || "scn.data.inboundorder" || "scn.data.inboundorderline" || "scn.data.inboundorderlineschedule" || "scn.data.outboundorderline" || "scn.data.outboundshipment" || "scn.data.processheader" || "scn.data.processoperation" || "scn.data.processproduct" || "scn.data.reservation" || "scn.data.shipment" || "scn.data.shipmentstop" || "scn.data.shipmentstoporder" || "scn.data.supplyplan" || "scn.data.dataset", // required
 * //     eventGroupId: "STRING_VALUE", // required
 * //     eventTimestamp: new Date("TIMESTAMP"), // required
 * //     datasetTargetDetails: { // DataIntegrationEventDatasetTargetDetails
 * //       datasetIdentifier: "STRING_VALUE", // required
 * //       operationType: "APPEND" || "UPSERT" || "DELETE", // required
 * //       datasetLoadExecution: { // DataIntegrationEventDatasetLoadExecutionDetails
 * //         status: "SUCCEEDED" || "IN_PROGRESS" || "FAILED", // required
 * //         message: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataIntegrationEventCommandInput - {@link GetDataIntegrationEventCommandInput}
 * @returns {@link GetDataIntegrationEventCommandOutput}
 * @see {@link GetDataIntegrationEventCommandInput} for command's `input` shape.
 * @see {@link GetDataIntegrationEventCommandOutput} for command's `response` shape.
 * @see {@link SupplyChainClientResolvedConfig | config} for SupplyChainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the required privileges to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link SupplyChainServiceException}
 * <p>Base exception class for all service exceptions from SupplyChain service.</p>
 *
 *
 * @example Successful GetDataIntegrationEvent
 * ```javascript
 * //
 * const input = {
 *   eventId: "19739c8e-cd2e-4cbc-a2f7-0dc43239f042",
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new GetDataIntegrationEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   event: {
 *     datasetTargetDetails: {
 *       datasetIdentifier: "arn:aws:scn:us-west-2:135808960812:instance/8928ae12-15e5-4441-825d-ec2184f0a43a/namespaces/asc/datasets/product",
 *       datasetLoadExecution: {
 *         status: "SUCCEEDED"
 *       },
 *       operationType: "APPEND"
 *     },
 *     eventGroupId: "datasetId",
 *     eventId: "19739c8e-cd2e-4cbc-a2f7-0dc43239f042",
 *     eventTimestamp: 1.515531081123E9,
 *     eventType: "scn.data.dataset",
 *     instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetDataIntegrationEventCommand extends $Command
  .classBuilder<
    GetDataIntegrationEventCommandInput,
    GetDataIntegrationEventCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupplyChainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GalaxyPublicAPIGateway", "GetDataIntegrationEvent", {})
  .n("SupplyChainClient", "GetDataIntegrationEventCommand")
  .sc(GetDataIntegrationEvent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataIntegrationEventRequest;
      output: GetDataIntegrationEventResponse;
    };
    sdk: {
      input: GetDataIntegrationEventCommandInput;
      output: GetDataIntegrationEventCommandOutput;
    };
  };
}
