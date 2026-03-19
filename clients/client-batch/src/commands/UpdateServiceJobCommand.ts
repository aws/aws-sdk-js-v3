// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateServiceJobRequest, UpdateServiceJobResponse } from "../models/models_0";
import { UpdateServiceJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceJobCommand}.
 */
export interface UpdateServiceJobCommandInput extends UpdateServiceJobRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServiceJobCommand}.
 */
export interface UpdateServiceJobCommandOutput extends UpdateServiceJobResponse, __MetadataBearer {}

/**
 * <p>Updates the priority of a specified service job in an Batch job queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, UpdateServiceJobCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, UpdateServiceJobCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // UpdateServiceJobRequest
 *   jobId: "STRING_VALUE", // required
 *   schedulingPriority: Number("int"), // required
 * };
 * const command = new UpdateServiceJobCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceJobResponse
 * //   jobArn: "STRING_VALUE",
 * //   jobName: "STRING_VALUE",
 * //   jobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateServiceJobCommandInput - {@link UpdateServiceJobCommandInput}
 * @returns {@link UpdateServiceJobCommandOutput}
 * @see {@link UpdateServiceJobCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceJobCommandOutput} for command's `response` shape.
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
export class UpdateServiceJobCommand extends $Command
  .classBuilder<
    UpdateServiceJobCommandInput,
    UpdateServiceJobCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "UpdateServiceJob", {})
  .n("BatchClient", "UpdateServiceJobCommand")
  .sc(UpdateServiceJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceJobRequest;
      output: UpdateServiceJobResponse;
    };
    sdk: {
      input: UpdateServiceJobCommandInput;
      output: UpdateServiceJobCommandOutput;
    };
  };
}
