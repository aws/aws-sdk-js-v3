// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOtaTaskConfigurationsRequest, ListOtaTaskConfigurationsResponse } from "../models/models_0";
import { ListOtaTaskConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * List all of the over-the-air (OTA) task configurations.
 *
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
 *
 * User is not authorized.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation error occurred when performing the API request.
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from IoTManagedIntegrations service.
 *
 * @public
 */
export class ListOtaTaskConfigurationsCommand extends command<ListOtaTaskConfigurationsCommandInput, ListOtaTaskConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListOtaTaskConfigurations",
  ListOtaTaskConfigurations$
) {
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
