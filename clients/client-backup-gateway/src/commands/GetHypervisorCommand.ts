// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetHypervisorInput, GetHypervisorOutput } from "../models/models_0";
import { GetHypervisor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHypervisorCommand}.
 */
export interface GetHypervisorCommandInput extends GetHypervisorInput {}
/**
 * @public
 *
 * The output of {@link GetHypervisorCommand}.
 */
export interface GetHypervisorCommandOutput extends GetHypervisorOutput, __MetadataBearer {}

/**
 * <p>This action requests information about the specified hypervisor to which the gateway will connect.
 *       A hypervisor is hardware, software, or firmware that creates and manages virtual machines,
 *       and allocates resources to them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, GetHypervisorCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, GetHypervisorCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * // import type { BackupGatewayClientConfig } from "@aws-sdk/client-backup-gateway";
 * const config = {}; // type is BackupGatewayClientConfig
 * const client = new BackupGatewayClient(config);
 * const input = { // GetHypervisorInput
 *   HypervisorArn: "STRING_VALUE", // required
 * };
 * const command = new GetHypervisorCommand(input);
 * const response = await client.send(command);
 * // { // GetHypervisorOutput
 * //   Hypervisor: { // HypervisorDetails
 * //     Host: "STRING_VALUE",
 * //     HypervisorArn: "STRING_VALUE",
 * //     KmsKeyArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     LogGroupArn: "STRING_VALUE",
 * //     State: "STRING_VALUE",
 * //     LastSuccessfulMetadataSyncTime: new Date("TIMESTAMP"),
 * //     LatestMetadataSyncStatusMessage: "STRING_VALUE",
 * //     LatestMetadataSyncStatus: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetHypervisorCommandInput - {@link GetHypervisorCommandInput}
 * @returns {@link GetHypervisorCommandOutput}
 * @see {@link GetHypervisorCommandInput} for command's `input` shape.
 * @see {@link GetHypervisorCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetHypervisorCommand extends $Command
  .classBuilder<
    GetHypervisorCommandInput,
    GetHypervisorCommandOutput,
    BackupGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackupOnPremises_v20210101", "GetHypervisor", {})
  .n("BackupGatewayClient", "GetHypervisorCommand")
  .sc(GetHypervisor$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHypervisorInput;
      output: GetHypervisorOutput;
    };
    sdk: {
      input: GetHypervisorCommandInput;
      output: GetHypervisorCommandOutput;
    };
  };
}
