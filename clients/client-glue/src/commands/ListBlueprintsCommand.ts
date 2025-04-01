// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListBlueprintsRequest, ListBlueprintsResponse } from "../models/models_2";
import { de_ListBlueprintsCommand, se_ListBlueprintsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBlueprintsCommand}.
 */
export interface ListBlueprintsCommandInput extends ListBlueprintsRequest {}
/**
 * @public
 *
 * The output of {@link ListBlueprintsCommand}.
 */
export interface ListBlueprintsCommandOutput extends ListBlueprintsResponse, __MetadataBearer {}

/**
 * <p>Lists all the blueprint names in an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListBlueprintsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListBlueprintsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // ListBlueprintsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ListBlueprintsCommand(input);
 * const response = await client.send(command);
 * // { // ListBlueprintsResponse
 * //   Blueprints: [ // BlueprintNames
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBlueprintsCommandInput - {@link ListBlueprintsCommandInput}
 * @returns {@link ListBlueprintsCommandOutput}
 * @see {@link ListBlueprintsCommandInput} for command's `input` shape.
 * @see {@link ListBlueprintsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class ListBlueprintsCommand extends $Command
  .classBuilder<
    ListBlueprintsCommandInput,
    ListBlueprintsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "ListBlueprints", {})
  .n("GlueClient", "ListBlueprintsCommand")
  .f(void 0, void 0)
  .ser(se_ListBlueprintsCommand)
  .de(de_ListBlueprintsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBlueprintsRequest;
      output: ListBlueprintsResponse;
    };
    sdk: {
      input: ListBlueprintsCommandInput;
      output: ListBlueprintsCommandOutput;
    };
  };
}
