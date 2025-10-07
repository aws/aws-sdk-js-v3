// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListServiceInstanceOutputsInput,
  ListServiceInstanceOutputsOutput,
  ListServiceInstanceOutputsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListServiceInstanceOutputsCommand, se_ListServiceInstanceOutputsCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceInstanceOutputsCommand}.
 */
export interface ListServiceInstanceOutputsCommandInput extends ListServiceInstanceOutputsInput {}
/**
 * @public
 *
 * The output of {@link ListServiceInstanceOutputsCommand}.
 */
export interface ListServiceInstanceOutputsCommandOutput extends ListServiceInstanceOutputsOutput, __MetadataBearer {}

/**
 * <p>Get a list service of instance Infrastructure as Code (IaC) outputs.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServiceInstanceOutputsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServiceInstanceOutputsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListServiceInstanceOutputsInput
 *   serviceInstanceName: "STRING_VALUE", // required
 *   serviceName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   deploymentId: "STRING_VALUE",
 * };
 * const command = new ListServiceInstanceOutputsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceInstanceOutputsOutput
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
 * @param ListServiceInstanceOutputsCommandInput - {@link ListServiceInstanceOutputsCommandInput}
 * @returns {@link ListServiceInstanceOutputsCommandOutput}
 * @see {@link ListServiceInstanceOutputsCommandInput} for command's `input` shape.
 * @see {@link ListServiceInstanceOutputsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListServiceInstanceOutputsCommand extends $Command
  .classBuilder<
    ListServiceInstanceOutputsCommandInput,
    ListServiceInstanceOutputsCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsProton20200720", "ListServiceInstanceOutputs", {})
  .n("ProtonClient", "ListServiceInstanceOutputsCommand")
  .f(void 0, ListServiceInstanceOutputsOutputFilterSensitiveLog)
  .ser(se_ListServiceInstanceOutputsCommand)
  .de(de_ListServiceInstanceOutputsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceInstanceOutputsInput;
      output: ListServiceInstanceOutputsOutput;
    };
    sdk: {
      input: ListServiceInstanceOutputsCommandInput;
      output: ListServiceInstanceOutputsCommandOutput;
    };
  };
}
