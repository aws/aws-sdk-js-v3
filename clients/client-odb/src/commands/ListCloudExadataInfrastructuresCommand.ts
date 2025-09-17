// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListCloudExadataInfrastructuresInput,
  ListCloudExadataInfrastructuresOutput,
  ListCloudExadataInfrastructuresOutputFilterSensitiveLog,
} from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import {
  de_ListCloudExadataInfrastructuresCommand,
  se_ListCloudExadataInfrastructuresCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCloudExadataInfrastructuresCommand}.
 */
export interface ListCloudExadataInfrastructuresCommandInput extends ListCloudExadataInfrastructuresInput {}
/**
 * @public
 *
 * The output of {@link ListCloudExadataInfrastructuresCommand}.
 */
export interface ListCloudExadataInfrastructuresCommandOutput
  extends ListCloudExadataInfrastructuresOutput,
    __MetadataBearer {}

/**
 * <p>Returns information about the Exadata infrastructures owned by your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListCloudExadataInfrastructuresCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListCloudExadataInfrastructuresCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ListCloudExadataInfrastructuresInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCloudExadataInfrastructuresCommand(input);
 * const response = await client.send(command);
 * // { // ListCloudExadataInfrastructuresOutput
 * //   nextToken: "STRING_VALUE",
 * //   cloudExadataInfrastructures: [ // CloudExadataInfrastructureList // required
 * //     { // CloudExadataInfrastructureSummary
 * //       cloudExadataInfrastructureId: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE",
 * //       status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //       statusReason: "STRING_VALUE",
 * //       cloudExadataInfrastructureArn: "STRING_VALUE",
 * //       activatedStorageCount: Number("int"),
 * //       additionalStorageCount: Number("int"),
 * //       availableStorageSizeInGBs: Number("int"),
 * //       availabilityZone: "STRING_VALUE",
 * //       availabilityZoneId: "STRING_VALUE",
 * //       computeCount: Number("int"),
 * //       cpuCount: Number("int"),
 * //       customerContactsToSendToOCI: [ // CustomerContacts
 * //         { // CustomerContact
 * //           email: "STRING_VALUE",
 * //         },
 * //       ],
 * //       dataStorageSizeInTBs: Number("double"),
 * //       dbNodeStorageSizeInGBs: Number("int"),
 * //       dbServerVersion: "STRING_VALUE",
 * //       lastMaintenanceRunId: "STRING_VALUE",
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
 * //       maxCpuCount: Number("int"),
 * //       maxDataStorageInTBs: Number("double"),
 * //       maxDbNodeStorageSizeInGBs: Number("int"),
 * //       maxMemoryInGBs: Number("int"),
 * //       memorySizeInGBs: Number("int"),
 * //       monthlyDbServerVersion: "STRING_VALUE",
 * //       monthlyStorageServerVersion: "STRING_VALUE",
 * //       nextMaintenanceRunId: "STRING_VALUE",
 * //       ociResourceAnchorName: "STRING_VALUE",
 * //       ociUrl: "STRING_VALUE",
 * //       ocid: "STRING_VALUE",
 * //       shape: "STRING_VALUE",
 * //       storageCount: Number("int"),
 * //       storageServerVersion: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       totalStorageSizeInGBs: Number("int"),
 * //       percentProgress: Number("float"),
 * //       databaseServerType: "STRING_VALUE",
 * //       storageServerType: "STRING_VALUE",
 * //       computeModel: "ECPU" || "OCPU",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCloudExadataInfrastructuresCommandInput - {@link ListCloudExadataInfrastructuresCommandInput}
 * @returns {@link ListCloudExadataInfrastructuresCommandOutput}
 * @see {@link ListCloudExadataInfrastructuresCommandInput} for command's `input` shape.
 * @see {@link ListCloudExadataInfrastructuresCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
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
export class ListCloudExadataInfrastructuresCommand extends $Command
  .classBuilder<
    ListCloudExadataInfrastructuresCommandInput,
    ListCloudExadataInfrastructuresCommandOutput,
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
  .s("Odb", "ListCloudExadataInfrastructures", {})
  .n("OdbClient", "ListCloudExadataInfrastructuresCommand")
  .f(void 0, ListCloudExadataInfrastructuresOutputFilterSensitiveLog)
  .ser(se_ListCloudExadataInfrastructuresCommand)
  .de(de_ListCloudExadataInfrastructuresCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCloudExadataInfrastructuresInput;
      output: ListCloudExadataInfrastructuresOutput;
    };
    sdk: {
      input: ListCloudExadataInfrastructuresCommandInput;
      output: ListCloudExadataInfrastructuresCommandOutput;
    };
  };
}
