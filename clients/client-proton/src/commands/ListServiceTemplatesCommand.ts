// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListServiceTemplatesInput, ListServiceTemplatesOutput } from "../models/models_0";
import type { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { ListServiceTemplates } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceTemplatesCommand}.
 */
export interface ListServiceTemplatesCommandInput extends ListServiceTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListServiceTemplatesCommand}.
 */
export interface ListServiceTemplatesCommandOutput extends ListServiceTemplatesOutput, __MetadataBearer {}

/**
 * <p>List service templates with detail data.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServiceTemplatesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServiceTemplatesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListServiceTemplatesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListServiceTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceTemplatesOutput
 * //   nextToken: "STRING_VALUE",
 * //   templates: [ // ServiceTemplateSummaryList // required
 * //     { // ServiceTemplateSummary
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedAt: new Date("TIMESTAMP"), // required
 * //       displayName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       recommendedVersion: "STRING_VALUE",
 * //       pipelineProvisioning: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListServiceTemplatesCommandInput - {@link ListServiceTemplatesCommandInput}
 * @returns {@link ListServiceTemplatesCommandOutput}
 * @see {@link ListServiceTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListServiceTemplatesCommandOutput} for command's `response` shape.
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
export class ListServiceTemplatesCommand extends $Command
  .classBuilder<
    ListServiceTemplatesCommandInput,
    ListServiceTemplatesCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "ListServiceTemplates", {})
  .n("ProtonClient", "ListServiceTemplatesCommand")
  .sc(ListServiceTemplates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceTemplatesInput;
      output: ListServiceTemplatesOutput;
    };
    sdk: {
      input: ListServiceTemplatesCommandInput;
      output: ListServiceTemplatesCommandOutput;
    };
  };
}
