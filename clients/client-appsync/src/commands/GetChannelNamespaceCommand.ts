// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetChannelNamespaceRequest, GetChannelNamespaceResponse } from "../models/models_0";
import { GetChannelNamespace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the channel namespace for a specified `Api`.
 *
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
 *
 * You don't have access to perform this operation on this resource.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
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
export class GetChannelNamespaceCommand extends command<GetChannelNamespaceCommandInput, GetChannelNamespaceCommandOutput>(
  _ep0,
  _mw0,
  "GetChannelNamespace",
  GetChannelNamespace$
) {
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
