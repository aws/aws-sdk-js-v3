// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTagsForResourceRequest, ListTagsForResourceResponse } from "../models/models_0";
import { ListTagsForResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTagsForResourceCommand}.
 */
export interface ListTagsForResourceCommandInput extends ListTagsForResourceRequest {}
/**
 * @public
 *
 * The output of {@link ListTagsForResourceCommand}.
 */
export interface ListTagsForResourceCommandOutput extends ListTagsForResourceResponse, __MetadataBearer {}

/**
 * Lists all the tags attached to the specified resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, ListTagsForResourceCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, ListTagsForResourceCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * // import type { KafkaConnectClientConfig } from "@aws-sdk/client-kafkaconnect";
 * const config = {}; // type is KafkaConnectClientConfig
 * const client = new KafkaConnectClient(config);
 * const input = { // ListTagsForResourceRequest
 *   resourceArn: "STRING_VALUE", // required
 * };
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForResourceResponse
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTagsForResourceCommandInput - {@link ListTagsForResourceCommandInput}
 * @returns {@link ListTagsForResourceCommandOutput}
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
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
export class ListTagsForResourceCommand extends command<ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput>(
  _ep0,
  _mw0,
  "ListTagsForResource",
  ListTagsForResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsForResourceRequest;
      output: ListTagsForResourceResponse;
    };
    sdk: {
      input: ListTagsForResourceCommandInput;
      output: ListTagsForResourceCommandOutput;
    };
  };
}
