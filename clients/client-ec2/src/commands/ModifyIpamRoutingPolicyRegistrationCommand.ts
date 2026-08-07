// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ModifyIpamRoutingPolicyRegistrationRequest,
  ModifyIpamRoutingPolicyRegistrationResult,
} from "../models/models_7";
import { ModifyIpamRoutingPolicyRegistration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyIpamRoutingPolicyRegistrationCommand}.
 */
export interface ModifyIpamRoutingPolicyRegistrationCommandInput extends ModifyIpamRoutingPolicyRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link ModifyIpamRoutingPolicyRegistrationCommand}.
 */
export interface ModifyIpamRoutingPolicyRegistrationCommandOutput extends ModifyIpamRoutingPolicyRegistrationResult, __MetadataBearer {}

/**
 * <p>Modifies an existing routing policy registration. You can update the authorized ASNs, maximum prefix length, and other properties of a Route Origin Authorization (ROA).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIpamRoutingPolicyRegistrationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIpamRoutingPolicyRegistrationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyIpamRoutingPolicyRegistrationRequest
 *   DryRun: true || false,
 *   IpamInternetRegistryAssociationId: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE", // required
 *   Asns: [ // AsnList // required
 *     "STRING_VALUE",
 *   ],
 *   PermitMoreSpecificAnnouncements: true || false,
 *   MaxLength: Number("int"),
 *   Description: "STRING_VALUE",
 *   Force: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new ModifyIpamRoutingPolicyRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyIpamRoutingPolicyRegistrationResult
 * //   IpamRoutingPolicyRegistrationDelta: { // IpamRoutingPolicyRegistrationDelta
 * //     DeltaId: "STRING_VALUE",
 * //     DeltaJson: "STRING_VALUE",
 * //     State: "pending" || "published" || "failed",
 * //     StateMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyIpamRoutingPolicyRegistrationCommandInput - {@link ModifyIpamRoutingPolicyRegistrationCommandInput}
 * @returns {@link ModifyIpamRoutingPolicyRegistrationCommandOutput}
 * @see {@link ModifyIpamRoutingPolicyRegistrationCommandInput} for command's `input` shape.
 * @see {@link ModifyIpamRoutingPolicyRegistrationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyIpamRoutingPolicyRegistrationCommand extends command<ModifyIpamRoutingPolicyRegistrationCommandInput, ModifyIpamRoutingPolicyRegistrationCommandOutput>(
  _ep0,
  _mw0,
  "ModifyIpamRoutingPolicyRegistration",
  ModifyIpamRoutingPolicyRegistration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyIpamRoutingPolicyRegistrationRequest;
      output: ModifyIpamRoutingPolicyRegistrationResult;
    };
    sdk: {
      input: ModifyIpamRoutingPolicyRegistrationCommandInput;
      output: ModifyIpamRoutingPolicyRegistrationCommandOutput;
    };
  };
}
