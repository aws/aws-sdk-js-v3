// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteIpamRoutingPolicyRegistrationRequest,
  DeleteIpamRoutingPolicyRegistrationResult,
} from "../models/models_2";
import { DeleteIpamRoutingPolicyRegistration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIpamRoutingPolicyRegistrationCommand}.
 */
export interface DeleteIpamRoutingPolicyRegistrationCommandInput extends DeleteIpamRoutingPolicyRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIpamRoutingPolicyRegistrationCommand}.
 */
export interface DeleteIpamRoutingPolicyRegistrationCommandOutput extends DeleteIpamRoutingPolicyRegistrationResult, __MetadataBearer {}

/**
 * <p>Deletes a routing policy registration for a specified CIDR prefix.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteIpamRoutingPolicyRegistrationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteIpamRoutingPolicyRegistrationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteIpamRoutingPolicyRegistrationRequest
 *   DryRun: true || false,
 *   IpamInternetRegistryAssociationId: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE", // required
 *   Force: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DeleteIpamRoutingPolicyRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIpamRoutingPolicyRegistrationResult
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
 * @param DeleteIpamRoutingPolicyRegistrationCommandInput - {@link DeleteIpamRoutingPolicyRegistrationCommandInput}
 * @returns {@link DeleteIpamRoutingPolicyRegistrationCommandOutput}
 * @see {@link DeleteIpamRoutingPolicyRegistrationCommandInput} for command's `input` shape.
 * @see {@link DeleteIpamRoutingPolicyRegistrationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteIpamRoutingPolicyRegistrationCommand extends command<DeleteIpamRoutingPolicyRegistrationCommandInput, DeleteIpamRoutingPolicyRegistrationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIpamRoutingPolicyRegistration",
  DeleteIpamRoutingPolicyRegistration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIpamRoutingPolicyRegistrationRequest;
      output: DeleteIpamRoutingPolicyRegistrationResult;
    };
    sdk: {
      input: DeleteIpamRoutingPolicyRegistrationCommandInput;
      output: DeleteIpamRoutingPolicyRegistrationCommandOutput;
    };
  };
}
