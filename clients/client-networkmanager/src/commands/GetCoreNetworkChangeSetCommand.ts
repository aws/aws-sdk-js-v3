// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetCoreNetworkChangeSetRequest, GetCoreNetworkChangeSetResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_GetCoreNetworkChangeSetCommand, se_GetCoreNetworkChangeSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCoreNetworkChangeSetCommand}.
 */
export interface GetCoreNetworkChangeSetCommandInput extends GetCoreNetworkChangeSetRequest {}
/**
 * @public
 *
 * The output of {@link GetCoreNetworkChangeSetCommand}.
 */
export interface GetCoreNetworkChangeSetCommandOutput extends GetCoreNetworkChangeSetResponse, __MetadataBearer {}

/**
 * <p>Returns a change set between the LIVE core network policy and a submitted policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetCoreNetworkChangeSetCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetCoreNetworkChangeSetCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // GetCoreNetworkChangeSetRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   PolicyVersionId: Number("int"), // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetCoreNetworkChangeSetCommand(input);
 * const response = await client.send(command);
 * // { // GetCoreNetworkChangeSetResponse
 * //   CoreNetworkChanges: [ // CoreNetworkChangeList
 * //     { // CoreNetworkChange
 * //       Type: "CORE_NETWORK_SEGMENT" || "NETWORK_FUNCTION_GROUP" || "CORE_NETWORK_EDGE" || "ATTACHMENT_MAPPING" || "ATTACHMENT_ROUTE_PROPAGATION" || "ATTACHMENT_ROUTE_STATIC" || "CORE_NETWORK_CONFIGURATION" || "SEGMENTS_CONFIGURATION" || "SEGMENT_ACTIONS_CONFIGURATION" || "ATTACHMENT_POLICIES_CONFIGURATION",
 * //       Action: "ADD" || "MODIFY" || "REMOVE",
 * //       Identifier: "STRING_VALUE",
 * //       PreviousValues: { // CoreNetworkChangeValues
 * //         SegmentName: "STRING_VALUE",
 * //         NetworkFunctionGroupName: "STRING_VALUE",
 * //         EdgeLocations: [ // ExternalRegionCodeList
 * //           "STRING_VALUE",
 * //         ],
 * //         Asn: Number("long"),
 * //         Cidr: "STRING_VALUE",
 * //         DestinationIdentifier: "STRING_VALUE",
 * //         InsideCidrBlocks: [ // ConstrainedStringList
 * //           "STRING_VALUE",
 * //         ],
 * //         SharedSegments: [
 * //           "STRING_VALUE",
 * //         ],
 * //         ServiceInsertionActions: [ // ServiceInsertionActionList
 * //           { // ServiceInsertionAction
 * //             Action: "send-via" || "send-to",
 * //             Mode: "dual-hop" || "single-hop",
 * //             WhenSentTo: { // WhenSentTo
 * //               WhenSentToSegmentsList: [ // WhenSentToSegmentsList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             Via: { // Via
 * //               NetworkFunctionGroups: [ // NetworkFunctionGroupList
 * //                 { // NetworkFunctionGroup
 * //                   Name: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               WithEdgeOverrides: [ // WithEdgeOverridesList
 * //                 { // EdgeOverride
 * //                   EdgeSets: [ // EdgeSetList
 * //                     [ // EdgeSet
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   ],
 * //                   UseEdge: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       NewValues: {
 * //         SegmentName: "STRING_VALUE",
 * //         NetworkFunctionGroupName: "STRING_VALUE",
 * //         EdgeLocations: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Asn: Number("long"),
 * //         Cidr: "STRING_VALUE",
 * //         DestinationIdentifier: "STRING_VALUE",
 * //         InsideCidrBlocks: [
 * //           "STRING_VALUE",
 * //         ],
 * //         SharedSegments: [
 * //           "STRING_VALUE",
 * //         ],
 * //         ServiceInsertionActions: [
 * //           {
 * //             Action: "send-via" || "send-to",
 * //             Mode: "dual-hop" || "single-hop",
 * //             WhenSentTo: {
 * //               WhenSentToSegmentsList: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             Via: {
 * //               NetworkFunctionGroups: [
 * //                 {
 * //                   Name: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               WithEdgeOverrides: [
 * //                 {
 * //                   EdgeSets: [
 * //                     [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                   ],
 * //                   UseEdge: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       IdentifierPath: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCoreNetworkChangeSetCommandInput - {@link GetCoreNetworkChangeSetCommandInput}
 * @returns {@link GetCoreNetworkChangeSetCommandOutput}
 * @see {@link GetCoreNetworkChangeSetCommandInput} for command's `input` shape.
 * @see {@link GetCoreNetworkChangeSetCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 *
 * @public
 */
export class GetCoreNetworkChangeSetCommand extends $Command
  .classBuilder<
    GetCoreNetworkChangeSetCommandInput,
    GetCoreNetworkChangeSetCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "GetCoreNetworkChangeSet", {})
  .n("NetworkManagerClient", "GetCoreNetworkChangeSetCommand")
  .f(void 0, void 0)
  .ser(se_GetCoreNetworkChangeSetCommand)
  .de(de_GetCoreNetworkChangeSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCoreNetworkChangeSetRequest;
      output: GetCoreNetworkChangeSetResponse;
    };
    sdk: {
      input: GetCoreNetworkChangeSetCommandInput;
      output: GetCoreNetworkChangeSetCommandOutput;
    };
  };
}
