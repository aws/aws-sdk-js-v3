// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LicenseManagerUserSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerUserSubscriptionsClient";
import { CreateLicenseServerEndpointRequest, CreateLicenseServerEndpointResponse } from "../models/models_0";
import { CreateLicenseServerEndpoint } from "../schemas/schemas_3_Resource";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface CreateLicenseServerEndpointCommandOutput
  extends CreateLicenseServerEndpointResponse,
    __MetadataBearer {}

/**
 * <p>Creates a network endpoint for the Remote Desktop Services (RDS) license server.</p>
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
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (server fault)
 *  <p>The request couldn't be completed because it conflicted with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because a service quota is exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link LicenseManagerUserSubscriptionsServiceException}
 * <p>Base exception class for all service exceptions from LicenseManagerUserSubscriptions service.</p>
 *
 *
 * @public
 */
export class CreateLicenseServerEndpointCommand extends $Command
  .classBuilder<
    CreateLicenseServerEndpointCommandInput,
    CreateLicenseServerEndpointCommandOutput,
    LicenseManagerUserSubscriptionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerUserSubscriptionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LicenseManagerUserSubscriptions", "CreateLicenseServerEndpoint", {})
  .n("LicenseManagerUserSubscriptionsClient", "CreateLicenseServerEndpointCommand")
  .sc(CreateLicenseServerEndpoint)
  .build() {
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
