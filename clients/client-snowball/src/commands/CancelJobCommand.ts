// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CancelJobRequest, CancelJobResult } from "../models/models_0";
import { CancelJob } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelJobCommand}.
 */
export interface CancelJobCommandInput extends CancelJobRequest {}
/**
 * @public
 *
 * The output of {@link CancelJobCommand}.
 */
export interface CancelJobCommandOutput extends CancelJobResult, __MetadataBearer {}

/**
 * <p>Cancels the specified job. You can only cancel a job before its <code>JobState</code>
 *       value changes to <code>PreparingAppliance</code>. Requesting the <code>ListJobs</code> or
 *         <code>DescribeJob</code> action returns a job's <code>JobState</code> as part of the
 *       response element data returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CancelJobCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CancelJobCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // import type { SnowballClientConfig } from "@aws-sdk/client-snowball";
 * const config = {}; // type is SnowballClientConfig
 * const client = new SnowballClient(config);
 * const input = { // CancelJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new CancelJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelJobCommandInput - {@link CancelJobCommandInput}
 * @returns {@link CancelJobCommandOutput}
 * @see {@link CancelJobCommandInput} for command's `input` shape.
 * @see {@link CancelJobCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *  <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link KMSRequestFailedException} (client fault)
 *  <p>The provided Key Management Service key lacks the permissions to perform the specified
 *         <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 *
 * @example To cancel a job for a Snowball device
 * ```javascript
 * // This operation cancels a job. You can only cancel a job before its JobState value changes to PreparingAppliance.
 * const input = {
 *   JobId: "JID123e4567-e89b-12d3-a456-426655440000"
 * };
 * const command = new CancelJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CancelJobCommand extends $Command
  .classBuilder<
    CancelJobCommandInput,
    CancelJobCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIESnowballJobManagementService", "CancelJob", {})
  .n("SnowballClient", "CancelJobCommand")
  .sc(CancelJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelJobRequest;
      output: {};
    };
    sdk: {
      input: CancelJobCommandInput;
      output: CancelJobCommandOutput;
    };
  };
}
