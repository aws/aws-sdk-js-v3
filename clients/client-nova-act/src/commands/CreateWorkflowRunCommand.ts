// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateWorkflowRunRequest, CreateWorkflowRunResponse } from "../models/models_0";
import type { NovaActClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NovaActClient";
import { CreateWorkflowRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a new execution instance of a workflow definition with specified parameters.</p>
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
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Please try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for the request are invalid.</p>
 *
 * @throws {@link NovaActServiceException}
 * <p>Base exception class for all service exceptions from NovaAct service.</p>
 *
 *
 * @public
 */
export class CreateWorkflowRunCommand extends $Command
  .classBuilder<
    CreateWorkflowRunCommandInput,
    CreateWorkflowRunCommandOutput,
    NovaActClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NovaActClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNovaAgentsDataPlane", "CreateWorkflowRun", {})
  .n("NovaActClient", "CreateWorkflowRunCommand")
  .sc(CreateWorkflowRun)
  .build() {
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
