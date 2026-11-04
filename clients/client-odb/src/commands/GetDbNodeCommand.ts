// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDbNodeInput, GetDbNodeOutput } from "../models/models_0";
import { GetDbNode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDbNodeCommand}.
 */
export interface GetDbNodeCommandInput extends GetDbNodeInput {}
/**
 * @public
 *
 * The output of {@link GetDbNodeCommand}.
 */
export interface GetDbNodeCommandOutput extends GetDbNodeOutput, __MetadataBearer {}

/**
 * Returns information about the specified DB node.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, GetDbNodeCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, GetDbNodeCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // GetDbNodeInput
 *   cloudVmClusterId: "STRING_VALUE",
 *   exadbVmClusterId: "STRING_VALUE",
 *   dbNodeId: "STRING_VALUE", // required
 * };
 * const command = new GetDbNodeCommand(input);
 * const response = await client.send(command);
 * // { // GetDbNodeOutput
 * //   dbNode: { // DbNode
 * //     dbNodeId: "STRING_VALUE",
 * //     dbNodeArn: "STRING_VALUE",
 * //     status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "STOPPING" || "STOPPED" || "STARTING",
 * //     statusReason: "STRING_VALUE",
 * //     additionalDetails: "STRING_VALUE",
 * //     backupIpId: "STRING_VALUE",
 * //     backupVnic2Id: "STRING_VALUE",
 * //     backupVnicId: "STRING_VALUE",
 * //     cpuCoreCount: Number("int"),
 * //     dbNodeStorageSizeInGBs: Number("int"),
 * //     dbServerId: "STRING_VALUE",
 * //     dbSystemId: "STRING_VALUE",
 * //     faultDomain: "STRING_VALUE",
 * //     hostIpId: "STRING_VALUE",
 * //     hostname: "STRING_VALUE",
 * //     ocid: "STRING_VALUE",
 * //     ociResourceAnchorName: "STRING_VALUE",
 * //     maintenanceType: "VMDB_REBOOT_MIGRATION",
 * //     memorySizeInGBs: Number("int"),
 * //     softwareStorageSizeInGB: Number("int"),
 * //     createdAt: new Date("TIMESTAMP"),
 * //     timeMaintenanceWindowEnd: "STRING_VALUE",
 * //     timeMaintenanceWindowStart: "STRING_VALUE",
 * //     totalCpuCoreCount: Number("int"),
 * //     vnic2Id: "STRING_VALUE",
 * //     vnicId: "STRING_VALUE",
 * //     privateIpAddress: "STRING_VALUE",
 * //     floatingIpAddress: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDbNodeCommandInput - {@link GetDbNodeCommandInput}
 * @returns {@link GetDbNodeCommandOutput}
 * @see {@link GetDbNodeCommandInput} for command's `input` shape.
 * @see {@link GetDbNodeCommandOutput} for command's `response` shape.
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
export class GetDbNodeCommand extends command<GetDbNodeCommandInput, GetDbNodeCommandOutput>(
  _ep0,
  _mw0,
  "GetDbNode",
  GetDbNode$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDbNodeInput;
      output: GetDbNodeOutput;
    };
    sdk: {
      input: GetDbNodeCommandInput;
      output: GetDbNodeCommandOutput;
    };
  };
}
