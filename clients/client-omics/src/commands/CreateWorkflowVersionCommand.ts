// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWorkflowVersionRequest, CreateWorkflowVersionResponse } from "../models/models_0";
import { CreateWorkflowVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWorkflowVersionCommand}.
 */
export interface CreateWorkflowVersionCommandInput extends CreateWorkflowVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkflowVersionCommand}.
 */
export interface CreateWorkflowVersionCommandOutput extends CreateWorkflowVersionResponse, __MetadataBearer {}

/**
 * Creates a new workflow version for the workflow that you specify with the `workflowId` parameter.
 *
 * When you create a new version of a workflow, you need to specify the configuration for the new version. It doesn't inherit any configuration values from the workflow.
 *
 * Provide a version name that is unique for this workflow. You cannot change the name after HealthOmics creates the version.
 *
 * > **Note:** Don't include any personally identifiable information (PII) in the version name. Version names appear in the workflow version ARN.
 *
 * For more information, see [Workflow versioning in Amazon Web Services HealthOmics](https://docs.aws.amazon.com/omics/latest/dev/workflow-versions.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateWorkflowVersionCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateWorkflowVersionCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // CreateWorkflowVersionRequest
 *   workflowId: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 *   definitionZip: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   definitionUri: "STRING_VALUE",
 *   accelerators: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   engine: "STRING_VALUE",
 *   main: "STRING_VALUE",
 *   parameterTemplate: { // WorkflowParameterTemplate
 *     "<keys>": { // WorkflowParameter
 *       description: "STRING_VALUE",
 *       optional: true || false,
 *     },
 *   },
 *   requestId: "STRING_VALUE", // required
 *   storageType: "STRING_VALUE",
 *   storageCapacity: Number("int"),
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   workflowBucketOwnerId: "STRING_VALUE",
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
 *   readmeUri: "STRING_VALUE",
 * };
 * const command = new CreateWorkflowVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkflowVersionResponse
 * //   arn: "STRING_VALUE",
 * //   workflowId: "STRING_VALUE",
 * //   versionName: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   uuid: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWorkflowVersionCommandInput - {@link CreateWorkflowVersionCommandInput}
 * @returns {@link CreateWorkflowVersionCommandOutput}
 * @see {@link CreateWorkflowVersionCommandInput} for command's `input` shape.
 * @see {@link CreateWorkflowVersionCommandOutput} for command's `response` shape.
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
export class CreateWorkflowVersionCommand extends command<CreateWorkflowVersionCommandInput, CreateWorkflowVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreateWorkflowVersion",
  CreateWorkflowVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkflowVersionRequest;
      output: CreateWorkflowVersionResponse;
    };
    sdk: {
      input: CreateWorkflowVersionCommandInput;
      output: CreateWorkflowVersionCommandOutput;
    };
  };
}
