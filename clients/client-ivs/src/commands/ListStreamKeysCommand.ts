// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListStreamKeysRequest, ListStreamKeysResponse } from "../models/models_0";
import { ListStreamKeys$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListStreamKeysCommand}.
 */
export interface ListStreamKeysCommandInput extends ListStreamKeysRequest {}
/**
 * @public
 *
 * The output of {@link ListStreamKeysCommand}.
 */
export interface ListStreamKeysCommandOutput extends ListStreamKeysResponse, __MetadataBearer {}

/**
 * <p>Gets summary information about stream keys for the specified channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, ListStreamKeysCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, ListStreamKeysCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // ListStreamKeysRequest
 *   channelArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListStreamKeysCommand(input);
 * const response = await client.send(command);
 * // { // ListStreamKeysResponse
 * //   streamKeys: [ // StreamKeyList // required
 * //     { // StreamKeySummary
 * //       arn: "STRING_VALUE",
 * //       channelArn: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStreamKeysCommandInput - {@link ListStreamKeysCommandInput}
 * @returns {@link ListStreamKeysCommandOutput}
 * @see {@link ListStreamKeysCommandInput} for command's `input` shape.
 * @see {@link ListStreamKeysCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class ListStreamKeysCommand extends command<ListStreamKeysCommandInput, ListStreamKeysCommandOutput>(
  _ep0,
  _mw0,
  "ListStreamKeys",
  ListStreamKeys$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStreamKeysRequest;
      output: ListStreamKeysResponse;
    };
    sdk: {
      input: ListStreamKeysCommandInput;
      output: ListStreamKeysCommandOutput;
    };
  };
}
