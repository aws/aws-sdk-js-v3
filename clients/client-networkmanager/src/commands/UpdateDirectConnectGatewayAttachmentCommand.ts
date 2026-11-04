// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateDirectConnectGatewayAttachmentRequest,
  UpdateDirectConnectGatewayAttachmentResponse,
} from "../models/models_0";
import { UpdateDirectConnectGatewayAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDirectConnectGatewayAttachmentCommand}.
 */
export interface UpdateDirectConnectGatewayAttachmentCommandInput extends UpdateDirectConnectGatewayAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDirectConnectGatewayAttachmentCommand}.
 */
export interface UpdateDirectConnectGatewayAttachmentCommandOutput extends UpdateDirectConnectGatewayAttachmentResponse, __MetadataBearer {}

/**
 * Updates the edge locations associated with an Amazon Web Services Direct Connect gateway attachment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateDirectConnectGatewayAttachmentCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateDirectConnectGatewayAttachmentCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // UpdateDirectConnectGatewayAttachmentRequest
 *   AttachmentId: "STRING_VALUE", // required
 *   EdgeLocations: [ // ExternalRegionCodeList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateDirectConnectGatewayAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDirectConnectGatewayAttachmentResponse
 * //   DirectConnectGatewayAttachment: { // DirectConnectGatewayAttachment
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
 * //       NatGatewaySupport: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING" || "PENDING_ATTACHMENT_ACCEPTANCE",
 * //       NatSystemRouteSupport: true || false,
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
 * //           Code: "VPC_NOT_FOUND" || "SUBNET_NOT_FOUND" || "SUBNET_DUPLICATED_IN_AVAILABILITY_ZONE" || "SUBNET_NO_FREE_ADDRESSES" || "SUBNET_UNSUPPORTED_AVAILABILITY_ZONE" || "SUBNET_NO_IPV6_CIDRS" || "SECURITY_GROUP_REFERENCING_UNSUPPORTED_AVAILABILITY_ZONE" || "VPN_CONNECTION_NOT_FOUND" || "MAXIMUM_NO_ENCAP_LIMIT_EXCEEDED" || "DIRECT_CONNECT_GATEWAY_NOT_FOUND" || "DIRECT_CONNECT_GATEWAY_EXISTING_ATTACHMENTS" || "DIRECT_CONNECT_GATEWAY_NO_PRIVATE_VIF" || "VPN_EXISTING_ASSOCIATIONS" || "VPN_STATIC_ROUTES_NAT_UNSUPPORTED" || "VPC_UNSUPPORTED_FEATURES" || "DIRECT_CONNECT_GATEWAY_TOPOLOGY_RESTRICTIONS" || "CREATION_FAILED" || "UPDATE_FAILED" || "DELETION_FAILED",
 * //           Message: "STRING_VALUE",
 * //           ResourceArn: "STRING_VALUE",
 * //           RequestId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     DirectConnectGatewayArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDirectConnectGatewayAttachmentCommandInput - {@link UpdateDirectConnectGatewayAttachmentCommandInput}
 * @returns {@link UpdateDirectConnectGatewayAttachmentCommandOutput}
 * @see {@link UpdateDirectConnectGatewayAttachmentCommandInput} for command's `input` shape.
 * @see {@link UpdateDirectConnectGatewayAttachmentCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict processing the request. Updating or deleting the resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints.
 *
 * @throws {@link NetworkManagerServiceException}
 *
 * Base exception class for all service exceptions from NetworkManager service.
 *
 * @public
 */
export class UpdateDirectConnectGatewayAttachmentCommand extends command<UpdateDirectConnectGatewayAttachmentCommandInput, UpdateDirectConnectGatewayAttachmentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDirectConnectGatewayAttachment",
  UpdateDirectConnectGatewayAttachment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDirectConnectGatewayAttachmentRequest;
      output: UpdateDirectConnectGatewayAttachmentResponse;
    };
    sdk: {
      input: UpdateDirectConnectGatewayAttachmentCommandInput;
      output: UpdateDirectConnectGatewayAttachmentCommandOutput;
    };
  };
}
