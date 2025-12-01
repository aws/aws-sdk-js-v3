// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { TerminateSessionRequest, TerminateSessionResponse } from "../models/models_1";
import { TerminateSession } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TerminateSessionCommand}.
 */
export interface TerminateSessionCommandInput extends TerminateSessionRequest {}
/**
 * @public
 *
 * The output of {@link TerminateSessionCommand}.
 */
export interface TerminateSessionCommandOutput extends TerminateSessionResponse, __MetadataBearer {}

/**
 * <p>Permanently ends a session and closes the data connection between the Session Manager client and
 *    SSM Agent on the managed node. A terminated session can't be resumed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, TerminateSessionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, TerminateSessionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // TerminateSessionRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new TerminateSessionCommand(input);
 * const response = await client.send(command);
 * // { // TerminateSessionResponse
 * //   SessionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param TerminateSessionCommandInput - {@link TerminateSessionCommandInput}
 * @returns {@link TerminateSessionCommandOutput}
 * @see {@link TerminateSessionCommandInput} for command's `input` shape.
 * @see {@link TerminateSessionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class TerminateSessionCommand extends $Command
  .classBuilder<
    TerminateSessionCommandInput,
    TerminateSessionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "TerminateSession", {})
  .n("SSMClient", "TerminateSessionCommand")
  .sc(TerminateSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateSessionRequest;
      output: TerminateSessionResponse;
    };
    sdk: {
      input: TerminateSessionCommandInput;
      output: TerminateSessionCommandOutput;
    };
  };
}
