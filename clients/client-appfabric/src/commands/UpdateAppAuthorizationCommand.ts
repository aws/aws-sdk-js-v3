// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAppAuthorizationRequest, UpdateAppAuthorizationResponse } from "../models/models_0";
import { UpdateAppAuthorization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAppAuthorizationCommand}.
 */
export interface UpdateAppAuthorizationCommandInput extends UpdateAppAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppAuthorizationCommand}.
 */
export interface UpdateAppAuthorizationCommandOutput extends UpdateAppAuthorizationResponse, __MetadataBearer {}

/**
 * Updates an app authorization within an app bundle, which allows AppFabric to connect to an application.
 *
 * If the app authorization was in a `connected` state, updating the app authorization will set it back to a `PendingConnect` state.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, UpdateAppAuthorizationCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, UpdateAppAuthorizationCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // UpdateAppAuthorizationRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   appAuthorizationIdentifier: "STRING_VALUE", // required
 *   credential: { // Credential Union: only one key present
 *     oauth2Credential: { // Oauth2Credential
 *       clientId: "STRING_VALUE", // required
 *       clientSecret: "STRING_VALUE", // required
 *     },
 *     apiKeyCredential: { // ApiKeyCredential
 *       apiKey: "STRING_VALUE", // required
 *     },
 *   },
 *   tenant: { // Tenant
 *     tenantIdentifier: "STRING_VALUE", // required
 *     tenantDisplayName: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateAppAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAppAuthorizationResponse
 * //   appAuthorization: { // AppAuthorization
 * //     appAuthorizationArn: "STRING_VALUE", // required
 * //     appBundleArn: "STRING_VALUE", // required
 * //     app: "STRING_VALUE", // required
 * //     tenant: { // Tenant
 * //       tenantIdentifier: "STRING_VALUE", // required
 * //       tenantDisplayName: "STRING_VALUE", // required
 * //     },
 * //     authType: "oauth2" || "apiKey", // required
 * //     status: "PendingConnect" || "Connected" || "ConnectionValidationFailed" || "TokenAutoRotationFailed", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     persona: "admin" || "endUser",
 * //     authUrl: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAppAuthorizationCommandInput - {@link UpdateAppAuthorizationCommandInput}
 * @returns {@link UpdateAppAuthorizationCommandOutput}
 * @see {@link UpdateAppAuthorizationCommandInput} for command's `input` shape.
 * @see {@link UpdateAppAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AppFabricServiceException}
 *
 * Base exception class for all service exceptions from AppFabric service.
 *
 * @public
 */
export class UpdateAppAuthorizationCommand extends command<UpdateAppAuthorizationCommandInput, UpdateAppAuthorizationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAppAuthorization",
  UpdateAppAuthorization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAppAuthorizationRequest;
      output: UpdateAppAuthorizationResponse;
    };
    sdk: {
      input: UpdateAppAuthorizationCommandInput;
      output: UpdateAppAuthorizationCommandOutput;
    };
  };
}
