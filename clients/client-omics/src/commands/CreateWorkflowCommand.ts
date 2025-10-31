// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWorkflowRequest, CreateWorkflowResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_CreateWorkflowCommand, se_CreateWorkflowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkflowCommand}.
 */
export interface CreateWorkflowCommandInput extends CreateWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkflowCommand}.
 */
export interface CreateWorkflowCommandOutput extends CreateWorkflowResponse, __MetadataBearer {}

/**
 * <p>Creates a private workflow. Before you create a private workflow, you must create and configure these required resources:</p> <ul> <li> <p> <i>Workflow definition file:</i> A workflow definition file written in WDL, Nextflow, or CWL. The workflow definition specifies the inputs and outputs for runs that use the workflow. It also includes specifications for the runs and run tasks for your workflow, including compute and memory requirements. The workflow definition file must be in <code>.zip</code> format. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflow-definition-files.html">Workflow definition files</a> in Amazon Web Services HealthOmics.</p> <ul> <li> <p>You can use Amazon Q CLI to build and validate your workflow definition files in WDL, Nextflow, and CWL. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/getting-started.html#omics-q-prompts">Example prompts for Amazon Q CLI</a> and the <a href="https://github.com/aws-samples/aws-healthomics-tutorials/tree/main/generative-ai">Amazon Web Services HealthOmics Agentic generative AI tutorial</a> on GitHub.</p> </li> </ul> </li> <li> <p> <i>(Optional) Parameter template file:</i> A parameter template file written in JSON. Create the file to define the run parameters, or Amazon Web Services HealthOmics generates the parameter template for you. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/parameter-templates.html">Parameter template files for HealthOmics workflows</a>. </p> </li> <li> <p> <i>ECR container images:</i> Create container images for the workflow in a private ECR repository, or synchronize images from a supported upstream registry with your Amazon ECR private repository.</p> </li> <li> <p> <i>(Optional) Sentieon licenses:</i> Request a Sentieon license to use the Sentieon software in private workflows.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/creating-private-workflows.html">Creating or updating a private workflow in Amazon Web Services HealthOmics</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateWorkflowCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateWorkflowCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // CreateWorkflowRequest
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   engine: "STRING_VALUE",
 *   definitionZip: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   definitionUri: "STRING_VALUE",
 *   main: "STRING_VALUE",
 *   parameterTemplate: { // WorkflowParameterTemplate
 *     "<keys>": { // WorkflowParameter
 *       description: "STRING_VALUE",
 *       optional: true || false,
 *     },
 *   },
 *   storageCapacity: Number("int"),
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   requestId: "STRING_VALUE", // required
 *   accelerators: "STRING_VALUE",
 *   storageType: "STRING_VALUE",
 *   containerRegistryMap: { // ContainerRegistryMap
 *     registryMappings: [ // RegistryMappingsList
 *       { // RegistryMapping
 *         upstreamRegistryUrl: "STRING_VALUE",
 *         ecrRepositoryPrefix: "STRING_VALUE",
 *         upstreamRepositoryPrefix: "STRING_VALUE",
 *         ecrAccountId: "STRING_VALUE",
 *       },
 *     ],
 *     imageMappings: [ // ImageMappingsList
 *       { // ImageMapping
 *         sourceImage: "STRING_VALUE",
 *         destinationImage: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   containerRegistryMapUri: "STRING_VALUE",
 *   readmeMarkdown: "STRING_VALUE",
 *   parameterTemplatePath: "STRING_VALUE",
 *   readmePath: "STRING_VALUE",
 *   definitionRepository: { // DefinitionRepository
 *     connectionArn: "STRING_VALUE", // required
 *     fullRepositoryId: "STRING_VALUE", // required
 *     sourceReference: { // SourceReference
 *       type: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *     excludeFilePatterns: [ // ExcludeFilePatternList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   workflowBucketOwnerId: "STRING_VALUE",
 *   readmeUri: "STRING_VALUE",
 * };
 * const command = new CreateWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkflowResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   uuid: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWorkflowCommandInput - {@link CreateWorkflowCommandInput}
 * @returns {@link CreateWorkflowCommandOutput}
 * @see {@link CreateWorkflowCommandInput} for command's `input` shape.
 * @see {@link CreateWorkflowCommandOutput} for command's `response` shape.
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
export class CreateWorkflowCommand extends $Command
  .classBuilder<
    CreateWorkflowCommandInput,
    CreateWorkflowCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "CreateWorkflow", {})
  .n("OmicsClient", "CreateWorkflowCommand")
  .f(void 0, void 0)
  .ser(se_CreateWorkflowCommand)
  .de(de_CreateWorkflowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkflowRequest;
      output: CreateWorkflowResponse;
    };
    sdk: {
      input: CreateWorkflowCommandInput;
      output: CreateWorkflowCommandOutput;
    };
  };
}
