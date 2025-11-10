// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWebLoginTokenRequest, CreateWebLoginTokenResponse } from "../models/models_0";
import { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import { CreateWebLoginToken } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWebLoginTokenCommand}.
 */
export interface CreateWebLoginTokenCommandInput extends CreateWebLoginTokenRequest {}
/**
 * @public
 *
 * The output of {@link CreateWebLoginTokenCommand}.
 */
export interface CreateWebLoginTokenCommandOutput extends CreateWebLoginTokenResponse, __MetadataBearer {}

/**
 * <p>Creates a web login token for the Airflow Web UI. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-web.html">Creating an Apache Airflow web login token</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, CreateWebLoginTokenCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, CreateWebLoginTokenCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * // import type { MWAAClientConfig } from "@aws-sdk/client-mwaa";
 * const config = {}; // type is MWAAClientConfig
 * const client = new MWAAClient(config);
 * const input = { // CreateWebLoginTokenRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new CreateWebLoginTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateWebLoginTokenResponse
 * //   WebToken: "STRING_VALUE",
 * //   WebServerHostname: "STRING_VALUE",
 * //   IamIdentity: "STRING_VALUE",
 * //   AirflowIdentity: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWebLoginTokenCommandInput - {@link CreateWebLoginTokenCommandInput}
 * @returns {@link CreateWebLoginTokenCommandOutput}
 * @see {@link CreateWebLoginTokenCommandInput} for command's `input` shape.
 * @see {@link CreateWebLoginTokenCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for MWAAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the Apache Airflow Web UI or CLI has been denied due to insufficient permissions. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/access-policies.html">Accessing an Amazon MWAA environment</a>.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>InternalServerException: An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>ResourceNotFoundException: The resource is not available.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>ValidationException: The provided input is not valid.</p>
 *
 * @throws {@link MWAAServiceException}
 * <p>Base exception class for all service exceptions from MWAA service.</p>
 *
 *
 * @public
 */
export class CreateWebLoginTokenCommand extends $Command
  .classBuilder<
    CreateWebLoginTokenCommandInput,
    CreateWebLoginTokenCommandOutput,
    MWAAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MWAAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMWAA", "CreateWebLoginToken", {})
  .n("MWAAClient", "CreateWebLoginTokenCommand")
  .sc(CreateWebLoginToken)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWebLoginTokenRequest;
      output: CreateWebLoginTokenResponse;
    };
    sdk: {
      input: CreateWebLoginTokenCommandInput;
      output: CreateWebLoginTokenCommandOutput;
    };
  };
}
