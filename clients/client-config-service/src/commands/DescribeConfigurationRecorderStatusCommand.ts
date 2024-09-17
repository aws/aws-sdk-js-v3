// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeConfigurationRecorderStatusRequest,
  DescribeConfigurationRecorderStatusResponse,
} from "../models/models_0";
import {
  de_DescribeConfigurationRecorderStatusCommand,
  se_DescribeConfigurationRecorderStatusCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigurationRecorderStatusCommand}.
 */
export interface DescribeConfigurationRecorderStatusCommandInput extends DescribeConfigurationRecorderStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigurationRecorderStatusCommand}.
 */
export interface DescribeConfigurationRecorderStatusCommandOutput
  extends DescribeConfigurationRecorderStatusResponse,
    __MetadataBearer {}

/**
 * <p>Returns the current status of the specified configuration
 * 			recorder as well as the status of the last recording event for the recorder. If a configuration recorder is not specified, this action
 * 			returns the status of all configuration recorders associated with
 * 			the account.</p>
 *          <note>
 *             <p>>You can specify only one configuration recorder for each Amazon Web Services Region for each account.
 * 				For a detailed status of recording events over time, add your Config events to Amazon CloudWatch metrics and use CloudWatch metrics.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigurationRecorderStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigurationRecorderStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeConfigurationRecorderStatusRequest
 *   ConfigurationRecorderNames: [ // ConfigurationRecorderNameList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeConfigurationRecorderStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigurationRecorderStatusResponse
 * //   ConfigurationRecordersStatus: [ // ConfigurationRecorderStatusList
 * //     { // ConfigurationRecorderStatus
 * //       name: "STRING_VALUE",
 * //       lastStartTime: new Date("TIMESTAMP"),
 * //       lastStopTime: new Date("TIMESTAMP"),
 * //       recording: true || false,
 * //       lastStatus: "Pending" || "Success" || "Failure",
 * //       lastErrorCode: "STRING_VALUE",
 * //       lastErrorMessage: "STRING_VALUE",
 * //       lastStatusChangeTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeConfigurationRecorderStatusCommandInput - {@link DescribeConfigurationRecorderStatusCommandInput}
 * @returns {@link DescribeConfigurationRecorderStatusCommandOutput}
 * @see {@link DescribeConfigurationRecorderStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationRecorderStatusCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link NoSuchConfigurationRecorderException} (client fault)
 *  <p>You have specified a configuration recorder that does not
 * 			exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class DescribeConfigurationRecorderStatusCommand extends $Command
  .classBuilder<
    DescribeConfigurationRecorderStatusCommandInput,
    DescribeConfigurationRecorderStatusCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "DescribeConfigurationRecorderStatus", {})
  .n("ConfigServiceClient", "DescribeConfigurationRecorderStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeConfigurationRecorderStatusCommand)
  .de(de_DescribeConfigurationRecorderStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConfigurationRecorderStatusRequest;
      output: DescribeConfigurationRecorderStatusResponse;
    };
    sdk: {
      input: DescribeConfigurationRecorderStatusCommandInput;
      output: DescribeConfigurationRecorderStatusCommandOutput;
    };
  };
}
