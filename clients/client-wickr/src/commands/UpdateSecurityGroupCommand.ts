// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateSecurityGroupRequest, UpdateSecurityGroupResponse } from "../models/models_0";
import { UpdateSecurityGroup$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSecurityGroupCommand}.
 */
export interface UpdateSecurityGroupCommandInput extends UpdateSecurityGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSecurityGroupCommand}.
 */
export interface UpdateSecurityGroupCommandOutput extends UpdateSecurityGroupResponse, __MetadataBearer {}

/**
 * <p>Updates the properties of an existing security group in a Wickr network, such as its name or settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, UpdateSecurityGroupCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, UpdateSecurityGroupCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // UpdateSecurityGroupRequest
 *   networkId: "STRING_VALUE", // required
 *   groupId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   securityGroupSettings: { // SecurityGroupSettings
 *     alwaysReauthenticate: true || false,
 *     atakPackageValues: [ // SecurityGroupStringList
 *       "STRING_VALUE",
 *     ],
 *     calling: { // CallingSettings
 *       canStart11Call: true || false,
 *       canVideoCall: true || false,
 *       forceTcpCall: true || false,
 *     },
 *     checkForUpdates: true || false,
 *     enableAtak: true || false,
 *     enableCrashReports: true || false,
 *     enableFileDownload: true || false,
 *     enableGuestFederation: true || false,
 *     enableNotificationPreview: true || false,
 *     enableOpenAccessOption: true || false,
 *     enableRestrictedGlobalFederation: true || false,
 *     filesEnabled: true || false,
 *     forceDeviceLockout: Number("int"),
 *     forceOpenAccess: true || false,
 *     forceReadReceipts: true || false,
 *     globalFederation: true || false,
 *     isAtoEnabled: true || false,
 *     isLinkPreviewEnabled: true || false,
 *     locationAllowMaps: true || false,
 *     locationEnabled: true || false,
 *     maxAutoDownloadSize: Number("long"),
 *     maxBor: Number("int"),
 *     maxTtl: Number("long"),
 *     messageForwardingEnabled: true || false,
 *     passwordRequirements: { // PasswordRequirements
 *       lowercase: Number("int"),
 *       minLength: Number("int"),
 *       numbers: Number("int"),
 *       symbols: Number("int"),
 *       uppercase: Number("int"),
 *     },
 *     presenceEnabled: true || false,
 *     quickResponses: [
 *       "STRING_VALUE",
 *     ],
 *     showMasterRecoveryKey: true || false,
 *     shredder: { // ShredderSettings
 *       canProcessManually: true || false,
 *       intensity: Number("int"),
 *     },
 *     ssoMaxIdleMinutes: Number("int"),
 *     federationMode: Number("int"),
 *     lockoutThreshold: Number("int"),
 *     permittedNetworks: [ // PermittedNetworksList
 *       "STRING_VALUE",
 *     ],
 *     permittedWickrAwsNetworks: [ // WickrAwsNetworksList
 *       { // WickrAwsNetworks
 *         region: "STRING_VALUE", // required
 *         networkId: "STRING_VALUE", // required
 *       },
 *     ],
 *     permittedWickrEnterpriseNetworks: [ // PermittedWickrEnterpriseNetworksList
 *       { // PermittedWickrEnterpriseNetwork
 *         domain: "STRING_VALUE", // required
 *         networkId: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateSecurityGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSecurityGroupResponse
 * //   securityGroup: { // SecurityGroup
 * //     activeMembers: Number("int"), // required
 * //     botMembers: Number("int"), // required
 * //     activeDirectoryGuid: "STRING_VALUE",
 * //     id: "STRING_VALUE", // required
 * //     isDefault: true || false, // required
 * //     name: "STRING_VALUE", // required
 * //     modified: Number("int"), // required
 * //     securityGroupSettings: { // SecurityGroupSettings
 * //       alwaysReauthenticate: true || false,
 * //       atakPackageValues: [ // SecurityGroupStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       calling: { // CallingSettings
 * //         canStart11Call: true || false,
 * //         canVideoCall: true || false,
 * //         forceTcpCall: true || false,
 * //       },
 * //       checkForUpdates: true || false,
 * //       enableAtak: true || false,
 * //       enableCrashReports: true || false,
 * //       enableFileDownload: true || false,
 * //       enableGuestFederation: true || false,
 * //       enableNotificationPreview: true || false,
 * //       enableOpenAccessOption: true || false,
 * //       enableRestrictedGlobalFederation: true || false,
 * //       filesEnabled: true || false,
 * //       forceDeviceLockout: Number("int"),
 * //       forceOpenAccess: true || false,
 * //       forceReadReceipts: true || false,
 * //       globalFederation: true || false,
 * //       isAtoEnabled: true || false,
 * //       isLinkPreviewEnabled: true || false,
 * //       locationAllowMaps: true || false,
 * //       locationEnabled: true || false,
 * //       maxAutoDownloadSize: Number("long"),
 * //       maxBor: Number("int"),
 * //       maxTtl: Number("long"),
 * //       messageForwardingEnabled: true || false,
 * //       passwordRequirements: { // PasswordRequirements
 * //         lowercase: Number("int"),
 * //         minLength: Number("int"),
 * //         numbers: Number("int"),
 * //         symbols: Number("int"),
 * //         uppercase: Number("int"),
 * //       },
 * //       presenceEnabled: true || false,
 * //       quickResponses: [
 * //         "STRING_VALUE",
 * //       ],
 * //       showMasterRecoveryKey: true || false,
 * //       shredder: { // ShredderSettings
 * //         canProcessManually: true || false,
 * //         intensity: Number("int"),
 * //       },
 * //       ssoMaxIdleMinutes: Number("int"),
 * //       federationMode: Number("int"),
 * //       lockoutThreshold: Number("int"),
 * //       permittedNetworks: [ // PermittedNetworksList
 * //         "STRING_VALUE",
 * //       ],
 * //       permittedWickrAwsNetworks: [ // WickrAwsNetworksList
 * //         { // WickrAwsNetworks
 * //           region: "STRING_VALUE", // required
 * //           networkId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       permittedWickrEnterpriseNetworks: [ // PermittedWickrEnterpriseNetworksList
 * //         { // PermittedWickrEnterpriseNetwork
 * //           domain: "STRING_VALUE", // required
 * //           networkId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSecurityGroupCommandInput - {@link UpdateSecurityGroupCommandInput}
 * @returns {@link UpdateSecurityGroupCommandOutput}
 * @see {@link UpdateSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityGroupCommandOutput} for command's `response` shape.
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
 * @example Update security group successfully
 * ```javascript
 * //
 * const input = {
 *   groupId: "abc12345",
 *   name: "Updated Group Name",
 *   networkId: "12345678",
 *   securityGroupSettings: {
 *     lockoutThreshold: 15
 *   }
 * };
 * const command = new UpdateSecurityGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   securityGroup: {
 *     activeMembers: 10,
 *     botMembers: 2,
 *     id: "abc12345",
 *     isDefault: false,
 *     modified: 1638360000,
 *     name: "Updated Group Name",
 *     securityGroupSettings: {
 *       lockoutThreshold: 15
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @example Update security group - not found
 * ```javascript
 * //
 * const input = {
 *   groupId: "invalid99",
 *   name: "New Name",
 *   networkId: "12345678"
 * };
 * const command = new UpdateSecurityGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateSecurityGroupCommand extends $Command
  .classBuilder<
    UpdateSecurityGroupCommandInput,
    UpdateSecurityGroupCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "UpdateSecurityGroup", {})
  .n("WickrClient", "UpdateSecurityGroupCommand")
  .sc(UpdateSecurityGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSecurityGroupRequest;
      output: UpdateSecurityGroupResponse;
    };
    sdk: {
      input: UpdateSecurityGroupCommandInput;
      output: UpdateSecurityGroupCommandOutput;
    };
  };
}
