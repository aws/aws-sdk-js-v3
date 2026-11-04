// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetWorkflowRunRequest, GetWorkflowRunResponse } from "../models/models_0";
import { GetWorkflowRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetWorkflowRunCommand}.
 */
export interface GetWorkflowRunCommandInput extends GetWorkflowRunRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowRunCommand}.
 */
export interface GetWorkflowRunCommandOutput extends GetWorkflowRunResponse, __MetadataBearer {}

/**
 * Retrieves the current state, configuration, and execution details of a workflow run.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NovaActClient, GetWorkflowRunCommand } from "@aws-sdk/client-nova-act"; // ES Modules import
 * // const { NovaActClient, GetWorkflowRunCommand } = require("@aws-sdk/client-nova-act"); // CommonJS import
 * // import type { NovaActClientConfig } from "@aws-sdk/client-nova-act";
 * const config = {}; // type is NovaActClientConfig
 * const client = new NovaActClient(config);
 * const input = { // GetWorkflowRunRequest
 *   workflowDefinitionName: "STRING_VALUE", // required
 *   workflowRunId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowRunCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowRunResponse
 * //   workflowRunArn: "STRING_VALUE", // required
 * //   workflowRunId: "STRING_VALUE", // required
 * //   status: "RUNNING" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "DELETING", // required
 * //   startedAt: new Date("TIMESTAMP"), // required
 * //   endedAt: new Date("TIMESTAMP"),
 * //   modelId: "STRING_VALUE", // required
 * //   logGroupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWorkflowRunCommandInput - {@link GetWorkflowRunCommandInput}
 * @returns {@link GetWorkflowRunCommandOutput}
 * @see {@link GetWorkflowRunCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowRunCommandOutput} for command's `response` shape.
 * @see {@link NovaActClientResolvedConfig | config} for NovaActClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Please try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to too many requests. Please try again later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input parameters for the request are invalid.
 *
 * @throws {@link NovaActServiceException}
 *
 * Base exception class for all service exceptions from NovaAct service.
 *
 * @public
 */
export class GetWorkflowRunCommand extends command<GetWorkflowRunCommandInput, GetWorkflowRunCommandOutput>(
  _ep0,
  _mw0,
  "GetWorkflowRun",
  GetWorkflowRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkflowRunRequest;
      output: GetWorkflowRunResponse;
    };
    sdk: {
      input: GetWorkflowRunCommandInput;
      output: GetWorkflowRunCommandOutput;
    };
  };
}
