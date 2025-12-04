// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import type { CancelBatchJobExecutionRequest, CancelBatchJobExecutionResponse } from "../models/models_0";
import { CancelBatchJobExecution } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelBatchJobExecutionCommand}.
 */
export interface CancelBatchJobExecutionCommandInput extends CancelBatchJobExecutionRequest {}
/**
 * @public
 *
 * The output of {@link CancelBatchJobExecutionCommand}.
 */
export interface CancelBatchJobExecutionCommandOutput extends CancelBatchJobExecutionResponse, __MetadataBearer {}

/**
 * <p>Cancels the running of a specific batch job execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, CancelBatchJobExecutionCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, CancelBatchJobExecutionCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // CancelBatchJobExecutionRequest
 *   applicationId: "STRING_VALUE", // required
 *   executionId: "STRING_VALUE", // required
 *   authSecretsManagerArn: "STRING_VALUE",
 * };
 * const command = new CancelBatchJobExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelBatchJobExecutionCommandInput - {@link CancelBatchJobExecutionCommandInput}
 * @returns {@link CancelBatchJobExecutionCommandOutput}
 * @see {@link CancelBatchJobExecutionCommandInput} for command's `input` shape.
 * @see {@link CancelBatchJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The parameters provided in the request conflict with existing resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 *
 * @public
 */
export class CancelBatchJobExecutionCommand extends $Command
  .classBuilder<
    CancelBatchJobExecutionCommandInput,
    CancelBatchJobExecutionCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsSupernovaControlPlaneService", "CancelBatchJobExecution", {})
  .n("M2Client", "CancelBatchJobExecutionCommand")
  .sc(CancelBatchJobExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelBatchJobExecutionRequest;
      output: {};
    };
    sdk: {
      input: CancelBatchJobExecutionCommandInput;
      output: CancelBatchJobExecutionCommandOutput;
    };
  };
}
