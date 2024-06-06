// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetTransitGatewayPolicyTableEntriesRequest,
  GetTransitGatewayPolicyTableEntriesResult,
} from "../models/models_6";
import {
  de_GetTransitGatewayPolicyTableEntriesCommand,
  se_GetTransitGatewayPolicyTableEntriesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayPolicyTableEntriesCommand}.
 */
export interface GetTransitGatewayPolicyTableEntriesCommandInput extends GetTransitGatewayPolicyTableEntriesRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayPolicyTableEntriesCommand}.
 */
export interface GetTransitGatewayPolicyTableEntriesCommandOutput
  extends GetTransitGatewayPolicyTableEntriesResult,
    __MetadataBearer {}

/**
 * <p>Returns a list of transit gateway policy table entries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayPolicyTableEntriesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayPolicyTableEntriesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetTransitGatewayPolicyTableEntriesRequest
 *   TransitGatewayPolicyTableId: "STRING_VALUE", // required
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
 * const command = new GetTransitGatewayPolicyTableEntriesCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayPolicyTableEntriesResult
 * //   TransitGatewayPolicyTableEntries: [ // TransitGatewayPolicyTableEntryList
 * //     { // TransitGatewayPolicyTableEntry
 * //       PolicyRuleNumber: "STRING_VALUE",
 * //       PolicyRule: { // TransitGatewayPolicyRule
 * //         SourceCidrBlock: "STRING_VALUE",
 * //         SourcePortRange: "STRING_VALUE",
 * //         DestinationCidrBlock: "STRING_VALUE",
 * //         DestinationPortRange: "STRING_VALUE",
 * //         Protocol: "STRING_VALUE",
 * //         MetaData: { // TransitGatewayPolicyRuleMetaData
 * //           MetaDataKey: "STRING_VALUE",
 * //           MetaDataValue: "STRING_VALUE",
 * //         },
 * //       },
 * //       TargetRouteTableId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayPolicyTableEntriesCommandInput - {@link GetTransitGatewayPolicyTableEntriesCommandInput}
 * @returns {@link GetTransitGatewayPolicyTableEntriesCommandOutput}
 * @see {@link GetTransitGatewayPolicyTableEntriesCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayPolicyTableEntriesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class GetTransitGatewayPolicyTableEntriesCommand extends $Command
  .classBuilder<
    GetTransitGatewayPolicyTableEntriesCommandInput,
    GetTransitGatewayPolicyTableEntriesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "GetTransitGatewayPolicyTableEntries", {})
  .n("EC2Client", "GetTransitGatewayPolicyTableEntriesCommand")
  .f(void 0, void 0)
  .ser(se_GetTransitGatewayPolicyTableEntriesCommand)
  .de(de_GetTransitGatewayPolicyTableEntriesCommand)
  .build() {}
