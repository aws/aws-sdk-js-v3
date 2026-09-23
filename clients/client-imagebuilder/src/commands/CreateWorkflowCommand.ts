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
 * <p>Creates a new workflow or a new version of an existing workflow. If a workflow
 * 			with the same name and semantic version already exists, and your request changes
 * 			its configuration, Image Builder creates a new build version.
 * 			If the configuration is identical to the latest build version, the request
 * 			fails because that workflow configuration already exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateWorkflowCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateWorkflowCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // CreateWorkflowRequest
 *   name: "STRING_VALUE", // required
 *   semanticVersion: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   changeDescription: "STRING_VALUE",
 *   data: "STRING_VALUE",
 *   uri: "STRING_VALUE",
 *   kmsKeyId: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE", // required
 *   type: "BUILD" || "TEST" || "DISTRIBUTION", // required
 *   dryRun: true || false,
 * };
 * const command = new CreateWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkflowResponse
 * //   clientToken: "STRING_VALUE",
 * //   workflowBuildVersionArn: "STRING_VALUE",
 * //   latestVersionReferences: { // LatestVersionReferences
 * //     latestVersionArn: "STRING_VALUE",
 * //     latestMajorVersionArn: "STRING_VALUE",
 * //     latestMinorVersionArn: "STRING_VALUE",
 * //     latestPatchVersionArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateWorkflowCommandInput - {@link CreateWorkflowCommandInput}
 * @returns {@link CreateWorkflowCommandOutput}
 * @see {@link CreateWorkflowCommandInput} for command's `input` shape.
 * @see {@link CreateWorkflowCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 *
 * @throws {@link DryRunOperationException} (client fault)
 *  <p>The dry run operation of the resource was successful, and no resources or mutations were actually performed due to the dry run flag in the request.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>You have specified a combination of parameters that isn't valid. For
 * 			example, two mutually exclusive parameters, or a parameter without its
 * 			required companion parameter. Review the error message for details.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link InvalidVersionNumberException} (client fault)
 *  <p>Your version number is out of bounds or does not follow the required syntax.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the number of permitted resources or operations for this service.
 * 			For service quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html#limits_imagebuilder">EC2 Image Builder endpoints and
 * 				quotas</a>.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example Create a build workflow from an inline document
 * ```javascript
 * // The following example creates a build workflow from a YAML workflow document provided inline in the request.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE54321",
 *   data: "name: my-example-workflow
 * description: Workflow to build an AMI
 * schemaVersion: 1.0
 * steps:
 *   - name: LaunchBuildInstance
 *     action: LaunchInstance
 *     onFailure: Abort
 *     inputs:
 *       waitFor: ssmAgent
 *   - name: ApplyBuildComponents
 *     action: ExecuteComponents
 *     onFailure: Abort
 *     inputs:
 *       instanceId.$: $.stepOutputs.LaunchBuildInstance.instanceId
 *   - name: CreateOutputAMI
 *     action: CreateImage
 *     onFailure: Abort
 *     inputs:
 *       instanceId.$: $.stepOutputs.LaunchBuildInstance.instanceId
 *   - name: TerminateBuildInstance
 *     action: TerminateInstance
 *     onFailure: Continue
 *     inputs:
 *       instanceId.$: $.stepOutputs.LaunchBuildInstance.instanceId
 * ",
 *   description: "Workflow to build an AMI",
 *   name: "my-example-workflow",
 *   semanticVersion: "1.0.0",
 *   type: "BUILD"
 * };
 * const command = new CreateWorkflowCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE54321",
 *   latestVersionReferences: {
 *     latestMajorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-workflow/1.x.x",
 *     latestMinorVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-workflow/1.0.x",
 *     latestPatchVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-workflow/1.0.0",
 *     latestVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-workflow/x.x.x"
 *   },
 *   workflowBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:workflow/build/my-example-workflow/1.0.0/1"
 * }
 * *\/
 * ```
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
