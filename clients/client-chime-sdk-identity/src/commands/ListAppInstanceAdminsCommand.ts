// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAppInstanceAdminsRequest,
  ListAppInstanceAdminsRequestFilterSensitiveLog,
  ListAppInstanceAdminsResponse,
  ListAppInstanceAdminsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListAppInstanceAdminsCommand, se_ListAppInstanceAdminsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppInstanceAdminsCommand}.
 */
export interface ListAppInstanceAdminsCommandInput extends ListAppInstanceAdminsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppInstanceAdminsCommand}.
 */
export interface ListAppInstanceAdminsCommandOutput extends ListAppInstanceAdminsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the administrators in the <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, ListAppInstanceAdminsCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, ListAppInstanceAdminsCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // ListAppInstanceAdminsRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAppInstanceAdminsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppInstanceAdminsResponse
 * //   AppInstanceArn: "STRING_VALUE",
 * //   AppInstanceAdmins: [ // AppInstanceAdminList
 * //     { // AppInstanceAdminSummary
 * //       Admin: { // Identity
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppInstanceAdminsCommandInput - {@link ListAppInstanceAdminsCommandInput}
 * @returns {@link ListAppInstanceAdminsCommandOutput}
 * @see {@link ListAppInstanceAdminsCommandInput} for command's `input` shape.
 * @see {@link ListAppInstanceAdminsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
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
export class ListAppInstanceAdminsCommand extends $Command
  .classBuilder<
    ListAppInstanceAdminsCommandInput,
    ListAppInstanceAdminsCommandOutput,
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
  .s("ChimeIdentityService", "ListAppInstanceAdmins", {})
  .n("ChimeSDKIdentityClient", "ListAppInstanceAdminsCommand")
  .f(ListAppInstanceAdminsRequestFilterSensitiveLog, ListAppInstanceAdminsResponseFilterSensitiveLog)
  .ser(se_ListAppInstanceAdminsCommand)
  .de(de_ListAppInstanceAdminsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppInstanceAdminsRequest;
      output: ListAppInstanceAdminsResponse;
    };
    sdk: {
      input: ListAppInstanceAdminsCommandInput;
      output: ListAppInstanceAdminsCommandOutput;
    };
  };
}
