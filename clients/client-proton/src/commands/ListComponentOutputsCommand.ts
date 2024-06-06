// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListComponentOutputsInput,
  ListComponentOutputsOutput,
  ListComponentOutputsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListComponentOutputsCommand, se_ListComponentOutputsCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListComponentOutputsCommand}.
 */
export interface ListComponentOutputsCommandInput extends ListComponentOutputsInput {}
/**
 * @public
 *
 * The output of {@link ListComponentOutputsCommand}.
 */
export interface ListComponentOutputsCommandOutput extends ListComponentOutputsOutput, __MetadataBearer {}

/**
 * <p>Get a list of component Infrastructure as Code (IaC) outputs.</p>
 *          <p>For more information about components, see
 *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
 *   <i>Proton User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListComponentOutputsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListComponentOutputsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // ListComponentOutputsInput
 *   componentName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   deploymentId: "STRING_VALUE",
 * };
 * const command = new ListComponentOutputsCommand(input);
 * const response = await client.send(command);
 * // { // ListComponentOutputsOutput
 * //   nextToken: "STRING_VALUE",
 * //   outputs: [ // OutputsList // required
 * //     { // Output
 * //       key: "STRING_VALUE",
 * //       valueString: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListComponentOutputsCommandInput - {@link ListComponentOutputsCommandInput}
 * @returns {@link ListComponentOutputsCommandOutput}
 * @see {@link ListComponentOutputsCommandInput} for command's `input` shape.
 * @see {@link ListComponentOutputsCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 * @public
 */
export class ListComponentOutputsCommand extends $Command
  .classBuilder<
    ListComponentOutputsCommandInput,
    ListComponentOutputsCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsProton20200720", "ListComponentOutputs", {})
  .n("ProtonClient", "ListComponentOutputsCommand")
  .f(void 0, ListComponentOutputsOutputFilterSensitiveLog)
  .ser(se_ListComponentOutputsCommand)
  .de(de_ListComponentOutputsCommand)
  .build() {}
