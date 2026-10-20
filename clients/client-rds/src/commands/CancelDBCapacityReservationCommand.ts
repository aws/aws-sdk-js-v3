// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelDBCapacityReservationRequest, CancelDBCapacityReservationResponse } from "../models/models_0";
import { CancelDBCapacityReservation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelDBCapacityReservationCommand}.
 */
export interface CancelDBCapacityReservationCommandInput extends CancelDBCapacityReservationRequest {}
/**
 * @public
 *
 * The output of {@link CancelDBCapacityReservationCommand}.
 */
export interface CancelDBCapacityReservationCommandOutput extends CancelDBCapacityReservationResponse, __MetadataBearer {}

/**
 * <p>Cancels a DB capacity reservation. Amazon RDS changes the state of the reservation to <code>cancelled</code> and stops reporting available capacity for it. Amazon RDS then releases the reserved capacity.</p> <p>A DB instance that uses the reservation keeps running. It continues on unreserved capacity, and Amazon RDS doesn't stop it or modify it. However, Amazon RDS no longer reserves capacity for the DB instance. If Amazon RDS later moves the DB instance to different hardware, for example during hardware maintenance, that move can fail when the Amazon Web Services Region has insufficient capacity for the DB instance class.</p> <p>You can't cancel a reservation in the <code>active</code> state during a capacity commitment. The response of <code>DescribeDBCapacityReservations</code> reports the end of the commitment in <code>CommitmentInfo</code>.</p> <p>Constraints:</p> <ul> <li> <p>The reservation must be in the <code>active</code>, <code>assessing</code>, or <code>delayed</code> state.</p> </li> <li> <p>The reservation must not be past its end date.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CancelDBCapacityReservationCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CancelDBCapacityReservationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // CancelDBCapacityReservationRequest
 *   DBCapacityReservationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CancelDBCapacityReservationCommand(input);
 * const response = await client.send(command);
 * // { // CancelDBCapacityReservationResponse
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
 * @param CancelDBCapacityReservationCommandInput - {@link CancelDBCapacityReservationCommandInput}
 * @returns {@link CancelDBCapacityReservationCommandOutput}
 * @see {@link CancelDBCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link CancelDBCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBCapacityReservationNotFoundFault} (client fault)
 *  <p> <code>DBCapacityReservationIdentifier</code> doesn't refer to an existing DB capacity reservation.</p>
 *
 * @throws {@link InvalidDBCapacityReservationStateFault} (client fault)
 *  <p>The DB capacity reservation isn't in a valid state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To cancel a DB capacity reservation
 * ```javascript
 * // The following example cancels the specified DB capacity reservation. Amazon RDS releases the reserved capacity. A DB instance that uses the reservation keeps running on unreserved capacity.
 * const input = {
 *   DBCapacityReservationIdentifier: "dbcr-7hqk2m9xv4t1bn6cz3ws8dj5fp0gyr2a"
 * };
 * const command = new CancelDBCapacityReservationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBCapacityReservation: {
 *     AvailableCapacityPerAvailabilityZoneList: [
 *       {
 *         AvailabilityZone: "us-east-1a",
 *         AvailableCapacity: 0
 *       },
 *       {
 *         AvailabilityZone: "us-east-1b",
 *         AvailableCapacity: 0
 *       }
 *     ],
 *     CreateDate: "2026-09-10T18:22:41.612Z",
 *     DBCapacityReservationArn: "arn:aws:rds:us-east-1:123456789012:db-capacity-reservation:dbcr-7hqk2m9xv4t1bn6cz3ws8dj5fp0gyr2a",
 *     DBCapacityReservationIdentifier: "dbcr-7hqk2m9xv4t1bn6cz3ws8dj5fp0gyr2a",
 *     DBCapacityReservationName: "my-mysql-reservation",
 *     DBInstanceClass: "db.m5.large",
 *     Engine: "mysql",
 *     ReservedCapacityPerAvailabilityZone: 2,
 *     State: "cancelled",
 *     TagList:     []
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CancelDBCapacityReservationCommand extends command<CancelDBCapacityReservationCommandInput, CancelDBCapacityReservationCommandOutput>(
  _ep0,
  _mw0,
  "CancelDBCapacityReservation",
  CancelDBCapacityReservation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelDBCapacityReservationRequest;
      output: CancelDBCapacityReservationResponse;
    };
    sdk: {
      input: CancelDBCapacityReservationCommandInput;
      output: CancelDBCapacityReservationCommandOutput;
    };
  };
}
