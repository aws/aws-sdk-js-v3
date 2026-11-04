// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTemplateSyncConfigInput, CreateTemplateSyncConfigOutput } from "../models/models_0";
import { CreateTemplateSyncConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Set up a template to create new template versions automatically by tracking a linked repository. A linked repository is a repository that has been registered with Proton. For more information, see CreateRepository.
 *
 * When a commit is pushed to your linked repository, Proton checks for changes to your repository template bundles. If it detects a template bundle change, a new major or minor version of its template is created, if the version doesn’t already exist. For more information, see [Template sync configurations](https://docs.aws.amazon.com/proton/latest/userguide/ag-template-sync-configs.html) in the *Proton User Guide*.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
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
 *
 * There *isn't* sufficient access for performing this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request *couldn't* be made due to a conflicting operation or resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed to register with the service.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * A quota was exceeded. For more information, see [Proton Quotas](https://docs.aws.amazon.com/proton/latest/userguide/ag-limits.html) in the *Proton User Guide*.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input is invalid or an out-of-range value was supplied for the input parameter.
 *
 * @throws {@link ProtonServiceException}
 *
 * Base exception class for all service exceptions from Proton service.
 *
 * @public
 */
export class CreateTemplateSyncConfigCommand extends command<CreateTemplateSyncConfigCommandInput, CreateTemplateSyncConfigCommandOutput>(
  _ep0,
  _mw0,
  "CreateTemplateSyncConfig",
  CreateTemplateSyncConfig$
) {
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
