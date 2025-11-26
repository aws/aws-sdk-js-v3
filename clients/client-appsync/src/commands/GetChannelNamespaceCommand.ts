// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetChannelNamespaceRequest, GetChannelNamespaceResponse } from "../models/models_0";
import { GetChannelNamespace } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetChannelNamespaceCommand}.
 */
export interface GetChannelNamespaceCommandInput extends GetChannelNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link GetChannelNamespaceCommand}.
 */
export interface GetChannelNamespaceCommandOutput extends GetChannelNamespaceResponse, __MetadataBearer {}

/**
 * <p>Retrieves the channel namespace for a specified <code>Api</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetChannelNamespaceCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetChannelNamespaceCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // GetChannelNamespaceRequest
 *   apiId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetChannelNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // GetChannelNamespaceResponse
 * //   channelNamespace: { // ChannelNamespace
 * //     apiId: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     subscribeAuthModes: [ // AuthModes
 * //       { // AuthMode
 * //         authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 * //       },
 * //     ],
 * //     publishAuthModes: [
 * //       {
 * //         authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 * //       },
 * //     ],
 * //     codeHandlers: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     channelNamespaceArn: "STRING_VALUE",
 * //     created: new Date("TIMESTAMP"),
 * //     lastModified: new Date("TIMESTAMP"),
 * //     handlerConfigs: { // HandlerConfigs
 * //       onPublish: { // HandlerConfig
 * //         behavior: "CODE" || "DIRECT", // required
 * //         integration: { // Integration
 * //           dataSourceName: "STRING_VALUE", // required
 * //           lambdaConfig: { // LambdaConfig
 * //             invokeType: "REQUEST_RESPONSE" || "EVENT",
 * //           },
 * //         },
 * //       },
 * //       onSubscribe: {
 * //         behavior: "CODE" || "DIRECT", // required
 * //         integration: {
 * //           dataSourceName: "STRING_VALUE", // required
 * //           lambdaConfig: {
 * //             invokeType: "REQUEST_RESPONSE" || "EVENT",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetChannelNamespaceCommandInput - {@link GetChannelNamespaceCommandInput}
 * @returns {@link GetChannelNamespaceCommandOutput}
 * @see {@link GetChannelNamespaceCommandInput} for command's `input` shape.
 * @see {@link GetChannelNamespaceCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to perform this operation on this resource.</p>
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
 *
 * @public
 */
export class GetChannelNamespaceCommand extends $Command
  .classBuilder<
    GetChannelNamespaceCommandInput,
    GetChannelNamespaceCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepdishControlPlaneService", "GetChannelNamespace", {})
  .n("AppSyncClient", "GetChannelNamespaceCommand")
  .sc(GetChannelNamespace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChannelNamespaceRequest;
      output: GetChannelNamespaceResponse;
    };
    sdk: {
      input: GetChannelNamespaceCommandInput;
      output: GetChannelNamespaceCommandOutput;
    };
  };
}
