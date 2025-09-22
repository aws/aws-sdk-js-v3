// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeDirectConnectGatewayAttachmentsRequest,
  DescribeDirectConnectGatewayAttachmentsResult,
} from "../models/models_0";
import { DescribeDirectConnectGatewayAttachments } from "../schemas/schemas_1_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDirectConnectGatewayAttachmentsCommand}.
 */
export interface DescribeDirectConnectGatewayAttachmentsCommandInput
  extends DescribeDirectConnectGatewayAttachmentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDirectConnectGatewayAttachmentsCommand}.
 */
export interface DescribeDirectConnectGatewayAttachmentsCommandOutput
  extends DescribeDirectConnectGatewayAttachmentsResult,
    __MetadataBearer {}

/**
 * <p>Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify
 *       a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains
 *       all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the
 *       response contains all Direct Connect gateways attached to the virtual interface. If you specify both,
 *       the response contains the attachment between the Direct Connect gateway and the virtual interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeDirectConnectGatewayAttachmentsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeDirectConnectGatewayAttachmentsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DescribeDirectConnectGatewayAttachmentsRequest
 *   directConnectGatewayId: "STRING_VALUE",
 *   virtualInterfaceId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeDirectConnectGatewayAttachmentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDirectConnectGatewayAttachmentsResult
 * //   directConnectGatewayAttachments: [ // DirectConnectGatewayAttachmentList
 * //     { // DirectConnectGatewayAttachment
 * //       directConnectGatewayId: "STRING_VALUE",
 * //       virtualInterfaceId: "STRING_VALUE",
 * //       virtualInterfaceRegion: "STRING_VALUE",
 * //       virtualInterfaceOwnerAccount: "STRING_VALUE",
 * //       attachmentState: "attaching" || "attached" || "detaching" || "detached",
 * //       attachmentType: "TransitVirtualInterface" || "PrivateVirtualInterface",
 * //       stateChangeError: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDirectConnectGatewayAttachmentsCommandInput - {@link DescribeDirectConnectGatewayAttachmentsCommandInput}
 * @returns {@link DescribeDirectConnectGatewayAttachmentsCommandOutput}
 * @see {@link DescribeDirectConnectGatewayAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectConnectGatewayAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class DescribeDirectConnectGatewayAttachmentsCommand extends $Command
  .classBuilder<
    DescribeDirectConnectGatewayAttachmentsCommandInput,
    DescribeDirectConnectGatewayAttachmentsCommandOutput,
    DirectConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OvertureService", "DescribeDirectConnectGatewayAttachments", {})
  .n("DirectConnectClient", "DescribeDirectConnectGatewayAttachmentsCommand")
  .sc(DescribeDirectConnectGatewayAttachments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDirectConnectGatewayAttachmentsRequest;
      output: DescribeDirectConnectGatewayAttachmentsResult;
    };
    sdk: {
      input: DescribeDirectConnectGatewayAttachmentsCommandInput;
      output: DescribeDirectConnectGatewayAttachmentsCommandOutput;
    };
  };
}
