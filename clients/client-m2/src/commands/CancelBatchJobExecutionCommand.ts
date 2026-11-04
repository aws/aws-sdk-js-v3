// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelBatchJobExecutionRequest, CancelBatchJobExecutionResponse } from "../models/models_0";
import { CancelBatchJobExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Cancels the running of a specific batch job execution.
 *
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
 *
 * The account or role doesn't have the right permissions to make the request.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The parameters provided in the request conflict with existing resources.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests made exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One or more parameters provided in the request is not valid.
 *
 * @throws {@link M2ServiceException}
 *
 * Base exception class for all service exceptions from M2 service.
 *
 * @public
 */
export class CancelBatchJobExecutionCommand extends command<CancelBatchJobExecutionCommandInput, CancelBatchJobExecutionCommandOutput>(
  _ep0,
  _mw0,
  "CancelBatchJobExecution",
  CancelBatchJobExecution$
) {
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
