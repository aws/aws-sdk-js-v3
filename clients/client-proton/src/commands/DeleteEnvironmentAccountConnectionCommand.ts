// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEnvironmentAccountConnectionInput, DeleteEnvironmentAccountConnectionOutput } from "../models/models_0";
import {
  de_DeleteEnvironmentAccountConnectionCommand,
  se_DeleteEnvironmentAccountConnectionCommand,
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
 * The input for {@link DeleteEnvironmentAccountConnectionCommand}.
 */
export interface DeleteEnvironmentAccountConnectionCommandInput extends DeleteEnvironmentAccountConnectionInput {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentAccountConnectionCommand}.
 */
export interface DeleteEnvironmentAccountConnectionCommandOutput
  extends DeleteEnvironmentAccountConnectionOutput,
    __MetadataBearer {}

/**
 * <p>In an environment account, delete an environment account connection.</p>
 *          <p>After you delete an environment account connection that’s in use by an Proton environment, Proton <i>can’t</i> manage the
 *       environment infrastructure resources until a new environment account connection is accepted for the environment account and associated environment. You're
 *       responsible for cleaning up provisioned resources that remain without an environment connection.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
 *         connections</a> in the <i>Proton User guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, DeleteEnvironmentAccountConnectionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, DeleteEnvironmentAccountConnectionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // DeleteEnvironmentAccountConnectionInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentAccountConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEnvironmentAccountConnectionOutput
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
 * @param DeleteEnvironmentAccountConnectionCommandInput - {@link DeleteEnvironmentAccountConnectionCommandInput}
 * @returns {@link DeleteEnvironmentAccountConnectionCommandOutput}
 * @see {@link DeleteEnvironmentAccountConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentAccountConnectionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteEnvironmentAccountConnectionCommand extends $Command
  .classBuilder<
    DeleteEnvironmentAccountConnectionCommandInput,
    DeleteEnvironmentAccountConnectionCommandOutput,
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
  .s("AwsProton20200720", "DeleteEnvironmentAccountConnection", {})
  .n("ProtonClient", "DeleteEnvironmentAccountConnectionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEnvironmentAccountConnectionCommand)
  .de(de_DeleteEnvironmentAccountConnectionCommand)
  .build() {}
