// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListServicePipelineOutputsInput,
  ListServicePipelineOutputsOutput,
  ListServicePipelineOutputsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListServicePipelineOutputsCommand, se_ListServicePipelineOutputsCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServicePipelineOutputsCommand}.
 */
export interface ListServicePipelineOutputsCommandInput extends ListServicePipelineOutputsInput {}
/**
 * @public
 *
 * The output of {@link ListServicePipelineOutputsCommand}.
 */
export interface ListServicePipelineOutputsCommandOutput extends ListServicePipelineOutputsOutput, __MetadataBearer {}

/**
 * <p>Get a list of service pipeline Infrastructure as Code (IaC) outputs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServicePipelineOutputsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServicePipelineOutputsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // ListServicePipelineOutputsInput
 *   serviceName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   deploymentId: "STRING_VALUE",
 * };
 * const command = new ListServicePipelineOutputsCommand(input);
 * const response = await client.send(command);
 * // { // ListServicePipelineOutputsOutput
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
 * @param ListServicePipelineOutputsCommandInput - {@link ListServicePipelineOutputsCommandInput}
 * @returns {@link ListServicePipelineOutputsCommandOutput}
 * @see {@link ListServicePipelineOutputsCommandInput} for command's `input` shape.
 * @see {@link ListServicePipelineOutputsCommandOutput} for command's `response` shape.
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
export class ListServicePipelineOutputsCommand extends $Command
  .classBuilder<
    ListServicePipelineOutputsCommandInput,
    ListServicePipelineOutputsCommandOutput,
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
  .s("AwsProton20200720", "ListServicePipelineOutputs", {})
  .n("ProtonClient", "ListServicePipelineOutputsCommand")
  .f(void 0, ListServicePipelineOutputsOutputFilterSensitiveLog)
  .ser(se_ListServicePipelineOutputsCommand)
  .de(de_ListServicePipelineOutputsCommand)
  .build() {}
