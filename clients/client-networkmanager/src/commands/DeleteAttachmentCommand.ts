// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAttachmentRequest, DeleteAttachmentResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_DeleteAttachmentCommand, se_DeleteAttachmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAttachmentCommand}.
 */
export interface DeleteAttachmentCommandInput extends DeleteAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAttachmentCommand}.
 */
export interface DeleteAttachmentCommandOutput extends DeleteAttachmentResponse, __MetadataBearer {}

/**
 * <p>Deletes an attachment. Supports all attachment types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeleteAttachmentCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeleteAttachmentCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // DeleteAttachmentRequest
 *   AttachmentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAttachmentResponse
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
 * //         Code: "VPC_NOT_FOUND" || "SUBNET_NOT_FOUND" || "SUBNET_DUPLICATED_IN_AVAILABILITY_ZONE" || "SUBNET_NO_FREE_ADDRESSES" || "SUBNET_UNSUPPORTED_AVAILABILITY_ZONE" || "SUBNET_NO_IPV6_CIDRS" || "VPN_CONNECTION_NOT_FOUND" || "MAXIMUM_NO_ENCAP_LIMIT_EXCEEDED" || "DIRECT_CONNECT_GATEWAY_NOT_FOUND" || "DIRECT_CONNECT_GATEWAY_EXISTING_ATTACHMENTS" || "DIRECT_CONNECT_GATEWAY_NO_PRIVATE_VIF",
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
 * @param DeleteAttachmentCommandInput - {@link DeleteAttachmentCommandInput}
 * @returns {@link DeleteAttachmentCommandOutput}
 * @see {@link DeleteAttachmentCommandInput} for command's `input` shape.
 * @see {@link DeleteAttachmentCommandOutput} for command's `response` shape.
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
export class DeleteAttachmentCommand extends $Command
  .classBuilder<
    DeleteAttachmentCommandInput,
    DeleteAttachmentCommandOutput,
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
  .s("NetworkManager", "DeleteAttachment", {})
  .n("NetworkManagerClient", "DeleteAttachmentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAttachmentCommand)
  .de(de_DeleteAttachmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAttachmentRequest;
      output: DeleteAttachmentResponse;
    };
    sdk: {
      input: DeleteAttachmentCommandInput;
      output: DeleteAttachmentCommandOutput;
    };
  };
}
