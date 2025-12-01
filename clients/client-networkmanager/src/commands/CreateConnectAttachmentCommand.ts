// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateConnectAttachmentRequest, CreateConnectAttachmentResponse } from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { CreateConnectAttachment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectAttachmentCommand}.
 */
export interface CreateConnectAttachmentCommandInput extends CreateConnectAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectAttachmentCommand}.
 */
export interface CreateConnectAttachmentCommandOutput extends CreateConnectAttachmentResponse, __MetadataBearer {}

/**
 * <p>Creates a core network Connect attachment from a specified core network attachment. </p>
 *          <p>A core network Connect attachment is a GRE-based tunnel attachment that you can use to
 *          establish a connection between a core network and an appliance. A core network Connect
 *          attachment uses an existing VPC attachment as the underlying transport mechanism.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateConnectAttachmentCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateConnectAttachmentCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // CreateConnectAttachmentRequest
 *   CoreNetworkId: "STRING_VALUE", // required
 *   EdgeLocation: "STRING_VALUE", // required
 *   TransportAttachmentId: "STRING_VALUE", // required
 *   RoutingPolicyLabel: "STRING_VALUE",
 *   Options: { // ConnectAttachmentOptions
 *     Protocol: "GRE" || "NO_ENCAP",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateConnectAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectAttachmentResponse
 * //   ConnectAttachment: { // ConnectAttachment
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
 * //     TransportAttachmentId: "STRING_VALUE",
 * //     Options: { // ConnectAttachmentOptions
 * //       Protocol: "GRE" || "NO_ENCAP",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateConnectAttachmentCommandInput - {@link CreateConnectAttachmentCommandInput}
 * @returns {@link CreateConnectAttachmentCommandOutput}
 * @see {@link CreateConnectAttachmentCommandInput} for command's `input` shape.
 * @see {@link CreateConnectAttachmentCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
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
export class CreateConnectAttachmentCommand extends $Command
  .classBuilder<
    CreateConnectAttachmentCommandInput,
    CreateConnectAttachmentCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "CreateConnectAttachment", {})
  .n("NetworkManagerClient", "CreateConnectAttachmentCommand")
  .sc(CreateConnectAttachment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectAttachmentRequest;
      output: CreateConnectAttachmentResponse;
    };
    sdk: {
      input: CreateConnectAttachmentCommandInput;
      output: CreateConnectAttachmentCommandOutput;
    };
  };
}
