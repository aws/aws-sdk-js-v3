// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetCoreNetworkChangeEventsRequest, GetCoreNetworkChangeEventsResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_GetCoreNetworkChangeEventsCommand, se_GetCoreNetworkChangeEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCoreNetworkChangeEventsCommand}.
 */
export interface GetCoreNetworkChangeEventsCommandInput extends GetCoreNetworkChangeEventsRequest {}
/**
 * @public
 *
 * The output of {@link GetCoreNetworkChangeEventsCommand}.
 */
export interface GetCoreNetworkChangeEventsCommandOutput extends GetCoreNetworkChangeEventsResponse, __MetadataBearer {}

/**
 * <p>Returns information about a core network change event.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetCoreNetworkChangeEventsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetCoreNetworkChangeEventsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // GetCoreNetworkChangeEventsRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   PolicyVersionId: Number("int"), // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetCoreNetworkChangeEventsCommand(input);
 * const response = await client.send(command);
 * // { // GetCoreNetworkChangeEventsResponse
 * //   CoreNetworkChangeEvents: [ // CoreNetworkChangeEventList
 * //     { // CoreNetworkChangeEvent
 * //       Type: "CORE_NETWORK_SEGMENT" || "NETWORK_FUNCTION_GROUP" || "CORE_NETWORK_EDGE" || "ATTACHMENT_MAPPING" || "ATTACHMENT_ROUTE_PROPAGATION" || "ATTACHMENT_ROUTE_STATIC" || "CORE_NETWORK_CONFIGURATION" || "SEGMENTS_CONFIGURATION" || "SEGMENT_ACTIONS_CONFIGURATION" || "ATTACHMENT_POLICIES_CONFIGURATION",
 * //       Action: "ADD" || "MODIFY" || "REMOVE",
 * //       IdentifierPath: "STRING_VALUE",
 * //       EventTime: new Date("TIMESTAMP"),
 * //       Status: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETE" || "FAILED",
 * //       Values: { // CoreNetworkChangeEventValues
 * //         EdgeLocation: "STRING_VALUE",
 * //         SegmentName: "STRING_VALUE",
 * //         NetworkFunctionGroupName: "STRING_VALUE",
 * //         AttachmentId: "STRING_VALUE",
 * //         Cidr: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCoreNetworkChangeEventsCommandInput - {@link GetCoreNetworkChangeEventsCommandInput}
 * @returns {@link GetCoreNetworkChangeEventsCommandOutput}
 * @see {@link GetCoreNetworkChangeEventsCommandInput} for command's `input` shape.
 * @see {@link GetCoreNetworkChangeEventsCommandOutput} for command's `response` shape.
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
export class GetCoreNetworkChangeEventsCommand extends $Command
  .classBuilder<
    GetCoreNetworkChangeEventsCommandInput,
    GetCoreNetworkChangeEventsCommandOutput,
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
  .s("NetworkManager", "GetCoreNetworkChangeEvents", {})
  .n("NetworkManagerClient", "GetCoreNetworkChangeEventsCommand")
  .f(void 0, void 0)
  .ser(se_GetCoreNetworkChangeEventsCommand)
  .de(de_GetCoreNetworkChangeEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCoreNetworkChangeEventsRequest;
      output: GetCoreNetworkChangeEventsResponse;
    };
    sdk: {
      input: GetCoreNetworkChangeEventsCommandInput;
      output: GetCoreNetworkChangeEventsCommandOutput;
    };
  };
}
