// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetIpamRoutingPolicyRegistrationsRequest,
  GetIpamRoutingPolicyRegistrationsResult,
} from "../models/models_6";
import { GetIpamRoutingPolicyRegistrations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIpamRoutingPolicyRegistrationsCommand}.
 */
export interface GetIpamRoutingPolicyRegistrationsCommandInput extends GetIpamRoutingPolicyRegistrationsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamRoutingPolicyRegistrationsCommand}.
 */
export interface GetIpamRoutingPolicyRegistrationsCommandOutput extends GetIpamRoutingPolicyRegistrationsResult, __MetadataBearer {}

/**
 * <p>Retrieves routing policy registrations for an IPAM internet registry association. Each registration represents a Route Origin Authorization (ROA) that has been created or is pending publication to the RPKI. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamRoutingPolicyRegistrationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamRoutingPolicyRegistrationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamRoutingPolicyRegistrationsRequest
 *   DryRun: true || false,
 *   IpamInternetRegistryAssociationId: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetIpamRoutingPolicyRegistrationsCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamRoutingPolicyRegistrationsResult
 * //   IpamRoutingPolicyRegistrations: [ // IpamRoutingPolicyRegistrationSet
 * //     { // IpamRoutingPolicyRegistration
 * //       Cidr: "STRING_VALUE",
 * //       Asns: [ // AsnList
 * //         "STRING_VALUE",
 * //       ],
 * //       PermitMoreSpecificAnnouncements: true || false,
 * //       MaxLength: Number("int"),
 * //       Description: "STRING_VALUE",
 * //       LatestDeltaId: "STRING_VALUE",
 * //       State: "pending-activate" || "activate-failed" || "create-in-progress" || "create-complete" || "update-in-progress" || "update-complete" || "delete-in-progress" || "delete-complete",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamRoutingPolicyRegistrationsCommandInput - {@link GetIpamRoutingPolicyRegistrationsCommandInput}
 * @returns {@link GetIpamRoutingPolicyRegistrationsCommandOutput}
 * @see {@link GetIpamRoutingPolicyRegistrationsCommandInput} for command's `input` shape.
 * @see {@link GetIpamRoutingPolicyRegistrationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamRoutingPolicyRegistrationsCommand extends command<GetIpamRoutingPolicyRegistrationsCommandInput, GetIpamRoutingPolicyRegistrationsCommandOutput>(
  _ep0,
  _mw0,
  "GetIpamRoutingPolicyRegistrations",
  GetIpamRoutingPolicyRegistrations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamRoutingPolicyRegistrationsRequest;
      output: GetIpamRoutingPolicyRegistrationsResult;
    };
    sdk: {
      input: GetIpamRoutingPolicyRegistrationsCommandInput;
      output: GetIpamRoutingPolicyRegistrationsCommandOutput;
    };
  };
}
