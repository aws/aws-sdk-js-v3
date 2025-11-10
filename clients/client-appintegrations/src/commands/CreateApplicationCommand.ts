// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateApplicationRequest, CreateApplicationResponse } from "../models/models_0";
import { CreateApplication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandInput extends CreateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandOutput extends CreateApplicationResponse, __MetadataBearer {}

/**
 * <p>Creates and persists an Application resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, CreateApplicationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, CreateApplicationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * // import type { AppIntegrationsClientConfig } from "@aws-sdk/client-appintegrations";
 * const config = {}; // type is AppIntegrationsClientConfig
 * const client = new AppIntegrationsClient(config);
 * const input = { // CreateApplicationRequest
 *   Name: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ApplicationSourceConfig: { // ApplicationSourceConfig
 *     ExternalUrlConfig: { // ExternalUrlConfig
 *       AccessUrl: "STRING_VALUE", // required
 *       ApprovedOrigins: [ // ApplicationApprovedOrigins
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   Subscriptions: [ // SubscriptionList
 *     { // Subscription
 *       Event: "STRING_VALUE", // required
 *       Description: "STRING_VALUE",
 *     },
 *   ],
 *   Publications: [ // PublicationList
 *     { // Publication
 *       Event: "STRING_VALUE", // required
 *       Schema: "STRING_VALUE", // required
 *       Description: "STRING_VALUE",
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Permissions: [ // PermissionList
 *     "STRING_VALUE",
 *   ],
 *   IsService: true || false,
 *   InitializationTimeout: Number("int"),
 *   ApplicationConfig: { // ApplicationConfig
 *     ContactHandling: { // ContactHandling
 *       Scope: "CROSS_CONTACTS" || "PER_CONTACT",
 *     },
 *   },
 *   IframeConfig: { // IframeConfig
 *     Allow: [ // IframePermissionList
 *       "STRING_VALUE",
 *     ],
 *     Sandbox: [
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateApplicationResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateApplicationCommandInput - {@link CreateApplicationCommandInput}
 * @returns {@link CreateApplicationCommandOutput}
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for AppIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>Request processing failed due to an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid. </p>
 *
 * @throws {@link ResourceQuotaExceededException} (client fault)
 *  <p>The allowed quota for the resource has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link AppIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from AppIntegrations service.</p>
 *
 *
 * @example To create an application
 * ```javascript
 * // The following creates an application named My Application with access url https://example.com.
 * const input = {
 *   ApplicationSourceConfig: {
 *     ExternalUrlConfig: {
 *       AccessUrl: "https://example.com"
 *     }
 *   },
 *   Description: "My first application.",
 *   Name: "My Application",
 *   Namespace: "myapplication"
 * };
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:app-integrations:us-west-2:0123456789012:application/98542c53-e8ac-4570-9c85-c6552c8d9c5e",
 *   Id: "98542c53-e8ac-4570-9c85-c6552c8d9c5e"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateApplicationCommand extends $Command
  .classBuilder<
    CreateApplicationCommandInput,
    CreateApplicationCommandOutput,
    AppIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppIntegrationService", "CreateApplication", {})
  .n("AppIntegrationsClient", "CreateApplicationCommand")
  .sc(CreateApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationRequest;
      output: CreateApplicationResponse;
    };
    sdk: {
      input: CreateApplicationCommandInput;
      output: CreateApplicationCommandOutput;
    };
  };
}
