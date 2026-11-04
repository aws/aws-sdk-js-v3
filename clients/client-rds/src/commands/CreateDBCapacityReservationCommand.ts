// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDBCapacityReservationRequest, CreateDBCapacityReservationResponse } from "../models/models_0";
import { CreateDBCapacityReservation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDBCapacityReservationCommand}.
 */
export interface CreateDBCapacityReservationCommandInput extends CreateDBCapacityReservationRequest {}
/**
 * @public
 *
 * The output of {@link CreateDBCapacityReservationCommand}.
 */
export interface CreateDBCapacityReservationCommandOutput extends CreateDBCapacityReservationResponse, __MetadataBearer {}

/**
 * Creates a DB capacity reservation. A DB capacity reservation reserves compute and memory capacity for DB instances of one DB instance class and one database engine. Amazon RDS reserves that capacity in each Availability Zone that you specify.
 *
 * Amazon RDS reserves the same amount of capacity in every Availability Zone in the request. You set that amount with `CapacityPerAvailabilityZone`, and you set the Availability Zones with `AvailabilityZones`. The total reserved capacity is `CapacityPerAvailabilityZone` multiplied by the number of Availability Zones.
 *
 * Specify `StartDate` and `CommitmentDuration` together to create a future-dated reservation. A future-dated reservation reserves capacity for a period that starts later. Amazon RDS holds that capacity for the length of the commitment.
 *
 * A future-dated reservation has the following additional constraints:
 *
 * - `DBInstanceClass` must be a `db.c`, `db.m`, `db.r`, `db.t`, or `db.x` DB instance class. The letter after `db.` gives the DB instance class family. For example, `db.x2g.xlarge` qualifies, and `db.z1d.xlarge` doesn't.
 * - If `DBInstanceClass` is a `db.m` or `db.r` DB instance class, it must be from generation 7 or later. The digit after the family letter gives the generation. For example, `db.m7g.xlarge` qualifies, and `db.m5.xlarge` doesn't. A `db.c`, `db.t`, or `db.x` DB instance class has no generation requirement.
 * - The reserved capacity must total at least 32 vCPUs in each Availability Zone. Multiply `CapacityPerAvailabilityZone` by the number of vCPUs of the DB instance class. The product must be 32 or more.
 * - `CommitmentDuration` must be at least 14 days. For a `db.x` DB instance class, it must be at least 84 days.
 * - `StartDate` must be from 5 to 120 days in the future.
 *
 * Therefore, a DB instance class with 2 vCPUs needs a `CapacityPerAvailabilityZone` of 16 or more, a class with 4 vCPUs needs 8 or more, a class with 8 vCPUs needs 4 or more, and a class with 16 vCPUs needs 2 or more. For the number of vCPUs of each DB instance class, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.
 *
 * > **Note:** You can't modify a future-dated reservation before it starts. You can't cancel a future-dated reservation in the `scheduled` state. You can't cancel a reservation in the `active` state during its capacity commitment. Therefore, you can't cancel a future-dated reservation from the time that Amazon RDS schedules it until the commitment ends.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBCapacityReservationCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBCapacityReservationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // CreateDBCapacityReservationRequest
 *   DBCapacityReservationName: "STRING_VALUE", // required
 *   DBInstanceClass: "STRING_VALUE", // required
 *   Engine: "STRING_VALUE", // required
 *   CapacityPerAvailabilityZone: Number("int"), // required
 *   AvailabilityZones: [ // AvailabilityZones // required
 *     "STRING_VALUE",
 *   ],
 *   EndDate: new Date("TIMESTAMP"),
 *   StartDate: new Date("TIMESTAMP"),
 *   CommitmentDuration: Number("long"),
 *   LicenseModel: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBCapacityReservationCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBCapacityReservationResponse
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
 * @param CreateDBCapacityReservationCommandInput - {@link CreateDBCapacityReservationCommandInput}
 * @returns {@link CreateDBCapacityReservationCommandOutput}
 * @see {@link CreateDBCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link CreateDBCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBCapacityReservationAlreadyExistsFault} (client fault)
 *
 * You already have a DB capacity reservation with the given name. Choose a different name for the new reservation, or use the existing reservation.
 *
 * @throws {@link DBCapacityReservationUnsupportedFault} (client fault)
 *
 * The specified configuration isn't supported for DB capacity reservations.
 *
 * @throws {@link InstanceQuotaExceededFault} (client fault)
 *
 * The request would result in the user exceeding the allowed number of DB instances.
 *
 * @throws {@link InsufficientDBInstanceCapacityFault} (client fault)
 *
 * The specified DB instance class isn't available in the specified Availability Zone.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @example To create a DB capacity reservation in two Availability Zones
 * ```javascript
 * // The following example reserves capacity for two db.m5.large RDS for MySQL DB instances in each of two Availability Zones. Amazon RDS reserves the same capacity in every Availability Zone in the request. The total reserved capacity is four units. Four units serve four Single-AZ DB instances, or two Multi-AZ DB instances, because a Multi-AZ DB instance uses one unit in each of two Availability Zones.
 * const input = {
 *   AvailabilityZones: [
 *     "us-east-1a",
 *     "us-east-1b"
 *   ],
 *   CapacityPerAvailabilityZone: 2,
 *   DBCapacityReservationName: "my-mysql-reservation",
 *   DBInstanceClass: "db.m5.large",
 *   Engine: "mysql"
 * };
 * const command = new CreateDBCapacityReservationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBCapacityReservation: {
 *     AvailableCapacityPerAvailabilityZoneList: [
 *       {
 *         AvailabilityZone: "us-east-1a",
 *         AvailableCapacity: 2
 *       },
 *       {
 *         AvailabilityZone: "us-east-1b",
 *         AvailableCapacity: 2
 *       }
 *     ],
 *     CreateDate: "2026-09-10T18:22:41.612Z",
 *     DBCapacityReservationArn: "arn:aws:rds:us-east-1:123456789012:db-capacity-reservation:dbcr-7hqk2m9xv4t1bn6cz3ws8dj5fp0gyr2a",
 *     DBCapacityReservationIdentifier: "dbcr-7hqk2m9xv4t1bn6cz3ws8dj5fp0gyr2a",
 *     DBCapacityReservationName: "my-mysql-reservation",
 *     DBInstanceClass: "db.m5.large",
 *     Engine: "mysql",
 *     ReservedCapacityPerAvailabilityZone: 2,
 *     State: "active",
 *     TagList:     []
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateDBCapacityReservationCommand extends command<CreateDBCapacityReservationCommandInput, CreateDBCapacityReservationCommandOutput>(
  _ep0,
  _mw0,
  "CreateDBCapacityReservation",
  CreateDBCapacityReservation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDBCapacityReservationRequest;
      output: CreateDBCapacityReservationResponse;
    };
    sdk: {
      input: CreateDBCapacityReservationCommandInput;
      output: CreateDBCapacityReservationCommandOutput;
    };
  };
}
