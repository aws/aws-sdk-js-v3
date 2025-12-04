// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateTemplateSyncConfigInput, CreateTemplateSyncConfigOutput } from "../models/models_0";
import type { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { CreateTemplateSyncConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTemplateSyncConfigCommand}.
 */
export interface CreateTemplateSyncConfigCommandInput extends CreateTemplateSyncConfigInput {}
/**
 * @public
 *
 * The output of {@link CreateTemplateSyncConfigCommand}.
 */
export interface CreateTemplateSyncConfigCommandOutput extends CreateTemplateSyncConfigOutput, __MetadataBearer {}

/**
 * <p>Set up a template to create new template versions automatically by tracking a linked repository. A linked repository is a repository that has
 *    been registered with Proton. For more information, see <a>CreateRepository</a>.</p>
 *          <p>When a commit is pushed to your linked repository, Proton checks for changes to your repository template bundles. If it detects a template
 *    bundle change, a new major or minor version of its template is created, if the version doesn’t already exist. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton
 *     User Guide</i>.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CreateTemplateSyncConfigCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CreateTemplateSyncConfigCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // CreateTemplateSyncConfigInput
 *   templateName: "STRING_VALUE", // required
 *   templateType: "STRING_VALUE", // required
 *   repositoryProvider: "STRING_VALUE", // required
 *   repositoryName: "STRING_VALUE", // required
 *   branch: "STRING_VALUE", // required
 *   subdirectory: "STRING_VALUE",
 * };
 * const command = new CreateTemplateSyncConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateTemplateSyncConfigOutput
 * //   templateSyncConfig: { // TemplateSyncConfig
 * //     templateName: "STRING_VALUE", // required
 * //     templateType: "STRING_VALUE", // required
 * //     repositoryProvider: "STRING_VALUE", // required
 * //     repositoryName: "STRING_VALUE", // required
 * //     branch: "STRING_VALUE", // required
 * //     subdirectory: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateTemplateSyncConfigCommandInput - {@link CreateTemplateSyncConfigCommandInput}
 * @returns {@link CreateTemplateSyncConfigCommandOutput}
 * @see {@link CreateTemplateSyncConfigCommandInput} for command's `input` shape.
 * @see {@link CreateTemplateSyncConfigCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request <i>couldn't</i> be made due to a conflicting operation or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A quota was exceeded. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-limits.html">Proton Quotas</a> in
 *       the <i>Proton User Guide</i>.</p>
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
export class CreateTemplateSyncConfigCommand extends $Command
  .classBuilder<
    CreateTemplateSyncConfigCommandInput,
    CreateTemplateSyncConfigCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "CreateTemplateSyncConfig", {})
  .n("ProtonClient", "CreateTemplateSyncConfigCommand")
  .sc(CreateTemplateSyncConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTemplateSyncConfigInput;
      output: CreateTemplateSyncConfigOutput;
    };
    sdk: {
      input: CreateTemplateSyncConfigCommandInput;
      output: CreateTemplateSyncConfigCommandOutput;
    };
  };
}
