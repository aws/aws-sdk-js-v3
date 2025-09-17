// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  DescribeAccountAuditConfigurationRequest,
  DescribeAccountAuditConfigurationResponse,
} from "../models/models_1";
import {
  de_DescribeAccountAuditConfigurationCommand,
  se_DescribeAccountAuditConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountAuditConfigurationCommand}.
 */
export interface DescribeAccountAuditConfigurationCommandInput extends DescribeAccountAuditConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountAuditConfigurationCommand}.
 */
export interface DescribeAccountAuditConfigurationCommandOutput
  extends DescribeAccountAuditConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about the Device Defender audit settings for this account.
 *           Settings include how audit notifications are sent and which audit checks are
 *           enabled or disabled.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAccountAuditConfiguration</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAccountAuditConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAccountAuditConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = {};
 * const command = new DescribeAccountAuditConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountAuditConfigurationResponse
 * //   roleArn: "STRING_VALUE",
 * //   auditNotificationTargetConfigurations: { // AuditNotificationTargetConfigurations
 * //     "<keys>": { // AuditNotificationTarget
 * //       targetArn: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //       enabled: true || false,
 * //     },
 * //   },
 * //   auditCheckConfigurations: { // AuditCheckConfigurations
 * //     "<keys>": { // AuditCheckConfiguration
 * //       enabled: true || false,
 * //       configuration: { // CheckCustomConfiguration
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAccountAuditConfigurationCommandInput - {@link DescribeAccountAuditConfigurationCommandInput}
 * @returns {@link DescribeAccountAuditConfigurationCommandOutput}
 * @see {@link DescribeAccountAuditConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAuditConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class DescribeAccountAuditConfigurationCommand extends $Command
  .classBuilder<
    DescribeAccountAuditConfigurationCommandInput,
    DescribeAccountAuditConfigurationCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "DescribeAccountAuditConfiguration", {})
  .n("IoTClient", "DescribeAccountAuditConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAccountAuditConfigurationCommand)
  .de(de_DescribeAccountAuditConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeAccountAuditConfigurationResponse;
    };
    sdk: {
      input: DescribeAccountAuditConfigurationCommandInput;
      output: DescribeAccountAuditConfigurationCommandOutput;
    };
  };
}
