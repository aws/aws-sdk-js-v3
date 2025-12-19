// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreateDataRetentionBotChallengeRequest,
  CreateDataRetentionBotChallengeResponse,
} from "../models/models_0";
import { CreateDataRetentionBotChallenge$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataRetentionBotChallengeCommand}.
 */
export interface CreateDataRetentionBotChallengeCommandInput extends CreateDataRetentionBotChallengeRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataRetentionBotChallengeCommand}.
 */
export interface CreateDataRetentionBotChallengeCommandOutput
  extends CreateDataRetentionBotChallengeResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new challenge password for the data retention bot. This password is used for authentication when the bot connects to the network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, CreateDataRetentionBotChallengeCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, CreateDataRetentionBotChallengeCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // CreateDataRetentionBotChallengeRequest
 *   networkId: "STRING_VALUE", // required
 * };
 * const command = new CreateDataRetentionBotChallengeCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataRetentionBotChallengeResponse
 * //   challenge: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateDataRetentionBotChallengeCommandInput - {@link CreateDataRetentionBotChallengeCommandInput}
 * @returns {@link CreateDataRetentionBotChallengeCommandOutput}
 * @see {@link CreateDataRetentionBotChallengeCommandInput} for command's `input` shape.
 * @see {@link CreateDataRetentionBotChallengeCommandOutput} for command's `response` shape.
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
 * @example Create data retention bot challenge successfully
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678"
 * };
 * const command = new CreateDataRetentionBotChallengeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   challenge: "a1b2c3d4e5f6"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateDataRetentionBotChallengeCommand extends $Command
  .classBuilder<
    CreateDataRetentionBotChallengeCommandInput,
    CreateDataRetentionBotChallengeCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "CreateDataRetentionBotChallenge", {})
  .n("WickrClient", "CreateDataRetentionBotChallengeCommand")
  .sc(CreateDataRetentionBotChallenge$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataRetentionBotChallengeRequest;
      output: CreateDataRetentionBotChallengeResponse;
    };
    sdk: {
      input: CreateDataRetentionBotChallengeCommandInput;
      output: CreateDataRetentionBotChallengeCommandOutput;
    };
  };
}
