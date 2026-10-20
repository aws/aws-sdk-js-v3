// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyDBCapacityReservationRequest, ModifyDBCapacityReservationResponse } from "../models/models_1";
import { ModifyDBCapacityReservation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyDBCapacityReservationCommand}.
 */
export interface ModifyDBCapacityReservationCommandInput extends ModifyDBCapacityReservationRequest {}
/**
 * @public
 *
 * The output of {@link ModifyDBCapacityReservationCommand}.
 */
export interface ModifyDBCapacityReservationCommandOutput extends ModifyDBCapacityReservationResponse, __MetadataBearer {}

/**
 * <p>Modifies a DB capacity reservation. You can change the reserved capacity in each Availability Zone of the reservation, and you can change the end date of the reservation. You can't change the Availability Zones of an existing reservation.</p> <p>The reservation must be in the <code>active</code> state. A future-dated reservation that hasn't started isn't modifiable, and neither is a reservation that Amazon RDS is already modifying.</p> <p>You must specify <code>CapacityPerAvailabilityZone</code>, <code>EndDateType</code>, or <code>EndDate</code>. A request that specifies none of the three changes nothing, and Amazon RDS rejects it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBCapacityReservationCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBCapacityReservationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // ModifyDBCapacityReservationRequest
 *   DBCapacityReservationIdentifier: "STRING_VALUE", // required
 *   CapacityPerAvailabilityZone: Number("int"),
 *   EndDateType: "unlimited" || "limited",
 *   EndDate: new Date("TIMESTAMP"),
 * };
 * const command = new ModifyDBCapacityReservationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBCapacityReservationResponse
 * //   DBCapacityReservation: { // DBCapacityReservation
 * //     DBCapacityReservationName: "STRING_VALUE",
 * //     DBInstanceClass: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     LicenseModel: "STRING_VALUE",
 * //     ReservedCapacityPerAvailabilityZone: Number("int"),
 * //     AvailableCapacityPerAvailabilityZoneList: [ // AvailableCapacityPerAvailabilityZoneList
 * //       { // AvailableCapacityPerAvailabilityZone
 * //         AvailabilityZone: "STRING_VALUE",
 * //         AvailableCapacity: Number("int"),
 * //       },
 * //     ],
 * //     EndDate: new Date("TIMESTAMP"),
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     StartDate: new Date("TIMESTAMP"),
 * //     CommitmentInfo: { // DBCapacityReservationCommitmentInfo
 * //       CommittedCapacityPerAvailabilityZone: Number("int"),
 * //       CommitmentEndDate: new Date("TIMESTAMP"),
 * //     },
 * //     State: "active" || "expired" || "cancelled" || "pending" || "failed" || "assessing" || "scheduled" || "delayed" || "unsupported",
 * //     DBCapacityReservationArn: "STRING_VALUE",
 * //     DBCapacityReservationIdentifier: "STRING_VALUE",
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDBCapacityReservationCommandInput - {@link ModifyDBCapacityReservationCommandInput}
 * @returns {@link ModifyDBCapacityReservationCommandOutput}
 * @see {@link ModifyDBCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link ModifyDBCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBCapacityReservationNotFoundFault} (client fault)
 *  <p> <code>DBCapacityReservationIdentifier</code> doesn't refer to an existing DB capacity reservation.</p>
 *
 * @throws {@link InstanceQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB instances.</p>
 *
 * @throws {@link InsufficientDBInstanceCapacityFault} (client fault)
 *  <p>The specified DB instance class isn't available in the specified Availability Zone.</p>
 *
 * @throws {@link InvalidDBCapacityReservationStateFault} (client fault)
 *  <p>The DB capacity reservation isn't in a valid state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To change the capacity and the end date of a DB capacity reservation
 * ```javascript
 * // The following example raises the reserved capacity to three DB instances in each Availability Zone of the reservation, and it sets an end date. Set EndDateType to limited to give the reservation an end date. Set EndDateType to unlimited to remove the end date, and specify no EndDate. Amazon RDS applies the modification asynchronously, and it moves the reservation to the pending state. Call DescribeDBCapacityReservations to check when the reservation returns to the active state with the new capacity.
 * const input = {
 *   CapacityPerAvailabilityZone: 3,
 *   DBCapacityReservationIdentifier: "dbcr-7hqk2m9xv4t1bn6cz3ws8dj5fp0gyr2a",
 *   EndDate: "2026-12-31T23:59:59Z",
 *   EndDateType: "limited"
 * };
 * const command = new ModifyDBCapacityReservationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyDBCapacityReservationCommand extends command<ModifyDBCapacityReservationCommandInput, ModifyDBCapacityReservationCommandOutput>(
  _ep0,
  _mw0,
  "ModifyDBCapacityReservation",
  ModifyDBCapacityReservation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDBCapacityReservationRequest;
      output: ModifyDBCapacityReservationResponse;
    };
    sdk: {
      input: ModifyDBCapacityReservationCommandInput;
      output: ModifyDBCapacityReservationCommandOutput;
    };
  };
}
