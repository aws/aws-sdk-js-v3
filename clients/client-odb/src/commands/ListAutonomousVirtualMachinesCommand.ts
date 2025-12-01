// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAutonomousVirtualMachinesInput, ListAutonomousVirtualMachinesOutput } from "../models/models_0";
import type { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { ListAutonomousVirtualMachines } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListAutonomousVirtualMachinesCommandOutput
  extends ListAutonomousVirtualMachinesOutput,
    __MetadataBearer {}

/**
 * <p>Lists all Autonomous VMs in an Autonomous VM cluster.</p>
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
export class ListAutonomousVirtualMachinesCommand extends $Command
  .classBuilder<
    ListAutonomousVirtualMachinesCommandInput,
    ListAutonomousVirtualMachinesCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "ListAutonomousVirtualMachines", {})
  .n("OdbClient", "ListAutonomousVirtualMachinesCommand")
  .sc(ListAutonomousVirtualMachines)
  .build() {
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
