// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateUserRequest, CreateUserResponse } from "../models/models_0";
import { CreateUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUserCommand}.
 */
export interface CreateUserCommandInput extends CreateUserRequest {}
/**
 * @public
 *
 * The output of {@link CreateUserCommand}.
 */
export interface CreateUserCommandOutput extends CreateUserResponse, __MetadataBearer {}

/**
 * <p>Creates a user account for the specified Connect Customer instance.</p>
 *          <important>
 *             <p>Certain <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UserIdentityInfo.html">UserIdentityInfo</a> parameters are required in some situations. For example, <code>Email</code>,
 *      <code>FirstName</code> and <code>LastName</code> are required if you are using Connect Customer or SAML for
 *     identity management.</p>
 *          </important>
 *          <note>
 *             <p>Fields in <code>PhoneConfig</code> cannot be set simultaneously with their corresponding channel-specific configuration parameters. Specifically:</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <code>PhoneConfig.AutoAccept</code> conflicts with <code>AutoAcceptConfigs</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>PhoneConfig.AfterContactWorkTimeLimit</code> conflicts with <code>AfterContactWorkConfigs</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>PhoneConfig.PhoneType</code> and <code>PhoneConfig.PhoneNumber</code> conflict with <code>PhoneNumberConfigs</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>PhoneConfig.PersistentConnection</code> conflicts with <code>PersistentConnectionConfigs</code>
 *                   </p>
 *                </li>
 *             </ul>
 *             <p>We recommend using channel-specific parameters such as <code>AutoAcceptConfigs</code>, <code>AfterContactWorkConfigs</code>, <code>PhoneNumberConfigs</code>, <code>PersistentConnectionConfigs</code>, and <code>VoiceEnhancementConfigs</code> for per-channel configuration.</p>
 *          </note>
 *          <p>For information about how to create users using the Connect Customer admin website, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/user-management.html">Add Users</a> in the <i>Connect Customer
 *     Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateUserCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateUserCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateUserRequest
 *   Username: "STRING_VALUE", // required
 *   Password: "STRING_VALUE",
 *   IdentityInfo: { // UserIdentityInfo
 *     FirstName: "STRING_VALUE",
 *     LastName: "STRING_VALUE",
 *     Email: "STRING_VALUE",
 *     SecondaryEmail: "STRING_VALUE",
 *     Mobile: "STRING_VALUE",
 *   },
 *   PhoneConfig: { // UserPhoneConfig
 *     PhoneType: "SOFT_PHONE" || "DESK_PHONE",
 *     AutoAccept: true || false,
 *     AfterContactWorkTimeLimit: Number("int"),
 *     DeskPhoneNumber: "STRING_VALUE",
 *     PersistentConnection: true || false,
 *   },
 *   DirectoryUserId: "STRING_VALUE",
 *   SecurityProfileIds: [ // SecurityProfileIds // required
 *     "STRING_VALUE",
 *   ],
 *   RoutingProfileId: "STRING_VALUE", // required
 *   HierarchyGroupId: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE", // required
 *   AutoAcceptConfigs: [ // AutoAcceptConfigs
 *     { // AutoAcceptConfig
 *       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 *       AutoAccept: true || false, // required
 *       AgentFirstCallbackAutoAccept: true || false,
 *     },
 *   ],
 *   AfterContactWorkConfigs: [ // AfterContactWorkConfigs
 *     { // AfterContactWorkConfigPerChannel
 *       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 *       AfterContactWorkConfig: { // AfterContactWorkConfig
 *         AfterContactWorkTimeLimit: Number("int"),
 *       },
 *       AgentFirstCallbackAfterContactWorkConfig: {
 *         AfterContactWorkTimeLimit: Number("int"),
 *       },
 *     },
 *   ],
 *   PhoneNumberConfigs: [ // PhoneNumberConfigs
 *     { // PhoneNumberConfig
 *       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 *       PhoneType: "SOFT_PHONE" || "DESK_PHONE", // required
 *       PhoneNumber: "STRING_VALUE",
 *     },
 *   ],
 *   PersistentConnectionConfigs: [ // PersistentConnectionConfigs
 *     { // PersistentConnectionConfig
 *       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 *       PersistentConnection: true || false, // required
 *     },
 *   ],
 *   VoiceEnhancementConfigs: [ // VoiceEnhancementConfigs
 *     { // VoiceEnhancementConfig
 *       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 *       VoiceEnhancementMode: "VOICE_ISOLATION" || "NOISE_SUPPRESSION" || "NONE", // required
 *     },
 *   ],
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateUserCommand(input);
 * const response = await client.send(command);
 * // { // CreateUserResponse
 * //   UserId: "STRING_VALUE",
 * //   UserArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateUserCommandInput - {@link CreateUserCommandInput}
 * @returns {@link CreateUserCommandOutput}
 * @see {@link CreateUserCommandInput} for command's `input` shape.
 * @see {@link CreateUserCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class CreateUserCommand extends $Command
  .classBuilder<
    CreateUserCommandInput,
    CreateUserCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreateUser", {})
  .n("ConnectClient", "CreateUserCommand")
  .sc(CreateUser$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUserRequest;
      output: CreateUserResponse;
    };
    sdk: {
      input: CreateUserCommandInput;
      output: CreateUserCommandOutput;
    };
  };
}
