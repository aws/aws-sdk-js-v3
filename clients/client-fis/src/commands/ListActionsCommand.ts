// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListActionsRequest, ListActionsResponse } from "../models/models_0";
import { ListActions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListActionsCommand}.
 */
export interface ListActionsCommandInput extends ListActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListActionsCommand}.
 */
export interface ListActionsCommandOutput extends ListActionsResponse, __MetadataBearer {}

/**
 * <p>Lists the available FIS actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, ListActionsCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, ListActionsCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // import type { FisClientConfig } from "@aws-sdk/client-fis";
 * const config = {}; // type is FisClientConfig
 * const client = new FisClient(config);
 * const input = { // ListActionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListActionsResponse
 * //   actions: [ // ActionSummaryList
 * //     { // ActionSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       targets: { // ActionTargetMap
 * //         "<keys>": { // ActionTarget
 * //           resourceType: "STRING_VALUE",
 * //         },
 * //       },
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListActionsCommandInput - {@link ListActionsCommandInput}
 * @returns {@link ListActionsCommandOutput}
 * @see {@link ListActionsCommandInput} for command's `input` shape.
 * @see {@link ListActionsCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 *
 * @throws {@link FisServiceException}
 * <p>Base exception class for all service exceptions from Fis service.</p>
 *
 *
 * @public
 */
export class ListActionsCommand extends command<ListActionsCommandInput, ListActionsCommandOutput>(
  _ep0,
  _mw0,
  "ListActions",
  ListActions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListActionsRequest;
      output: ListActionsResponse;
    };
    sdk: {
      input: ListActionsCommandInput;
      output: ListActionsCommandOutput;
    };
  };
}
