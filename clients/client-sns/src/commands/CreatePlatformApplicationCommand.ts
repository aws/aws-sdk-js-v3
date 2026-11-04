// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePlatformApplicationInput, CreatePlatformApplicationResponse } from "../models/models_0";
import { CreatePlatformApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePlatformApplicationCommand}.
 */
export interface CreatePlatformApplicationCommandInput extends CreatePlatformApplicationInput {}
/**
 * @public
 *
 * The output of {@link CreatePlatformApplicationCommand}.
 */
export interface CreatePlatformApplicationCommandOutput extends CreatePlatformApplicationResponse, __MetadataBearer {}

/**
 * Creates a platform application object for one of the supported push notification services, such as APNS and GCM (Firebase Cloud Messaging), to which devices and mobile apps may register. You must specify `PlatformPrincipal` and `PlatformCredential` attributes when using the `CreatePlatformApplication` action.
 *
 * `PlatformPrincipal` and `PlatformCredential` are received from the notification service.
 *
 * - For ADM, `PlatformPrincipal` is `client id` and `PlatformCredential` is `client secret`.
 * - For APNS and `APNS_SANDBOX` using certificate credentials, `PlatformPrincipal` is `SSL certificate` and `PlatformCredential` is `private key`.
 * - For APNS and `APNS_SANDBOX` using token credentials, `PlatformPrincipal` is `signing key ID` and `PlatformCredential` is `signing key`.
 * - For Baidu, `PlatformPrincipal` is `API key` and `PlatformCredential` is `secret key`.
 * - For GCM (Firebase Cloud Messaging) using key credentials, there is no `PlatformPrincipal`. The `PlatformCredential` is `API key`.
 * - For GCM (Firebase Cloud Messaging) using token credentials, there is no `PlatformPrincipal`. The `PlatformCredential` is a JSON formatted private key file. When using the Amazon Web Services CLI or Amazon Web Services SDKs, the file must be in string format and special characters must be ignored. To format the file correctly, Amazon SNS recommends using the following command: `SERVICE_JSON=$(jq @json < service.json)`.
 * - For MPNS, `PlatformPrincipal` is `TLS certificate` and `PlatformCredential` is `private key`.
 * - For WNS, `PlatformPrincipal` is `Package Security Identifier` and `PlatformCredential` is `secret key`.
 *
 * You can use the returned `PlatformApplicationArn` as an attribute for the `CreatePlatformEndpoint` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CreatePlatformApplicationCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CreatePlatformApplicationCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // CreatePlatformApplicationInput
 *   Name: "STRING_VALUE", // required
 *   Platform: "STRING_VALUE", // required
 *   Attributes: { // MapStringToString // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePlatformApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreatePlatformApplicationResponse
 * //   PlatformApplicationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePlatformApplicationCommandInput - {@link CreatePlatformApplicationCommandInput}
 * @returns {@link CreatePlatformApplicationCommandOutput}
 * @see {@link CreatePlatformApplicationCommandInput} for command's `input` shape.
 * @see {@link CreatePlatformApplicationCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *
 * Indicates that the user has been denied access to the requested resource.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Indicates an internal service error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @throws {@link SNSServiceException}
 *
 * Base exception class for all service exceptions from SNS service.
 *
 * @public
 */
export class CreatePlatformApplicationCommand extends command<CreatePlatformApplicationCommandInput, CreatePlatformApplicationCommandOutput>(
  _ep0,
  _mw0,
  "CreatePlatformApplication",
  CreatePlatformApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePlatformApplicationInput;
      output: CreatePlatformApplicationResponse;
    };
    sdk: {
      input: CreatePlatformApplicationCommandInput;
      output: CreatePlatformApplicationCommandOutput;
    };
  };
}
