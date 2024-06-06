// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBackendAPIRequest, CreateBackendAPIResponse } from "../models/models_0";
import { de_CreateBackendAPICommand, se_CreateBackendAPICommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBackendAPICommand}.
 */
export interface CreateBackendAPICommandInput extends CreateBackendAPIRequest {}
/**
 * @public
 *
 * The output of {@link CreateBackendAPICommand}.
 */
export interface CreateBackendAPICommandOutput extends CreateBackendAPIResponse, __MetadataBearer {}

/**
 * <p>Creates a new backend API resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, CreateBackendAPICommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, CreateBackendAPICommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const input = { // CreateBackendAPIRequest
 *   AppId: "STRING_VALUE", // required
 *   BackendEnvironmentName: "STRING_VALUE", // required
 *   ResourceConfig: { // BackendAPIResourceConfig
 *     AdditionalAuthTypes: [ // ListOfBackendAPIAuthType
 *       { // BackendAPIAuthType
 *         Mode: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT",
 *         Settings: { // BackendAPIAppSyncAuthSettings
 *           CognitoUserPoolId: "STRING_VALUE",
 *           Description: "STRING_VALUE",
 *           ExpirationTime: Number("double"),
 *           OpenIDAuthTTL: "STRING_VALUE",
 *           OpenIDClientId: "STRING_VALUE",
 *           OpenIDIatTTL: "STRING_VALUE",
 *           OpenIDIssueURL: "STRING_VALUE",
 *           OpenIDProviderName: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     ApiName: "STRING_VALUE",
 *     ConflictResolution: { // BackendAPIConflictResolution
 *       ResolutionStrategy: "OPTIMISTIC_CONCURRENCY" || "LAMBDA" || "AUTOMERGE" || "NONE",
 *     },
 *     DefaultAuthType: {
 *       Mode: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT",
 *       Settings: {
 *         CognitoUserPoolId: "STRING_VALUE",
 *         Description: "STRING_VALUE",
 *         ExpirationTime: Number("double"),
 *         OpenIDAuthTTL: "STRING_VALUE",
 *         OpenIDClientId: "STRING_VALUE",
 *         OpenIDIatTTL: "STRING_VALUE",
 *         OpenIDIssueURL: "STRING_VALUE",
 *         OpenIDProviderName: "STRING_VALUE",
 *       },
 *     },
 *     Service: "STRING_VALUE",
 *     TransformSchema: "STRING_VALUE",
 *   },
 *   ResourceName: "STRING_VALUE", // required
 * };
 * const command = new CreateBackendAPICommand(input);
 * const response = await client.send(command);
 * // { // CreateBackendAPIResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   Error: "STRING_VALUE",
 * //   JobId: "STRING_VALUE",
 * //   Operation: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBackendAPICommandInput - {@link CreateBackendAPICommandInput}
 * @returns {@link CreateBackendAPICommandOutput}
 * @see {@link CreateBackendAPICommandInput} for command's `input` shape.
 * @see {@link CreateBackendAPICommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for AmplifyBackendClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>An error returned if a request is not formed properly.</p>
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  <p>An error returned if there's a temporary issue with the service.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An error returned when a specific resource type is not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>An error that is returned when a limit of a specific type has been exceeded.</p>
 *
 * @throws {@link AmplifyBackendServiceException}
 * <p>Base exception class for all service exceptions from AmplifyBackend service.</p>
 *
 * @public
 */
export class CreateBackendAPICommand extends $Command
  .classBuilder<
    CreateBackendAPICommandInput,
    CreateBackendAPICommandOutput,
    AmplifyBackendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AmplifyBackendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmplifyBackend", "CreateBackendAPI", {})
  .n("AmplifyBackendClient", "CreateBackendAPICommand")
  .f(void 0, void 0)
  .ser(se_CreateBackendAPICommand)
  .de(de_CreateBackendAPICommand)
  .build() {}
