// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAutonomousVirtualMachinesInput, ListAutonomousVirtualMachinesOutput } from "../models/models_0";
import { ListAutonomousVirtualMachines$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAutonomousVirtualMachinesCommand}.
 */
export interface ListAutonomousVirtualMachinesCommandInput extends ListAutonomousVirtualMachinesInput {}
/**
 * @public
 *
 * The output of {@link ListAutonomousVirtualMachinesCommand}.
 */
export interface ListAutonomousVirtualMachinesCommandOutput extends ListAutonomousVirtualMachinesOutput, __MetadataBearer {}

/**
 * Lists all Autonomous VMs in an Autonomous VM cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListAutonomousVirtualMachinesCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListAutonomousVirtualMachinesCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ListAutonomousVirtualMachinesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   cloudAutonomousVmClusterId: "STRING_VALUE", // required
 * };
 * const command = new ListAutonomousVirtualMachinesCommand(input);
 * const response = await client.send(command);
 * // { // ListAutonomousVirtualMachinesOutput
 * //   nextToken: "STRING_VALUE",
 * //   autonomousVirtualMachines: [ // AutonomousVirtualMachineList // required
 * //     { // AutonomousVirtualMachineSummary
 * //       autonomousVirtualMachineId: "STRING_VALUE",
 * //       status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //       statusReason: "STRING_VALUE",
 * //       vmName: "STRING_VALUE",
 * //       dbServerId: "STRING_VALUE",
 * //       dbServerDisplayName: "STRING_VALUE",
 * //       cpuCoreCount: Number("int"),
 * //       memorySizeInGBs: Number("int"),
 * //       dbNodeStorageSizeInGBs: Number("int"),
 * //       clientIpAddress: "STRING_VALUE",
 * //       cloudAutonomousVmClusterId: "STRING_VALUE",
 * //       ocid: "STRING_VALUE",
 * //       ociResourceAnchorName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAutonomousVirtualMachinesCommandInput - {@link ListAutonomousVirtualMachinesCommandInput}
 * @returns {@link ListAutonomousVirtualMachinesCommandOutput}
 * @see {@link ListAutonomousVirtualMachinesCommandInput} for command's `input` shape.
 * @see {@link ListAutonomousVirtualMachinesCommandOutput} for command's `response` shape.
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
export class ListAutonomousVirtualMachinesCommand extends command<ListAutonomousVirtualMachinesCommandInput, ListAutonomousVirtualMachinesCommandOutput>(
  _ep0,
  _mw0,
  "ListAutonomousVirtualMachines",
  ListAutonomousVirtualMachines$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutonomousVirtualMachinesInput;
      output: ListAutonomousVirtualMachinesOutput;
    };
    sdk: {
      input: ListAutonomousVirtualMachinesCommandInput;
      output: ListAutonomousVirtualMachinesCommandOutput;
    };
  };
}
