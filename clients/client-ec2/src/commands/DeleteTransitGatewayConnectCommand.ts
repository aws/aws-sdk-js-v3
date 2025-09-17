// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTransitGatewayConnectRequest, DeleteTransitGatewayConnectResult } from "../models/models_3";
import { de_DeleteTransitGatewayConnectCommand, se_DeleteTransitGatewayConnectCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayConnectCommand}.
 */
export interface DeleteTransitGatewayConnectCommandInput extends DeleteTransitGatewayConnectRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayConnectCommand}.
 */
export interface DeleteTransitGatewayConnectCommandOutput extends DeleteTransitGatewayConnectResult, __MetadataBearer {}

/**
 * <p>Deletes the specified Connect attachment. You must first delete any Connect peers for
 *             the attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayConnectCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayConnectCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayConnectRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayConnectCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayConnectResult
 * //   TransitGatewayConnect: { // TransitGatewayConnect
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     TransportTransitGatewayAttachmentId: "STRING_VALUE",
 * //     TransitGatewayId: "STRING_VALUE",
 * //     State: "initiating" || "initiatingRequest" || "pendingAcceptance" || "rollingBack" || "pending" || "available" || "modifying" || "deleting" || "deleted" || "failed" || "rejected" || "rejecting" || "failing",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Options: { // TransitGatewayConnectOptions
 * //       Protocol: "gre",
 * //     },
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteTransitGatewayConnectCommandInput - {@link DeleteTransitGatewayConnectCommandInput}
 * @returns {@link DeleteTransitGatewayConnectCommandOutput}
 * @see {@link DeleteTransitGatewayConnectCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayConnectCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteTransitGatewayConnectCommand extends $Command
  .classBuilder<
    DeleteTransitGatewayConnectCommandInput,
    DeleteTransitGatewayConnectCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DeleteTransitGatewayConnect", {})
  .n("EC2Client", "DeleteTransitGatewayConnectCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTransitGatewayConnectCommand)
  .de(de_DeleteTransitGatewayConnectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTransitGatewayConnectRequest;
      output: DeleteTransitGatewayConnectResult;
    };
    sdk: {
      input: DeleteTransitGatewayConnectCommandInput;
      output: DeleteTransitGatewayConnectCommandOutput;
    };
  };
}
