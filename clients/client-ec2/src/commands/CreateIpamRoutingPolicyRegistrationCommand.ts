// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateIpamRoutingPolicyRegistrationRequest,
  CreateIpamRoutingPolicyRegistrationResult,
} from "../models/models_1";
import { CreateIpamRoutingPolicyRegistration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIpamRoutingPolicyRegistrationCommand}.
 */
export interface CreateIpamRoutingPolicyRegistrationCommandInput extends CreateIpamRoutingPolicyRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link CreateIpamRoutingPolicyRegistrationCommand}.
 */
export interface CreateIpamRoutingPolicyRegistrationCommandOutput extends CreateIpamRoutingPolicyRegistrationResult, __MetadataBearer {}

/**
 * <p>Creates a routing policy registration and publishes Route Origin Authorizations (ROAs) to the RPKI for the specified CIDR prefix and ASNs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateIpamRoutingPolicyRegistrationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateIpamRoutingPolicyRegistrationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateIpamRoutingPolicyRegistrationRequest
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
 * const command = new CreateIpamRoutingPolicyRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // CreateIpamRoutingPolicyRegistrationResult
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
 * @param CreateIpamRoutingPolicyRegistrationCommandInput - {@link CreateIpamRoutingPolicyRegistrationCommandInput}
 * @returns {@link CreateIpamRoutingPolicyRegistrationCommandOutput}
 * @see {@link CreateIpamRoutingPolicyRegistrationCommandInput} for command's `input` shape.
 * @see {@link CreateIpamRoutingPolicyRegistrationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateIpamRoutingPolicyRegistrationCommand extends command<CreateIpamRoutingPolicyRegistrationCommandInput, CreateIpamRoutingPolicyRegistrationCommandOutput>(
  _ep0,
  _mw0,
  "CreateIpamRoutingPolicyRegistration",
  CreateIpamRoutingPolicyRegistration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIpamRoutingPolicyRegistrationRequest;
      output: CreateIpamRoutingPolicyRegistrationResult;
    };
    sdk: {
      input: CreateIpamRoutingPolicyRegistrationCommandInput;
      output: CreateIpamRoutingPolicyRegistrationCommandOutput;
    };
  };
}
