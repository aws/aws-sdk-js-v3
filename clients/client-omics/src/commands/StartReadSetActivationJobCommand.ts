// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartReadSetActivationJobRequest, StartReadSetActivationJobResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { StartReadSetActivationJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartReadSetActivationJobCommand}.
 */
export interface StartReadSetActivationJobCommandInput extends StartReadSetActivationJobRequest {}
/**
 * @public
 *
 * The output of {@link StartReadSetActivationJobCommand}.
 */
export interface StartReadSetActivationJobCommandOutput extends StartReadSetActivationJobResponse, __MetadataBearer {}

/**
 * <p>Activates an archived read set and returns its metadata in a JSON formatted output. AWS HealthOmics automatically archives unused read sets after 30 days. To monitor the status of your read set activation job, use the <code>GetReadSetActivationJob</code> operation.</p> <p>To learn more, see <a href="https://docs.aws.amazon.com/omics/latest/dev/activating-read-sets.html">Activating read sets</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, StartReadSetActivationJobCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, StartReadSetActivationJobCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // StartReadSetActivationJobRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   sources: [ // StartReadSetActivationJobSourceList // required
 *     { // StartReadSetActivationJobSourceItem
 *       readSetId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartReadSetActivationJobCommand(input);
 * const response = await client.send(command);
 * // { // StartReadSetActivationJobResponse
 * //   id: "STRING_VALUE", // required
 * //   sequenceStoreId: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StartReadSetActivationJobCommandInput - {@link StartReadSetActivationJobCommandInput}
 * @returns {@link StartReadSetActivationJobCommandOutput}
 * @see {@link StartReadSetActivationJobCommandInput} for command's `input` shape.
 * @see {@link StartReadSetActivationJobCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class StartReadSetActivationJobCommand extends $Command
  .classBuilder<
    StartReadSetActivationJobCommandInput,
    StartReadSetActivationJobCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "StartReadSetActivationJob", {})
  .n("OmicsClient", "StartReadSetActivationJobCommand")
  .sc(StartReadSetActivationJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartReadSetActivationJobRequest;
      output: StartReadSetActivationJobResponse;
    };
    sdk: {
      input: StartReadSetActivationJobCommandInput;
      output: StartReadSetActivationJobCommandOutput;
    };
  };
}
