// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateTransitGatewayPolicyTableEntryRequest,
  CreateTransitGatewayPolicyTableEntryResult,
} from "../models/models_2";
import { CreateTransitGatewayPolicyTableEntry$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTransitGatewayPolicyTableEntryCommand}.
 */
export interface CreateTransitGatewayPolicyTableEntryCommandInput extends CreateTransitGatewayPolicyTableEntryRequest {}
/**
 * @public
 *
 * The output of {@link CreateTransitGatewayPolicyTableEntryCommand}.
 */
export interface CreateTransitGatewayPolicyTableEntryCommandOutput extends CreateTransitGatewayPolicyTableEntryResult, __MetadataBearer {}

/**
 * <p>Creates an entry in a transit gateway policy table to route matching traffic to a specified route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayPolicyTableEntryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayPolicyTableEntryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateTransitGatewayPolicyTableEntryRequest
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
 *   TargetRouteTableId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new CreateTransitGatewayPolicyTableEntryCommand(input);
 * const response = await client.send(command);
 * // { // CreateTransitGatewayPolicyTableEntryResult
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
 * @param CreateTransitGatewayPolicyTableEntryCommandInput - {@link CreateTransitGatewayPolicyTableEntryCommandInput}
 * @returns {@link CreateTransitGatewayPolicyTableEntryCommandOutput}
 * @see {@link CreateTransitGatewayPolicyTableEntryCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayPolicyTableEntryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateTransitGatewayPolicyTableEntryCommand extends command<CreateTransitGatewayPolicyTableEntryCommandInput, CreateTransitGatewayPolicyTableEntryCommandOutput>(
  _ep0,
  _mw0,
  "CreateTransitGatewayPolicyTableEntry",
  CreateTransitGatewayPolicyTableEntry$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTransitGatewayPolicyTableEntryRequest;
      output: CreateTransitGatewayPolicyTableEntryResult;
    };
    sdk: {
      input: CreateTransitGatewayPolicyTableEntryCommandInput;
      output: CreateTransitGatewayPolicyTableEntryCommandOutput;
    };
  };
}
