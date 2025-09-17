// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetGatewayInput, GetGatewayOutput } from "../models/models_0";
import { de_GetGatewayCommand, se_GetGatewayCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGatewayCommand}.
 */
export interface GetGatewayCommandInput extends GetGatewayInput {}
/**
 * @public
 *
 * The output of {@link GetGatewayCommand}.
 */
export interface GetGatewayCommandOutput extends GetGatewayOutput, __MetadataBearer {}

/**
 * <p>By providing the ARN (Amazon Resource Name), this
 *       API returns the gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, GetGatewayCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, GetGatewayCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * // import type { BackupGatewayClientConfig } from "@aws-sdk/client-backup-gateway";
 * const config = {}; // type is BackupGatewayClientConfig
 * const client = new BackupGatewayClient(config);
 * const input = { // GetGatewayInput
 *   GatewayArn: "STRING_VALUE", // required
 * };
 * const command = new GetGatewayCommand(input);
 * const response = await client.send(command);
 * // { // GetGatewayOutput
 * //   Gateway: { // GatewayDetails
 * //     GatewayArn: "STRING_VALUE",
 * //     GatewayDisplayName: "STRING_VALUE",
 * //     GatewayType: "STRING_VALUE",
 * //     HypervisorId: "STRING_VALUE",
 * //     LastSeenTime: new Date("TIMESTAMP"),
 * //     MaintenanceStartTime: { // MaintenanceStartTime
 * //       DayOfMonth: Number("int"),
 * //       DayOfWeek: Number("int"),
 * //       HourOfDay: Number("int"), // required
 * //       MinuteOfHour: Number("int"), // required
 * //     },
 * //     NextUpdateAvailabilityTime: new Date("TIMESTAMP"),
 * //     VpcEndpoint: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGatewayCommandInput - {@link GetGatewayCommandInput}
 * @returns {@link GetGatewayCommandOutput}
 * @see {@link GetGatewayCommandInput} for command's `input` shape.
 * @see {@link GetGatewayCommandOutput} for command's `response` shape.
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
export class GetGatewayCommand extends $Command
  .classBuilder<
    GetGatewayCommandInput,
    GetGatewayCommandOutput,
    BackupGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackupOnPremises_v20210101", "GetGateway", {})
  .n("BackupGatewayClient", "GetGatewayCommand")
  .f(void 0, void 0)
  .ser(se_GetGatewayCommand)
  .de(de_GetGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGatewayInput;
      output: GetGatewayOutput;
    };
    sdk: {
      input: GetGatewayCommandInput;
      output: GetGatewayCommandOutput;
    };
  };
}
