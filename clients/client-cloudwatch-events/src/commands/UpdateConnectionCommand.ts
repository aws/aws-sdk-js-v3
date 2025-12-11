// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchEventsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateConnectionRequest, UpdateConnectionResponse } from "../models/models_0";
import { UpdateConnection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectionCommand}.
 */
export interface UpdateConnectionCommandInput extends UpdateConnectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectionCommand}.
 */
export interface UpdateConnectionCommandOutput extends UpdateConnectionResponse, __MetadataBearer {}

/**
 * <p>Updates settings for a connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, UpdateConnectionCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, UpdateConnectionCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // UpdateConnectionRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   AuthorizationType: "BASIC" || "OAUTH_CLIENT_CREDENTIALS" || "API_KEY",
 *   AuthParameters: { // UpdateConnectionAuthRequestParameters
 *     BasicAuthParameters: { // UpdateConnectionBasicAuthRequestParameters
 *       Username: "STRING_VALUE",
 *       Password: "STRING_VALUE",
 *     },
 *     OAuthParameters: { // UpdateConnectionOAuthRequestParameters
 *       ClientParameters: { // UpdateConnectionOAuthClientRequestParameters
 *         ClientID: "STRING_VALUE",
 *         ClientSecret: "STRING_VALUE",
 *       },
 *       AuthorizationEndpoint: "STRING_VALUE",
 *       HttpMethod: "GET" || "POST" || "PUT",
 *       OAuthHttpParameters: { // ConnectionHttpParameters
 *         HeaderParameters: [ // ConnectionHeaderParametersList
 *           { // ConnectionHeaderParameter
 *             Key: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *             IsValueSecret: true || false,
 *           },
 *         ],
 *         QueryStringParameters: [ // ConnectionQueryStringParametersList
 *           { // ConnectionQueryStringParameter
 *             Key: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *             IsValueSecret: true || false,
 *           },
 *         ],
 *         BodyParameters: [ // ConnectionBodyParametersList
 *           { // ConnectionBodyParameter
 *             Key: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *             IsValueSecret: true || false,
 *           },
 *         ],
 *       },
 *     },
 *     ApiKeyAuthParameters: { // UpdateConnectionApiKeyAuthRequestParameters
 *       ApiKeyName: "STRING_VALUE",
 *       ApiKeyValue: "STRING_VALUE",
 *     },
 *     InvocationHttpParameters: {
 *       HeaderParameters: [
 *         {
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           IsValueSecret: true || false,
 *         },
 *       ],
 *       QueryStringParameters: [
 *         {
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           IsValueSecret: true || false,
 *         },
 *       ],
 *       BodyParameters: [
 *         {
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           IsValueSecret: true || false,
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateConnectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConnectionResponse
 * //   ConnectionArn: "STRING_VALUE",
 * //   ConnectionState: "CREATING" || "UPDATING" || "DELETING" || "AUTHORIZED" || "DEAUTHORIZED" || "AUTHORIZING" || "DEAUTHORIZING",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastAuthorizedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateConnectionCommandInput - {@link UpdateConnectionCommandInput}
 * @returns {@link UpdateConnectionCommandOutput}
 * @see {@link UpdateConnectionCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 *
 * @public
 */
export class UpdateConnectionCommand extends $Command
  .classBuilder<
    UpdateConnectionCommandInput,
    UpdateConnectionCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "UpdateConnection", {})
  .n("CloudWatchEventsClient", "UpdateConnectionCommand")
  .sc(UpdateConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConnectionRequest;
      output: UpdateConnectionResponse;
    };
    sdk: {
      input: UpdateConnectionCommandInput;
      output: UpdateConnectionCommandOutput;
    };
  };
}
