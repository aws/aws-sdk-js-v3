// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListManagedThingsRequest, ListManagedThingsResponse } from "../models/models_0";
import { ListManagedThings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListManagedThingsCommand}.
 */
export interface ListManagedThingsCommandInput extends ListManagedThingsRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedThingsCommand}.
 */
export interface ListManagedThingsCommandOutput extends ListManagedThingsResponse, __MetadataBearer {}

/**
 * Listing all managed things with provision for filters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ListManagedThingsCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ListManagedThingsCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ListManagedThingsRequest
 *   OwnerFilter: "STRING_VALUE",
 *   CredentialLockerFilter: "STRING_VALUE",
 *   RoleFilter: "CONTROLLER" || "DEVICE",
 *   ParentControllerIdentifierFilter: "STRING_VALUE",
 *   ConnectorPolicyIdFilter: "STRING_VALUE",
 *   ConnectorDestinationIdFilter: "STRING_VALUE",
 *   ConnectorDeviceIdFilter: "STRING_VALUE",
 *   SerialNumberFilter: "STRING_VALUE",
 *   ProvisioningStatusFilter: "UNASSOCIATED" || "PRE_ASSOCIATED" || "DISCOVERED" || "ACTIVATED" || "DELETION_FAILED" || "DELETE_IN_PROGRESS" || "ISOLATED" || "DELETED",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListManagedThingsCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedThingsResponse
 * //   Items: [ // ManagedThingListDefinition
 * //     { // ManagedThingSummary
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       AdvertisedProductId: "STRING_VALUE",
 * //       Brand: "STRING_VALUE",
 * //       Classification: "STRING_VALUE",
 * //       ConnectorDeviceId: "STRING_VALUE",
 * //       ConnectorPolicyId: "STRING_VALUE",
 * //       ConnectorDestinationId: "STRING_VALUE",
 * //       Model: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       CredentialLockerId: "STRING_VALUE",
 * //       ParentControllerId: "STRING_VALUE",
 * //       ProvisioningStatus: "UNASSOCIATED" || "PRE_ASSOCIATED" || "DISCOVERED" || "ACTIVATED" || "DELETION_FAILED" || "DELETE_IN_PROGRESS" || "ISOLATED" || "DELETED",
 * //       Role: "CONTROLLER" || "DEVICE",
 * //       SerialNumber: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       ActivatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListManagedThingsCommandInput - {@link ListManagedThingsCommandInput}
 * @returns {@link ListManagedThingsCommandOutput}
 * @see {@link ListManagedThingsCommandInput} for command's `input` shape.
 * @see {@link ListManagedThingsCommandOutput} for command's `response` shape.
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
export class ListManagedThingsCommand extends command<ListManagedThingsCommandInput, ListManagedThingsCommandOutput>(
  _ep0,
  _mw0,
  "ListManagedThings",
  ListManagedThings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedThingsRequest;
      output: ListManagedThingsResponse;
    };
    sdk: {
      input: ListManagedThingsCommandInput;
      output: ListManagedThingsCommandOutput;
    };
  };
}
