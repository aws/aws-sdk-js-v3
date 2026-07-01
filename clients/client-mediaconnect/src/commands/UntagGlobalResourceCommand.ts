// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UntagGlobalResourceRequest } from "../models/models_1";
import { UntagGlobalResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UntagGlobalResourceCommand}.
 */
export interface UntagGlobalResourceCommandInput extends UntagGlobalResourceRequest {}
/**
 * @public
 *
 * The output of {@link UntagGlobalResourceCommand}.
 */
export interface UntagGlobalResourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes tags from a global resource in AWS Elemental MediaConnect. The API supports the following global resources: router inputs, router outputs and router network interfaces. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UntagGlobalResourceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UntagGlobalResourceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // UntagGlobalResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   TagKeys: [ // __listOfString // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagGlobalResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagGlobalResourceCommandInput - {@link UntagGlobalResourceCommandInput}
 * @returns {@link UntagGlobalResourceCommandOutput}
 * @see {@link UntagGlobalResourceCommandInput} for command's `input` shape.
 * @see {@link UntagGlobalResourceCommandOutput} for command's `response` shape.
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
export class UntagGlobalResourceCommand extends command<UntagGlobalResourceCommandInput, UntagGlobalResourceCommandOutput>(
  _ep0,
  _mw0,
  "UntagGlobalResource",
  UntagGlobalResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UntagGlobalResourceRequest;
      output: {};
    };
    sdk: {
      input: UntagGlobalResourceCommandInput;
      output: UntagGlobalResourceCommandOutput;
    };
  };
}
