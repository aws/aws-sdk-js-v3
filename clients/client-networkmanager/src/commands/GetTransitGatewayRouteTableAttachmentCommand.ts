// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetTransitGatewayRouteTableAttachmentRequest,
  GetTransitGatewayRouteTableAttachmentResponse,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { GetTransitGatewayRouteTableAttachment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayRouteTableAttachmentCommand}.
 */
export interface GetTransitGatewayRouteTableAttachmentCommandInput
  extends GetTransitGatewayRouteTableAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayRouteTableAttachmentCommand}.
 */
export interface GetTransitGatewayRouteTableAttachmentCommandOutput
  extends GetTransitGatewayRouteTableAttachmentResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about a transit gateway route table attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetTransitGatewayRouteTableAttachmentCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetTransitGatewayRouteTableAttachmentCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // GetTransitGatewayRouteTableAttachmentRequest
 *   AttachmentId: "STRING_VALUE", // required
 * };
 * const command = new GetTransitGatewayRouteTableAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayRouteTableAttachmentResponse
 * //   TransitGatewayRouteTableAttachment: { // TransitGatewayRouteTableAttachment
 * //     Attachment: { // Attachment
 * //       CoreNetworkId: "STRING_VALUE",
 * //       CoreNetworkArn: "STRING_VALUE",
 * //       AttachmentId: "STRING_VALUE",
 * //       OwnerAccountId: "STRING_VALUE",
 * //       AttachmentType: "CONNECT" || "SITE_TO_SITE_VPN" || "VPC" || "DIRECT_CONNECT_GATEWAY" || "TRANSIT_GATEWAY_ROUTE_TABLE",
 * //       State: "REJECTED" || "PENDING_ATTACHMENT_ACCEPTANCE" || "CREATING" || "FAILED" || "AVAILABLE" || "UPDATING" || "PENDING_NETWORK_UPDATE" || "PENDING_TAG_ACCEPTANCE" || "DELETING",
 * //       EdgeLocation: "STRING_VALUE",
 * //       EdgeLocations: [ // ExternalRegionCodeList
 * //         "STRING_VALUE",
 * //       ],
 * //       ResourceArn: "STRING_VALUE",
 * //       AttachmentPolicyRuleNumber: Number("int"),
 * //       SegmentName: "STRING_VALUE",
 * //       NetworkFunctionGroupName: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ProposedSegmentChange: { // ProposedSegmentChange
 * //         Tags: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         AttachmentPolicyRuleNumber: Number("int"),
 * //         SegmentName: "STRING_VALUE",
 * //       },
 * //       ProposedNetworkFunctionGroupChange: { // ProposedNetworkFunctionGroupChange
 * //         Tags: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         AttachmentPolicyRuleNumber: Number("int"),
 * //         NetworkFunctionGroupName: "STRING_VALUE",
 * //       },
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       LastModificationErrors: [ // AttachmentErrorList
 * //         { // AttachmentError
 * //           Code: "VPC_NOT_FOUND" || "SUBNET_NOT_FOUND" || "SUBNET_DUPLICATED_IN_AVAILABILITY_ZONE" || "SUBNET_NO_FREE_ADDRESSES" || "SUBNET_UNSUPPORTED_AVAILABILITY_ZONE" || "SUBNET_NO_IPV6_CIDRS" || "VPN_CONNECTION_NOT_FOUND" || "MAXIMUM_NO_ENCAP_LIMIT_EXCEEDED" || "DIRECT_CONNECT_GATEWAY_NOT_FOUND" || "DIRECT_CONNECT_GATEWAY_EXISTING_ATTACHMENTS" || "DIRECT_CONNECT_GATEWAY_NO_PRIVATE_VIF" || "VPN_EXISTING_ASSOCIATIONS" || "VPC_UNSUPPORTED_FEATURES",
 * //           Message: "STRING_VALUE",
 * //           ResourceArn: "STRING_VALUE",
 * //           RequestId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     PeeringId: "STRING_VALUE",
 * //     TransitGatewayRouteTableArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayRouteTableAttachmentCommandInput - {@link GetTransitGatewayRouteTableAttachmentCommandInput}
 * @returns {@link GetTransitGatewayRouteTableAttachmentCommandOutput}
 * @see {@link GetTransitGatewayRouteTableAttachmentCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayRouteTableAttachmentCommandOutput} for command's `response` shape.
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
export class GetTransitGatewayRouteTableAttachmentCommand extends $Command
  .classBuilder<
    GetTransitGatewayRouteTableAttachmentCommandInput,
    GetTransitGatewayRouteTableAttachmentCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "GetTransitGatewayRouteTableAttachment", {})
  .n("NetworkManagerClient", "GetTransitGatewayRouteTableAttachmentCommand")
  .sc(GetTransitGatewayRouteTableAttachment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTransitGatewayRouteTableAttachmentRequest;
      output: GetTransitGatewayRouteTableAttachmentResponse;
    };
    sdk: {
      input: GetTransitGatewayRouteTableAttachmentCommandInput;
      output: GetTransitGatewayRouteTableAttachmentCommandOutput;
    };
  };
}
