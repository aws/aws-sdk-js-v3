// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RejectAttachmentRequest, RejectAttachmentResponse } from "../models/models_0";
import type {
  NetworkManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkManagerClient";
import { RejectAttachment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectAttachmentCommand}.
 */
export interface RejectAttachmentCommandInput extends RejectAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link RejectAttachmentCommand}.
 */
export interface RejectAttachmentCommandOutput extends RejectAttachmentResponse, __MetadataBearer {}

/**
 * <p>Rejects a core network attachment request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, RejectAttachmentCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, RejectAttachmentCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // RejectAttachmentRequest
 *   AttachmentId: "STRING_VALUE", // required
 * };
 * const command = new RejectAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // RejectAttachmentResponse
 * //   Attachment: { // Attachment
 * //     CoreNetworkId: "STRING_VALUE",
 * //     CoreNetworkArn: "STRING_VALUE",
 * //     AttachmentId: "STRING_VALUE",
 * //     OwnerAccountId: "STRING_VALUE",
 * //     AttachmentType: "CONNECT" || "SITE_TO_SITE_VPN" || "VPC" || "DIRECT_CONNECT_GATEWAY" || "TRANSIT_GATEWAY_ROUTE_TABLE",
 * //     State: "REJECTED" || "PENDING_ATTACHMENT_ACCEPTANCE" || "CREATING" || "FAILED" || "AVAILABLE" || "UPDATING" || "PENDING_NETWORK_UPDATE" || "PENDING_TAG_ACCEPTANCE" || "DELETING",
 * //     EdgeLocation: "STRING_VALUE",
 * //     EdgeLocations: [ // ExternalRegionCodeList
 * //       "STRING_VALUE",
 * //     ],
 * //     ResourceArn: "STRING_VALUE",
 * //     AttachmentPolicyRuleNumber: Number("int"),
 * //     SegmentName: "STRING_VALUE",
 * //     NetworkFunctionGroupName: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ProposedSegmentChange: { // ProposedSegmentChange
 * //       Tags: [
 * //         {
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AttachmentPolicyRuleNumber: Number("int"),
 * //       SegmentName: "STRING_VALUE",
 * //     },
 * //     ProposedNetworkFunctionGroupChange: { // ProposedNetworkFunctionGroupChange
 * //       Tags: [
 * //         {
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AttachmentPolicyRuleNumber: Number("int"),
 * //       NetworkFunctionGroupName: "STRING_VALUE",
 * //     },
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     LastModificationErrors: [ // AttachmentErrorList
 * //       { // AttachmentError
 * //         Code: "VPC_NOT_FOUND" || "SUBNET_NOT_FOUND" || "SUBNET_DUPLICATED_IN_AVAILABILITY_ZONE" || "SUBNET_NO_FREE_ADDRESSES" || "SUBNET_UNSUPPORTED_AVAILABILITY_ZONE" || "SUBNET_NO_IPV6_CIDRS" || "VPN_CONNECTION_NOT_FOUND" || "MAXIMUM_NO_ENCAP_LIMIT_EXCEEDED" || "DIRECT_CONNECT_GATEWAY_NOT_FOUND" || "DIRECT_CONNECT_GATEWAY_EXISTING_ATTACHMENTS" || "DIRECT_CONNECT_GATEWAY_NO_PRIVATE_VIF" || "VPN_EXISTING_ASSOCIATIONS" || "VPC_UNSUPPORTED_FEATURES",
 * //         Message: "STRING_VALUE",
 * //         ResourceArn: "STRING_VALUE",
 * //         RequestId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param RejectAttachmentCommandInput - {@link RejectAttachmentCommandInput}
 * @returns {@link RejectAttachmentCommandOutput}
 * @see {@link RejectAttachmentCommandInput} for command's `input` shape.
 * @see {@link RejectAttachmentCommandOutput} for command's `response` shape.
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
export class RejectAttachmentCommand extends $Command
  .classBuilder<
    RejectAttachmentCommandInput,
    RejectAttachmentCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkManager", "RejectAttachment", {})
  .n("NetworkManagerClient", "RejectAttachmentCommand")
  .sc(RejectAttachment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectAttachmentRequest;
      output: RejectAttachmentResponse;
    };
    sdk: {
      input: RejectAttachmentCommandInput;
      output: RejectAttachmentCommandOutput;
    };
  };
}
