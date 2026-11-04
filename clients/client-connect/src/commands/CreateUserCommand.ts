// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateUserRequest, CreateUserResponse } from "../models/models_1";
import { CreateUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a user account for the specified Connect Customer instance.
 *
 * > **Important:** Certain [UserIdentityInfo](https://docs.aws.amazon.com/connect/latest/APIReference/API_UserIdentityInfo.html) parameters are required in some situations. For example, `Email`, `FirstName` and `LastName` are required if you are using Connect Customer or SAML for identity management.
 *
 * > **Note:**
 * >
 * > Fields in `PhoneConfig` cannot be set simultaneously with their corresponding channel-specific configuration parameters. Specifically:
 * >
 * > - `PhoneConfig.AutoAccept` conflicts with `AutoAcceptConfigs`
 * > - `PhoneConfig.AfterContactWorkTimeLimit` conflicts with `AfterContactWorkConfigs`
 * > - `PhoneConfig.PhoneType` and `PhoneConfig.PhoneNumber` conflict with `PhoneNumberConfigs`
 * > - `PhoneConfig.PersistentConnection` conflicts with `PersistentConnectionConfigs`
 * >
 * > We recommend using channel-specific parameters such as `AutoAcceptConfigs`, `AfterContactWorkConfigs`, `PhoneNumberConfigs`, `PersistentConnectionConfigs`, and `VoiceEnhancementConfigs` for per-channel configuration.
 *
 * For information about how to create users using the Connect Customer admin website, see [Add Users](https://docs.aws.amazon.com/connect/latest/adminguide/user-management.html) in the *Connect Customer Administrator Guide*.
 *
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
 *
 * A resource with the specified name already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The allowed limit for the resource has been exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class CreateUserCommand extends command<CreateUserCommandInput, CreateUserCommandOutput>(
  _ep0,
  _mw0,
  "CreateUser",
  CreateUser$
) {
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
