// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchModifyIpamRoutingPolicyRegistrationsRequest,
  BatchModifyIpamRoutingPolicyRegistrationsResult,
} from "../models/models_0";
import { BatchModifyIpamRoutingPolicyRegistrations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchModifyIpamRoutingPolicyRegistrationsCommand}.
 */
export interface BatchModifyIpamRoutingPolicyRegistrationsCommandInput extends BatchModifyIpamRoutingPolicyRegistrationsRequest {}
/**
 * @public
 *
 * The output of {@link BatchModifyIpamRoutingPolicyRegistrationsCommand}.
 */
export interface BatchModifyIpamRoutingPolicyRegistrationsCommandOutput extends BatchModifyIpamRoutingPolicyRegistrationsResult, __MetadataBearer {}

/**
 * <p>Modifies multiple routing policy registrations in a single operation. You can create, update, or delete Route Origin Authorizations (ROAs) in batch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, BatchModifyIpamRoutingPolicyRegistrationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, BatchModifyIpamRoutingPolicyRegistrationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // BatchModifyIpamRoutingPolicyRegistrationsRequest
 *   DryRun: true || false,
 *   IpamInternetRegistryAssociationId: "STRING_VALUE", // required
 *   DeltaJson: "STRING_VALUE", // required
 *   Force: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new BatchModifyIpamRoutingPolicyRegistrationsCommand(input);
 * const response = await client.send(command);
 * // { // BatchModifyIpamRoutingPolicyRegistrationsResult
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
 * @param BatchModifyIpamRoutingPolicyRegistrationsCommandInput - {@link BatchModifyIpamRoutingPolicyRegistrationsCommandInput}
 * @returns {@link BatchModifyIpamRoutingPolicyRegistrationsCommandOutput}
 * @see {@link BatchModifyIpamRoutingPolicyRegistrationsCommandInput} for command's `input` shape.
 * @see {@link BatchModifyIpamRoutingPolicyRegistrationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class BatchModifyIpamRoutingPolicyRegistrationsCommand extends command<BatchModifyIpamRoutingPolicyRegistrationsCommandInput, BatchModifyIpamRoutingPolicyRegistrationsCommandOutput>(
  _ep0,
  _mw0,
  "BatchModifyIpamRoutingPolicyRegistrations",
  BatchModifyIpamRoutingPolicyRegistrations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchModifyIpamRoutingPolicyRegistrationsRequest;
      output: BatchModifyIpamRoutingPolicyRegistrationsResult;
    };
    sdk: {
      input: BatchModifyIpamRoutingPolicyRegistrationsCommandInput;
      output: BatchModifyIpamRoutingPolicyRegistrationsCommandOutput;
    };
  };
}
