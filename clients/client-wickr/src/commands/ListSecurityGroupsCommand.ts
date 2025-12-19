// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSecurityGroupsRequest, ListSecurityGroupsResponse } from "../models/models_0";
import { ListSecurityGroups$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSecurityGroupsCommand}.
 */
export interface ListSecurityGroupsCommandInput extends ListSecurityGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListSecurityGroupsCommand}.
 */
export interface ListSecurityGroupsCommandOutput extends ListSecurityGroupsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of security groups in a specified Wickr network. You can sort the results by various criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, ListSecurityGroupsCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, ListSecurityGroupsCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // ListSecurityGroupsRequest
 *   networkId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   sortFields: "STRING_VALUE",
 *   sortDirection: "ASC" || "DESC",
 * };
 * const command = new ListSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityGroupsResponse
 * //   securityGroups: [ // SecurityGroupList
 * //     { // SecurityGroup
 * //       activeMembers: Number("int"), // required
 * //       botMembers: Number("int"), // required
 * //       activeDirectoryGuid: "STRING_VALUE",
 * //       id: "STRING_VALUE", // required
 * //       isDefault: true || false, // required
 * //       name: "STRING_VALUE", // required
 * //       modified: Number("int"), // required
 * //       securityGroupSettings: { // SecurityGroupSettings
 * //         alwaysReauthenticate: true || false,
 * //         atakPackageValues: [ // SecurityGroupStringList
 * //           "STRING_VALUE",
 * //         ],
 * //         calling: { // CallingSettings
 * //           canStart11Call: true || false,
 * //           canVideoCall: true || false,
 * //           forceTcpCall: true || false,
 * //         },
 * //         checkForUpdates: true || false,
 * //         enableAtak: true || false,
 * //         enableCrashReports: true || false,
 * //         enableFileDownload: true || false,
 * //         enableGuestFederation: true || false,
 * //         enableNotificationPreview: true || false,
 * //         enableOpenAccessOption: true || false,
 * //         enableRestrictedGlobalFederation: true || false,
 * //         filesEnabled: true || false,
 * //         forceDeviceLockout: Number("int"),
 * //         forceOpenAccess: true || false,
 * //         forceReadReceipts: true || false,
 * //         globalFederation: true || false,
 * //         isAtoEnabled: true || false,
 * //         isLinkPreviewEnabled: true || false,
 * //         locationAllowMaps: true || false,
 * //         locationEnabled: true || false,
 * //         maxAutoDownloadSize: Number("long"),
 * //         maxBor: Number("int"),
 * //         maxTtl: Number("long"),
 * //         messageForwardingEnabled: true || false,
 * //         passwordRequirements: { // PasswordRequirements
 * //           lowercase: Number("int"),
 * //           minLength: Number("int"),
 * //           numbers: Number("int"),
 * //           symbols: Number("int"),
 * //           uppercase: Number("int"),
 * //         },
 * //         presenceEnabled: true || false,
 * //         quickResponses: [
 * //           "STRING_VALUE",
 * //         ],
 * //         showMasterRecoveryKey: true || false,
 * //         shredder: { // ShredderSettings
 * //           canProcessManually: true || false,
 * //           intensity: Number("int"),
 * //         },
 * //         ssoMaxIdleMinutes: Number("int"),
 * //         federationMode: Number("int"),
 * //         lockoutThreshold: Number("int"),
 * //         permittedNetworks: [ // PermittedNetworksList
 * //           "STRING_VALUE",
 * //         ],
 * //         permittedWickrAwsNetworks: [ // WickrAwsNetworksList
 * //           { // WickrAwsNetworks
 * //             region: "STRING_VALUE", // required
 * //             networkId: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         permittedWickrEnterpriseNetworks: [ // PermittedWickrEnterpriseNetworksList
 * //           { // PermittedWickrEnterpriseNetwork
 * //             domain: "STRING_VALUE", // required
 * //             networkId: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityGroupsCommandInput - {@link ListSecurityGroupsCommandInput}
 * @returns {@link ListSecurityGroupsCommandOutput}
 * @see {@link ListSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link ListSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link WickrClientResolvedConfig | config} for WickrClient's `config` shape.
 *
 * @throws {@link BadRequestError} (client fault)
 *  <p>The request was invalid or malformed. This error occurs when the request parameters do not meet the API requirements, such as invalid field values, missing required parameters, or improperly formatted data.</p>
 *
 * @throws {@link ForbiddenError} (client fault)
 *  <p>Access to the requested resource is forbidden. This error occurs when the authenticated user does not have the necessary permissions to perform the requested operation, even though they are authenticated.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An unexpected error occurred on the server while processing the request. This indicates a problem with the Wickr service itself rather than with the request. If this error persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link RateLimitError} (client fault)
 *  <p>The request was throttled because too many requests were sent in a short period of time. Wait a moment and retry the request. Consider implementing exponential backoff in your application.</p>
 *
 * @throws {@link ResourceNotFoundError} (client fault)
 *  <p>The requested resource could not be found. This error occurs when you try to access or modify a network, user, bot, security group, or other resource that doesn't exist or has been deleted.</p>
 *
 * @throws {@link UnauthorizedError} (client fault)
 *  <p>The request was not authenticated or the authentication credentials were invalid. This error occurs when the request lacks valid authentication credentials or the credentials have expired.</p>
 *
 * @throws {@link ValidationError} (client fault)
 *  <p>One or more fields in the request failed validation. This error provides detailed information about which fields were invalid and why, allowing you to correct the request and retry.</p>
 *
 * @throws {@link WickrServiceException}
 * <p>Base exception class for all service exceptions from Wickr service.</p>
 *
 *
 * @example List security groups with pagination
 * ```javascript
 * //
 * const input = {
 *   maxResults: 10,
 *   networkId: "12345678",
 *   sortDirection: "ASC",
 *   sortFields: "name"
 * };
 * const command = new ListSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   nextToken: "eyJvZmZzZXQiOjEwfQ==",
 *   securityGroups: [
 *     {
 *       activeMembers: 25,
 *       botMembers: 0,
 *       id: "abc12345",
 *       isDefault: true,
 *       modified: 1638360000,
 *       name: "default",
 *       securityGroupSettings: {
 *         lockoutThreshold: 10
 *       }
 *     },
 *     {
 *       activeMembers: 10,
 *       botMembers: 2,
 *       id: "def67890",
 *       isDefault: false,
 *       modified: 1638360000,
 *       name: "engineering",
 *       securityGroupSettings: {
 *         lockoutThreshold: 15
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example List security groups - first page
 * ```javascript
 * //
 * const input = {
 *   maxResults: 10,
 *   networkId: "12345678"
 * };
 * const command = new ListSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   securityGroups: [
 *     {
 *       activeMembers: 25,
 *       botMembers: 0,
 *       id: "abc12345",
 *       isDefault: true,
 *       modified: 1638360000,
 *       name: "default",
 *       securityGroupSettings: {
 *         lockoutThreshold: 10
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSecurityGroupsCommand extends $Command
  .classBuilder<
    ListSecurityGroupsCommandInput,
    ListSecurityGroupsCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "ListSecurityGroups", {})
  .n("WickrClient", "ListSecurityGroupsCommand")
  .sc(ListSecurityGroups$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSecurityGroupsRequest;
      output: ListSecurityGroupsResponse;
    };
    sdk: {
      input: ListSecurityGroupsCommandInput;
      output: ListSecurityGroupsCommandOutput;
    };
  };
}
