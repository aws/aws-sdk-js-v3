// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateAccountAuditConfigurationRequest,
  UpdateAccountAuditConfigurationResponse,
} from "../models/models_2";
import { UpdateAccountAuditConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateAccountAuditConfigurationCommandOutput extends UpdateAccountAuditConfigurationResponse, __MetadataBearer {}

/**
 * Configures or reconfigures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.
 *
 * Requires permission to access the [UpdateAccountAuditConfiguration](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class UpdateAccountAuditConfigurationCommand extends command<UpdateAccountAuditConfigurationCommandInput, UpdateAccountAuditConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAccountAuditConfiguration",
  UpdateAccountAuditConfiguration$
) {
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
