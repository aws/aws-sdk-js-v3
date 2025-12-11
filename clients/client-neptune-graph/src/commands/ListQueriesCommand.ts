// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListQueriesInput, ListQueriesOutput } from "../models/models_0";
import type { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { ListQueries } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQueriesCommand}.
 */
export interface ListQueriesCommandInput extends ListQueriesInput {}
/**
 * @public
 *
 * The output of {@link ListQueriesCommand}.
 */
export interface ListQueriesCommandOutput extends ListQueriesOutput, __MetadataBearer {}

/**
 * <p>Lists active openCypher queries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, ListQueriesCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, ListQueriesCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
 * const client = new NeptuneGraphClient(config);
 * const input = { // ListQueriesInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"), // required
 *   state: "ALL" || "RUNNING" || "WAITING" || "CANCELLING",
 * };
 * const command = new ListQueriesCommand(input);
 * const response = await client.send(command);
 * // { // ListQueriesOutput
 * //   queries: [ // QuerySummaryList // required
 * //     { // QuerySummary
 * //       id: "STRING_VALUE",
 * //       queryString: "STRING_VALUE",
 * //       waited: Number("int"),
 * //       elapsed: Number("int"),
 * //       state: "RUNNING" || "WAITING" || "CANCELLING",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListQueriesCommandInput - {@link ListQueriesCommandInput}
 * @returns {@link ListQueriesCommandOutput}
 * @see {@link ListQueriesCommandInput} for command's `input` shape.
 * @see {@link ListQueriesCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Raised in case of an authentication or authorization failure.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception was interrupted by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A resource could not be validated.</p>
 *
 * @throws {@link NeptuneGraphServiceException}
 * <p>Base exception class for all service exceptions from NeptuneGraph service.</p>
 *
 *
 * @public
 */
export class ListQueriesCommand extends $Command
  .classBuilder<
    ListQueriesCommandInput,
    ListQueriesCommandOutput,
    NeptuneGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ApiType: { type: "staticContextParams", value: `DataPlane` },
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneGraphClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNeptuneGraph", "ListQueries", {})
  .n("NeptuneGraphClient", "ListQueriesCommand")
  .sc(ListQueries)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQueriesInput;
      output: ListQueriesOutput;
    };
    sdk: {
      input: ListQueriesCommandInput;
      output: ListQueriesCommandOutput;
    };
  };
}
