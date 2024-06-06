// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTemplateSyncConfigInput, GetTemplateSyncConfigOutput } from "../models/models_0";
import { de_GetTemplateSyncConfigCommand, se_GetTemplateSyncConfigCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Get detail data for a template sync configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetTemplateSyncConfigCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetTemplateSyncConfigCommand } = require("@aws-sdk/client-proton"); // CommonJS import
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
export class GetTemplateSyncConfigCommand extends $Command
  .classBuilder<
    GetTemplateSyncConfigCommandInput,
    GetTemplateSyncConfigCommandOutput,
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
  .s("AwsProton20200720", "GetTemplateSyncConfig", {})
  .n("ProtonClient", "GetTemplateSyncConfigCommand")
  .f(void 0, void 0)
  .ser(se_GetTemplateSyncConfigCommand)
  .de(de_GetTemplateSyncConfigCommand)
  .build() {}
