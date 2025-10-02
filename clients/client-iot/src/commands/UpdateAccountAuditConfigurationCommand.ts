// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateAccountAuditConfigurationRequest, UpdateAccountAuditConfigurationResponse } from "../models/models_2";
import {
  de_UpdateAccountAuditConfigurationCommand,
  se_UpdateAccountAuditConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccountAuditConfigurationCommand}.
 */
export interface UpdateAccountAuditConfigurationCommandInput extends UpdateAccountAuditConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccountAuditConfigurationCommand}.
 */
export interface UpdateAccountAuditConfigurationCommandOutput
  extends UpdateAccountAuditConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Configures or reconfigures the Device Defender audit settings for this account.
 *           Settings include how audit notifications are sent and which audit checks are
 *           enabled or disabled.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateAccountAuditConfiguration</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateAccountAuditConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateAccountAuditConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateAccountAuditConfigurationRequest
 *   roleArn: "STRING_VALUE",
 *   auditNotificationTargetConfigurations: { // AuditNotificationTargetConfigurations
 *     "<keys>": { // AuditNotificationTarget
 *       targetArn: "STRING_VALUE",
 *       roleArn: "STRING_VALUE",
 *       enabled: true || false,
 *     },
 *   },
 *   auditCheckConfigurations: { // AuditCheckConfigurations
 *     "<keys>": { // AuditCheckConfiguration
 *       enabled: true || false,
 *       configuration: { // CheckCustomConfiguration
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateAccountAuditConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAccountAuditConfigurationCommandInput - {@link UpdateAccountAuditConfigurationCommandInput}
 * @returns {@link UpdateAccountAuditConfigurationCommandOutput}
 * @see {@link UpdateAccountAuditConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountAuditConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class UpdateAccountAuditConfigurationCommand extends $Command
  .classBuilder<
    UpdateAccountAuditConfigurationCommandInput,
    UpdateAccountAuditConfigurationCommandOutput,
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
  .s("AWSIotService", "UpdateAccountAuditConfiguration", {})
  .n("IoTClient", "UpdateAccountAuditConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAccountAuditConfigurationCommand)
  .de(de_UpdateAccountAuditConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccountAuditConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateAccountAuditConfigurationCommandInput;
      output: UpdateAccountAuditConfigurationCommandOutput;
    };
  };
}
