// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeAppInstanceUserEndpointRequest,
  DescribeAppInstanceUserEndpointResponse,
} from "../models/models_0";
import { DescribeAppInstanceUserEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAppInstanceUserEndpointCommand}.
 */
export interface DescribeAppInstanceUserEndpointCommandInput extends DescribeAppInstanceUserEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppInstanceUserEndpointCommand}.
 */
export interface DescribeAppInstanceUserEndpointCommandOutput extends DescribeAppInstanceUserEndpointResponse, __MetadataBearer {}

/**
 * Returns the full details of an `AppInstanceUserEndpoint`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, DescribeAppInstanceUserEndpointCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, DescribeAppInstanceUserEndpointCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // DescribeAppInstanceUserEndpointRequest
 *   AppInstanceUserArn: "STRING_VALUE", // required
 *   EndpointId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppInstanceUserEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppInstanceUserEndpointResponse
 * //   AppInstanceUserEndpoint: { // AppInstanceUserEndpoint
 * //     AppInstanceUserArn: "STRING_VALUE",
 * //     EndpointId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Type: "APNS" || "APNS_SANDBOX" || "GCM",
 * //     ResourceArn: "STRING_VALUE",
 * //     EndpointAttributes: { // EndpointAttributes
 * //       DeviceToken: "STRING_VALUE", // required
 * //       VoipDeviceToken: "STRING_VALUE",
 * //     },
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     AllowMessages: "ALL" || "NONE",
 * //     EndpointState: { // EndpointState
 * //       Status: "ACTIVE" || "INACTIVE", // required
 * //       StatusReason: "INVALID_DEVICE_TOKEN" || "INVALID_PINPOINT_ARN",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppInstanceUserEndpointCommandInput - {@link DescribeAppInstanceUserEndpointCommandInput}
 * @returns {@link DescribeAppInstanceUserEndpointCommandOutput}
 * @see {@link DescribeAppInstanceUserEndpointCommandInput} for command's `input` shape.
 * @see {@link DescribeAppInstanceUserEndpointCommandOutput} for command's `response` shape.
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
export class DescribeAppInstanceUserEndpointCommand extends command<DescribeAppInstanceUserEndpointCommandInput, DescribeAppInstanceUserEndpointCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAppInstanceUserEndpoint",
  DescribeAppInstanceUserEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppInstanceUserEndpointRequest;
      output: DescribeAppInstanceUserEndpointResponse;
    };
    sdk: {
      input: DescribeAppInstanceUserEndpointCommandInput;
      output: DescribeAppInstanceUserEndpointCommandOutput;
    };
  };
}
