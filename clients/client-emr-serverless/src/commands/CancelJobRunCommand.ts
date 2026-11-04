// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelJobRunRequest, CancelJobRunResponse } from "../models/models_0";
import { CancelJobRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelJobRunCommand}.
 */
export interface CancelJobRunCommandInput extends CancelJobRunRequest {}
/**
 * @public
 *
 * The output of {@link CancelJobRunCommand}.
 */
export interface CancelJobRunCommandOutput extends CancelJobRunResponse, __MetadataBearer {}

/**
 * Cancels a job run.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRServerlessClient, CancelJobRunCommand } from "@aws-sdk/client-emr-serverless"; // ES Modules import
 * // const { EMRServerlessClient, CancelJobRunCommand } = require("@aws-sdk/client-emr-serverless"); // CommonJS import
 * // import type { EMRServerlessClientConfig } from "@aws-sdk/client-emr-serverless";
 * const config = {}; // type is EMRServerlessClientConfig
 * const client = new EMRServerlessClient(config);
 * const input = { // CancelJobRunRequest
 *   applicationId: "STRING_VALUE", // required
 *   jobRunId: "STRING_VALUE", // required
 *   shutdownGracePeriodInSeconds: Number("int"),
 * };
 * const command = new CancelJobRunCommand(input);
 * const response = await client.send(command);
 * // { // CancelJobRunResponse
 * //   applicationId: "STRING_VALUE", // required
 * //   jobRunId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CancelJobRunCommandInput - {@link CancelJobRunCommandInput}
 * @returns {@link CancelJobRunCommandOutput}
 * @see {@link CancelJobRunCommandInput} for command's `input` shape.
 * @see {@link CancelJobRunCommandOutput} for command's `response` shape.
 * @see {@link EMRServerlessClientResolvedConfig | config} for EMRServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link EMRServerlessServiceException}
 *
 * Base exception class for all service exceptions from EMRServerless service.
 *
 * @public
 */
export class CancelJobRunCommand extends command<CancelJobRunCommandInput, CancelJobRunCommandOutput>(
  _ep0,
  _mw0,
  "CancelJobRun",
  CancelJobRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelJobRunRequest;
      output: CancelJobRunResponse;
    };
    sdk: {
      input: CancelJobRunCommandInput;
      output: CancelJobRunCommandOutput;
    };
  };
}
