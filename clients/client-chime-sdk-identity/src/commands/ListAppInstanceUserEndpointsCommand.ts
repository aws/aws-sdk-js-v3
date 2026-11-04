// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAppInstanceUserEndpointsRequest, ListAppInstanceUserEndpointsResponse } from "../models/models_0";
import { ListAppInstanceUserEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAppInstanceUserEndpointsCommand}.
 */
export interface ListAppInstanceUserEndpointsCommandInput extends ListAppInstanceUserEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppInstanceUserEndpointsCommand}.
 */
export interface ListAppInstanceUserEndpointsCommandOutput extends ListAppInstanceUserEndpointsResponse, __MetadataBearer {}

/**
 * Lists all the `AppInstanceUserEndpoints` created under a single `AppInstanceUser`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, ListAppInstanceUserEndpointsCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, ListAppInstanceUserEndpointsCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // ListAppInstanceUserEndpointsRequest
 *   AppInstanceUserArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAppInstanceUserEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppInstanceUserEndpointsResponse
 * //   AppInstanceUserEndpoints: [ // AppInstanceUserEndpointSummaryList
 * //     { // AppInstanceUserEndpointSummary
 * //       AppInstanceUserArn: "STRING_VALUE",
 * //       EndpointId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "APNS" || "APNS_SANDBOX" || "GCM",
 * //       AllowMessages: "ALL" || "NONE",
 * //       EndpointState: { // EndpointState
 * //         Status: "ACTIVE" || "INACTIVE", // required
 * //         StatusReason: "INVALID_DEVICE_TOKEN" || "INVALID_PINPOINT_ARN",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppInstanceUserEndpointsCommandInput - {@link ListAppInstanceUserEndpointsCommandInput}
 * @returns {@link ListAppInstanceUserEndpointsCommandOutput}
 * @see {@link ListAppInstanceUserEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListAppInstanceUserEndpointsCommandOutput} for command's `response` shape.
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
export class ListAppInstanceUserEndpointsCommand extends command<ListAppInstanceUserEndpointsCommandInput, ListAppInstanceUserEndpointsCommandOutput>(
  _ep0,
  _mw0,
  "ListAppInstanceUserEndpoints",
  ListAppInstanceUserEndpoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppInstanceUserEndpointsRequest;
      output: ListAppInstanceUserEndpointsResponse;
    };
    sdk: {
      input: ListAppInstanceUserEndpointsCommandInput;
      output: ListAppInstanceUserEndpointsCommandOutput;
    };
  };
}
