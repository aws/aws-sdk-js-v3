// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBackendAPIRequest, GetBackendAPIResponse } from "../models/models_0";
import { GetBackendAPI$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBackendAPICommand}.
 */
export interface GetBackendAPICommandInput extends GetBackendAPIRequest {}
/**
 * @public
 *
 * The output of {@link GetBackendAPICommand}.
 */
export interface GetBackendAPICommandOutput extends GetBackendAPIResponse, __MetadataBearer {}

/**
 * <p>Gets the details for a backend API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GetBackendAPICommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GetBackendAPICommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * // import type { AmplifyBackendClientConfig } from "@aws-sdk/client-amplifybackend";
 * const config = {}; // type is AmplifyBackendClientConfig
 * const client = new AmplifyBackendClient(config);
 * const input = { // GetBackendAPIRequest
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
 * const command = new GetBackendAPICommand(input);
 * const response = await client.send(command);
 * // { // GetBackendAPIResponse
 * //   AppId: "STRING_VALUE",
 * //   BackendEnvironmentName: "STRING_VALUE",
 * //   Error: "STRING_VALUE",
 * //   ResourceConfig: { // BackendAPIResourceConfig
 * //     AdditionalAuthTypes: [ // ListOfBackendAPIAuthType
 * //       { // BackendAPIAuthType
 * //         Mode: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT",
 * //         Settings: { // BackendAPIAppSyncAuthSettings
 * //           CognitoUserPoolId: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           ExpirationTime: Number("double"),
 * //           OpenIDAuthTTL: "STRING_VALUE",
 * //           OpenIDClientId: "STRING_VALUE",
 * //           OpenIDIatTTL: "STRING_VALUE",
 * //           OpenIDIssueURL: "STRING_VALUE",
 * //           OpenIDProviderName: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     ApiName: "STRING_VALUE",
 * //     ConflictResolution: { // BackendAPIConflictResolution
 * //       ResolutionStrategy: "OPTIMISTIC_CONCURRENCY" || "LAMBDA" || "AUTOMERGE" || "NONE",
 * //     },
 * //     DefaultAuthType: {
 * //       Mode: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT",
 * //       Settings: {
 * //         CognitoUserPoolId: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         ExpirationTime: Number("double"),
 * //         OpenIDAuthTTL: "STRING_VALUE",
 * //         OpenIDClientId: "STRING_VALUE",
 * //         OpenIDIatTTL: "STRING_VALUE",
 * //         OpenIDIssueURL: "STRING_VALUE",
 * //         OpenIDProviderName: "STRING_VALUE",
 * //       },
 * //     },
 * //     Service: "STRING_VALUE",
 * //     TransformSchema: "STRING_VALUE",
 * //   },
 * //   ResourceName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBackendAPICommandInput - {@link GetBackendAPICommandInput}
 * @returns {@link GetBackendAPICommandOutput}
 * @see {@link GetBackendAPICommandInput} for command's `input` shape.
 * @see {@link GetBackendAPICommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetBackendAPICommand extends command<GetBackendAPICommandInput, GetBackendAPICommandOutput>(
  _ep0,
  _mw0,
  "GetBackendAPI",
  GetBackendAPI$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBackendAPIRequest;
      output: GetBackendAPIResponse;
    };
    sdk: {
      input: GetBackendAPICommandInput;
      output: GetBackendAPICommandOutput;
    };
  };
}
