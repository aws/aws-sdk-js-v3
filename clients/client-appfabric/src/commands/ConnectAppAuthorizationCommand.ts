// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ConnectAppAuthorizationRequest, ConnectAppAuthorizationResponse } from "../models/models_0";
import { ConnectAppAuthorization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ConnectAppAuthorizationCommand}.
 */
export interface ConnectAppAuthorizationCommandInput extends ConnectAppAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link ConnectAppAuthorizationCommand}.
 */
export interface ConnectAppAuthorizationCommandOutput extends ConnectAppAuthorizationResponse, __MetadataBearer {}

/**
 * Establishes a connection between Amazon Web Services AppFabric and an application, which allows AppFabric to call the APIs of the application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, ConnectAppAuthorizationCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, ConnectAppAuthorizationCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // ConnectAppAuthorizationRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   appAuthorizationIdentifier: "STRING_VALUE", // required
 *   authRequest: { // AuthRequest
 *     redirectUri: "STRING_VALUE", // required
 *     code: "STRING_VALUE", // required
 *   },
 * };
 * const command = new ConnectAppAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // ConnectAppAuthorizationResponse
 * //   appAuthorizationSummary: { // AppAuthorizationSummary
 * //     appAuthorizationArn: "STRING_VALUE", // required
 * //     appBundleArn: "STRING_VALUE", // required
 * //     app: "STRING_VALUE", // required
 * //     tenant: { // Tenant
 * //       tenantIdentifier: "STRING_VALUE", // required
 * //       tenantDisplayName: "STRING_VALUE", // required
 * //     },
 * //     status: "PendingConnect" || "Connected" || "ConnectionValidationFailed" || "TokenAutoRotationFailed", // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param ConnectAppAuthorizationCommandInput - {@link ConnectAppAuthorizationCommandInput}
 * @returns {@link ConnectAppAuthorizationCommandOutput}
 * @see {@link ConnectAppAuthorizationCommandInput} for command's `input` shape.
 * @see {@link ConnectAppAuthorizationCommandOutput} for command's `response` shape.
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
export class ConnectAppAuthorizationCommand extends command<ConnectAppAuthorizationCommandInput, ConnectAppAuthorizationCommandOutput>(
  _ep0,
  _mw0,
  "ConnectAppAuthorization",
  ConnectAppAuthorization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConnectAppAuthorizationRequest;
      output: ConnectAppAuthorizationResponse;
    };
    sdk: {
      input: ConnectAppAuthorizationCommandInput;
      output: ConnectAppAuthorizationCommandOutput;
    };
  };
}
