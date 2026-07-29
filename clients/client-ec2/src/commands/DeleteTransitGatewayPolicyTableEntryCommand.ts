// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteTransitGatewayPolicyTableEntryRequest,
  DeleteTransitGatewayPolicyTableEntryResult,
} from "../models/models_3";
import { DeleteTransitGatewayPolicyTableEntry$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayPolicyTableEntryCommand}.
 */
export interface DeleteTransitGatewayPolicyTableEntryCommandInput extends DeleteTransitGatewayPolicyTableEntryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayPolicyTableEntryCommand}.
 */
export interface DeleteTransitGatewayPolicyTableEntryCommandOutput extends DeleteTransitGatewayPolicyTableEntryResult, __MetadataBearer {}

/**
 * <p>Deletes the specified transit gateway policy table entry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayPolicyTableEntryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayPolicyTableEntryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayPolicyTableEntryRequest
 *   TransitGatewayPolicyTableId: "STRING_VALUE", // required
 *   PolicyRuleNumber: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayPolicyTableEntryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayPolicyTableEntryResult
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
 * @param DeleteTransitGatewayPolicyTableEntryCommandInput - {@link DeleteTransitGatewayPolicyTableEntryCommandInput}
 * @returns {@link DeleteTransitGatewayPolicyTableEntryCommandOutput}
 * @see {@link DeleteTransitGatewayPolicyTableEntryCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayPolicyTableEntryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteTransitGatewayPolicyTableEntryCommand extends command<DeleteTransitGatewayPolicyTableEntryCommandInput, DeleteTransitGatewayPolicyTableEntryCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTransitGatewayPolicyTableEntry",
  DeleteTransitGatewayPolicyTableEntry$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTransitGatewayPolicyTableEntryRequest;
      output: DeleteTransitGatewayPolicyTableEntryResult;
    };
    sdk: {
      input: DeleteTransitGatewayPolicyTableEntryCommandInput;
      output: DeleteTransitGatewayPolicyTableEntryCommandOutput;
    };
  };
}
