// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AcceptEnvironmentAccountConnectionInput, AcceptEnvironmentAccountConnectionOutput } from "../models/models_0";
import {
  de_AcceptEnvironmentAccountConnectionCommand,
  se_AcceptEnvironmentAccountConnectionCommand,
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
 * The input for {@link AcceptEnvironmentAccountConnectionCommand}.
 */
export interface AcceptEnvironmentAccountConnectionCommandInput extends AcceptEnvironmentAccountConnectionInput {}
/**
 * @public
 *
 * The output of {@link AcceptEnvironmentAccountConnectionCommand}.
 */
export interface AcceptEnvironmentAccountConnectionCommandOutput
  extends AcceptEnvironmentAccountConnectionOutput,
    __MetadataBearer {}

/**
 * <p>In a management account, an environment account connection request is accepted. When the environment account connection request is accepted, Proton
 *       can use the associated IAM role to provision environment infrastructure resources in the associated environment account.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
 *         connections</a> in the <i>Proton User guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, AcceptEnvironmentAccountConnectionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, AcceptEnvironmentAccountConnectionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // AcceptEnvironmentAccountConnectionInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new AcceptEnvironmentAccountConnectionCommand(input);
 * const response = await client.send(command);
 * // { // AcceptEnvironmentAccountConnectionOutput
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
 * @param AcceptEnvironmentAccountConnectionCommandInput - {@link AcceptEnvironmentAccountConnectionCommandInput}
 * @returns {@link AcceptEnvironmentAccountConnectionCommandOutput}
 * @see {@link AcceptEnvironmentAccountConnectionCommandInput} for command's `input` shape.
 * @see {@link AcceptEnvironmentAccountConnectionCommandOutput} for command's `response` shape.
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
export class AcceptEnvironmentAccountConnectionCommand extends $Command
  .classBuilder<
    AcceptEnvironmentAccountConnectionCommandInput,
    AcceptEnvironmentAccountConnectionCommandOutput,
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
  .s("AwsProton20200720", "AcceptEnvironmentAccountConnection", {})
  .n("ProtonClient", "AcceptEnvironmentAccountConnectionCommand")
  .f(void 0, void 0)
  .ser(se_AcceptEnvironmentAccountConnectionCommand)
  .de(de_AcceptEnvironmentAccountConnectionCommand)
  .build() {}
