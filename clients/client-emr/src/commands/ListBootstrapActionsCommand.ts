// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBootstrapActionsInput, ListBootstrapActionsOutput } from "../models/models_0";
import { de_ListBootstrapActionsCommand, se_ListBootstrapActionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBootstrapActionsCommand}.
 */
export interface ListBootstrapActionsCommandInput extends ListBootstrapActionsInput {}
/**
 * @public
 *
 * The output of {@link ListBootstrapActionsCommand}.
 */
export interface ListBootstrapActionsCommandOutput extends ListBootstrapActionsOutput, __MetadataBearer {}

/**
 * <p>Provides information about the bootstrap actions associated with a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListBootstrapActionsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListBootstrapActionsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ListBootstrapActionsInput
 *   ClusterId: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListBootstrapActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListBootstrapActionsOutput
 * //   BootstrapActions: [ // CommandList
 * //     { // Command
 * //       Name: "STRING_VALUE",
 * //       ScriptPath: "STRING_VALUE",
 * //       Args: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBootstrapActionsCommandInput - {@link ListBootstrapActionsCommandInput}
 * @returns {@link ListBootstrapActionsCommandOutput}
 * @see {@link ListBootstrapActionsCommandInput} for command's `input` shape.
 * @see {@link ListBootstrapActionsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class ListBootstrapActionsCommand extends $Command
  .classBuilder<
    ListBootstrapActionsCommandInput,
    ListBootstrapActionsCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "ListBootstrapActions", {})
  .n("EMRClient", "ListBootstrapActionsCommand")
  .f(void 0, void 0)
  .ser(se_ListBootstrapActionsCommand)
  .de(de_ListBootstrapActionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBootstrapActionsInput;
      output: ListBootstrapActionsOutput;
    };
    sdk: {
      input: ListBootstrapActionsCommandInput;
      output: ListBootstrapActionsCommandOutput;
    };
  };
}
