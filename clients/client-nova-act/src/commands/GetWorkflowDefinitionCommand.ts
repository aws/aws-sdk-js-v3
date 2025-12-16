// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetWorkflowDefinitionRequest, GetWorkflowDefinitionResponse } from "../models/models_0";
import type { NovaActClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NovaActClient";
import { GetWorkflowDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkflowDefinitionCommand}.
 */
export interface GetWorkflowDefinitionCommandInput extends GetWorkflowDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowDefinitionCommand}.
 */
export interface GetWorkflowDefinitionCommandOutput extends GetWorkflowDefinitionResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details and configuration of a specific workflow definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NovaActClient, GetWorkflowDefinitionCommand } from "@aws-sdk/client-nova-act"; // ES Modules import
 * // const { NovaActClient, GetWorkflowDefinitionCommand } = require("@aws-sdk/client-nova-act"); // CommonJS import
 * // import type { NovaActClientConfig } from "@aws-sdk/client-nova-act";
 * const config = {}; // type is NovaActClientConfig
 * const client = new NovaActClient(config);
 * const input = { // GetWorkflowDefinitionRequest
 *   workflowDefinitionName: "STRING_VALUE", // required
 * };
 * const command = new GetWorkflowDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowDefinitionResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   description: "STRING_VALUE",
 * //   exportConfig: { // WorkflowExportConfig
 * //     s3BucketName: "STRING_VALUE", // required
 * //     s3KeyPrefix: "STRING_VALUE",
 * //   },
 * //   status: "ACTIVE" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param GetWorkflowDefinitionCommandInput - {@link GetWorkflowDefinitionCommandInput}
 * @returns {@link GetWorkflowDefinitionCommandOutput}
 * @see {@link GetWorkflowDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowDefinitionCommandOutput} for command's `response` shape.
 * @see {@link NovaActClientResolvedConfig | config} for NovaActClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
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
export class GetWorkflowDefinitionCommand extends $Command
  .classBuilder<
    GetWorkflowDefinitionCommandInput,
    GetWorkflowDefinitionCommandOutput,
    NovaActClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NovaActClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNovaAgentsDataPlane", "GetWorkflowDefinition", {})
  .n("NovaActClient", "GetWorkflowDefinitionCommand")
  .sc(GetWorkflowDefinition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkflowDefinitionRequest;
      output: GetWorkflowDefinitionResponse;
    };
    sdk: {
      input: GetWorkflowDefinitionCommandInput;
      output: GetWorkflowDefinitionCommandOutput;
    };
  };
}
