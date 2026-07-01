// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AcceptCapacityReservationBillingOwnershipRequest,
  AcceptCapacityReservationBillingOwnershipResult,
} from "../models/models_0";
import { AcceptCapacityReservationBillingOwnership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcceptCapacityReservationBillingOwnershipCommand}.
 */
export interface AcceptCapacityReservationBillingOwnershipCommandInput extends AcceptCapacityReservationBillingOwnershipRequest {}
/**
 * @public
 *
 * The output of {@link AcceptCapacityReservationBillingOwnershipCommand}.
 */
export interface AcceptCapacityReservationBillingOwnershipCommandOutput extends AcceptCapacityReservationBillingOwnershipResult, __MetadataBearer {}

/**
 * <p>Accepts a request to assign billing of the available capacity of a shared Capacity
 * 			Reservation to your account. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/assign-billing.html"> Billing assignment for shared
 * 					Amazon EC2 Capacity Reservations</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptCapacityReservationBillingOwnershipCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptCapacityReservationBillingOwnershipCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AcceptCapacityReservationBillingOwnershipRequest
 *   DryRun: true || false,
 *   CapacityReservationId: "STRING_VALUE", // required
 * };
 * const command = new AcceptCapacityReservationBillingOwnershipCommand(input);
 * const response = await client.send(command);
 * // { // AcceptCapacityReservationBillingOwnershipResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param AcceptCapacityReservationBillingOwnershipCommandInput - {@link AcceptCapacityReservationBillingOwnershipCommandInput}
 * @returns {@link AcceptCapacityReservationBillingOwnershipCommandOutput}
 * @see {@link AcceptCapacityReservationBillingOwnershipCommandInput} for command's `input` shape.
 * @see {@link AcceptCapacityReservationBillingOwnershipCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AcceptCapacityReservationBillingOwnershipCommand extends command<AcceptCapacityReservationBillingOwnershipCommandInput, AcceptCapacityReservationBillingOwnershipCommandOutput>(
  _ep0,
  _mw0,
  "AcceptCapacityReservationBillingOwnership",
  AcceptCapacityReservationBillingOwnership$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptCapacityReservationBillingOwnershipRequest;
      output: AcceptCapacityReservationBillingOwnershipResult;
    };
    sdk: {
      input: AcceptCapacityReservationBillingOwnershipCommandInput;
      output: AcceptCapacityReservationBillingOwnershipCommandOutput;
    };
  };
}
