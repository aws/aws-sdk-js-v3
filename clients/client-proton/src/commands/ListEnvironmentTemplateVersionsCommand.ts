// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListEnvironmentTemplateVersionsInput,
  ListEnvironmentTemplateVersionsOutput,
  ListEnvironmentTemplateVersionsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListEnvironmentTemplateVersionsCommand,
  se_ListEnvironmentTemplateVersionsCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentTemplateVersionsCommand}.
 */
export interface ListEnvironmentTemplateVersionsCommandInput extends ListEnvironmentTemplateVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentTemplateVersionsCommand}.
 */
export interface ListEnvironmentTemplateVersionsCommandOutput
  extends ListEnvironmentTemplateVersionsOutput,
    __MetadataBearer {}

/**
 * <p>List major or minor versions of an environment template with detail data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListEnvironmentTemplateVersionsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListEnvironmentTemplateVersionsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListEnvironmentTemplateVersionsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   templateName: "STRING_VALUE", // required
 *   majorVersion: "STRING_VALUE",
 * };
 * const command = new ListEnvironmentTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentTemplateVersionsOutput
 * //   nextToken: "STRING_VALUE",
 * //   templateVersions: [ // EnvironmentTemplateVersionSummaryList // required
 * //     { // EnvironmentTemplateVersionSummary
 * //       templateName: "STRING_VALUE", // required
 * //       majorVersion: "STRING_VALUE", // required
 * //       minorVersion: "STRING_VALUE", // required
 * //       recommendedMinorVersion: "STRING_VALUE",
 * //       status: "STRING_VALUE", // required
 * //       statusMessage: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       arn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEnvironmentTemplateVersionsCommandInput - {@link ListEnvironmentTemplateVersionsCommandInput}
 * @returns {@link ListEnvironmentTemplateVersionsCommandOutput}
 * @see {@link ListEnvironmentTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentTemplateVersionsCommandOutput} for command's `response` shape.
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
export class ListEnvironmentTemplateVersionsCommand extends $Command
  .classBuilder<
    ListEnvironmentTemplateVersionsCommandInput,
    ListEnvironmentTemplateVersionsCommandOutput,
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
  .s("AwsProton20200720", "ListEnvironmentTemplateVersions", {})
  .n("ProtonClient", "ListEnvironmentTemplateVersionsCommand")
  .f(void 0, ListEnvironmentTemplateVersionsOutputFilterSensitiveLog)
  .ser(se_ListEnvironmentTemplateVersionsCommand)
  .de(de_ListEnvironmentTemplateVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentTemplateVersionsInput;
      output: ListEnvironmentTemplateVersionsOutput;
    };
    sdk: {
      input: ListEnvironmentTemplateVersionsCommandInput;
      output: ListEnvironmentTemplateVersionsCommandOutput;
    };
  };
}
