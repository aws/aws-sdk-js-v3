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
import type { DescribeConnectionRequest, DescribeConnectionResponse } from "../models/models_0";
import { DescribeConnection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectionCommand}.
 */
export interface DescribeConnectionCommandInput extends DescribeConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectionCommand}.
 */
export interface DescribeConnectionCommandOutput extends DescribeConnectionResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about a connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DescribeConnectionCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DescribeConnectionCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // DescribeConnectionRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectionResponse
 * //   ConnectionArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   ConnectionState: "CREATING" || "UPDATING" || "DELETING" || "AUTHORIZED" || "DEAUTHORIZED" || "AUTHORIZING" || "DEAUTHORIZING",
 * //   StateReason: "STRING_VALUE",
 * //   AuthorizationType: "BASIC" || "OAUTH_CLIENT_CREDENTIALS" || "API_KEY",
 * //   SecretArn: "STRING_VALUE",
 * //   AuthParameters: { // ConnectionAuthResponseParameters
 * //     BasicAuthParameters: { // ConnectionBasicAuthResponseParameters
 * //       Username: "STRING_VALUE",
 * //     },
 * //     OAuthParameters: { // ConnectionOAuthResponseParameters
 * //       ClientParameters: { // ConnectionOAuthClientResponseParameters
 * //         ClientID: "STRING_VALUE",
 * //       },
 * //       AuthorizationEndpoint: "STRING_VALUE",
 * //       HttpMethod: "GET" || "POST" || "PUT",
 * //       OAuthHttpParameters: { // ConnectionHttpParameters
 * //         HeaderParameters: [ // ConnectionHeaderParametersList
 * //           { // ConnectionHeaderParameter
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             IsValueSecret: true || false,
 * //           },
 * //         ],
 * //         QueryStringParameters: [ // ConnectionQueryStringParametersList
 * //           { // ConnectionQueryStringParameter
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             IsValueSecret: true || false,
 * //           },
 * //         ],
 * //         BodyParameters: [ // ConnectionBodyParametersList
 * //           { // ConnectionBodyParameter
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             IsValueSecret: true || false,
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     ApiKeyAuthParameters: { // ConnectionApiKeyAuthResponseParameters
 * //       ApiKeyName: "STRING_VALUE",
 * //     },
 * //     InvocationHttpParameters: {
 * //       HeaderParameters: [
 * //         {
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //           IsValueSecret: true || false,
 * //         },
 * //       ],
 * //       QueryStringParameters: [
 * //         {
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //           IsValueSecret: true || false,
 * //         },
 * //       ],
 * //       BodyParameters: [
 * //         {
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //           IsValueSecret: true || false,
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastAuthorizedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeConnectionCommandInput - {@link DescribeConnectionCommandInput}
 * @returns {@link DescribeConnectionCommandOutput}
 * @see {@link DescribeConnectionCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
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
export class DescribeConnectionCommand extends $Command
  .classBuilder<
    DescribeConnectionCommandInput,
    DescribeConnectionCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "DescribeConnection", {})
  .n("CloudWatchEventsClient", "DescribeConnectionCommand")
  .sc(DescribeConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConnectionRequest;
      output: DescribeConnectionResponse;
    };
    sdk: {
      input: DescribeConnectionCommandInput;
      output: DescribeConnectionCommandOutput;
    };
  };
}
