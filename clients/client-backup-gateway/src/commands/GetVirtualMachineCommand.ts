// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetVirtualMachineInput, GetVirtualMachineOutput } from "../models/models_0";
import { de_GetVirtualMachineCommand, se_GetVirtualMachineCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVirtualMachineCommand}.
 */
export interface GetVirtualMachineCommandInput extends GetVirtualMachineInput {}
/**
 * @public
 *
 * The output of {@link GetVirtualMachineCommand}.
 */
export interface GetVirtualMachineCommandOutput extends GetVirtualMachineOutput, __MetadataBearer {}

/**
 * <p>By providing the ARN (Amazon Resource Name), this API returns the virtual machine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, GetVirtualMachineCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, GetVirtualMachineCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const input = { // GetVirtualMachineInput
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetVirtualMachineCommand(input);
 * const response = await client.send(command);
 * // { // GetVirtualMachineOutput
 * //   VirtualMachine: { // VirtualMachineDetails
 * //     HostName: "STRING_VALUE",
 * //     HypervisorId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Path: "STRING_VALUE",
 * //     ResourceArn: "STRING_VALUE",
 * //     LastBackupDate: new Date("TIMESTAMP"),
 * //     VmwareTags: [ // VmwareTags
 * //       { // VmwareTag
 * //         VmwareCategory: "STRING_VALUE",
 * //         VmwareTagName: "STRING_VALUE",
 * //         VmwareTagDescription: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVirtualMachineCommandInput - {@link GetVirtualMachineCommandInput}
 * @returns {@link GetVirtualMachineCommandOutput}
 * @see {@link GetVirtualMachineCommandInput} for command's `input` shape.
 * @see {@link GetVirtualMachineCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action wasn't found.</p>
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
export class GetVirtualMachineCommand extends $Command
  .classBuilder<
    GetVirtualMachineCommandInput,
    GetVirtualMachineCommandOutput,
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
  .s("BackupOnPremises_v20210101", "GetVirtualMachine", {})
  .n("BackupGatewayClient", "GetVirtualMachineCommand")
  .f(void 0, void 0)
  .ser(se_GetVirtualMachineCommand)
  .de(de_GetVirtualMachineCommand)
  .build() {}
