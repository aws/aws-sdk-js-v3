// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRServerlessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRServerlessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { TerminateSessionRequest, TerminateSessionResponse } from "../models/models_0";
import { TerminateSession$ } from "../schemas/schemas_0";

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
 * <p>Terminates the specified session. After you terminate a session, it enters the <code>TERMINATING</code> state and then the <code>TERMINATED</code> state. You can still access the Spark History Server for a terminated session through the <code>GetResourceDashboard</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, TerminateSessionCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, TerminateSessionCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * // import type { EMRServerlessClientConfig } from "@aws-sdk/client-emr-serverless";
 * const config = {}; // type is EMRServerlessClientConfig
 * const client = new EMRServerlessClient(config);
 * const input = { // TerminateSessionRequest
 *   applicationId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new TerminateSessionCommand(input);
 * const response = await client.send(command);
 * // { // TerminateSessionResponse
 * //   applicationId: "STRING_VALUE", // required
 * //   sessionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param TerminateSessionCommandInput - {@link TerminateSessionCommandInput}
 * @returns {@link TerminateSessionCommandOutput}
 * @see {@link TerminateSessionCommandInput} for command's `input` shape.
 * @see {@link TerminateSessionCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link EMRServerlessServiceException}
 * <p>Base exception class for all service exceptions from EMRServerless service.</p>
 *
 *
 * @public
 */
export class TerminateSessionCommand extends $Command
  .classBuilder<
    TerminateSessionCommandInput,
    TerminateSessionCommandOutput,
    EMRServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsToledoWebService", "TerminateSession", {})
  .n("EMRServerlessClient", "TerminateSessionCommand")
  .sc(TerminateSession$)
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
