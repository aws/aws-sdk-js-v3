// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartRunRequest, StartRunResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_StartRunCommand, se_StartRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartRunCommand}.
 */
export interface StartRunCommandInput extends StartRunRequest {}
/**
 * @public
 *
 * The output of {@link StartRunCommand}.
 */
export interface StartRunCommandOutput extends StartRunResponse, __MetadataBearer {}

/**
 * <p>Starts a workflow run. To duplicate a run, specify the run's ID and a role ARN. The
 *       remaining parameters are copied from the previous run.</p>
 *          <p>StartRun will not support re-run for a workflow that is shared with you.</p>
 *          <p>HealthOmics stores a fixed number of runs that are available to the console and API.
 *         By default, HealthOmics doesn't any remove any runs. If HealthOmics reaches the maximum
 *         number of runs, you must manually remove runs. To have older runs removed automatically,
 *         set the retention mode to <code>REMOVE</code>.</p>
 *          <p>By default, the run uses STATIC storage. For STATIC storage, set the <code>storageCapacity</code> field.
 *       You can set the storage type to DYNAMIC. You do not set <code>storageCapacity</code>,
 *       because HealthOmics dynamically scales the storage up or down as required.
 *       For more information about static and dynamic storage, see <a href="https://docs.aws.amazon.com/omics/latest/dev/Using-workflows.html">Running workflows</a>
 *       in the <i>AWS HealthOmics User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, StartRunCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, StartRunCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // StartRunRequest
 *   workflowId: "STRING_VALUE",
 *   workflowType: "STRING_VALUE",
 *   runId: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   cacheId: "STRING_VALUE",
 *   cacheBehavior: "STRING_VALUE",
 *   runGroupId: "STRING_VALUE",
 *   priority: Number("int"),
 *   parameters: "DOCUMENT_VALUE",
 *   storageCapacity: Number("int"),
 *   outputUri: "STRING_VALUE",
 *   logLevel: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   requestId: "STRING_VALUE", // required
 *   retentionMode: "STRING_VALUE",
 *   storageType: "STRING_VALUE",
 *   workflowOwnerId: "STRING_VALUE",
 * };
 * const command = new StartRunCommand(input);
 * const response = await client.send(command);
 * // { // StartRunResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   uuid: "STRING_VALUE",
 * //   runOutputUri: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartRunCommandInput - {@link StartRunCommandInput}
 * @returns {@link StartRunCommandOutput}
 * @see {@link StartRunCommandInput} for command's `input` shape.
 * @see {@link StartRunCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
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
 * @public
 */
export class StartRunCommand extends $Command
  .classBuilder<
    StartRunCommandInput,
    StartRunCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "StartRun", {})
  .n("OmicsClient", "StartRunCommand")
  .f(void 0, void 0)
  .ser(se_StartRunCommand)
  .de(de_StartRunCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartRunRequest;
      output: StartRunResponse;
    };
    sdk: {
      input: StartRunCommandInput;
      output: StartRunCommandOutput;
    };
  };
}
