// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { TagResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TagResourceCommand}.
 */
export interface TagResourceCommandInput extends TagResourceRequest {}
/**
 * @public
 *
 * The output of {@link TagResourceCommand}.
 */
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {}

/**
 * Attaches tags to the specified resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaConnectClient, TagResourceCommand } from "@aws-sdk/client-kafkaconnect"; // ES Modules import
 * // const { KafkaConnectClient, TagResourceCommand } = require("@aws-sdk/client-kafkaconnect"); // CommonJS import
 * // import type { KafkaConnectClientConfig } from "@aws-sdk/client-kafkaconnect";
 * const config = {}; // type is KafkaConnectClientConfig
 * const client = new KafkaConnectClient(config);
 * const input = { // TagResourceRequest
 *   resourceArn: "STRING_VALUE", // required
 *   tags: { // Tags // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagResourceCommandInput - {@link TagResourceCommandInput}
 * @returns {@link TagResourceCommandOutput}
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link KafkaConnectClientResolvedConfig | config} for KafkaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * HTTP Status Code 400: Bad request due to incorrect input. Correct your request and then retry it.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * HTTP Status Code 409: Conflict. A resource with this name already exists. Retry your request with another name.
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
export class TagResourceCommand extends command<TagResourceCommandInput, TagResourceCommandOutput>(
  _ep0,
  _mw0,
  "TagResource",
  TagResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagResourceRequest;
      output: {};
    };
    sdk: {
      input: TagResourceCommandInput;
      output: TagResourceCommandOutput;
    };
  };
}
