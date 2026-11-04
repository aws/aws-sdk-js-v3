// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  RegisterAppInstanceUserEndpointRequest,
  RegisterAppInstanceUserEndpointResponse,
} from "../models/models_0";
import { RegisterAppInstanceUserEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterAppInstanceUserEndpointCommand}.
 */
export interface RegisterAppInstanceUserEndpointCommandInput extends RegisterAppInstanceUserEndpointRequest {}
/**
 * @public
 *
 * The output of {@link RegisterAppInstanceUserEndpointCommand}.
 */
export interface RegisterAppInstanceUserEndpointCommandOutput extends RegisterAppInstanceUserEndpointResponse, __MetadataBearer {}

/**
 * Registers an endpoint under an Amazon Chime `AppInstanceUser`. The endpoint receives messages for a user. For push notifications, the endpoint is a mobile device used to receive mobile push notifications for a user.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, RegisterAppInstanceUserEndpointCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, RegisterAppInstanceUserEndpointCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // RegisterAppInstanceUserEndpointRequest
 *   AppInstanceUserArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Type: "APNS" || "APNS_SANDBOX" || "GCM", // required
 *   ResourceArn: "STRING_VALUE", // required
 *   EndpointAttributes: { // EndpointAttributes
 *     DeviceToken: "STRING_VALUE", // required
 *     VoipDeviceToken: "STRING_VALUE",
 *   },
 *   ClientRequestToken: "STRING_VALUE", // required
 *   AllowMessages: "ALL" || "NONE",
 * };
 * const command = new RegisterAppInstanceUserEndpointCommand(input);
 * const response = await client.send(command);
 * // { // RegisterAppInstanceUserEndpointResponse
 * //   AppInstanceUserArn: "STRING_VALUE",
 * //   EndpointId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterAppInstanceUserEndpointCommandInput - {@link RegisterAppInstanceUserEndpointCommandInput}
 * @returns {@link RegisterAppInstanceUserEndpointCommandOutput}
 * @see {@link RegisterAppInstanceUserEndpointCommandInput} for command's `input` shape.
 * @see {@link RegisterAppInstanceUserEndpointCommandOutput} for command's `response` shape.
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
export class RegisterAppInstanceUserEndpointCommand extends command<RegisterAppInstanceUserEndpointCommandInput, RegisterAppInstanceUserEndpointCommandOutput>(
  _ep0,
  _mw0,
  "RegisterAppInstanceUserEndpoint",
  RegisterAppInstanceUserEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterAppInstanceUserEndpointRequest;
      output: RegisterAppInstanceUserEndpointResponse;
    };
    sdk: {
      input: RegisterAppInstanceUserEndpointCommandInput;
      output: RegisterAppInstanceUserEndpointCommandOutput;
    };
  };
}
