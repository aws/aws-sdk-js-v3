// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateChannelNamespaceRequest, UpdateChannelNamespaceResponse } from "../models/models_0";
import { de_UpdateChannelNamespaceCommand, se_UpdateChannelNamespaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateChannelNamespaceCommand}.
 */
export interface UpdateChannelNamespaceCommandInput extends UpdateChannelNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateChannelNamespaceCommand}.
 */
export interface UpdateChannelNamespaceCommandOutput extends UpdateChannelNamespaceResponse, __MetadataBearer {}

/**
 * <p>Updates a <code>ChannelNamespace</code> associated with an <code>Api</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateChannelNamespaceCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateChannelNamespaceCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // UpdateChannelNamespaceRequest
 *   apiId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   subscribeAuthModes: [ // AuthModes
 *     { // AuthMode
 *       authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 *     },
 *   ],
 *   publishAuthModes: [
 *     {
 *       authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 *     },
 *   ],
 *   codeHandlers: "STRING_VALUE",
 *   handlerConfigs: { // HandlerConfigs
 *     onPublish: { // HandlerConfig
 *       behavior: "CODE" || "DIRECT", // required
 *       integration: { // Integration
 *         dataSourceName: "STRING_VALUE", // required
 *         lambdaConfig: { // LambdaConfig
 *           invokeType: "REQUEST_RESPONSE" || "EVENT",
 *         },
 *       },
 *     },
 *     onSubscribe: {
 *       behavior: "CODE" || "DIRECT", // required
 *       integration: {
 *         dataSourceName: "STRING_VALUE", // required
 *         lambdaConfig: {
 *           invokeType: "REQUEST_RESPONSE" || "EVENT",
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateChannelNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateChannelNamespaceResponse
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
 * @param UpdateChannelNamespaceCommandInput - {@link UpdateChannelNamespaceCommandInput}
 * @returns {@link UpdateChannelNamespaceCommandOutput}
 * @see {@link UpdateChannelNamespaceCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelNamespaceCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to perform this operation on this resource.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
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
export class UpdateChannelNamespaceCommand extends $Command
  .classBuilder<
    UpdateChannelNamespaceCommandInput,
    UpdateChannelNamespaceCommandOutput,
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
  .s("AWSDeepdishControlPlaneService", "UpdateChannelNamespace", {})
  .n("AppSyncClient", "UpdateChannelNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateChannelNamespaceCommand)
  .de(de_UpdateChannelNamespaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateChannelNamespaceRequest;
      output: UpdateChannelNamespaceResponse;
    };
    sdk: {
      input: UpdateChannelNamespaceCommandInput;
      output: UpdateChannelNamespaceCommandOutput;
    };
  };
}
