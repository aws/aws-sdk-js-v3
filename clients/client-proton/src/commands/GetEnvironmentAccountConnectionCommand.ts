// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetEnvironmentAccountConnectionInput, GetEnvironmentAccountConnectionOutput } from "../models/models_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { GetEnvironmentAccountConnection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEnvironmentAccountConnectionCommand}.
 */
export interface GetEnvironmentAccountConnectionCommandInput extends GetEnvironmentAccountConnectionInput {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentAccountConnectionCommand}.
 */
export interface GetEnvironmentAccountConnectionCommandOutput
  extends GetEnvironmentAccountConnectionOutput,
    __MetadataBearer {}

/**
 * <p>In an environment account, get the detailed data for an environment account connection.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
 *         connections</a> in the <i>Proton User guide</i>.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetEnvironmentAccountConnectionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetEnvironmentAccountConnectionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // GetEnvironmentAccountConnectionInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentAccountConnectionCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentAccountConnectionOutput
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
 * @param GetEnvironmentAccountConnectionCommandInput - {@link GetEnvironmentAccountConnectionCommandInput}
 * @returns {@link GetEnvironmentAccountConnectionCommandOutput}
 * @see {@link GetEnvironmentAccountConnectionCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentAccountConnectionCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetEnvironmentAccountConnectionCommand extends $Command
  .classBuilder<
    GetEnvironmentAccountConnectionCommandInput,
    GetEnvironmentAccountConnectionCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "GetEnvironmentAccountConnection", {})
  .n("ProtonClient", "GetEnvironmentAccountConnectionCommand")
  .sc(GetEnvironmentAccountConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnvironmentAccountConnectionInput;
      output: GetEnvironmentAccountConnectionOutput;
    };
    sdk: {
      input: GetEnvironmentAccountConnectionCommandInput;
      output: GetEnvironmentAccountConnectionCommandOutput;
    };
  };
}
