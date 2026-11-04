// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeregisterAppInstanceUserEndpointRequest } from "../models/models_0";
import { DeregisterAppInstanceUserEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeregisterAppInstanceUserEndpointCommand}.
 */
export interface DeregisterAppInstanceUserEndpointCommandInput extends DeregisterAppInstanceUserEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterAppInstanceUserEndpointCommand}.
 */
export interface DeregisterAppInstanceUserEndpointCommandOutput extends __MetadataBearer {}

/**
 * Deregisters an `AppInstanceUserEndpoint`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, DeregisterAppInstanceUserEndpointCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, DeregisterAppInstanceUserEndpointCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // DeregisterAppInstanceUserEndpointRequest
 *   AppInstanceUserArn: "STRING_VALUE", // required
 *   EndpointId: "STRING_VALUE", // required
 * };
 * const command = new DeregisterAppInstanceUserEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterAppInstanceUserEndpointCommandInput - {@link DeregisterAppInstanceUserEndpointCommandInput}
 * @returns {@link DeregisterAppInstanceUserEndpointCommandOutput}
 * @see {@link DeregisterAppInstanceUserEndpointCommandInput} for command's `input` shape.
 * @see {@link DeregisterAppInstanceUserEndpointCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
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
export class DeregisterAppInstanceUserEndpointCommand extends command<DeregisterAppInstanceUserEndpointCommandInput, DeregisterAppInstanceUserEndpointCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterAppInstanceUserEndpoint",
  DeregisterAppInstanceUserEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterAppInstanceUserEndpointRequest;
      output: {};
    };
    sdk: {
      input: DeregisterAppInstanceUserEndpointCommandInput;
      output: DeregisterAppInstanceUserEndpointCommandOutput;
    };
  };
}
