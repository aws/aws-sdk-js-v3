// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAppInstanceUsersRequest, ListAppInstanceUsersResponse } from "../models/models_0";
import { ListAppInstanceUsers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppInstanceUsersCommand}.
 */
export interface ListAppInstanceUsersCommandInput extends ListAppInstanceUsersRequest {}
/**
 * @public
 *
 * The output of {@link ListAppInstanceUsersCommand}.
 */
export interface ListAppInstanceUsersCommandOutput extends ListAppInstanceUsersResponse, __MetadataBearer {}

/**
 * <p>List all <code>AppInstanceUsers</code> created under a single
 *          <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, ListAppInstanceUsersCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, ListAppInstanceUsersCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // ListAppInstanceUsersRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAppInstanceUsersCommand(input);
 * const response = await client.send(command);
 * // { // ListAppInstanceUsersResponse
 * //   AppInstanceArn: "STRING_VALUE",
 * //   AppInstanceUsers: [ // AppInstanceUserList
 * //     { // AppInstanceUserSummary
 * //       AppInstanceUserArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Metadata: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppInstanceUsersCommandInput - {@link ListAppInstanceUsersCommandInput}
 * @returns {@link ListAppInstanceUsersCommandOutput}
 * @see {@link ListAppInstanceUsersCommandInput} for command's `input` shape.
 * @see {@link ListAppInstanceUsersCommandOutput} for command's `response` shape.
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
export class ListAppInstanceUsersCommand extends $Command
  .classBuilder<
    ListAppInstanceUsersCommandInput,
    ListAppInstanceUsersCommandOutput,
    ChimeSDKIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKIdentityClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeIdentityService", "ListAppInstanceUsers", {})
  .n("ChimeSDKIdentityClient", "ListAppInstanceUsersCommand")
  .sc(ListAppInstanceUsers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppInstanceUsersRequest;
      output: ListAppInstanceUsersResponse;
    };
    sdk: {
      input: ListAppInstanceUsersCommandInput;
      output: ListAppInstanceUsersCommandOutput;
    };
  };
}
