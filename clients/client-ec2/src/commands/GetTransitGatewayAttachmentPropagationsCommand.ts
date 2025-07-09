// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetTransitGatewayAttachmentPropagationsRequest,
  GetTransitGatewayAttachmentPropagationsResult,
} from "../models/models_7";
import {
  de_GetTransitGatewayAttachmentPropagationsCommand,
  se_GetTransitGatewayAttachmentPropagationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayAttachmentPropagationsCommand}.
 */
export interface GetTransitGatewayAttachmentPropagationsCommandInput
  extends GetTransitGatewayAttachmentPropagationsRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayAttachmentPropagationsCommand}.
 */
export interface GetTransitGatewayAttachmentPropagationsCommandOutput
  extends GetTransitGatewayAttachmentPropagationsResult,
    __MetadataBearer {}

/**
 * <p>Lists the route tables to which the specified resource attachment propagates routes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayAttachmentPropagationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayAttachmentPropagationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetTransitGatewayAttachmentPropagationsRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetTransitGatewayAttachmentPropagationsCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayAttachmentPropagationsResult
 * //   TransitGatewayAttachmentPropagations: [ // TransitGatewayAttachmentPropagationList
 * //     { // TransitGatewayAttachmentPropagation
 * //       TransitGatewayRouteTableId: "STRING_VALUE",
 * //       State: "enabling" || "enabled" || "disabling" || "disabled",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayAttachmentPropagationsCommandInput - {@link GetTransitGatewayAttachmentPropagationsCommandInput}
 * @returns {@link GetTransitGatewayAttachmentPropagationsCommandOutput}
 * @see {@link GetTransitGatewayAttachmentPropagationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayAttachmentPropagationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetTransitGatewayAttachmentPropagationsCommand extends $Command
  .classBuilder<
    GetTransitGatewayAttachmentPropagationsCommandInput,
    GetTransitGatewayAttachmentPropagationsCommandOutput,
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
  .s("AmazonEC2", "GetTransitGatewayAttachmentPropagations", {})
  .n("EC2Client", "GetTransitGatewayAttachmentPropagationsCommand")
  .f(void 0, void 0)
  .ser(se_GetTransitGatewayAttachmentPropagationsCommand)
  .de(de_GetTransitGatewayAttachmentPropagationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTransitGatewayAttachmentPropagationsRequest;
      output: GetTransitGatewayAttachmentPropagationsResult;
    };
    sdk: {
      input: GetTransitGatewayAttachmentPropagationsCommandInput;
      output: GetTransitGatewayAttachmentPropagationsCommandOutput;
    };
  };
}
