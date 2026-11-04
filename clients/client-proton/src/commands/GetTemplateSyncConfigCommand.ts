// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTemplateSyncConfigInput, GetTemplateSyncConfigOutput } from "../models/models_0";
import { GetTemplateSyncConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTemplateSyncConfigCommand}.
 */
export interface GetTemplateSyncConfigCommandInput extends GetTemplateSyncConfigInput {}
/**
 * @public
 *
 * The output of {@link GetTemplateSyncConfigCommand}.
 */
export interface GetTemplateSyncConfigCommandOutput extends GetTemplateSyncConfigOutput, __MetadataBearer {}

/**
 * Get detail data for a template sync configuration.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetTemplateSyncConfigCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetTemplateSyncConfigCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // GetTemplateSyncConfigInput
 *   templateName: "STRING_VALUE", // required
 *   templateType: "STRING_VALUE", // required
 * };
 * const command = new GetTemplateSyncConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetTemplateSyncConfigOutput
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
 * @param GetTemplateSyncConfigCommandInput - {@link GetTemplateSyncConfigCommandInput}
 * @returns {@link GetTemplateSyncConfigCommandOutput}
 * @see {@link GetTemplateSyncConfigCommandInput} for command's `input` shape.
 * @see {@link GetTemplateSyncConfigCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * There *isn't* sufficient access for performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed to register with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource *wasn't* found.
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
export class GetTemplateSyncConfigCommand extends command<GetTemplateSyncConfigCommandInput, GetTemplateSyncConfigCommandOutput>(
  _ep0,
  _mw0,
  "GetTemplateSyncConfig",
  GetTemplateSyncConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTemplateSyncConfigInput;
      output: GetTemplateSyncConfigOutput;
    };
    sdk: {
      input: GetTemplateSyncConfigCommandInput;
      output: GetTemplateSyncConfigCommandOutput;
    };
  };
}
