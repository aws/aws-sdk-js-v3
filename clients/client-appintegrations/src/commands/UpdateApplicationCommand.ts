// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateApplicationRequest, UpdateApplicationResponse } from "../models/models_0";
import { UpdateApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandInput extends UpdateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationCommand}.
 */
export interface UpdateApplicationCommandOutput extends UpdateApplicationResponse, __MetadataBearer {}

/**
 * Updates and persists an Application resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, UpdateApplicationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, UpdateApplicationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * // import type { AppIntegrationsClientConfig } from "@aws-sdk/client-appintegrations";
 * const config = {}; // type is AppIntegrationsClientConfig
 * const client = new AppIntegrationsClient(config);
 * const input = { // UpdateApplicationRequest
 *   Arn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
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
 *   ApplicationType: "STANDARD" || "SERVICE" || "MCP_SERVER" || "A2A_SERVER",
 *   AuthConfig: { // AuthConfig
 *     AuthType: "API_KEY" || "CONNECT_JWT",
 *     CredentialProviderIdentifier: "STRING_VALUE",
 *     AudienceOverride: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateApplicationCommandInput - {@link UpdateApplicationCommandInput}
 * @returns {@link UpdateApplicationCommandOutput}
 * @see {@link UpdateApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for AppIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource. Verify the application's current state and retry the request.
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
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link AppIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from AppIntegrations service.
 *
 * @example To update an application
 * ```javascript
 * // The following updates an existing application named with a new name.
 * const input = {
 *   Arn: "arn:aws:app-integrations:us-west-2:0123456789012:application/98542c53-e8ac-4570-9c85-c6552c8d9c5e",
 *   Name: "My New Application Name"
 * };
 * const command = new UpdateApplicationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateApplicationCommand extends command<UpdateApplicationCommandInput, UpdateApplicationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateApplication",
  UpdateApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApplicationRequest;
      output: {};
    };
    sdk: {
      input: UpdateApplicationCommandInput;
      output: UpdateApplicationCommandOutput;
    };
  };
}
