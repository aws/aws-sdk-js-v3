// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  RejectEnvironmentAccountConnectionInput,
  RejectEnvironmentAccountConnectionOutput,
} from "../models/models_0";
import type { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { RejectEnvironmentAccountConnection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectEnvironmentAccountConnectionCommand}.
 */
export interface RejectEnvironmentAccountConnectionCommandInput extends RejectEnvironmentAccountConnectionInput {}
/**
 * @public
 *
 * The output of {@link RejectEnvironmentAccountConnectionCommand}.
 */
export interface RejectEnvironmentAccountConnectionCommandOutput
  extends RejectEnvironmentAccountConnectionOutput,
    __MetadataBearer {}

/**
 * <p>In a management account, reject an environment account connection from another environment account.</p>
 *          <p>After you reject an environment account connection request, you <i>can't</i> accept or use the rejected environment account
 *       connection.</p>
 *          <p>You <i>can’t</i> reject an environment account connection that's connected to an environment.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
 *         connections</a> in the <i>Proton User guide</i>.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, RejectEnvironmentAccountConnectionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, RejectEnvironmentAccountConnectionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // RejectEnvironmentAccountConnectionInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new RejectEnvironmentAccountConnectionCommand(input);
 * const response = await client.send(command);
 * // { // RejectEnvironmentAccountConnectionOutput
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
 * @param RejectEnvironmentAccountConnectionCommandInput - {@link RejectEnvironmentAccountConnectionCommandInput}
 * @returns {@link RejectEnvironmentAccountConnectionCommandOutput}
 * @see {@link RejectEnvironmentAccountConnectionCommandInput} for command's `input` shape.
 * @see {@link RejectEnvironmentAccountConnectionCommandOutput} for command's `response` shape.
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
export class RejectEnvironmentAccountConnectionCommand extends $Command
  .classBuilder<
    RejectEnvironmentAccountConnectionCommandInput,
    RejectEnvironmentAccountConnectionCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "RejectEnvironmentAccountConnection", {})
  .n("ProtonClient", "RejectEnvironmentAccountConnectionCommand")
  .sc(RejectEnvironmentAccountConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectEnvironmentAccountConnectionInput;
      output: RejectEnvironmentAccountConnectionOutput;
    };
    sdk: {
      input: RejectEnvironmentAccountConnectionCommandInput;
      output: RejectEnvironmentAccountConnectionCommandOutput;
    };
  };
}
