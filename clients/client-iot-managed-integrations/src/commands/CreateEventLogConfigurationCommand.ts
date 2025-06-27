// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { CreateEventLogConfigurationRequest, CreateEventLogConfigurationResponse } from "../models/models_0";
import {
  de_CreateEventLogConfigurationCommand,
  se_CreateEventLogConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEventLogConfigurationCommand}.
 */
export interface CreateEventLogConfigurationCommandInput extends CreateEventLogConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventLogConfigurationCommand}.
 */
export interface CreateEventLogConfigurationCommandOutput
  extends CreateEventLogConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Set the event log configuration for the account, resource type, or specific resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, CreateEventLogConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, CreateEventLogConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // CreateEventLogConfigurationRequest
 *   ResourceType: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE",
 *   EventLogLevel: "DEBUG" || "ERROR" || "INFO" || "WARN", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateEventLogConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventLogConfigurationResponse
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEventLogConfigurationCommandInput - {@link CreateEventLogConfigurationCommandInput}
 * @returns {@link CreateEventLogConfigurationCommandOutput}
 * @see {@link CreateEventLogConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateEventLogConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict with the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded for this request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @public
 */
export class CreateEventLogConfigurationCommand extends $Command
  .classBuilder<
    CreateEventLogConfigurationCommandInput,
    CreateEventLogConfigurationCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotManagedIntegrations", "CreateEventLogConfiguration", {})
  .n("IoTManagedIntegrationsClient", "CreateEventLogConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateEventLogConfigurationCommand)
  .de(de_CreateEventLogConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventLogConfigurationRequest;
      output: CreateEventLogConfigurationResponse;
    };
    sdk: {
      input: CreateEventLogConfigurationCommandInput;
      output: CreateEventLogConfigurationCommandOutput;
    };
  };
}
