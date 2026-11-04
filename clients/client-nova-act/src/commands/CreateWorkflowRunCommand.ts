// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWorkflowRunRequest, CreateWorkflowRunResponse } from "../models/models_0";
import { CreateWorkflowRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWorkflowRunCommand}.
 */
export interface CreateWorkflowRunCommandInput extends CreateWorkflowRunRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkflowRunCommand}.
 */
export interface CreateWorkflowRunCommandOutput extends CreateWorkflowRunResponse, __MetadataBearer {}

/**
 * Creates a new execution instance of a workflow definition with specified parameters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NovaActClient, CreateWorkflowRunCommand } from "@aws-sdk/client-nova-act"; // ES Modules import
 * // const { NovaActClient, CreateWorkflowRunCommand } = require("@aws-sdk/client-nova-act"); // CommonJS import
 * // import type { NovaActClientConfig } from "@aws-sdk/client-nova-act";
 * const config = {}; // type is NovaActClientConfig
 * const client = new NovaActClient(config);
 * const input = { // CreateWorkflowRunRequest
 *   workflowDefinitionName: "STRING_VALUE", // required
 *   modelId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   logGroupName: "STRING_VALUE",
 *   clientInfo: { // ClientInfo
 *     compatibilityVersion: Number("int"), // required
 *     sdkVersion: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateWorkflowRunCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkflowRunResponse
 * //   workflowRunId: "STRING_VALUE", // required
 * //   status: "RUNNING" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param CreateWorkflowRunCommandInput - {@link CreateWorkflowRunCommandInput}
 * @returns {@link CreateWorkflowRunCommandOutput}
 * @see {@link CreateWorkflowRunCommandInput} for command's `input` shape.
 * @see {@link CreateWorkflowRunCommandOutput} for command's `response` shape.
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
export class CreateWorkflowRunCommand extends command<CreateWorkflowRunCommandInput, CreateWorkflowRunCommandOutput>(
  _ep0,
  _mw0,
  "CreateWorkflowRun",
  CreateWorkflowRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkflowRunRequest;
      output: CreateWorkflowRunResponse;
    };
    sdk: {
      input: CreateWorkflowRunCommandInput;
      output: CreateWorkflowRunCommandOutput;
    };
  };
}
