// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCustomPluginsRequest, ListCustomPluginsResponse } from "../models/models_0";
import { ListCustomPlugins$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of all of the custom plugins in this account and Region.
 *
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
 *
 * HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * HTTP Status Code 403: Access forbidden. Correct your credentials and then retry your request.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * HTTP Status Code 500: Unexpected internal server error. Retrying your request might resolve the issue.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * HTTP Status Code 404: Resource not found due to incorrect input. Correct your request and then retry it.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * HTTP Status Code 503: Service Unavailable. Retrying your request in some time might resolve the issue.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * HTTP Status Code 429: Limit exceeded. Resource limit reached.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * HTTP Status Code 401: Unauthorized request. The provided credentials couldn't be validated.
 *
 * @throws {@link KafkaConnectServiceException}
 *
 * Base exception class for all service exceptions from KafkaConnect service.
 *
 * @public
 */
export class ListCustomPluginsCommand extends command<ListCustomPluginsCommandInput, ListCustomPluginsCommandOutput>(
  _ep0,
  _mw0,
  "ListCustomPlugins",
  ListCustomPlugins$
) {
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
