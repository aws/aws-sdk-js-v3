// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEngineVersionsInput, ListEngineVersionsOutput } from "../models/models_0";
import { de_ListEngineVersionsCommand, se_ListEngineVersionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEngineVersionsCommand}.
 */
export interface ListEngineVersionsCommandInput extends ListEngineVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListEngineVersionsCommand}.
 */
export interface ListEngineVersionsCommandOutput extends ListEngineVersionsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of engine versions that are available to choose from, including the
 *             Auto option.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListEngineVersionsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListEngineVersionsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // ListEngineVersionsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEngineVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEngineVersionsOutput
 * //   EngineVersions: [ // EngineVersionsList
 * //     { // EngineVersion
 * //       SelectedEngineVersion: "STRING_VALUE",
 * //       EffectiveEngineVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEngineVersionsCommandInput - {@link ListEngineVersionsCommandInput}
 * @returns {@link ListEngineVersionsCommandOutput}
 * @see {@link ListEngineVersionsCommandInput} for command's `input` shape.
 * @see {@link ListEngineVersionsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class ListEngineVersionsCommand extends $Command
  .classBuilder<
    ListEngineVersionsCommandInput,
    ListEngineVersionsCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "ListEngineVersions", {})
  .n("AthenaClient", "ListEngineVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListEngineVersionsCommand)
  .de(de_ListEngineVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEngineVersionsInput;
      output: ListEngineVersionsOutput;
    };
    sdk: {
      input: ListEngineVersionsCommandInput;
      output: ListEngineVersionsCommandOutput;
    };
  };
}
