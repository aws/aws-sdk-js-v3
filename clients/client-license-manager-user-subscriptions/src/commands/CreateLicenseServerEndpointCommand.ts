// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLicenseServerEndpointRequest, CreateLicenseServerEndpointResponse } from "../models/models_0";
import { CreateLicenseServerEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateLicenseServerEndpointCommand}.
 */
export interface CreateLicenseServerEndpointCommandInput extends CreateLicenseServerEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateLicenseServerEndpointCommand}.
 */
export interface CreateLicenseServerEndpointCommandOutput extends CreateLicenseServerEndpointResponse, __MetadataBearer {}

/**
 * Creates a network endpoint for the Remote Desktop Services (RDS) license server.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, CreateLicenseServerEndpointCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, CreateLicenseServerEndpointCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * // import type { LicenseManagerUserSubscriptionsClientConfig } from "@aws-sdk/client-license-manager-user-subscriptions";
 * const config = {}; // type is LicenseManagerUserSubscriptionsClientConfig
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const input = { // CreateLicenseServerEndpointRequest
 *   IdentityProviderArn: "STRING_VALUE", // required
 *   LicenseServerSettings: { // LicenseServerSettings
 *     ServerType: "STRING_VALUE", // required
 *     ServerSettings: { // ServerSettings Union: only one key present
 *       RdsSalSettings: { // RdsSalSettings
 *         RdsSalCredentialsProvider: { // CredentialsProvider Union: only one key present
 *           SecretsManagerCredentialsProvider: { // SecretsManagerCredentialsProvider
 *             SecretId: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *   },
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateLicenseServerEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateLicenseServerEndpointResponse
 * //   IdentityProviderArn: "STRING_VALUE",
 * //   LicenseServerEndpointArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLicenseServerEndpointCommandInput - {@link CreateLicenseServerEndpointCommandInput}
 * @returns {@link CreateLicenseServerEndpointCommandOutput}
 * @see {@link CreateLicenseServerEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseServerEndpointCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerUserSubscriptionsClientResolvedConfig | config} for LicenseManagerUserSubscriptionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (server fault)
 *
 * The request couldn't be completed because it conflicted with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception occurred with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request failed because a service quota is exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling. Retry the request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A parameter is not valid.
 *
 * @throws {@link LicenseManagerUserSubscriptionsServiceException}
 *
 * Base exception class for all service exceptions from LicenseManagerUserSubscriptions service.
 *
 * @public
 */
export class CreateLicenseServerEndpointCommand extends command<CreateLicenseServerEndpointCommandInput, CreateLicenseServerEndpointCommandOutput>(
  _ep0,
  _mw0,
  "CreateLicenseServerEndpoint",
  CreateLicenseServerEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLicenseServerEndpointRequest;
      output: CreateLicenseServerEndpointResponse;
    };
    sdk: {
      input: CreateLicenseServerEndpointCommandInput;
      output: CreateLicenseServerEndpointCommandOutput;
    };
  };
}
