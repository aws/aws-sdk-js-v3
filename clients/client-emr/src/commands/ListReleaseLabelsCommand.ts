// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListReleaseLabelsInput, ListReleaseLabelsOutput } from "../models/models_0";
import { ListReleaseLabels } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReleaseLabelsCommand}.
 */
export interface ListReleaseLabelsCommandInput extends ListReleaseLabelsInput {}
/**
 * @public
 *
 * The output of {@link ListReleaseLabelsCommand}.
 */
export interface ListReleaseLabelsCommandOutput extends ListReleaseLabelsOutput, __MetadataBearer {}

/**
 * <p>Retrieves release labels of Amazon EMR services in the Region where the API is
 *          called.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListReleaseLabelsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListReleaseLabelsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // ListReleaseLabelsInput
 *   Filters: { // ReleaseLabelFilter
 *     Prefix: "STRING_VALUE",
 *     Application: "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListReleaseLabelsCommand(input);
 * const response = await client.send(command);
 * // { // ListReleaseLabelsOutput
 * //   ReleaseLabels: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReleaseLabelsCommandInput - {@link ListReleaseLabelsCommandInput}
 * @returns {@link ListReleaseLabelsCommandOutput}
 * @see {@link ListReleaseLabelsCommandInput} for command's `input` shape.
 * @see {@link ListReleaseLabelsCommandOutput} for command's `response` shape.
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
export class ListReleaseLabelsCommand extends $Command
  .classBuilder<
    ListReleaseLabelsCommandInput,
    ListReleaseLabelsCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "ListReleaseLabels", {})
  .n("EMRClient", "ListReleaseLabelsCommand")
  .sc(ListReleaseLabels)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReleaseLabelsInput;
      output: ListReleaseLabelsOutput;
    };
    sdk: {
      input: ListReleaseLabelsCommandInput;
      output: ListReleaseLabelsCommandOutput;
    };
  };
}
