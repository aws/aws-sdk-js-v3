// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ResumeSessionRequest, ResumeSessionResponse } from "../models/models_2";
import { de_ResumeSessionCommand, se_ResumeSessionCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResumeSessionCommand}.
 */
export interface ResumeSessionCommandInput extends ResumeSessionRequest {}
/**
 * @public
 *
 * The output of {@link ResumeSessionCommand}.
 */
export interface ResumeSessionCommandOutput extends ResumeSessionResponse, __MetadataBearer {}

/**
 * <p>Reconnects a session to a managed node after it has been disconnected. Connections can be
 *    resumed for disconnected sessions, but not terminated sessions.</p>
 *          <note>
 *             <p>This command is primarily for use by client machines to automatically reconnect during
 *     intermittent network issues. It isn't intended for any other use.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ResumeSessionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ResumeSessionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ResumeSessionRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new ResumeSessionCommand(input);
 * const response = await client.send(command);
 * // { // ResumeSessionResponse
 * //   SessionId: "STRING_VALUE",
 * //   TokenValue: "STRING_VALUE",
 * //   StreamUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResumeSessionCommandInput - {@link ResumeSessionCommandInput}
 * @returns {@link ResumeSessionCommandOutput}
 * @see {@link ResumeSessionCommandInput} for command's `input` shape.
 * @see {@link ResumeSessionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *  <p>Error returned when the ID specified for a resource, such as a maintenance window or patch
 *    baseline, doesn't exist.</p>
 *          <p>For information about resource quotas in Amazon Web Services Systems Manager, see <a href="https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm">Systems Manager service quotas</a> in the
 *     <i>Amazon Web Services General Reference</i>.</p>
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
export class ResumeSessionCommand extends $Command
  .classBuilder<
    ResumeSessionCommandInput,
    ResumeSessionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "ResumeSession", {})
  .n("SSMClient", "ResumeSessionCommand")
  .f(void 0, void 0)
  .ser(se_ResumeSessionCommand)
  .de(de_ResumeSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResumeSessionRequest;
      output: ResumeSessionResponse;
    };
    sdk: {
      input: ResumeSessionCommandInput;
      output: ResumeSessionCommandOutput;
    };
  };
}
