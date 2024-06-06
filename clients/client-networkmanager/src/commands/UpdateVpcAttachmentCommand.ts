// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateVpcAttachmentRequest, UpdateVpcAttachmentResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_UpdateVpcAttachmentCommand, se_UpdateVpcAttachmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateVpcAttachmentCommand}.
 */
export interface UpdateVpcAttachmentCommandInput extends UpdateVpcAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVpcAttachmentCommand}.
 */
export interface UpdateVpcAttachmentCommandOutput extends UpdateVpcAttachmentResponse, __MetadataBearer {}

/**
 * <p>Updates a VPC attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, UpdateVpcAttachmentCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, UpdateVpcAttachmentCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // UpdateVpcAttachmentRequest
 *   AttachmentId: "STRING_VALUE", // required
 *   AddSubnetArns: [ // SubnetArnList
 *     "STRING_VALUE",
 *   ],
 *   RemoveSubnetArns: [
 *     "STRING_VALUE",
 *   ],
 *   Options: { // VpcOptions
 *     Ipv6Support: true || false,
 *     ApplianceModeSupport: true || false,
 *   },
 * };
 * const command = new UpdateVpcAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVpcAttachmentResponse
 * //   VpcAttachment: { // VpcAttachment
 * //     Attachment: { // Attachment
 * //       CoreNetworkId: "STRING_VALUE",
 * //       CoreNetworkArn: "STRING_VALUE",
 * //       AttachmentId: "STRING_VALUE",
 * //       OwnerAccountId: "STRING_VALUE",
 * //       AttachmentType: "CONNECT" || "SITE_TO_SITE_VPN" || "VPC" || "TRANSIT_GATEWAY_ROUTE_TABLE",
 * //       State: "REJECTED" || "PENDING_ATTACHMENT_ACCEPTANCE" || "CREATING" || "FAILED" || "AVAILABLE" || "UPDATING" || "PENDING_NETWORK_UPDATE" || "PENDING_TAG_ACCEPTANCE" || "DELETING",
 * //       EdgeLocation: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       AttachmentPolicyRuleNumber: Number("int"),
 * //       SegmentName: "STRING_VALUE",
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
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //     SubnetArns: [ // SubnetArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     Options: { // VpcOptions
 * //       Ipv6Support: true || false,
 * //       ApplianceModeSupport: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateVpcAttachmentCommandInput - {@link UpdateVpcAttachmentCommandInput}
 * @returns {@link UpdateVpcAttachmentCommandOutput}
 * @see {@link UpdateVpcAttachmentCommandInput} for command's `input` shape.
 * @see {@link UpdateVpcAttachmentCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateVpcAttachmentCommand extends $Command
  .classBuilder<
    UpdateVpcAttachmentCommandInput,
    UpdateVpcAttachmentCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "UpdateVpcAttachment", {})
  .n("NetworkManagerClient", "UpdateVpcAttachmentCommand")
  .f(void 0, void 0)
  .ser(se_UpdateVpcAttachmentCommand)
  .de(de_UpdateVpcAttachmentCommand)
  .build() {}
