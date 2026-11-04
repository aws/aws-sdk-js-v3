// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccountAssociationRequest, GetAccountAssociationResponse } from "../models/models_0";
import { GetAccountAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccountAssociationCommand}.
 */
export interface GetAccountAssociationCommandInput extends GetAccountAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountAssociationCommand}.
 */
export interface GetAccountAssociationCommandOutput extends GetAccountAssociationResponse, __MetadataBearer {}

/**
 * Get an account association for an Amazon Web Services account linked to a customer-managed destination.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetAccountAssociationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetAccountAssociationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetAccountAssociationRequest
 *   AccountAssociationId: "STRING_VALUE", // required
 * };
 * const command = new GetAccountAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountAssociationResponse
 * //   AccountAssociationId: "STRING_VALUE", // required
 * //   AssociationState: "ASSOCIATION_IN_PROGRESS" || "ASSOCIATION_FAILED" || "ASSOCIATION_SUCCEEDED" || "ASSOCIATION_DELETING" || "REFRESH_TOKEN_EXPIRED", // required
 * //   ErrorMessage: "STRING_VALUE",
 * //   ConnectorDestinationId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   OAuthAuthorizationUrl: "STRING_VALUE", // required
 * //   Tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   GeneralAuthorization: { // GeneralAuthorizationName
 * //     AuthMaterialName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountAssociationCommandInput - {@link GetAccountAssociationCommandInput}
 * @returns {@link GetAccountAssociationCommandOutput}
 * @see {@link GetAccountAssociationCommandInput} for command's `input` shape.
 * @see {@link GetAccountAssociationCommandOutput} for command's `response` shape.
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
export class GetAccountAssociationCommand extends command<GetAccountAssociationCommandInput, GetAccountAssociationCommandOutput>(
  _ep0,
  _mw0,
  "GetAccountAssociation",
  GetAccountAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccountAssociationRequest;
      output: GetAccountAssociationResponse;
    };
    sdk: {
      input: GetAccountAssociationCommandInput;
      output: GetAccountAssociationCommandOutput;
    };
  };
}
