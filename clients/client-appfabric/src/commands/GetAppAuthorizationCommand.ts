// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAppAuthorizationRequest, GetAppAuthorizationResponse } from "../models/models_0";
import { GetAppAuthorization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAppAuthorizationCommand}.
 */
export interface GetAppAuthorizationCommandInput extends GetAppAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link GetAppAuthorizationCommand}.
 */
export interface GetAppAuthorizationCommandOutput extends GetAppAuthorizationResponse, __MetadataBearer {}

/**
 * Returns information about an app authorization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, GetAppAuthorizationCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, GetAppAuthorizationCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // GetAppAuthorizationRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   appAuthorizationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetAppAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // GetAppAuthorizationResponse
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
 * @param GetAppAuthorizationCommandInput - {@link GetAppAuthorizationCommandInput}
 * @returns {@link GetAppAuthorizationCommandOutput}
 * @see {@link GetAppAuthorizationCommandInput} for command's `input` shape.
 * @see {@link GetAppAuthorizationCommandOutput} for command's `response` shape.
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
export class GetAppAuthorizationCommand extends command<GetAppAuthorizationCommandInput, GetAppAuthorizationCommandOutput>(
  _ep0,
  _mw0,
  "GetAppAuthorization",
  GetAppAuthorization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAppAuthorizationRequest;
      output: GetAppAuthorizationResponse;
    };
    sdk: {
      input: GetAppAuthorizationCommandInput;
      output: GetAppAuthorizationCommandOutput;
    };
  };
}
