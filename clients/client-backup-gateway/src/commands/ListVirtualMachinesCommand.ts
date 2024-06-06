// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListVirtualMachinesInput, ListVirtualMachinesOutput } from "../models/models_0";
import { de_ListVirtualMachinesCommand, se_ListVirtualMachinesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVirtualMachinesCommand}.
 */
export interface ListVirtualMachinesCommandInput extends ListVirtualMachinesInput {}
/**
 * @public
 *
 * The output of {@link ListVirtualMachinesCommand}.
 */
export interface ListVirtualMachinesCommandOutput extends ListVirtualMachinesOutput, __MetadataBearer {}

/**
 * <p>Lists your virtual machines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, ListVirtualMachinesCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, ListVirtualMachinesCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // ListVirtualMachinesInput
 *   HypervisorArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListVirtualMachinesCommand(input);
 * const response = await client.send(command);
 * // { // ListVirtualMachinesOutput
 * //   VirtualMachines: [ // VirtualMachines
 * //     { // VirtualMachine
 * //       HostName: "STRING_VALUE",
 * //       HypervisorId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Path: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       LastBackupDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVirtualMachinesCommandInput - {@link ListVirtualMachinesCommandInput}
 * @returns {@link ListVirtualMachinesCommandOutput}
 * @see {@link ListVirtualMachinesCommandInput} for command's `input` shape.
 * @see {@link ListVirtualMachinesCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation did not succeed because an internal error occurred. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>TPS has been limited to protect against intentional or unintentional
 *     high request volumes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation did not succeed because a validation error occurred.</p>
 *
 * @throws {@link BackupGatewayServiceException}
 * <p>Base exception class for all service exceptions from BackupGateway service.</p>
 *
 * @public
 */
export class ListVirtualMachinesCommand extends $Command
  .classBuilder<
    ListVirtualMachinesCommandInput,
    ListVirtualMachinesCommandOutput,
    BackupGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BackupGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackupOnPremises_v20210101", "ListVirtualMachines", {})
  .n("BackupGatewayClient", "ListVirtualMachinesCommand")
  .f(void 0, void 0)
  .ser(se_ListVirtualMachinesCommand)
  .de(de_ListVirtualMachinesCommand)
  .build() {}
