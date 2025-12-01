// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import type { ListConnectorDestinationsRequest, ListConnectorDestinationsResponse } from "../models/models_0";
import { ListConnectorDestinations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConnectorDestinationsCommand}.
 */
export interface ListConnectorDestinationsCommandInput extends ListConnectorDestinationsRequest {}
/**
 * @public
 *
 * The output of {@link ListConnectorDestinationsCommand}.
 */
export interface ListConnectorDestinationsCommandOutput extends ListConnectorDestinationsResponse, __MetadataBearer {}

/**
 * <p>Lists all connector destinations, with optional filtering by cloud connector ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListConnectorDestinationsCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListConnectorDestinationsCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListConnectorDestinationsRequest
 *   CloudConnectorId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListConnectorDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectorDestinationsResponse
 * //   ConnectorDestinationList: [ // ConnectorDestinationListDefinition
 * //     { // ConnectorDestinationSummary
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CloudConnectorId: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConnectorDestinationsCommandInput - {@link ListConnectorDestinationsCommandInput}
 * @returns {@link ListConnectorDestinationsCommandOutput}
 * @see {@link ListConnectorDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListConnectorDestinationsCommandOutput} for command's `response` shape.
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
export class ListConnectorDestinationsCommand extends $Command
  .classBuilder<
    ListConnectorDestinationsCommandInput,
    ListConnectorDestinationsCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "ListConnectorDestinations", {})
  .n("IoTManagedIntegrationsClient", "ListConnectorDestinationsCommand")
  .sc(ListConnectorDestinations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectorDestinationsRequest;
      output: ListConnectorDestinationsResponse;
    };
    sdk: {
      input: ListConnectorDestinationsCommandInput;
      output: ListConnectorDestinationsCommandOutput;
    };
  };
}
