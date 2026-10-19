// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSystemLogsForJobRunRequest, GetSystemLogsForJobRunResponse } from "../models/models_2";
import { GetSystemLogsForJobRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSystemLogsForJobRunCommand}.
 */
export interface GetSystemLogsForJobRunCommandInput extends GetSystemLogsForJobRunRequest {}
/**
 * @public
 *
 * The output of {@link GetSystemLogsForJobRunCommand}.
 */
export interface GetSystemLogsForJobRunCommandOutput extends GetSystemLogsForJobRunResponse, __MetadataBearer {}

/**
 * <p>Retrieves the system logs for a job run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSystemLogsForJobRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSystemLogsForJobRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetSystemLogsForJobRunRequest
 *   JobName: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new GetSystemLogsForJobRunCommand(input);
 * const response = await client.send(command);
 * // { // GetSystemLogsForJobRunResponse
 * //   SystemLogsUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSystemLogsForJobRunCommandInput - {@link GetSystemLogsForJobRunCommandInput}
 * @returns {@link GetSystemLogsForJobRunCommandOutput}
 * @see {@link GetSystemLogsForJobRunCommandInput} for command's `input` shape.
 * @see {@link GetSystemLogsForJobRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetSystemLogsForJobRunCommand extends command<GetSystemLogsForJobRunCommandInput, GetSystemLogsForJobRunCommandOutput>(
  _ep0,
  _mw0,
  "GetSystemLogsForJobRun",
  GetSystemLogsForJobRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSystemLogsForJobRunRequest;
      output: GetSystemLogsForJobRunResponse;
    };
    sdk: {
      input: GetSystemLogsForJobRunCommandInput;
      output: GetSystemLogsForJobRunCommandOutput;
    };
  };
}
