// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListEnvironmentTemplatesInput,
  ListEnvironmentTemplatesOutput,
  ListEnvironmentTemplatesOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListEnvironmentTemplatesCommand, se_ListEnvironmentTemplatesCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentTemplatesCommand}.
 */
export interface ListEnvironmentTemplatesCommandInput extends ListEnvironmentTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentTemplatesCommand}.
 */
export interface ListEnvironmentTemplatesCommandOutput extends ListEnvironmentTemplatesOutput, __MetadataBearer {}

/**
 * <p>List environment templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListEnvironmentTemplatesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListEnvironmentTemplatesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // ListEnvironmentTemplatesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEnvironmentTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentTemplatesOutput
 * //   nextToken: "STRING_VALUE",
 * //   templates: [ // EnvironmentTemplateSummaryList // required
 * //     { // EnvironmentTemplateSummary
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedAt: new Date("TIMESTAMP"), // required
 * //       displayName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       recommendedVersion: "STRING_VALUE",
 * //       provisioning: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEnvironmentTemplatesCommandInput - {@link ListEnvironmentTemplatesCommandInput}
 * @returns {@link ListEnvironmentTemplatesCommandOutput}
 * @see {@link ListEnvironmentTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentTemplatesCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
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
export class ListEnvironmentTemplatesCommand extends $Command
  .classBuilder<
    ListEnvironmentTemplatesCommandInput,
    ListEnvironmentTemplatesCommandOutput,
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
  .s("AwsProton20200720", "ListEnvironmentTemplates", {})
  .n("ProtonClient", "ListEnvironmentTemplatesCommand")
  .f(void 0, ListEnvironmentTemplatesOutputFilterSensitiveLog)
  .ser(se_ListEnvironmentTemplatesCommand)
  .de(de_ListEnvironmentTemplatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentTemplatesInput;
      output: ListEnvironmentTemplatesOutput;
    };
    sdk: {
      input: ListEnvironmentTemplatesCommandInput;
      output: ListEnvironmentTemplatesCommandOutput;
    };
  };
}
