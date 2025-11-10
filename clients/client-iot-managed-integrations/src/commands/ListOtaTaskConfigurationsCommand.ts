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
import { ListOtaTaskConfigurationsRequest, ListOtaTaskConfigurationsResponse } from "../models/models_0";
import { ListOtaTaskConfigurations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOtaTaskConfigurationsCommand}.
 */
export interface ListOtaTaskConfigurationsCommandInput extends ListOtaTaskConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListOtaTaskConfigurationsCommand}.
 */
export interface ListOtaTaskConfigurationsCommandOutput extends ListOtaTaskConfigurationsResponse, __MetadataBearer {}

/**
 * <p>List all of the over-the-air (OTA) task configurations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListOtaTaskConfigurationsCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListOtaTaskConfigurationsCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListOtaTaskConfigurationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListOtaTaskConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListOtaTaskConfigurationsResponse
 * //   Items: [ // OtaTaskConfigurationListDefinition
 * //     { // OtaTaskConfigurationSummary
 * //       TaskConfigurationId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOtaTaskConfigurationsCommandInput - {@link ListOtaTaskConfigurationsCommandInput}
 * @returns {@link ListOtaTaskConfigurationsCommandOutput}
 * @see {@link ListOtaTaskConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListOtaTaskConfigurationsCommandOutput} for command's `response` shape.
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
export class ListOtaTaskConfigurationsCommand extends $Command
  .classBuilder<
    ListOtaTaskConfigurationsCommandInput,
    ListOtaTaskConfigurationsCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "ListOtaTaskConfigurations", {})
  .n("IoTManagedIntegrationsClient", "ListOtaTaskConfigurationsCommand")
  .sc(ListOtaTaskConfigurations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOtaTaskConfigurationsRequest;
      output: ListOtaTaskConfigurationsResponse;
    };
    sdk: {
      input: ListOtaTaskConfigurationsCommandInput;
      output: ListOtaTaskConfigurationsCommandOutput;
    };
  };
}
