// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListManagedThingAccountAssociationsRequest,
  ListManagedThingAccountAssociationsResponse,
} from "../models/models_0";
import { ListManagedThingAccountAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListManagedThingAccountAssociationsCommand}.
 */
export interface ListManagedThingAccountAssociationsCommandInput extends ListManagedThingAccountAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedThingAccountAssociationsCommand}.
 */
export interface ListManagedThingAccountAssociationsCommandOutput extends ListManagedThingAccountAssociationsResponse, __MetadataBearer {}

/**
 * Lists all account associations for a specific managed thing.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListManagedThingAccountAssociationsCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListManagedThingAccountAssociationsCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListManagedThingAccountAssociationsRequest
 *   ManagedThingId: "STRING_VALUE",
 *   AccountAssociationId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListManagedThingAccountAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedThingAccountAssociationsResponse
 * //   Items: [ // ManagedThingAssociationList
 * //     { // ManagedThingAssociation
 * //       ManagedThingId: "STRING_VALUE",
 * //       AccountAssociationId: "STRING_VALUE",
 * //       ManagedThingAssociationStatus: "PRE_ASSOCIATED" || "ASSOCIATED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListManagedThingAccountAssociationsCommandInput - {@link ListManagedThingAccountAssociationsCommandInput}
 * @returns {@link ListManagedThingAccountAssociationsCommandOutput}
 * @see {@link ListManagedThingAccountAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListManagedThingAccountAssociationsCommandOutput} for command's `response` shape.
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
export class ListManagedThingAccountAssociationsCommand extends command<ListManagedThingAccountAssociationsCommandInput, ListManagedThingAccountAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListManagedThingAccountAssociations",
  ListManagedThingAccountAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedThingAccountAssociationsRequest;
      output: ListManagedThingAccountAssociationsResponse;
    };
    sdk: {
      input: ListManagedThingAccountAssociationsCommandInput;
      output: ListManagedThingAccountAssociationsCommandOutput;
    };
  };
}
