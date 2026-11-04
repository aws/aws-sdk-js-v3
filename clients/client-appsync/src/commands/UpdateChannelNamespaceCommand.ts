// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateChannelNamespaceRequest, UpdateChannelNamespaceResponse } from "../models/models_0";
import { UpdateChannelNamespace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a `ChannelNamespace` associated with an `Api`.
 *
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
 *
 * You don't have access to perform this operation on this resource.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Another modification is in progress at this time and it must complete before you can make your change.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal AppSync error occurred. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource, and then try again.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You aren't authorized to perform this operation.
 *
 * @throws {@link AppSyncServiceException}
 *
 * Base exception class for all service exceptions from AppSync service.
 *
 * @public
 */
export class UpdateChannelNamespaceCommand extends command<UpdateChannelNamespaceCommandInput, UpdateChannelNamespaceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateChannelNamespace",
  UpdateChannelNamespace$
) {
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
