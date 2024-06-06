// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAppInstancesRequest,
  ListAppInstancesRequestFilterSensitiveLog,
  ListAppInstancesResponse,
  ListAppInstancesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListAppInstancesCommand, se_ListAppInstancesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppInstancesCommand}.
 */
export interface ListAppInstancesCommandInput extends ListAppInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListAppInstancesCommand}.
 */
export interface ListAppInstancesCommandOutput extends ListAppInstancesResponse, __MetadataBearer {}

/**
 * <p>Lists all Amazon Chime <code>AppInstance</code>s created under a single AWS
 *          account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, ListAppInstancesCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, ListAppInstancesCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // ListAppInstancesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAppInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListAppInstancesResponse
 * //   AppInstances: [ // AppInstanceList
 * //     { // AppInstanceSummary
 * //       AppInstanceArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Metadata: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppInstancesCommandInput - {@link ListAppInstancesCommandInput}
 * @returns {@link ListAppInstancesCommandOutput}
 * @see {@link ListAppInstancesCommandInput} for command's `input` shape.
 * @see {@link ListAppInstancesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListAppInstancesCommand extends $Command
  .classBuilder<
    ListAppInstancesCommandInput,
    ListAppInstancesCommandOutput,
    ChimeSDKIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKIdentityClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeIdentityService", "ListAppInstances", {})
  .n("ChimeSDKIdentityClient", "ListAppInstancesCommand")
  .f(ListAppInstancesRequestFilterSensitiveLog, ListAppInstancesResponseFilterSensitiveLog)
  .ser(se_ListAppInstancesCommand)
  .de(de_ListAppInstancesCommand)
  .build() {}
