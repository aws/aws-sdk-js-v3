// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAppInstanceUserEndpointsRequest,
  ListAppInstanceUserEndpointsRequestFilterSensitiveLog,
  ListAppInstanceUserEndpointsResponse,
  ListAppInstanceUserEndpointsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListAppInstanceUserEndpointsCommand,
  se_ListAppInstanceUserEndpointsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListAppInstanceUserEndpointsCommandOutput
  extends ListAppInstanceUserEndpointsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all the <code>AppInstanceUserEndpoints</code> created under a single <code>AppInstanceUser</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, ListAppInstanceUserEndpointsCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, ListAppInstanceUserEndpointsCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
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
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
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
export class ListAppInstanceUserEndpointsCommand extends $Command
  .classBuilder<
    ListAppInstanceUserEndpointsCommandInput,
    ListAppInstanceUserEndpointsCommandOutput,
    ChimeSDKIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKIdentityClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeIdentityService", "ListAppInstanceUserEndpoints", {})
  .n("ChimeSDKIdentityClient", "ListAppInstanceUserEndpointsCommand")
  .f(ListAppInstanceUserEndpointsRequestFilterSensitiveLog, ListAppInstanceUserEndpointsResponseFilterSensitiveLog)
  .ser(se_ListAppInstanceUserEndpointsCommand)
  .de(de_ListAppInstanceUserEndpointsCommand)
  .build() {
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
