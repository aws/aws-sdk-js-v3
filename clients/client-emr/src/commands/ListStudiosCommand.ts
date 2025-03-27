// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStudiosInput, ListStudiosOutput } from "../models/models_0";
import { de_ListStudiosCommand, se_ListStudiosCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStudiosCommand}.
 */
export interface ListStudiosCommandInput extends ListStudiosInput {}
/**
 * @public
 *
 * The output of {@link ListStudiosCommand}.
 */
export interface ListStudiosCommandOutput extends ListStudiosOutput, __MetadataBearer {}

/**
 * <p>Returns a list of all Amazon EMR Studios associated with the Amazon Web Services account. The list includes details such as ID, Studio Access URL, and
 *          creation time for each Studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListStudiosCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListStudiosCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // ListStudiosInput
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListStudiosCommand(input);
 * const response = await client.send(command);
 * // { // ListStudiosOutput
 * //   Studios: [ // StudioSummaryList
 * //     { // StudioSummary
 * //       StudioId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //       AuthMode: "SSO" || "IAM",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStudiosCommandInput - {@link ListStudiosCommandInput}
 * @returns {@link ListStudiosCommandOutput}
 * @see {@link ListStudiosCommandInput} for command's `input` shape.
 * @see {@link ListStudiosCommandOutput} for command's `response` shape.
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
export class ListStudiosCommand extends $Command
  .classBuilder<
    ListStudiosCommandInput,
    ListStudiosCommandOutput,
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
  .s("ElasticMapReduce", "ListStudios", {})
  .n("EMRClient", "ListStudiosCommand")
  .f(void 0, void 0)
  .ser(se_ListStudiosCommand)
  .de(de_ListStudiosCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStudiosInput;
      output: ListStudiosOutput;
    };
    sdk: {
      input: ListStudiosCommandInput;
      output: ListStudiosCommandOutput;
    };
  };
}
