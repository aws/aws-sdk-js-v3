// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePlatformApplicationInput, CreatePlatformApplicationResponse } from "../models/models_0";
import { CreatePlatformApplication } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a platform application object for one of the supported push notification
 *             services, such as APNS and GCM (Firebase Cloud Messaging), to which devices and mobile
 *             apps may register. You must specify <code>PlatformPrincipal</code> and
 *                 <code>PlatformCredential</code> attributes when using the
 *                 <code>CreatePlatformApplication</code> action.</p>
 *          <p>
 *             <code>PlatformPrincipal</code> and <code>PlatformCredential</code> are received from
 *             the notification service.</p>
 *          <ul>
 *             <li>
 *                <p>For ADM, <code>PlatformPrincipal</code> is <code>client id</code> and
 *                         <code>PlatformCredential</code> is <code>client secret</code>.</p>
 *             </li>
 *             <li>
 *                <p>For APNS and <code>APNS_SANDBOX</code> using certificate credentials,
 *                         <code>PlatformPrincipal</code> is <code>SSL certificate</code> and
 *                         <code>PlatformCredential</code> is <code>private key</code>.</p>
 *             </li>
 *             <li>
 *                <p>For APNS and <code>APNS_SANDBOX</code> using token credentials,
 *                         <code>PlatformPrincipal</code> is <code>signing key ID</code> and
 *                         <code>PlatformCredential</code> is <code>signing key</code>.</p>
 *             </li>
 *             <li>
 *                <p>For Baidu, <code>PlatformPrincipal</code> is <code>API key</code> and
 *                         <code>PlatformCredential</code> is <code>secret key</code>.</p>
 *             </li>
 *             <li>
 *                <p>For GCM (Firebase Cloud Messaging) using key credentials, there is no
 *                         <code>PlatformPrincipal</code>. The <code>PlatformCredential</code> is
 *                         <code>API key</code>.</p>
 *             </li>
 *             <li>
 *                <p>For GCM (Firebase Cloud Messaging) using token credentials, there is no
 *                         <code>PlatformPrincipal</code>. The <code>PlatformCredential</code> is a
 *                     JSON formatted private key file. When using the Amazon Web Services CLI or Amazon Web Services SDKs, the
 *                     file must be in string format and special characters must be ignored. To format
 *                     the file correctly, Amazon SNS recommends using the following command:
 *                         <code>SERVICE_JSON=$(jq @json < service.json)</code>.</p>
 *             </li>
 *             <li>
 *                <p>For MPNS, <code>PlatformPrincipal</code> is <code>TLS certificate</code> and
 *                         <code>PlatformCredential</code> is <code>private key</code>.</p>
 *             </li>
 *             <li>
 *                <p>For WNS, <code>PlatformPrincipal</code> is <code>Package Security
 *                         Identifier</code> and <code>PlatformCredential</code> is <code>secret
 *                         key</code>.</p>
 *             </li>
 *          </ul>
 *          <p>You can use the returned <code>PlatformApplicationArn</code> as an attribute for the
 *                 <code>CreatePlatformEndpoint</code> action.</p>
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
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 *
 * @public
 */
export class CreatePlatformApplicationCommand extends $Command
  .classBuilder<
    CreatePlatformApplicationCommandInput,
    CreatePlatformApplicationCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSimpleNotificationService", "CreatePlatformApplication", {})
  .n("SNSClient", "CreatePlatformApplicationCommand")
  .sc(CreatePlatformApplication)
  .build() {
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
