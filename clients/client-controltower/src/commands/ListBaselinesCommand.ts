// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBaselinesInput, ListBaselinesOutput } from "../models/models_0";
import { ListBaselines$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBaselinesCommand}.
 */
export interface ListBaselinesCommandInput extends ListBaselinesInput {}
/**
 * @public
 *
 * The output of {@link ListBaselinesCommand}.
 */
export interface ListBaselinesCommandOutput extends ListBaselinesOutput, __MetadataBearer {}

/**
 * Returns a summary list of all available baselines. For usage examples, see [*the Amazon Web Services Control Tower User Guide*](https://docs.aws.amazon.com/controltower/latest/userguide/baseline-api-examples.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, ListBaselinesCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, ListBaselinesCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // ListBaselinesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListBaselinesCommand(input);
 * const response = await client.send(command);
 * // { // ListBaselinesOutput
 * //   baselines: [ // Baselines // required
 * //     { // BaselineSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBaselinesCommandInput - {@link ListBaselinesCommandInput}
 * @returns {@link ListBaselinesCommandOutput}
 * @see {@link ListBaselinesCommandInput} for command's `input` shape.
 * @see {@link ListBaselinesCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during processing of a request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link ControlTowerServiceException}
 *
 * Base exception class for all service exceptions from ControlTower service.
 *
 * @public
 */
export class ListBaselinesCommand extends command<ListBaselinesCommandInput, ListBaselinesCommandOutput>(
  _ep0,
  _mw0,
  "ListBaselines",
  ListBaselines$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBaselinesInput;
      output: ListBaselinesOutput;
    };
    sdk: {
      input: ListBaselinesCommandInput;
      output: ListBaselinesCommandOutput;
    };
  };
}
