// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateWorkflowVersionRequest, CreateWorkflowVersionResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { CreateWorkflowVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a new workflow version for the workflow that you specify with the <code>workflowId</code> parameter.</p> <p>When you create a new version of a workflow, you need to specify the configuration for the new version. It doesn't inherit any configuration values from the workflow.</p> <p>Provide a version name that is unique for this workflow. You cannot change the name after HealthOmics creates the version.</p> <note> <p>Don't include any personally identifiable information (PII) in the version name. Version names appear in the workflow version ARN.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflow-versions.html">Workflow versioning in Amazon Web Services HealthOmics</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
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
export class CreateWorkflowVersionCommand extends $Command
  .classBuilder<
    CreateWorkflowVersionCommandInput,
    CreateWorkflowVersionCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "CreateWorkflowVersion", {})
  .n("OmicsClient", "CreateWorkflowVersionCommand")
  .sc(CreateWorkflowVersion$)
  .build() {
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
