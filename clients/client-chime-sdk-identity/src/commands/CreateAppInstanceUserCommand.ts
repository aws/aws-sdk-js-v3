// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ChimeSDKIdentityClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAppInstanceUserRequest, CreateAppInstanceUserResponse } from "../models/models_0";
import { CreateAppInstanceUser } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a user under an Amazon Chime <code>AppInstance</code>. The request consists of a
 *          unique <code>appInstanceUserId</code> and <code>Name</code> for that user.</p>
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
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKIdentityServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKIdentity service.</p>
 *
 *
 * @public
 */
export class CreateAppInstanceUserCommand extends $Command
  .classBuilder<
    CreateAppInstanceUserCommandInput,
    CreateAppInstanceUserCommandOutput,
    ChimeSDKIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKIdentityClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeIdentityService", "CreateAppInstanceUser", {})
  .n("ChimeSDKIdentityClient", "CreateAppInstanceUserCommand")
  .sc(CreateAppInstanceUser)
  .build() {
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
