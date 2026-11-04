// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAppInstanceUserRequest, CreateAppInstanceUserResponse } from "../models/models_0";
import { CreateAppInstanceUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAppInstanceUserCommand}.
 */
export interface CreateAppInstanceUserCommandInput extends CreateAppInstanceUserRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppInstanceUserCommand}.
 */
export interface CreateAppInstanceUserCommandOutput extends CreateAppInstanceUserResponse, __MetadataBearer {}

/**
 * Creates a user under an Amazon Chime `AppInstance`. The request consists of a unique `appInstanceUserId` and `Name` for that user.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, CreateAppInstanceUserCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, CreateAppInstanceUserCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // CreateAppInstanceUserRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   AppInstanceUserId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Metadata: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ExpirationSettings: { // ExpirationSettings
 *     ExpirationDays: Number("int"), // required
 *     ExpirationCriterion: "CREATED_TIMESTAMP", // required
 *   },
 * };
 * const command = new CreateAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppInstanceUserResponse
 * //   AppInstanceUserArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAppInstanceUserCommandInput - {@link CreateAppInstanceUserCommandInput}
 * @returns {@link CreateAppInstanceUserCommandOutput}
 * @see {@link CreateAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link CreateAppInstanceUserCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeSDKIdentityServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKIdentity service.
 *
 * @public
 */
export class CreateAppInstanceUserCommand extends command<CreateAppInstanceUserCommandInput, CreateAppInstanceUserCommandOutput>(
  _ep0,
  _mw0,
  "CreateAppInstanceUser",
  CreateAppInstanceUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAppInstanceUserRequest;
      output: CreateAppInstanceUserResponse;
    };
    sdk: {
      input: CreateAppInstanceUserCommandInput;
      output: CreateAppInstanceUserCommandOutput;
    };
  };
}
