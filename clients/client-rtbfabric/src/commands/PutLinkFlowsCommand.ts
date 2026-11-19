// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutLinkFlowsRequest, PutLinkFlowsResponse } from "../models/models_0";
import { PutLinkFlows$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutLinkFlowsCommand}.
 */
export interface PutLinkFlowsCommandInput extends PutLinkFlowsRequest {}
/**
 * @public
 *
 * The output of {@link PutLinkFlowsCommand}.
 */
export interface PutLinkFlowsCommandOutput extends PutLinkFlowsResponse, __MetadataBearer {}

/**
 * <p>Replaces a link's flow configuration. The change applies asynchronously. The call returns once the change is accepted, and the link serves its prior flows until the update commits atomically. RTB Fabric validates the request before accepting it, and a request that fails validation changes nothing. After the call, use GetLink. Once the change completes, the link's status is ACTIVE again and its flows show the change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, PutLinkFlowsCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, PutLinkFlowsCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // PutLinkFlowsRequest
 *   gatewayId: "STRING_VALUE", // required
 *   linkId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   lockToken: "STRING_VALUE", // required
 *   flows: [ // FlowList // required
 *     { // Flow
 *       name: "STRING_VALUE", // required
 *       pipeline: { // FlowPipeline Union: only one key present
 *         sequential: { // SequentialPipeline
 *           modules: [ // FlowModuleList // required
 *             { // FlowModule
 *               name: "STRING_VALUE", // required
 *               moduleVersionArn: "STRING_VALUE", // required
 *               selectedActions: [ // SelectedActionList
 *                 "FILTER" || "ENRICH_REQUEST_EXT" || "ENRICH_REQUEST_HEADERS" || "OBSERVE",
 *               ],
 *               failureMode: "OPEN" || "CLOSED",
 *               activationPercentage: Number("float"),
 *               configurationValues: "STRING_VALUE",
 *             },
 *           ],
 *         },
 *         phased: { // PhasedPipeline
 *           phases: [ // FlowPhaseList // required
 *             { // FlowPhase
 *               modules: [ // required
 *                 {
 *                   name: "STRING_VALUE", // required
 *                   moduleVersionArn: "STRING_VALUE", // required
 *                   selectedActions: [
 *                     "FILTER" || "ENRICH_REQUEST_EXT" || "ENRICH_REQUEST_HEADERS" || "OBSERVE",
 *                   ],
 *                   failureMode: "OPEN" || "CLOSED",
 *                   activationPercentage: Number("float"),
 *                   configurationValues: "STRING_VALUE",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new PutLinkFlowsCommand(input);
 * const response = await client.send(command);
 * // { // PutLinkFlowsResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   linkId: "STRING_VALUE", // required
 * //   status: "PENDING_CREATION" || "PENDING_REQUEST" || "REQUESTED" || "ACCEPTED" || "ACTIVE" || "REJECTED" || "FAILED" || "PENDING_DELETION" || "DELETED" || "PENDING_UPDATE" || "PENDING_ISOLATION" || "ISOLATED" || "PENDING_RESTORATION" || "CREATE_FAILED" || "DELETE_FAILED", // required
 * //   updateId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutLinkFlowsCommandInput - {@link PutLinkFlowsCommandInput}
 * @returns {@link PutLinkFlowsCommandOutput}
 * @see {@link PutLinkFlowsCommandInput} for command's `input` shape.
 * @see {@link PutLinkFlowsCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request could not be completed because you do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed because of a conflict in the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request could not be completed because of an internal server error. Try your call again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request could not be completed because the resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because you exceeded a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request could not be completed because it fails satisfy the constraints specified by the service.</p>
 *
 * @throws {@link RTBFabricServiceException}
 * <p>Base exception class for all service exceptions from RTBFabric service.</p>
 *
 *
 * @example Attach a filter module in one sequential flow
 * ```javascript
 * //
 * const input = {
 *   clientToken: "3f1c2a7e-0b5d-4c1e-9a8f-2d6b7e9c0a14",
 *   flows: [
 *     {
 *       name: "main",
 *       pipeline: {
 *         sequential: {
 *           modules: [
 *             {
 *               moduleVersionArn: "arn:aws:rtbfabric:us-east-1::modules/module-a1b2c3d4e5f6g7h8i9j0k1l2m/versions/1.2.0",
 *               name: "domain-filter",
 *               selectedActions: [
 *                 "FILTER"
 *               ]
 *             }
 *           ]
 *         }
 *       }
 *     }
 *   ],
 *   gatewayId: "rtb-gw-a1b2c3d4e5",
 *   linkId: "link-f6g7h8i9j0",
 *   lockToken: "c2VxPTQy"
 * };
 * const command = new PutLinkFlowsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayId: "rtb-gw-a1b2c3d4e5",
 *   linkId: "link-f6g7h8i9j0",
 *   status: "PENDING_UPDATE",
 *   updateId: "update-1a2b3c4d5e6f"
 * }
 * *\/
 * ```
 *
 * @example Run enrichment modules concurrently in a phased flow
 * ```javascript
 * // Filters first, then runs two enrichment modules at the same time. The second phase costs the slower of the two modules rather than their sum. Both enrichment modules fail open, so a slow vendor drops its enrichment instead of losing the bid.
 * const input = {
 *   clientToken: "6b1d84f2-0a97-4e53-b8c1-3d5f7a2e9048",
 *   flows: [
 *     {
 *       name: "default",
 *       pipeline: {
 *         phased: {
 *           phases: [
 *             {
 *               modules: [
 *                 {
 *                   configurationValues: `{"filterType":"INCLUDE","filterConfiguration":[{"criteria":[{"path":"$.device.geo.country","values":["USA"]}]}]}`,
 *                   failureMode: "CLOSED",
 *                   moduleVersionArn: "arn:aws:rtbfabric:us-east-1::modules/module-openrtbAttributeFilter/versions/2.0.0",
 *                   name: "GeoFilter"
 *                 }
 *               ]
 *             },
 *             {
 *               modules: [
 *                 {
 *                   configurationValues: `{"threshold":0.7}`,
 *                   failureMode: "OPEN",
 *                   moduleVersionArn: "arn:aws:rtbfabric:us-east-1::modules/module-0a1b2c3d4e5f/versions/1.0.0",
 *                   name: "IVTDetection"
 *                 },
 *                 {
 *                   failureMode: "OPEN",
 *                   moduleVersionArn: "arn:aws:rtbfabric:us-east-1::modules/module-9f8e7d6c5b4a/versions/1.0.0",
 *                   name: "Viewability"
 *                 }
 *               ]
 *             }
 *           ]
 *         }
 *       }
 *     }
 *   ],
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   lockToken: "lt-7f3a9c2e1b"
 * };
 * const command = new PutLinkFlowsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   status: "PENDING_UPDATE",
 *   updateId: "update-4d5e6f7a8b9c"
 * }
 * *\/
 * ```
 *
 * @example Detach every module from a link
 * ```javascript
 * // Puts an empty set of flows. There is no separate detach operation: removal is expressed by putting the flows the caller wants to keep, and keeping none removes all of them.
 * const input = {
 *   clientToken: "9c4e2a71-5d38-4b0f-8e62-7f1a4c9d3b05",
 *   flows:   [],
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   lockToken: "lt-7f3a9c2e1b"
 * };
 * const command = new PutLinkFlowsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   gatewayId: "rtb-gw-12345678",
 *   linkId: "link-87654321",
 *   status: "PENDING_UPDATE",
 *   updateId: "update-7a8b9c1d2e3f"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutLinkFlowsCommand extends command<PutLinkFlowsCommandInput, PutLinkFlowsCommandOutput>(
  _ep0,
  _mw0,
  "PutLinkFlows",
  PutLinkFlows$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutLinkFlowsRequest;
      output: PutLinkFlowsResponse;
    };
    sdk: {
      input: PutLinkFlowsCommandInput;
      output: PutLinkFlowsCommandOutput;
    };
  };
}
