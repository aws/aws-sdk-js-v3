// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetWorkflowRequest, GetWorkflowResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { GetWorkflow } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkflowCommand}.
 */
export interface GetWorkflowCommandInput extends GetWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkflowCommand}.
 */
export interface GetWorkflowCommandOutput extends GetWorkflowResponse, __MetadataBearer {}

/**
 * <p>Gets all information about a workflow using its ID.</p> <p>If a workflow is shared with you, you cannot export the workflow.</p> <p>For more information about your workflow status, see <a href="https://docs.aws.amazon.com/omics/latest/dev/using-get-workflow.html">Verify the workflow status</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetWorkflowCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetWorkflowCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // GetWorkflowRequest
 *   id: "STRING_VALUE", // required
 *   type: "STRING_VALUE",
 *   export: [ // WorkflowExportList
 *     "STRING_VALUE",
 *   ],
 *   workflowOwnerId: "STRING_VALUE",
 * };
 * const command = new GetWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkflowResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   type: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   engine: "STRING_VALUE",
 * //   definition: "STRING_VALUE",
 * //   main: "STRING_VALUE",
 * //   digest: "STRING_VALUE",
 * //   parameterTemplate: { // WorkflowParameterTemplate
 * //     "<keys>": { // WorkflowParameter
 * //       description: "STRING_VALUE",
 * //       optional: true || false,
 * //     },
 * //   },
 * //   storageCapacity: Number("int"),
 * //   creationTime: new Date("TIMESTAMP"),
 * //   statusMessage: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   metadata: { // WorkflowMetadata
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   accelerators: "STRING_VALUE",
 * //   storageType: "STRING_VALUE",
 * //   uuid: "STRING_VALUE",
 * //   containerRegistryMap: { // ContainerRegistryMap
 * //     registryMappings: [ // RegistryMappingsList
 * //       { // RegistryMapping
 * //         upstreamRegistryUrl: "STRING_VALUE",
 * //         ecrRepositoryPrefix: "STRING_VALUE",
 * //         upstreamRepositoryPrefix: "STRING_VALUE",
 * //         ecrAccountId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     imageMappings: [ // ImageMappingsList
 * //       { // ImageMapping
 * //         sourceImage: "STRING_VALUE",
 * //         destinationImage: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   readme: "STRING_VALUE",
 * //   definitionRepositoryDetails: { // DefinitionRepositoryDetails
 * //     connectionArn: "STRING_VALUE",
 * //     fullRepositoryId: "STRING_VALUE",
 * //     sourceReference: { // SourceReference
 * //       type: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //     providerType: "STRING_VALUE",
 * //     providerEndpoint: "STRING_VALUE",
 * //   },
 * //   readmePath: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWorkflowCommandInput - {@link GetWorkflowCommandInput}
 * @returns {@link GetWorkflowCommandOutput}
 * @see {@link GetWorkflowCommandInput} for command's `input` shape.
 * @see {@link GetWorkflowCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetWorkflowCommand extends $Command
  .classBuilder<
    GetWorkflowCommandInput,
    GetWorkflowCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "GetWorkflow", {})
  .n("OmicsClient", "GetWorkflowCommand")
  .sc(GetWorkflow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkflowRequest;
      output: GetWorkflowResponse;
    };
    sdk: {
      input: GetWorkflowCommandInput;
      output: GetWorkflowCommandOutput;
    };
  };
}
