// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDataIntegrationEventsRequest, ListDataIntegrationEventsResponse } from "../models/models_0";
import { de_ListDataIntegrationEventsCommand, se_ListDataIntegrationEventsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataIntegrationEventsCommand}.
 */
export interface ListDataIntegrationEventsCommandInput extends ListDataIntegrationEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataIntegrationEventsCommand}.
 */
export interface ListDataIntegrationEventsCommandOutput extends ListDataIntegrationEventsResponse, __MetadataBearer {}

/**
 * <p>Enables you to programmatically list all data integration events for the provided Amazon Web Services Supply Chain instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, ListDataIntegrationEventsCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, ListDataIntegrationEventsCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * // import type { SupplyChainClientConfig } from "@aws-sdk/client-supplychain";
 * const config = {}; // type is SupplyChainClientConfig
 * const client = new SupplyChainClient(config);
 * const input = { // ListDataIntegrationEventsRequest
 *   instanceId: "STRING_VALUE", // required
 *   eventType: "scn.data.forecast" || "scn.data.inventorylevel" || "scn.data.inboundorder" || "scn.data.inboundorderline" || "scn.data.inboundorderlineschedule" || "scn.data.outboundorderline" || "scn.data.outboundshipment" || "scn.data.processheader" || "scn.data.processoperation" || "scn.data.processproduct" || "scn.data.reservation" || "scn.data.shipment" || "scn.data.shipmentstop" || "scn.data.shipmentstoporder" || "scn.data.supplyplan" || "scn.data.dataset",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDataIntegrationEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataIntegrationEventsResponse
 * //   events: [ // DataIntegrationEventList // required
 * //     { // DataIntegrationEvent
 * //       instanceId: "STRING_VALUE", // required
 * //       eventId: "STRING_VALUE", // required
 * //       eventType: "scn.data.forecast" || "scn.data.inventorylevel" || "scn.data.inboundorder" || "scn.data.inboundorderline" || "scn.data.inboundorderlineschedule" || "scn.data.outboundorderline" || "scn.data.outboundshipment" || "scn.data.processheader" || "scn.data.processoperation" || "scn.data.processproduct" || "scn.data.reservation" || "scn.data.shipment" || "scn.data.shipmentstop" || "scn.data.shipmentstoporder" || "scn.data.supplyplan" || "scn.data.dataset", // required
 * //       eventGroupId: "STRING_VALUE", // required
 * //       eventTimestamp: new Date("TIMESTAMP"), // required
 * //       datasetTargetDetails: { // DataIntegrationEventDatasetTargetDetails
 * //         datasetIdentifier: "STRING_VALUE", // required
 * //         operationType: "APPEND" || "UPSERT" || "DELETE", // required
 * //         datasetLoadExecution: { // DataIntegrationEventDatasetLoadExecutionDetails
 * //           status: "SUCCEEDED" || "IN_PROGRESS" || "FAILED", // required
 * //           message: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataIntegrationEventsCommandInput - {@link ListDataIntegrationEventsCommandInput}
 * @returns {@link ListDataIntegrationEventsCommandOutput}
 * @see {@link ListDataIntegrationEventsCommandInput} for command's `input` shape.
 * @see {@link ListDataIntegrationEventsCommandOutput} for command's `response` shape.
 * @see {@link SupplyChainClientResolvedConfig | config} for SupplyChainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the required privileges to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link SupplyChainServiceException}
 * <p>Base exception class for all service exceptions from SupplyChain service.</p>
 *
 *
 * @example Successful ListDataIntegrationEvents
 * ```javascript
 * //
 * const input = {
 *   instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 * };
 * const command = new ListDataIntegrationEventsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   events: [
 *     {
 *       datasetTargetDetails: {
 *         datasetIdentifier: "arn:aws:scn:us-west-2:135808960812:instance/8928ae12-15e5-4441-825d-ec2184f0a43a/namespaces/asc/datasets/product",
 *         datasetLoadExecution: {
 *           status: "SUCCEEDED"
 *         },
 *         operationType: "APPEND"
 *       },
 *       eventGroupId: "datasetId",
 *       eventId: "19739c8e-cd2e-4cbc-a2f7-0dc43239f042",
 *       eventTimestamp: 1.515531081123E9,
 *       eventType: "scn.data.dataset",
 *       instanceId: "8928ae12-15e5-4441-825d-ec2184f0a43a"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDataIntegrationEventsCommand extends $Command
  .classBuilder<
    ListDataIntegrationEventsCommandInput,
    ListDataIntegrationEventsCommandOutput,
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
  .s("GalaxyPublicAPIGateway", "ListDataIntegrationEvents", {})
  .n("SupplyChainClient", "ListDataIntegrationEventsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataIntegrationEventsCommand)
  .de(de_ListDataIntegrationEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataIntegrationEventsRequest;
      output: ListDataIntegrationEventsResponse;
    };
    sdk: {
      input: ListDataIntegrationEventsCommandInput;
      output: ListDataIntegrationEventsCommandOutput;
    };
  };
}
