// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAccountAssociationsRequest, ListAccountAssociationsResponse } from "../models/models_0";
import { ListAccountAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAccountAssociationsCommand}.
 */
export interface ListAccountAssociationsCommandInput extends ListAccountAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountAssociationsCommand}.
 */
export interface ListAccountAssociationsCommandOutput extends ListAccountAssociationsResponse, __MetadataBearer {}

/**
 * Lists all account associations, with optional filtering by connector destination ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListAccountAssociationsCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListAccountAssociationsCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListAccountAssociationsRequest
 *   ConnectorDestinationId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAccountAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountAssociationsResponse
 * //   Items: [ // AccountAssociationListDefinition
 * //     { // AccountAssociationItem
 * //       AccountAssociationId: "STRING_VALUE", // required
 * //       AssociationState: "ASSOCIATION_IN_PROGRESS" || "ASSOCIATION_FAILED" || "ASSOCIATION_SUCCEEDED" || "ASSOCIATION_DELETING" || "REFRESH_TOKEN_EXPIRED", // required
 * //       ErrorMessage: "STRING_VALUE",
 * //       ConnectorDestinationId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountAssociationsCommandInput - {@link ListAccountAssociationsCommandInput}
 * @returns {@link ListAccountAssociationsCommandOutput}
 * @see {@link ListAccountAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListAccountAssociationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
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
export class ListAccountAssociationsCommand extends command<ListAccountAssociationsCommandInput, ListAccountAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListAccountAssociations",
  ListAccountAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountAssociationsRequest;
      output: ListAccountAssociationsResponse;
    };
    sdk: {
      input: ListAccountAssociationsCommandInput;
      output: ListAccountAssociationsCommandOutput;
    };
  };
}
