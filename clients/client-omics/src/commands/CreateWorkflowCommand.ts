// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWorkflowRequest, CreateWorkflowResponse } from "../models/models_0";
import { CreateWorkflow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a private workflow. Before you create a private workflow, you must create and configure these required resources:
 *
 * - *Workflow definition file:* A workflow definition file written in WDL, Nextflow, or CWL. The workflow definition specifies the inputs and outputs for runs that use the workflow. It also includes specifications for the runs and run tasks for your workflow, including compute and memory requirements. The workflow definition file must be in `.zip` format. For more information, see [Workflow definition files](https://docs.aws.amazon.com/omics/latest/dev/workflow-definition-files.html) in Amazon Web Services HealthOmics.
 *
 *   - You can use Amazon Q CLI to build and validate your workflow definition files in WDL, Nextflow, and CWL. For more information, see [Example prompts for Amazon Q CLI](https://docs.aws.amazon.com/omics/latest/dev/getting-started.html#omics-q-prompts) and the [Amazon Web Services HealthOmics Agentic generative AI tutorial](https://github.com/aws-samples/aws-healthomics-tutorials/tree/main/generative-ai) on GitHub.
 * - *(Optional) Parameter template file:* A parameter template file written in JSON. Create the file to define the run parameters, or Amazon Web Services HealthOmics generates the parameter template for you. For more information, see [Parameter template files for HealthOmics workflows](https://docs.aws.amazon.com/omics/latest/dev/parameter-templates.html).
 * - *ECR container images:* Create container images for the workflow in a private ECR repository, or synchronize images from a supported upstream registry with your Amazon ECR private repository.
 * - *(Optional) Sentieon licenses:* Request a Sentieon license to use the Sentieon software in private workflows.
 *
 * For more information, see [Creating or updating a private workflow in Amazon Web Services HealthOmics](https://docs.aws.amazon.com/omics/latest/dev/creating-private-workflows.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
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
 *         upstreamRegistryUrl: "STRING_VALUE", // required
 *         ecrRepositoryPrefix: "STRING_VALUE", // required
 *         upstreamRepositoryPrefix: "STRING_VALUE",
 *         ecrAccountId: "STRING_VALUE",
 *         credentialArn: "STRING_VALUE",
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class CreateWorkflowCommand extends command<CreateWorkflowCommandInput, CreateWorkflowCommandOutput>(
  _ep0,
  _mw0,
  "CreateWorkflow",
  CreateWorkflow$
) {
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
