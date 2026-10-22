// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDBCapacityReservationsRequest, DescribeDBCapacityReservationsResponse } from "../models/models_0";
import { DescribeDBCapacityReservations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDBCapacityReservationsCommand}.
 */
export interface DescribeDBCapacityReservationsCommandInput extends DescribeDBCapacityReservationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDBCapacityReservationsCommand}.
 */
export interface DescribeDBCapacityReservationsCommandOutput extends DescribeDBCapacityReservationsResponse, __MetadataBearer {}

/**
 * <p>Describes one or more DB capacity reservations. A DB capacity reservation reserves capacity for Amazon RDS DB instances in one or more Availability Zones.</p> <p>If you don't specify a <code>DBCapacityReservationIdentifier</code>, this operation returns information about all DB capacity reservations for your Amazon Web Services account.</p> <p>This operation supports pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBCapacityReservationsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBCapacityReservationsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeDBCapacityReservationsRequest
 *   DBCapacityReservationIdentifier: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeDBCapacityReservationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDBCapacityReservationsResponse
 * //   DBCapacityReservations: [ // DBCapacityReservationList
 * //     { // DBCapacityReservation
 * //       DBCapacityReservationName: "STRING_VALUE",
 * //       DBInstanceClass: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       LicenseModel: "STRING_VALUE",
 * //       ReservedCapacityPerAvailabilityZone: Number("int"),
 * //       AvailableCapacityPerAvailabilityZoneList: [ // AvailableCapacityPerAvailabilityZoneList
 * //         { // AvailableCapacityPerAvailabilityZone
 * //           AvailabilityZone: "STRING_VALUE",
 * //           AvailableCapacity: Number("int"),
 * //         },
 * //       ],
 * //       EndDate: new Date("TIMESTAMP"),
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       StartDate: new Date("TIMESTAMP"),
 * //       CommitmentInfo: { // DBCapacityReservationCommitmentInfo
 * //         CommittedCapacityPerAvailabilityZone: Number("int"),
 * //         CommitmentEndDate: new Date("TIMESTAMP"),
 * //       },
 * //       State: "active" || "expired" || "cancelled" || "pending" || "failed" || "assessing" || "scheduled" || "delayed" || "unsupported",
 * //       DBCapacityReservationArn: "STRING_VALUE",
 * //       DBCapacityReservationIdentifier: "STRING_VALUE",
 * //       TagList: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDBCapacityReservationsCommandInput - {@link DescribeDBCapacityReservationsCommandInput}
 * @returns {@link DescribeDBCapacityReservationsCommandOutput}
 * @see {@link DescribeDBCapacityReservationsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBCapacityReservationsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBCapacityReservationNotFoundFault} (client fault)
 *  <p> <code>DBCapacityReservationIdentifier</code> doesn't refer to an existing DB capacity reservation.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe a DB capacity reservation
 * ```javascript
 * // The following example retrieves the details of the specified DB capacity reservation. The response reports the reserved capacity and the available capacity for each Availability Zone of the reservation.
 * const input = {
 *   DBCapacityReservationIdentifier: "dbcr-7hqk2m9xv4t1bn6cz3ws8dj5fp0gyr2a"
 * };
 * const command = new DescribeDBCapacityReservationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBCapacityReservations: [
 *     {
 *       AvailableCapacityPerAvailabilityZoneList: [
 *         {
 *           AvailabilityZone: "us-east-1a",
 *           AvailableCapacity: 1
 *         },
 *         {
 *           AvailabilityZone: "us-east-1b",
 *           AvailableCapacity: 2
 *         }
 *       ],
 *       CreateDate: "2026-09-10T18:22:41.612Z",
 *       DBCapacityReservationArn: "arn:aws:rds:us-east-1:123456789012:db-capacity-reservation:dbcr-7hqk2m9xv4t1bn6cz3ws8dj5fp0gyr2a",
 *       DBCapacityReservationIdentifier: "dbcr-7hqk2m9xv4t1bn6cz3ws8dj5fp0gyr2a",
 *       DBCapacityReservationName: "my-mysql-reservation",
 *       DBInstanceClass: "db.m5.large",
 *       Engine: "mysql",
 *       ReservedCapacityPerAvailabilityZone: 2,
 *       State: "active",
 *       TagList:       []
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To list DB capacity reservations one page at a time
 * ```javascript
 * // The following example lists the active DB capacity reservations for the AWS account, 20 records at a time. The Marker value comes from the response of the previous DescribeDBCapacityReservations request. Omit Marker for the first request. A Marker is an opaque token. Pass it back without any change, and don't parse it or build one yourself. A Marker expires 24 hours after Amazon RDS issues it. The Marker values in this example are shortened for readability.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "state",
 *       Values: [
 *         "active"
 *       ]
 *     }
 *   ],
 *   Marker: "eyJ2ZXJzaW9uIjoxLCJ0b2tlbkRldGFpbCI6IkFRSUNBSGhWdjlWNG1RM3JLY0xwWjh0Mlh5RjdiTjB3UmpTNXVF...",
 *   MaxRecords: 20
 * };
 * const command = new DescribeDBCapacityReservationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBCapacityReservations: [
 *     {
 *       AvailableCapacityPerAvailabilityZoneList: [
 *         {
 *           AvailabilityZone: "us-east-1c",
 *           AvailableCapacity: 4
 *         },
 *         {
 *           AvailabilityZone: "us-east-1d",
 *           AvailableCapacity: 4
 *         }
 *       ],
 *       CreateDate: "2026-09-08T11:04:07.335Z",
 *       DBCapacityReservationArn: "arn:aws:rds:us-east-1:123456789012:db-capacity-reservation:dbcr-3npv8ck1zt6wq9db4mhx2js7fr5gy0ea",
 *       DBCapacityReservationIdentifier: "dbcr-3npv8ck1zt6wq9db4mhx2js7fr5gy0ea",
 *       DBCapacityReservationName: "my-postgres-reservation",
 *       DBInstanceClass: "db.r6g.xlarge",
 *       Engine: "postgres",
 *       ReservedCapacityPerAvailabilityZone: 4,
 *       State: "active",
 *       TagList:       []
 *     }
 *   ],
 *   Marker: "eyJ2ZXJzaW9uIjoxLCJ0b2tlbkRldGFpbCI6IkFRSUNBSGkyWnBRN25SeERrVDN2WWJHY0w5c1dtRTB1SmZIYU41..."
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeDBCapacityReservationsCommand extends command<DescribeDBCapacityReservationsCommandInput, DescribeDBCapacityReservationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDBCapacityReservations",
  DescribeDBCapacityReservations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBCapacityReservationsRequest;
      output: DescribeDBCapacityReservationsResponse;
    };
    sdk: {
      input: DescribeDBCapacityReservationsCommandInput;
      output: DescribeDBCapacityReservationsCommandOutput;
    };
  };
}
