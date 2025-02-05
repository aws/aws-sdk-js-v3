// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListChannelNamespacesRequest, ListChannelNamespacesResponse } from "../models/models_0";
import { de_ListChannelNamespacesCommand, se_ListChannelNamespacesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChannelNamespacesCommand}.
 */
export interface ListChannelNamespacesCommandInput extends ListChannelNamespacesRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelNamespacesCommand}.
 */
export interface ListChannelNamespacesCommandOutput extends ListChannelNamespacesResponse, __MetadataBearer {}

/**
 * <p>Lists the channel namespaces for a specified <code>Api</code>.</p>
 *          <p>
 *             <code>ListChannelNamespaces</code> returns only high level details for the channel
 *             namespace. To retrieve code handlers, use
 *          <code>GetChannelNamespace</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListChannelNamespacesCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListChannelNamespacesCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppSyncClient(config);
 * const input = { // ListChannelNamespacesRequest
 *   apiId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListChannelNamespacesCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelNamespacesResponse
 * //   channelNamespaces: [ // ChannelNamespaces
 * //     { // ChannelNamespace
 * //       apiId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       subscribeAuthModes: [ // AuthModes
 * //         { // AuthMode
 * //           authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 * //         },
 * //       ],
 * //       publishAuthModes: [
 * //         {
 * //           authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 * //         },
 * //       ],
 * //       codeHandlers: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       channelNamespaceArn: "STRING_VALUE",
 * //       created: new Date("TIMESTAMP"),
 * //       lastModified: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelNamespacesCommandInput - {@link ListChannelNamespacesCommandInput}
 * @returns {@link ListChannelNamespacesCommandOutput}
 * @see {@link ListChannelNamespacesCommandInput} for command's `input` shape.
 * @see {@link ListChannelNamespacesCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 * @public
 */
export class ListChannelNamespacesCommand extends $Command
  .classBuilder<
    ListChannelNamespacesCommandInput,
    ListChannelNamespacesCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "ListChannelNamespaces", {})
  .n("AppSyncClient", "ListChannelNamespacesCommand")
  .f(void 0, void 0)
  .ser(se_ListChannelNamespacesCommand)
  .de(de_ListChannelNamespacesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelNamespacesRequest;
      output: ListChannelNamespacesResponse;
    };
    sdk: {
      input: ListChannelNamespacesCommandInput;
      output: ListChannelNamespacesCommandOutput;
    };
  };
}
