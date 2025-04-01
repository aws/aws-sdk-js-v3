// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEnvironmentAccountConnectionInput, UpdateEnvironmentAccountConnectionOutput } from "../models/models_0";
import {
  de_UpdateEnvironmentAccountConnectionCommand,
  se_UpdateEnvironmentAccountConnectionCommand,
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
 * The input for {@link UpdateEnvironmentAccountConnectionCommand}.
 */
export interface UpdateEnvironmentAccountConnectionCommandInput extends UpdateEnvironmentAccountConnectionInput {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentAccountConnectionCommand}.
 */
export interface UpdateEnvironmentAccountConnectionCommandOutput
  extends UpdateEnvironmentAccountConnectionOutput,
    __MetadataBearer {}

/**
 * <p>In an environment account, update an environment account connection to use a new IAM role.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
 *         connections</a> in the <i>Proton User guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateEnvironmentAccountConnectionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateEnvironmentAccountConnectionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // UpdateEnvironmentAccountConnectionInput
 *   id: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   componentRoleArn: "STRING_VALUE",
 *   codebuildRoleArn: "STRING_VALUE",
 * };
 * const command = new UpdateEnvironmentAccountConnectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnvironmentAccountConnectionOutput
 * //   environmentAccountConnection: { // EnvironmentAccountConnection
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     managementAccountId: "STRING_VALUE", // required
 * //     environmentAccountId: "STRING_VALUE", // required
 * //     roleArn: "STRING_VALUE", // required
 * //     environmentName: "STRING_VALUE", // required
 * //     requestedAt: new Date("TIMESTAMP"), // required
 * //     lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     componentRoleArn: "STRING_VALUE",
 * //     codebuildRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateEnvironmentAccountConnectionCommandInput - {@link UpdateEnvironmentAccountConnectionCommandInput}
 * @returns {@link UpdateEnvironmentAccountConnectionCommandOutput}
 * @see {@link UpdateEnvironmentAccountConnectionCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentAccountConnectionCommandOutput} for command's `response` shape.
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
export class UpdateEnvironmentAccountConnectionCommand extends $Command
  .classBuilder<
    UpdateEnvironmentAccountConnectionCommandInput,
    UpdateEnvironmentAccountConnectionCommandOutput,
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
  .s("AwsProton20200720", "UpdateEnvironmentAccountConnection", {})
  .n("ProtonClient", "UpdateEnvironmentAccountConnectionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEnvironmentAccountConnectionCommand)
  .de(de_UpdateEnvironmentAccountConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnvironmentAccountConnectionInput;
      output: UpdateEnvironmentAccountConnectionOutput;
    };
    sdk: {
      input: UpdateEnvironmentAccountConnectionCommandInput;
      output: UpdateEnvironmentAccountConnectionCommandOutput;
    };
  };
}
