// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListManagedThingSchemasRequest, ListManagedThingSchemasResponse } from "../models/models_0";
import { ListManagedThingSchemas$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListManagedThingSchemasCommand}.
 */
export interface ListManagedThingSchemasCommandInput extends ListManagedThingSchemasRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedThingSchemasCommand}.
 */
export interface ListManagedThingSchemasCommandOutput extends ListManagedThingSchemasResponse, __MetadataBearer {}

/**
 * List schemas associated with a managed thing.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListManagedThingSchemasCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListManagedThingSchemasCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListManagedThingSchemasRequest
 *   Identifier: "STRING_VALUE", // required
 *   EndpointIdFilter: "STRING_VALUE",
 *   CapabilityIdFilter: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListManagedThingSchemasCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedThingSchemasResponse
 * //   Items: [ // ManagedThingSchemaListDefinition
 * //     { // ManagedThingSchemaListItem
 * //       EndpointId: "STRING_VALUE",
 * //       CapabilityId: "STRING_VALUE",
 * //       Schema: "DOCUMENT_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListManagedThingSchemasCommandInput - {@link ListManagedThingSchemasCommandInput}
 * @returns {@link ListManagedThingSchemasCommandOutput}
 * @see {@link ListManagedThingSchemasCommandInput} for command's `input` shape.
 * @see {@link ListManagedThingSchemasCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
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
export class ListManagedThingSchemasCommand extends command<ListManagedThingSchemasCommandInput, ListManagedThingSchemasCommandOutput>(
  _ep0,
  _mw0,
  "ListManagedThingSchemas",
  ListManagedThingSchemas$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedThingSchemasRequest;
      output: ListManagedThingSchemasResponse;
    };
    sdk: {
      input: ListManagedThingSchemasCommandInput;
      output: ListManagedThingSchemasCommandOutput;
    };
  };
}
