// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCloudVmClusterInput, CreateCloudVmClusterOutput } from "../models/models_0";
import { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { CreateCloudVmCluster } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCloudVmClusterCommand}.
 */
export interface CreateCloudVmClusterCommandInput extends CreateCloudVmClusterInput {}
/**
 * @public
 *
 * The output of {@link CreateCloudVmClusterCommand}.
 */
export interface CreateCloudVmClusterCommandOutput extends CreateCloudVmClusterOutput, __MetadataBearer {}

/**
 * <p>Creates a VM cluster on the specified Exadata infrastructure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, CreateCloudVmClusterCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, CreateCloudVmClusterCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // CreateCloudVmClusterInput
 *   cloudExadataInfrastructureId: "STRING_VALUE", // required
 *   cpuCoreCount: Number("int"), // required
 *   displayName: "STRING_VALUE", // required
 *   giVersion: "STRING_VALUE", // required
 *   hostname: "STRING_VALUE", // required
 *   sshPublicKeys: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   odbNetworkId: "STRING_VALUE", // required
 *   clusterName: "STRING_VALUE",
 *   dataCollectionOptions: { // DataCollectionOptions
 *     isDiagnosticsEventsEnabled: true || false,
 *     isHealthMonitoringEnabled: true || false,
 *     isIncidentLogsEnabled: true || false,
 *   },
 *   dataStorageSizeInTBs: Number("double"),
 *   dbNodeStorageSizeInGBs: Number("int"),
 *   dbServers: [
 *     "STRING_VALUE",
 *   ],
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   isLocalBackupEnabled: true || false,
 *   isSparseDiskgroupEnabled: true || false,
 *   licenseModel: "BRING_YOUR_OWN_LICENSE" || "LICENSE_INCLUDED",
 *   memorySizeInGBs: Number("int"),
 *   systemVersion: "STRING_VALUE",
 *   timeZone: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   scanListenerPortTcp: Number("int"),
 * };
 * const command = new CreateCloudVmClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateCloudVmClusterOutput
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //   statusReason: "STRING_VALUE",
 * //   cloudVmClusterId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateCloudVmClusterCommandInput - {@link CreateCloudVmClusterCommandInput}
 * @returns {@link CreateCloudVmClusterCommandOutput}
 * @see {@link CreateCloudVmClusterCommandInput} for command's `input` shape.
 * @see {@link CreateCloudVmClusterCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with the current status of your resource. Fix any inconsistencies with your resource and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the service quota.</p>
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
export class CreateCloudVmClusterCommand extends $Command
  .classBuilder<
    CreateCloudVmClusterCommandInput,
    CreateCloudVmClusterCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "CreateCloudVmCluster", {})
  .n("OdbClient", "CreateCloudVmClusterCommand")
  .sc(CreateCloudVmCluster)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCloudVmClusterInput;
      output: CreateCloudVmClusterOutput;
    };
    sdk: {
      input: CreateCloudVmClusterCommandInput;
      output: CreateCloudVmClusterCommandOutput;
    };
  };
}
