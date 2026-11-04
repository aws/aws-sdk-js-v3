// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDestinationRequest, CreateDestinationResponse } from "../models/models_0";
import { CreateDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDestinationCommand}.
 */
export interface CreateDestinationCommandInput extends CreateDestinationRequest {}
/**
 * @public
 *
 * The output of {@link CreateDestinationCommand}.
 */
export interface CreateDestinationCommandOutput extends CreateDestinationResponse, __MetadataBearer {}

/**
 * Create a notification destination such as Kinesis Data Streams that receive events and notifications from Managed integrations. Managed integrations uses the destination to determine where to deliver notifications.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, CreateDestinationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, CreateDestinationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // CreateDestinationRequest
 *   DeliveryDestinationArn: "STRING_VALUE", // required
 *   DeliveryDestinationType: "KINESIS", // required
 *   Name: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDestinationCommand(input);
 * const response = await client.send(command);
 * // { // CreateDestinationResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDestinationCommandInput - {@link CreateDestinationCommandInput}
 * @returns {@link CreateDestinationCommandOutput}
 * @see {@link CreateDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User is not authorized.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict with the request.
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
export class CreateDestinationCommand extends command<CreateDestinationCommandInput, CreateDestinationCommandOutput>(
  _ep0,
  _mw0,
  "CreateDestination",
  CreateDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDestinationRequest;
      output: CreateDestinationResponse;
    };
    sdk: {
      input: CreateDestinationCommandInput;
      output: CreateDestinationCommandOutput;
    };
  };
}
