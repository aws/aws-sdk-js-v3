// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCloudAutonomousVmClusterInput, GetCloudAutonomousVmClusterOutput } from "../models/models_0";
import { GetCloudAutonomousVmCluster$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCloudAutonomousVmClusterCommand}.
 */
export interface GetCloudAutonomousVmClusterCommandInput extends GetCloudAutonomousVmClusterInput {}
/**
 * @public
 *
 * The output of {@link GetCloudAutonomousVmClusterCommand}.
 */
export interface GetCloudAutonomousVmClusterCommandOutput extends GetCloudAutonomousVmClusterOutput, __MetadataBearer {}

/**
 * Gets information about a specific Autonomous VM cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, GetCloudAutonomousVmClusterCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, GetCloudAutonomousVmClusterCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // GetCloudAutonomousVmClusterInput
 *   cloudAutonomousVmClusterId: "STRING_VALUE", // required
 * };
 * const command = new GetCloudAutonomousVmClusterCommand(input);
 * const response = await client.send(command);
 * // { // GetCloudAutonomousVmClusterOutput
 * //   cloudAutonomousVmCluster: { // CloudAutonomousVmCluster
 * //     cloudAutonomousVmClusterId: "STRING_VALUE", // required
 * //     cloudAutonomousVmClusterArn: "STRING_VALUE",
 * //     odbNetworkId: "STRING_VALUE",
 * //     odbNetworkArn: "STRING_VALUE",
 * //     ociResourceAnchorName: "STRING_VALUE",
 * //     percentProgress: Number("float"),
 * //     displayName: "STRING_VALUE",
 * //     status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //     statusReason: "STRING_VALUE",
 * //     cloudExadataInfrastructureId: "STRING_VALUE",
 * //     cloudExadataInfrastructureArn: "STRING_VALUE",
 * //     autonomousDataStoragePercentage: Number("float"),
 * //     autonomousDataStorageSizeInTBs: Number("double"),
 * //     availableAutonomousDataStorageSizeInTBs: Number("double"),
 * //     availableContainerDatabases: Number("int"),
 * //     availableCpus: Number("float"),
 * //     computeModel: "ECPU" || "OCPU",
 * //     cpuCoreCount: Number("int"),
 * //     cpuCoreCountPerNode: Number("int"),
 * //     cpuPercentage: Number("float"),
 * //     dataStorageSizeInGBs: Number("double"),
 * //     dataStorageSizeInTBs: Number("double"),
 * //     dbNodeStorageSizeInGBs: Number("int"),
 * //     dbServers: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     description: "STRING_VALUE",
 * //     domain: "STRING_VALUE",
 * //     exadataStorageInTBsLowestScaledValue: Number("double"),
 * //     hostname: "STRING_VALUE",
 * //     ocid: "STRING_VALUE",
 * //     ociUrl: "STRING_VALUE",
 * //     isMtlsEnabledVmCluster: true || false,
 * //     licenseModel: "BRING_YOUR_OWN_LICENSE" || "LICENSE_INCLUDED",
 * //     maintenanceWindow: { // MaintenanceWindow
 * //       customActionTimeoutInMins: Number("int"),
 * //       daysOfWeek: [ // DaysOfWeek
 * //         { // DayOfWeek
 * //           name: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY",
 * //         },
 * //       ],
 * //       hoursOfDay: [ // HoursOfDay
 * //         Number("int"),
 * //       ],
 * //       isCustomActionTimeoutEnabled: true || false,
 * //       leadTimeInWeeks: Number("int"),
 * //       months: [ // Months
 * //         { // Month
 * //           name: "JANUARY" || "FEBRUARY" || "MARCH" || "APRIL" || "MAY" || "JUNE" || "JULY" || "AUGUST" || "SEPTEMBER" || "OCTOBER" || "NOVEMBER" || "DECEMBER",
 * //         },
 * //       ],
 * //       patchingMode: "ROLLING" || "NONROLLING",
 * //       preference: "NO_PREFERENCE" || "CUSTOM_PREFERENCE",
 * //       skipRu: true || false,
 * //       weeksOfMonth: [ // WeeksOfMonth
 * //         Number("int"),
 * //       ],
 * //     },
 * //     maxAcdsLowestScaledValue: Number("int"),
 * //     memoryPerOracleComputeUnitInGBs: Number("int"),
 * //     memorySizeInGBs: Number("int"),
 * //     nodeCount: Number("int"),
 * //     nonProvisionableAutonomousContainerDatabases: Number("int"),
 * //     provisionableAutonomousContainerDatabases: Number("int"),
 * //     provisionedAutonomousContainerDatabases: Number("int"),
 * //     provisionedCpus: Number("float"),
 * //     reclaimableCpus: Number("float"),
 * //     reservedCpus: Number("float"),
 * //     scanListenerPortNonTls: Number("int"),
 * //     scanListenerPortTls: Number("int"),
 * //     shape: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     timeDatabaseSslCertificateExpires: new Date("TIMESTAMP"),
 * //     timeOrdsCertificateExpires: new Date("TIMESTAMP"),
 * //     timeZone: "STRING_VALUE",
 * //     totalContainerDatabases: Number("int"),
 * //     iamRoles: [ // IamRoleList
 * //       { // IamRole
 * //         iamRoleArn: "STRING_VALUE",
 * //         status: "ASSOCIATING" || "DISASSOCIATING" || "FAILED" || "CONNECTED" || "DISCONNECTED" || "PARTIALLY_CONNECTED" || "UNKNOWN",
 * //         statusReason: "STRING_VALUE",
 * //         awsIntegration: "KmsTde",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCloudAutonomousVmClusterCommandInput - {@link GetCloudAutonomousVmClusterCommandInput}
 * @returns {@link GetCloudAutonomousVmClusterCommandOutput}
 * @see {@link GetCloudAutonomousVmClusterCommandInput} for command's `input` shape.
 * @see {@link GetCloudAutonomousVmClusterCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it is missing required fields or has invalid inputs.
 *
 * @throws {@link OdbServiceException}
 *
 * Base exception class for all service exceptions from Odb service.
 *
 * @public
 */
export class GetCloudAutonomousVmClusterCommand extends command<GetCloudAutonomousVmClusterCommandInput, GetCloudAutonomousVmClusterCommandOutput>(
  _ep0,
  _mw0,
  "GetCloudAutonomousVmCluster",
  GetCloudAutonomousVmCluster$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCloudAutonomousVmClusterInput;
      output: GetCloudAutonomousVmClusterOutput;
    };
    sdk: {
      input: GetCloudAutonomousVmClusterCommandInput;
      output: GetCloudAutonomousVmClusterCommandOutput;
    };
  };
}
