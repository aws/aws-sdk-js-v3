// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateAppAuthorizationRequest,
  CreateAppAuthorizationRequestFilterSensitiveLog,
  CreateAppAuthorizationResponse,
} from "../models/models_0";
import { de_CreateAppAuthorizationCommand, se_CreateAppAuthorizationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAppAuthorizationCommand}.
 */
export interface CreateAppAuthorizationCommandInput extends CreateAppAuthorizationRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppAuthorizationCommand}.
 */
export interface CreateAppAuthorizationCommandOutput extends CreateAppAuthorizationResponse, __MetadataBearer {}

/**
 * <p>Creates an app authorization within an app bundle, which allows AppFabric to connect to an
 *          application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, CreateAppAuthorizationCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, CreateAppAuthorizationCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * const client = new AppFabricClient(config);
 * const input = { // CreateAppAuthorizationRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   app: "STRING_VALUE", // required
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
 *   authType: "oauth2" || "apiKey", // required
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAppAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppAuthorizationResponse
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
 * @param CreateAppAuthorizationCommandInput - {@link CreateAppAuthorizationCommandInput}
 * @returns {@link CreateAppAuthorizationCommandOutput}
 * @see {@link CreateAppAuthorizationCommandInput} for command's `input` shape.
 * @see {@link CreateAppAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has created a conflict. Check the request parameters and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *          with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link AppFabricServiceException}
 * <p>Base exception class for all service exceptions from AppFabric service.</p>
 *
 *
 * @public
 */
export class CreateAppAuthorizationCommand extends $Command
  .classBuilder<
    CreateAppAuthorizationCommandInput,
    CreateAppAuthorizationCommandOutput,
    AppFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppFabricClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FabricFrontEndService", "CreateAppAuthorization", {})
  .n("AppFabricClient", "CreateAppAuthorizationCommand")
  .f(CreateAppAuthorizationRequestFilterSensitiveLog, void 0)
  .ser(se_CreateAppAuthorizationCommand)
  .de(de_CreateAppAuthorizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAppAuthorizationRequest;
      output: CreateAppAuthorizationResponse;
    };
    sdk: {
      input: CreateAppAuthorizationCommandInput;
      output: CreateAppAuthorizationCommandOutput;
    };
  };
}
