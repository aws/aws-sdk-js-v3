// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { TerminateSessionRequest, TerminateSessionResponse } from "../models/models_0";
import { de_TerminateSessionCommand, se_TerminateSessionCommand } from "../protocols/Aws_json1_1";

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
 * <p>Terminates an active session. A <code>TerminateSession</code> call on a session that
 *             is already inactive (for example, in a <code>FAILED</code>, <code>TERMINATED</code> or
 *                 <code>TERMINATING</code> state) succeeds but has no effect. Calculations running in
 *             the session when <code>TerminateSession</code> is called are forcefully stopped, but may
 *             display as <code>FAILED</code> instead of <code>STOPPED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, TerminateSessionCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, TerminateSessionCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // TerminateSessionRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new TerminateSessionCommand(input);
 * const response = await client.send(command);
 * // { // TerminateSessionResponse
 * //   State: "CREATING" || "CREATED" || "IDLE" || "BUSY" || "TERMINATING" || "TERMINATED" || "DEGRADED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param TerminateSessionCommandInput - {@link TerminateSessionCommandInput}
 * @returns {@link TerminateSessionCommandOutput}
 * @see {@link TerminateSessionCommandInput} for command's `input` shape.
 * @see {@link TerminateSessionCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class TerminateSessionCommand extends $Command
  .classBuilder<
    TerminateSessionCommandInput,
    TerminateSessionCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "TerminateSession", {})
  .n("AthenaClient", "TerminateSessionCommand")
  .f(void 0, void 0)
  .ser(se_TerminateSessionCommand)
  .de(de_TerminateSessionCommand)
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
