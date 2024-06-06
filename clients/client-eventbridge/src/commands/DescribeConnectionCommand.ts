// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import {
  DescribeConnectionRequest,
  DescribeConnectionResponse,
  DescribeConnectionResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeConnectionCommand, se_DescribeConnectionCommand } from "../protocols/Aws_json1_1";

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
 * import { EventBridgeClient, DescribeConnectionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeConnectionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
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
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 * @public
 */
export class DescribeConnectionCommand extends $Command
  .classBuilder<
    DescribeConnectionCommandInput,
    DescribeConnectionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "DescribeConnection", {})
  .n("EventBridgeClient", "DescribeConnectionCommand")
  .f(void 0, DescribeConnectionResponseFilterSensitiveLog)
  .ser(se_DescribeConnectionCommand)
  .de(de_DescribeConnectionCommand)
  .build() {}
