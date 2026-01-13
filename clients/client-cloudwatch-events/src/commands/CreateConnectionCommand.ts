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
import type { CreateConnectionRequest, CreateConnectionResponse } from "../models/models_0";
import { CreateConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectionCommand}.
 */
export interface CreateConnectionCommandInput extends CreateConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectionCommand}.
 */
export interface CreateConnectionCommandOutput extends CreateConnectionResponse, __MetadataBearer {}

/**
 * <p>Creates a connection. A connection defines the authorization type and credentials to use
 *       for authorization with an API destination HTTP endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, CreateConnectionCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, CreateConnectionCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // CreateConnectionRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   AuthorizationType: "BASIC" || "OAUTH_CLIENT_CREDENTIALS" || "API_KEY", // required
 *   AuthParameters: { // CreateConnectionAuthRequestParameters
 *     BasicAuthParameters: { // CreateConnectionBasicAuthRequestParameters
 *       Username: "STRING_VALUE", // required
 *       Password: "STRING_VALUE", // required
 *     },
 *     OAuthParameters: { // CreateConnectionOAuthRequestParameters
 *       ClientParameters: { // CreateConnectionOAuthClientRequestParameters
 *         ClientID: "STRING_VALUE", // required
 *         ClientSecret: "STRING_VALUE", // required
 *       },
 *       AuthorizationEndpoint: "STRING_VALUE", // required
 *       HttpMethod: "GET" || "POST" || "PUT", // required
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
 *     ApiKeyAuthParameters: { // CreateConnectionApiKeyAuthRequestParameters
 *       ApiKeyName: "STRING_VALUE", // required
 *       ApiKeyValue: "STRING_VALUE", // required
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
 * const command = new CreateConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectionResponse
 * //   ConnectionArn: "STRING_VALUE",
 * //   ConnectionState: "CREATING" || "UPDATING" || "DELETING" || "AUTHORIZED" || "DEAUTHORIZED" || "AUTHORIZING" || "DEAUTHORIZING",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateConnectionCommandInput - {@link CreateConnectionCommandInput}
 * @returns {@link CreateConnectionCommandOutput}
 * @see {@link CreateConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource you are trying to create already exists.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 *
 * @public
 */
export class CreateConnectionCommand extends $Command
  .classBuilder<
    CreateConnectionCommandInput,
    CreateConnectionCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "CreateConnection", {})
  .n("CloudWatchEventsClient", "CreateConnectionCommand")
  .sc(CreateConnection$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectionRequest;
      output: CreateConnectionResponse;
    };
    sdk: {
      input: CreateConnectionCommandInput;
      output: CreateConnectionCommandOutput;
    };
  };
}
