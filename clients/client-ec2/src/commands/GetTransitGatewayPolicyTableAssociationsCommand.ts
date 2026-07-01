// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetTransitGatewayPolicyTableAssociationsRequest,
  GetTransitGatewayPolicyTableAssociationsResult,
} from "../models/models_6";
import { GetTransitGatewayPolicyTableAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayPolicyTableAssociationsCommand}.
 */
export interface GetTransitGatewayPolicyTableAssociationsCommandInput extends GetTransitGatewayPolicyTableAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayPolicyTableAssociationsCommand}.
 */
export interface GetTransitGatewayPolicyTableAssociationsCommandOutput extends GetTransitGatewayPolicyTableAssociationsResult, __MetadataBearer {}

/**
 * <p>Gets a list of the transit gateway policy table associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayPolicyTableAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayPolicyTableAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetTransitGatewayPolicyTableAssociationsRequest
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
 * const command = new GetTransitGatewayPolicyTableAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayPolicyTableAssociationsResult
 * //   Associations: [ // TransitGatewayPolicyTableAssociationList
 * //     { // TransitGatewayPolicyTableAssociation
 * //       TransitGatewayPolicyTableId: "STRING_VALUE",
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function" || "client-vpn",
 * //       State: "associating" || "associated" || "disassociating" || "disassociated",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayPolicyTableAssociationsCommandInput - {@link GetTransitGatewayPolicyTableAssociationsCommandInput}
 * @returns {@link GetTransitGatewayPolicyTableAssociationsCommandOutput}
 * @see {@link GetTransitGatewayPolicyTableAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayPolicyTableAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetTransitGatewayPolicyTableAssociationsCommand extends command<GetTransitGatewayPolicyTableAssociationsCommandInput, GetTransitGatewayPolicyTableAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "GetTransitGatewayPolicyTableAssociations",
  GetTransitGatewayPolicyTableAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTransitGatewayPolicyTableAssociationsRequest;
      output: GetTransitGatewayPolicyTableAssociationsResult;
    };
    sdk: {
      input: GetTransitGatewayPolicyTableAssociationsCommandInput;
      output: GetTransitGatewayPolicyTableAssociationsCommandOutput;
    };
  };
}
