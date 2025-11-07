// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRepositoriesInput, ListRepositoriesOutput } from "../models/models_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { ListRepositories } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRepositoriesCommand}.
 */
export interface ListRepositoriesCommandInput extends ListRepositoriesInput {}
/**
 * @public
 *
 * The output of {@link ListRepositoriesCommand}.
 */
export interface ListRepositoriesCommandOutput extends ListRepositoriesOutput, __MetadataBearer {}

/**
 * <p>List linked repositories with detail data.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListRepositoriesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListRepositoriesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListRepositoriesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRepositoriesCommand(input);
 * const response = await client.send(command);
 * // { // ListRepositoriesOutput
 * //   nextToken: "STRING_VALUE",
 * //   repositories: [ // RepositorySummaryList // required
 * //     { // RepositorySummary
 * //       arn: "STRING_VALUE", // required
 * //       provider: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       connectionArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRepositoriesCommandInput - {@link ListRepositoriesCommandInput}
 * @returns {@link ListRepositoriesCommandOutput}
 * @see {@link ListRepositoriesCommandInput} for command's `input` shape.
 * @see {@link ListRepositoriesCommandOutput} for command's `response` shape.
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
export class ListRepositoriesCommand extends $Command
  .classBuilder<
    ListRepositoriesCommandInput,
    ListRepositoriesCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "ListRepositories", {})
  .n("ProtonClient", "ListRepositoriesCommand")
  .sc(ListRepositories)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRepositoriesInput;
      output: ListRepositoriesOutput;
    };
    sdk: {
      input: ListRepositoriesCommandInput;
      output: ListRepositoriesCommandOutput;
    };
  };
}
