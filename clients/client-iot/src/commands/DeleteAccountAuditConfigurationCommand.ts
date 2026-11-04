// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteAccountAuditConfigurationRequest,
  DeleteAccountAuditConfigurationResponse,
} from "../models/models_0";
import { DeleteAccountAuditConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccountAuditConfigurationCommand}.
 */
export interface DeleteAccountAuditConfigurationCommandInput extends DeleteAccountAuditConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountAuditConfigurationCommand}.
 */
export interface DeleteAccountAuditConfigurationCommandOutput extends DeleteAccountAuditConfigurationResponse, __MetadataBearer {}

/**
 * Restores the default settings for Device Defender audits for this account. Any configuration data you entered is deleted and all audit checks are reset to disabled.
 *
 * Requires permission to access the [DeleteAccountAuditConfiguration](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteAccountAuditConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteAccountAuditConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteAccountAuditConfigurationRequest
 *   deleteScheduledAudits: true || false,
 * };
 * const command = new DeleteAccountAuditConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccountAuditConfigurationCommandInput - {@link DeleteAccountAuditConfigurationCommandInput}
 * @returns {@link DeleteAccountAuditConfigurationCommandOutput}
 * @see {@link DeleteAccountAuditConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountAuditConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
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
export class DeleteAccountAuditConfigurationCommand extends command<DeleteAccountAuditConfigurationCommandInput, DeleteAccountAuditConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccountAuditConfiguration",
  DeleteAccountAuditConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccountAuditConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccountAuditConfigurationCommandInput;
      output: DeleteAccountAuditConfigurationCommandOutput;
    };
  };
}
