// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetApplicationRequest, GetApplicationResponse } from "../models/models_0";
import { GetApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandInput extends GetApplicationRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandOutput extends GetApplicationResponse, __MetadataBearer {}

/**
 * Get an Application resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, GetApplicationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, GetApplicationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * // import type { AppIntegrationsClientConfig } from "@aws-sdk/client-appintegrations";
 * const config = {}; // type is AppIntegrationsClientConfig
 * const client = new AppIntegrationsClient(config);
 * const input = { // GetApplicationRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Namespace: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   ApplicationSourceConfig: { // ApplicationSourceConfig
 * //     ExternalUrlConfig: { // ExternalUrlConfig
 * //       AccessUrl: "STRING_VALUE", // required
 * //       ApprovedOrigins: [ // ApplicationApprovedOrigins
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   Subscriptions: [ // SubscriptionList
 * //     { // Subscription
 * //       Event: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Publications: [ // PublicationList
 * //     { // Publication
 * //       Event: "STRING_VALUE", // required
 * //       Schema: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Permissions: [ // PermissionList
 * //     "STRING_VALUE",
 * //   ],
 * //   IsService: true || false,
 * //   InitializationTimeout: Number("int"),
 * //   ApplicationConfig: { // ApplicationConfig
 * //     ContactHandling: { // ContactHandling
 * //       Scope: "CROSS_CONTACTS" || "PER_CONTACT",
 * //     },
 * //   },
 * //   IframeConfig: { // IframeConfig
 * //     Allow: [ // IframePermissionList
 * //       "STRING_VALUE",
 * //     ],
 * //     Sandbox: [
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   ApplicationType: "STANDARD" || "SERVICE" || "MCP_SERVER" || "A2A_SERVER",
 * //   AuthConfig: { // AuthConfig
 * //     AuthType: "API_KEY" || "CONNECT_JWT",
 * //     CredentialProviderIdentifier: "STRING_VALUE",
 * //     AudienceOverride: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApplicationCommandInput - {@link GetApplicationCommandInput}
 * @returns {@link GetApplicationCommandOutput}
 * @see {@link GetApplicationCommandInput} for command's `input` shape.
 * @see {@link GetApplicationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for AppIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServiceError} (server fault)
 *
 * Request processing failed due to an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link AppIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from AppIntegrations service.
 *
 * @example To get an application
 * ```javascript
 * // The following retrives an application.
 * const input = {
 *   Arn: "arn:aws:app-integrations:us-west-2:0123456789012:application/98542c53-e8ac-4570-9c85-c6552c8d9c5e"
 * };
 * const command = new GetApplicationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationSourceConfig: {
 *     ExternalUrlConfig: {
 *       AccessUrl: "https://example.com"
 *     }
 *   },
 *   Description: "My first application.",
 *   Name: "My Application",
 *   Namespace: "myapplication"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetApplicationCommand extends command<GetApplicationCommandInput, GetApplicationCommandOutput>(
  _ep0,
  _mw0,
  "GetApplication",
  GetApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationRequest;
      output: GetApplicationResponse;
    };
    sdk: {
      input: GetApplicationCommandInput;
      output: GetApplicationCommandOutput;
    };
  };
}
