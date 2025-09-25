// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { ListEventLogConfigurationsRequest, ListEventLogConfigurationsResponse } from "../models/models_0";
import { ListEventLogConfigurations } from "../schemas/schemas_7_Log";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventLogConfigurationsCommand}.
 */
export interface ListEventLogConfigurationsCommandInput extends ListEventLogConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventLogConfigurationsCommand}.
 */
export interface ListEventLogConfigurationsCommandOutput extends ListEventLogConfigurationsResponse, __MetadataBearer {}

/**
 * <p>List all event log configurations for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListEventLogConfigurationsCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListEventLogConfigurationsCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListEventLogConfigurationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEventLogConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventLogConfigurationsResponse
 * //   EventLogConfigurationList: [ // EventLogConfigurationListDefinition
 * //     { // EventLogConfigurationSummary
 * //       Id: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       EventLogLevel: "DEBUG" || "ERROR" || "INFO" || "WARN",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventLogConfigurationsCommandInput - {@link ListEventLogConfigurationsCommandInput}
 * @returns {@link ListEventLogConfigurationsCommandOutput}
 * @see {@link ListEventLogConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListEventLogConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
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
export class ListEventLogConfigurationsCommand extends $Command
  .classBuilder<
    ListEventLogConfigurationsCommandInput,
    ListEventLogConfigurationsCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "ListEventLogConfigurations", {})
  .n("IoTManagedIntegrationsClient", "ListEventLogConfigurationsCommand")
  .sc(ListEventLogConfigurations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventLogConfigurationsRequest;
      output: ListEventLogConfigurationsResponse;
    };
    sdk: {
      input: ListEventLogConfigurationsCommandInput;
      output: ListEventLogConfigurationsCommandOutput;
    };
  };
}
