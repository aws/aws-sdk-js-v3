// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCloudAutonomousVmClustersInput, ListCloudAutonomousVmClustersOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import {
  de_ListCloudAutonomousVmClustersCommand,
  se_ListCloudAutonomousVmClustersCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCloudAutonomousVmClustersCommand}.
 */
export interface ListCloudAutonomousVmClustersCommandInput extends ListCloudAutonomousVmClustersInput {}
/**
 * @public
 *
 * The output of {@link ListCloudAutonomousVmClustersCommand}.
 */
export interface ListCloudAutonomousVmClustersCommandOutput
  extends ListCloudAutonomousVmClustersOutput,
    __MetadataBearer {}

/**
 * <p>Lists all Autonomous VM clusters in a specified Cloud Exadata infrastructure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListCloudAutonomousVmClustersCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListCloudAutonomousVmClustersCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * const client = new OdbClient(config);
 * const input = { // ListCloudAutonomousVmClustersInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   cloudExadataInfrastructureId: "STRING_VALUE",
 * };
 * const command = new ListCloudAutonomousVmClustersCommand(input);
 * const response = await client.send(command);
 * // { // ListCloudAutonomousVmClustersOutput
 * //   nextToken: "STRING_VALUE",
 * //   cloudAutonomousVmClusters: [ // CloudAutonomousVmClusterList // required
 * //     { // CloudAutonomousVmClusterSummary
 * //       cloudAutonomousVmClusterId: "STRING_VALUE", // required
 * //       cloudAutonomousVmClusterArn: "STRING_VALUE",
 * //       odbNetworkId: "STRING_VALUE",
 * //       ociResourceAnchorName: "STRING_VALUE",
 * //       percentProgress: Number("float"),
 * //       displayName: "STRING_VALUE",
 * //       status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //       statusReason: "STRING_VALUE",
 * //       cloudExadataInfrastructureId: "STRING_VALUE",
 * //       autonomousDataStoragePercentage: Number("float"),
 * //       autonomousDataStorageSizeInTBs: Number("double"),
 * //       availableAutonomousDataStorageSizeInTBs: Number("double"),
 * //       availableContainerDatabases: Number("int"),
 * //       availableCpus: Number("float"),
 * //       computeModel: "ECPU" || "OCPU",
 * //       cpuCoreCount: Number("int"),
 * //       cpuCoreCountPerNode: Number("int"),
 * //       cpuPercentage: Number("float"),
 * //       dataStorageSizeInGBs: Number("double"),
 * //       dataStorageSizeInTBs: Number("double"),
 * //       dbNodeStorageSizeInGBs: Number("int"),
 * //       dbServers: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       description: "STRING_VALUE",
 * //       domain: "STRING_VALUE",
 * //       exadataStorageInTBsLowestScaledValue: Number("double"),
 * //       hostname: "STRING_VALUE",
 * //       ocid: "STRING_VALUE",
 * //       ociUrl: "STRING_VALUE",
 * //       isMtlsEnabledVmCluster: true || false,
 * //       licenseModel: "BRING_YOUR_OWN_LICENSE" || "LICENSE_INCLUDED",
 * //       maintenanceWindow: { // MaintenanceWindow
 * //         customActionTimeoutInMins: Number("int"),
 * //         daysOfWeek: [ // DaysOfWeek
 * //           { // DayOfWeek
 * //             name: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY",
 * //           },
 * //         ],
 * //         hoursOfDay: [ // HoursOfDay
 * //           Number("int"),
 * //         ],
 * //         isCustomActionTimeoutEnabled: true || false,
 * //         leadTimeInWeeks: Number("int"),
 * //         months: [ // Months
 * //           { // Month
 * //             name: "JANUARY" || "FEBRUARY" || "MARCH" || "APRIL" || "MAY" || "JUNE" || "JULY" || "AUGUST" || "SEPTEMBER" || "OCTOBER" || "NOVEMBER" || "DECEMBER",
 * //           },
 * //         ],
 * //         patchingMode: "ROLLING" || "NONROLLING",
 * //         preference: "NO_PREFERENCE" || "CUSTOM_PREFERENCE",
 * //         skipRu: true || false,
 * //         weeksOfMonth: [ // WeeksOfMonth
 * //           Number("int"),
 * //         ],
 * //       },
 * //       maxAcdsLowestScaledValue: Number("int"),
 * //       memoryPerOracleComputeUnitInGBs: Number("int"),
 * //       memorySizeInGBs: Number("int"),
 * //       nodeCount: Number("int"),
 * //       nonProvisionableAutonomousContainerDatabases: Number("int"),
 * //       provisionableAutonomousContainerDatabases: Number("int"),
 * //       provisionedAutonomousContainerDatabases: Number("int"),
 * //       provisionedCpus: Number("float"),
 * //       reclaimableCpus: Number("float"),
 * //       reservedCpus: Number("float"),
 * //       scanListenerPortNonTls: Number("int"),
 * //       scanListenerPortTls: Number("int"),
 * //       shape: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       timeDatabaseSslCertificateExpires: new Date("TIMESTAMP"),
 * //       timeOrdsCertificateExpires: new Date("TIMESTAMP"),
 * //       timeZone: "STRING_VALUE",
 * //       totalContainerDatabases: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCloudAutonomousVmClustersCommandInput - {@link ListCloudAutonomousVmClustersCommandInput}
 * @returns {@link ListCloudAutonomousVmClustersCommandOutput}
 * @see {@link ListCloudAutonomousVmClustersCommandInput} for command's `input` shape.
 * @see {@link ListCloudAutonomousVmClustersCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class ListCloudAutonomousVmClustersCommand extends $Command
  .classBuilder<
    ListCloudAutonomousVmClustersCommandInput,
    ListCloudAutonomousVmClustersCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Odb", "ListCloudAutonomousVmClusters", {})
  .n("OdbClient", "ListCloudAutonomousVmClustersCommand")
  .f(void 0, void 0)
  .ser(se_ListCloudAutonomousVmClustersCommand)
  .de(de_ListCloudAutonomousVmClustersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCloudAutonomousVmClustersInput;
      output: ListCloudAutonomousVmClustersOutput;
    };
    sdk: {
      input: ListCloudAutonomousVmClustersCommandInput;
      output: ListCloudAutonomousVmClustersCommandOutput;
    };
  };
}
