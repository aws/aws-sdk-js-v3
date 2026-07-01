// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTagsForGlobalResourceRequest } from "../models/models_0";
import type { ListTagsForGlobalResourceResponse } from "../models/models_1";
import { ListTagsForGlobalResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTagsForGlobalResourceCommand}.
 */
export interface ListTagsForGlobalResourceCommandInput extends ListTagsForGlobalResourceRequest {}
/**
 * @public
 *
 * The output of {@link ListTagsForGlobalResourceCommand}.
 */
export interface ListTagsForGlobalResourceCommandOutput extends ListTagsForGlobalResourceResponse, __MetadataBearer {}

/**
 * <p>Lists the tags associated with a global resource in AWS Elemental MediaConnect. The API supports the following global resources: router inputs, router outputs and router network interfaces. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, ListTagsForGlobalResourceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, ListTagsForGlobalResourceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // ListTagsForGlobalResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new ListTagsForGlobalResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForGlobalResourceResponse
 * //   Tags: { // __mapOfString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTagsForGlobalResourceCommandInput - {@link ListTagsForGlobalResourceCommandInput}
 * @returns {@link ListTagsForGlobalResourceCommandOutput}
 * @see {@link ListTagsForGlobalResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForGlobalResourceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system. </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 *
 * @public
 */
export class ListTagsForGlobalResourceCommand extends command<ListTagsForGlobalResourceCommandInput, ListTagsForGlobalResourceCommandOutput>(
  _ep0,
  _mw0,
  "ListTagsForGlobalResource",
  ListTagsForGlobalResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsForGlobalResourceRequest;
      output: ListTagsForGlobalResourceResponse;
    };
    sdk: {
      input: ListTagsForGlobalResourceCommandInput;
      output: ListTagsForGlobalResourceCommandOutput;
    };
  };
}
