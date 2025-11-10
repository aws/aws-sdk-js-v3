// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaConnectClient";
import { ListCustomPluginsRequest, ListCustomPluginsResponse } from "../models/models_0";
import { ListCustomPlugins } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCustomPluginsCommand}.
 */
export interface ListCustomPluginsCommandInput extends ListCustomPluginsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomPluginsCommand}.
 */
export interface ListCustomPluginsCommandOutput extends ListCustomPluginsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all of the custom plugins in this account and Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, ListCustomPluginsCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, ListCustomPluginsCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * // import type { KafkaConnectClientConfig } from "@aws-sdk/client-kafkaconnect";
 * const config = {}; // type is KafkaConnectClientConfig
 * const client = new KafkaConnectClient(config);
 * const input = { // ListCustomPluginsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   namePrefix: "STRING_VALUE",
 * };
 * const command = new ListCustomPluginsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomPluginsResponse
 * //   customPlugins: [ // __listOfCustomPluginSummary
 * //     { // CustomPluginSummary
 * //       creationTime: new Date("TIMESTAMP"),
 * //       customPluginArn: "STRING_VALUE",
 * //       customPluginState: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       latestRevision: { // CustomPluginRevisionSummary
 * //         contentType: "STRING_VALUE",
 * //         creationTime: new Date("TIMESTAMP"),
 * //         description: "STRING_VALUE",
 * //         fileDescription: { // CustomPluginFileDescription
 * //           fileMd5: "STRING_VALUE",
 * //           fileSize: Number("long"),
 * //         },
 * //         location: { // CustomPluginLocationDescription
 * //           s3Location: { // S3LocationDescription
 * //             bucketArn: "STRING_VALUE",
 * //             fileKey: "STRING_VALUE",
 * //             objectVersion: "STRING_VALUE",
 * //           },
 * //         },
 * //         revision: Number("long"),
 * //       },
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomPluginsCommandInput - {@link ListCustomPluginsCommandInput}
 * @returns {@link ListCustomPluginsCommandOutput}
 * @see {@link ListCustomPluginsCommandInput} for command's `input` shape.
 * @see {@link ListCustomPluginsCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for KafkaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then
 *          retry it.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your
 *          request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>HTTP Status Code 500: Unexpected internal server error. Retrying your request might
 *          resolve the issue.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>HTTP Status Code 404: Resource not found due to incorrect input. Correct your request
 *          and then retry it.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>HTTP Status Code 503: Service Unavailable. Retrying your request in some time might
 *          resolve the issue.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>HTTP Status Code 429: Limit exceeded. Resource limit reached.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>HTTP Status Code 401: Unauthorized request. The provided credentials couldn't be
 *          validated.</p>
 *
 * @throws {@link KafkaConnectServiceException}
 * <p>Base exception class for all service exceptions from KafkaConnect service.</p>
 *
 *
 * @public
 */
export class ListCustomPluginsCommand extends $Command
  .classBuilder<
    ListCustomPluginsCommandInput,
    ListCustomPluginsCommandOutput,
    KafkaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KafkaConnect", "ListCustomPlugins", {})
  .n("KafkaConnectClient", "ListCustomPluginsCommand")
  .sc(ListCustomPlugins)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomPluginsRequest;
      output: ListCustomPluginsResponse;
    };
    sdk: {
      input: ListCustomPluginsCommandInput;
      output: ListCustomPluginsCommandOutput;
    };
  };
}
