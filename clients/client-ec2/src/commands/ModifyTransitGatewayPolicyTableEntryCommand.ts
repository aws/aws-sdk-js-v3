// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ModifyTransitGatewayPolicyTableEntryRequest,
  ModifyTransitGatewayPolicyTableEntryResult,
} from "../models/models_7";
import { ModifyTransitGatewayPolicyTableEntry$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyTransitGatewayPolicyTableEntryCommand}.
 */
export interface ModifyTransitGatewayPolicyTableEntryCommandInput extends ModifyTransitGatewayPolicyTableEntryRequest {}
/**
 * @public
 *
 * The output of {@link ModifyTransitGatewayPolicyTableEntryCommand}.
 */
export interface ModifyTransitGatewayPolicyTableEntryCommandOutput extends ModifyTransitGatewayPolicyTableEntryResult, __MetadataBearer {}

/**
 * <p>Modifies the specified transit gateway policy table entry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTransitGatewayPolicyTableEntryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTransitGatewayPolicyTableEntryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyTransitGatewayPolicyTableEntryRequest
 *   TransitGatewayPolicyTableId: "STRING_VALUE", // required
 *   PolicyRuleNumber: "STRING_VALUE", // required
 *   PolicyRule: { // TransitGatewayRequestPolicyRule
 *     SourceCidrBlock: "STRING_VALUE",
 *     SourcePortRange: "STRING_VALUE",
 *     DestinationCidrBlock: "STRING_VALUE",
 *     DestinationPortRange: "STRING_VALUE",
 *     Protocol: "STRING_VALUE",
 *     MetaData: { // TransitGatewayRequestPolicyRuleMetaData
 *       MetaDataKey: "STRING_VALUE",
 *       MetaDataValue: "STRING_VALUE",
 *     },
 *   },
 *   TargetRouteTableId: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new ModifyTransitGatewayPolicyTableEntryCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTransitGatewayPolicyTableEntryResult
 * //   TransitGatewayPolicyTableEntry: { // TransitGatewayPolicyTableEntry
 * //     PolicyRuleNumber: "STRING_VALUE",
 * //     PolicyRule: { // TransitGatewayPolicyRule
 * //       SourceCidrBlock: "STRING_VALUE",
 * //       SourcePortRange: "STRING_VALUE",
 * //       DestinationCidrBlock: "STRING_VALUE",
 * //       DestinationPortRange: "STRING_VALUE",
 * //       Protocol: "STRING_VALUE",
 * //       MetaData: { // TransitGatewayPolicyRuleMetaData
 * //         MetaDataKey: "STRING_VALUE",
 * //         MetaDataValue: "STRING_VALUE",
 * //       },
 * //     },
 * //     TargetRouteTableId: "STRING_VALUE",
 * //     State: "active" || "deleted",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyTransitGatewayPolicyTableEntryCommandInput - {@link ModifyTransitGatewayPolicyTableEntryCommandInput}
 * @returns {@link ModifyTransitGatewayPolicyTableEntryCommandOutput}
 * @see {@link ModifyTransitGatewayPolicyTableEntryCommandInput} for command's `input` shape.
 * @see {@link ModifyTransitGatewayPolicyTableEntryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyTransitGatewayPolicyTableEntryCommand extends command<ModifyTransitGatewayPolicyTableEntryCommandInput, ModifyTransitGatewayPolicyTableEntryCommandOutput>(
  _ep0,
  _mw0,
  "ModifyTransitGatewayPolicyTableEntry",
  ModifyTransitGatewayPolicyTableEntry$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyTransitGatewayPolicyTableEntryRequest;
      output: ModifyTransitGatewayPolicyTableEntryResult;
    };
    sdk: {
      input: ModifyTransitGatewayPolicyTableEntryCommandInput;
      output: ModifyTransitGatewayPolicyTableEntryCommandOutput;
    };
  };
}
