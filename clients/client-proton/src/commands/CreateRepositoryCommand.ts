// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRepositoryInput, CreateRepositoryOutput } from "../models/models_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { CreateRepository } from "../schemas/schemas_2_Environment";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRepositoryCommand}.
 */
export interface CreateRepositoryCommandInput extends CreateRepositoryInput {}
/**
 * @public
 *
 * The output of {@link CreateRepositoryCommand}.
 */
export interface CreateRepositoryCommandOutput extends CreateRepositoryOutput, __MetadataBearer {}

/**
 * <p>Create and register a link to a repository. Proton uses the link to repeatedly access the repository, to either push to it (self-managed
 *       provisioning) or pull from it (template sync). You can share a linked repository across multiple resources (like environments using self-managed
 *       provisioning, or synced templates). When you create a repository link, Proton creates a <a href="https://docs.aws.amazon.com/proton/latest/userguide/using-service-linked-roles.html">service-linked role</a> for you.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a>, <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-authoring.html#ag-template-bundles">Template bundles</a>, and
 *         <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html">Template sync configurations</a> in the <i>Proton
 *         User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CreateRepositoryCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CreateRepositoryCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // CreateRepositoryInput
 *   provider: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   connectionArn: "STRING_VALUE", // required
 *   encryptionKey: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateRepositoryCommand(input);
 * const response = await client.send(command);
 * // { // CreateRepositoryOutput
 * //   repository: { // Repository
 * //     arn: "STRING_VALUE", // required
 * //     provider: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     connectionArn: "STRING_VALUE", // required
 * //     encryptionKey: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRepositoryCommandInput - {@link CreateRepositoryCommandInput}
 * @returns {@link CreateRepositoryCommandOutput}
 * @see {@link CreateRepositoryCommandInput} for command's `input` shape.
 * @see {@link CreateRepositoryCommandOutput} for command's `response` shape.
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
export class CreateRepositoryCommand extends $Command
  .classBuilder<
    CreateRepositoryCommandInput,
    CreateRepositoryCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "CreateRepository", {})
  .n("ProtonClient", "CreateRepositoryCommand")
  .sc(CreateRepository)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRepositoryInput;
      output: CreateRepositoryOutput;
    };
    sdk: {
      input: CreateRepositoryCommandInput;
      output: CreateRepositoryCommandOutput;
    };
  };
}
