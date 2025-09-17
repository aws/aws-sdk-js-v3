// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteServiceSyncConfigInput, DeleteServiceSyncConfigOutput } from "../models/models_0";
import { de_DeleteServiceSyncConfigCommand, se_DeleteServiceSyncConfigCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServiceSyncConfigCommand}.
 */
export interface DeleteServiceSyncConfigCommandInput extends DeleteServiceSyncConfigInput {}
/**
 * @public
 *
 * The output of {@link DeleteServiceSyncConfigCommand}.
 */
export interface DeleteServiceSyncConfigCommandOutput extends DeleteServiceSyncConfigOutput, __MetadataBearer {}

/**
 * <p>Delete the Proton Ops file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, DeleteServiceSyncConfigCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, DeleteServiceSyncConfigCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // DeleteServiceSyncConfigInput
 *   serviceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceSyncConfigCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServiceSyncConfigOutput
 * //   serviceSyncConfig: { // ServiceSyncConfig
 * //     serviceName: "STRING_VALUE", // required
 * //     repositoryProvider: "STRING_VALUE", // required
 * //     repositoryName: "STRING_VALUE", // required
 * //     branch: "STRING_VALUE", // required
 * //     filePath: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteServiceSyncConfigCommandInput - {@link DeleteServiceSyncConfigCommandInput}
 * @returns {@link DeleteServiceSyncConfigCommandOutput}
 * @see {@link DeleteServiceSyncConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceSyncConfigCommandOutput} for command's `response` shape.
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
export class DeleteServiceSyncConfigCommand extends $Command
  .classBuilder<
    DeleteServiceSyncConfigCommandInput,
    DeleteServiceSyncConfigCommandOutput,
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
  .s("AwsProton20200720", "DeleteServiceSyncConfig", {})
  .n("ProtonClient", "DeleteServiceSyncConfigCommand")
  .f(void 0, void 0)
  .ser(se_DeleteServiceSyncConfigCommand)
  .de(de_DeleteServiceSyncConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceSyncConfigInput;
      output: DeleteServiceSyncConfigOutput;
    };
    sdk: {
      input: DeleteServiceSyncConfigCommandInput;
      output: DeleteServiceSyncConfigCommandOutput;
    };
  };
}
