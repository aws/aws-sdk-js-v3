// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateCliTokenRequest, CreateCliTokenResponse } from "../models/models_0";
import type { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import { CreateCliToken } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCliTokenCommand}.
 */
export interface CreateCliTokenCommandInput extends CreateCliTokenRequest {}
/**
 * @public
 *
 * The output of {@link CreateCliTokenCommand}.
 */
export interface CreateCliTokenCommandOutput extends CreateCliTokenResponse, __MetadataBearer {}

/**
 * <p>Creates a CLI token for the Airflow CLI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-cli.html">Creating an Apache Airflow CLI token</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, CreateCliTokenCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, CreateCliTokenCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * // import type { MWAAClientConfig } from "@aws-sdk/client-mwaa";
 * const config = {}; // type is MWAAClientConfig
 * const client = new MWAAClient(config);
 * const input = { // CreateCliTokenRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new CreateCliTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateCliTokenResponse
 * //   CliToken: "STRING_VALUE",
 * //   WebServerHostname: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCliTokenCommandInput - {@link CreateCliTokenCommandInput}
 * @returns {@link CreateCliTokenCommandOutput}
 * @see {@link CreateCliTokenCommandInput} for command's `input` shape.
 * @see {@link CreateCliTokenCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for MWAAClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>ResourceNotFoundException: The resource is not available.</p>
 *
 * @throws {@link MWAAServiceException}
 * <p>Base exception class for all service exceptions from MWAA service.</p>
 *
 *
 * @public
 */
export class CreateCliTokenCommand extends $Command
  .classBuilder<
    CreateCliTokenCommandInput,
    CreateCliTokenCommandOutput,
    MWAAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MWAAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMWAA", "CreateCliToken", {})
  .n("MWAAClient", "CreateCliTokenCommand")
  .sc(CreateCliToken)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCliTokenRequest;
      output: CreateCliTokenResponse;
    };
    sdk: {
      input: CreateCliTokenCommandInput;
      output: CreateCliTokenCommandOutput;
    };
  };
}
