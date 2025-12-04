// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateWorkflowDefinitionRequest, CreateWorkflowDefinitionResponse } from "../models/models_0";
import type { NovaActClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NovaActClient";
import { CreateWorkflowDefinition } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkflowDefinitionCommand}.
 */
export interface CreateWorkflowDefinitionCommandInput extends CreateWorkflowDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkflowDefinitionCommand}.
 */
export interface CreateWorkflowDefinitionCommandOutput extends CreateWorkflowDefinitionResponse, __MetadataBearer {}

/**
 * <p>Creates a new workflow definition template that can be used to execute multiple workflow runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NovaActClient, CreateWorkflowDefinitionCommand } from "@aws-sdk/client-nova-act"; // ES Modules import
 * // const { NovaActClient, CreateWorkflowDefinitionCommand } = require("@aws-sdk/client-nova-act"); // CommonJS import
 * // import type { NovaActClientConfig } from "@aws-sdk/client-nova-act";
 * const config = {}; // type is NovaActClientConfig
 * const client = new NovaActClient(config);
 * const input = { // CreateWorkflowDefinitionRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   exportConfig: { // WorkflowExportConfig
 *     s3BucketName: "STRING_VALUE", // required
 *     s3KeyPrefix: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateWorkflowDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkflowDefinitionResponse
 * //   status: "ACTIVE" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param CreateWorkflowDefinitionCommandInput - {@link CreateWorkflowDefinitionCommandInput}
 * @returns {@link CreateWorkflowDefinitionCommandOutput}
 * @see {@link CreateWorkflowDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateWorkflowDefinitionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota limit.</p>
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
export class CreateWorkflowDefinitionCommand extends $Command
  .classBuilder<
    CreateWorkflowDefinitionCommandInput,
    CreateWorkflowDefinitionCommandOutput,
    NovaActClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NovaActClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNovaAgentsDataPlane", "CreateWorkflowDefinition", {})
  .n("NovaActClient", "CreateWorkflowDefinitionCommand")
  .sc(CreateWorkflowDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkflowDefinitionRequest;
      output: CreateWorkflowDefinitionResponse;
    };
    sdk: {
      input: CreateWorkflowDefinitionCommandInput;
      output: CreateWorkflowDefinitionCommandOutput;
    };
  };
}
