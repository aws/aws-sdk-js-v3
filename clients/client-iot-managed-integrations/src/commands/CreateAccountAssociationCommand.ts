// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAccountAssociationRequest, CreateAccountAssociationResponse } from "../models/models_0";
import { CreateAccountAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAccountAssociationCommand}.
 */
export interface CreateAccountAssociationCommandInput extends CreateAccountAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccountAssociationCommand}.
 */
export interface CreateAccountAssociationCommandOutput extends CreateAccountAssociationResponse, __MetadataBearer {}

/**
 * Creates a new account association via the destination id.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, CreateAccountAssociationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, CreateAccountAssociationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // CreateAccountAssociationRequest
 *   ClientToken: "STRING_VALUE",
 *   ConnectorDestinationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   GeneralAuthorization: { // GeneralAuthorizationName
 *     AuthMaterialName: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAccountAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccountAssociationResponse
 * //   OAuthAuthorizationUrl: "STRING_VALUE", // required
 * //   AccountAssociationId: "STRING_VALUE", // required
 * //   AssociationState: "ASSOCIATION_IN_PROGRESS" || "ASSOCIATION_FAILED" || "ASSOCIATION_SUCCEEDED" || "ASSOCIATION_DELETING" || "REFRESH_TOKEN_EXPIRED", // required
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAccountAssociationCommandInput - {@link CreateAccountAssociationCommandInput}
 * @returns {@link CreateAccountAssociationCommandOutput}
 * @see {@link CreateAccountAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateAccountAssociationCommandOutput} for command's `response` shape.
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
export class CreateAccountAssociationCommand extends command<CreateAccountAssociationCommandInput, CreateAccountAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateAccountAssociation",
  CreateAccountAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccountAssociationRequest;
      output: CreateAccountAssociationResponse;
    };
    sdk: {
      input: CreateAccountAssociationCommandInput;
      output: CreateAccountAssociationCommandOutput;
    };
  };
}
