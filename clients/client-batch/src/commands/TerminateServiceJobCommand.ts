// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { TerminateServiceJobRequest, TerminateServiceJobResponse } from "../models/models_0";
import { TerminateServiceJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TerminateServiceJobCommand}.
 */
export interface TerminateServiceJobCommandInput extends TerminateServiceJobRequest {}
/**
 * @public
 *
 * The output of {@link TerminateServiceJobCommand}.
 */
export interface TerminateServiceJobCommandOutput extends TerminateServiceJobResponse, __MetadataBearer {}

/**
 * <p>Terminates a service job in a job queue. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, TerminateServiceJobCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, TerminateServiceJobCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // TerminateServiceJobRequest
 *   jobId: "STRING_VALUE", // required
 *   reason: "STRING_VALUE", // required
 * };
 * const command = new TerminateServiceJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TerminateServiceJobCommandInput - {@link TerminateServiceJobCommandInput}
 * @returns {@link TerminateServiceJobCommandOutput}
 * @see {@link TerminateServiceJobCommandInput} for command's `input` shape.
 * @see {@link TerminateServiceJobCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 *
 * @public
 */
export class TerminateServiceJobCommand extends $Command
  .classBuilder<
    TerminateServiceJobCommandInput,
    TerminateServiceJobCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "TerminateServiceJob", {})
  .n("BatchClient", "TerminateServiceJobCommand")
  .sc(TerminateServiceJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateServiceJobRequest;
      output: {};
    };
    sdk: {
      input: TerminateServiceJobCommandInput;
      output: TerminateServiceJobCommandOutput;
    };
  };
}
