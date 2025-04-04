// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import {
  CreateConnectionRequest,
  CreateConnectionRequestFilterSensitiveLog,
  CreateConnectionResponse,
} from "../models/models_0";
import { de_CreateConnectionCommand, se_CreateConnectionCommand } from "../protocols/Aws_json1_1";

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
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-target-connection.html">Connections for endpoint targets</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, CreateConnectionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, CreateConnectionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
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
 *     ConnectivityParameters: { // ConnectivityResourceParameters
 *       ResourceParameters: { // ConnectivityResourceConfigurationArn
 *         ResourceConfigurationArn: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   InvocationConnectivityParameters: {
 *     ResourceParameters: {
 *       ResourceConfigurationArn: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectionResponse
 * //   ConnectionArn: "STRING_VALUE",
 * //   ConnectionState: "CREATING" || "UPDATING" || "DELETING" || "AUTHORIZED" || "DEAUTHORIZED" || "AUTHORIZING" || "DEAUTHORIZING" || "ACTIVE" || "FAILED_CONNECTIVITY",
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
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the necessary permissions for this action.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This request cannot be completed due to throttling issues.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 *
 * @public
 */
export class CreateConnectionCommand extends $Command
  .classBuilder<
    CreateConnectionCommandInput,
    CreateConnectionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "CreateConnection", {})
  .n("EventBridgeClient", "CreateConnectionCommand")
  .f(CreateConnectionRequestFilterSensitiveLog, void 0)
  .ser(se_CreateConnectionCommand)
  .de(de_CreateConnectionCommand)
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
