// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateServicePipelineInput, UpdateServicePipelineOutput } from "../models/models_0";
import { UpdateServicePipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateServicePipelineCommand}.
 */
export interface UpdateServicePipelineCommandInput extends UpdateServicePipelineInput {}
/**
 * @public
 *
 * The output of {@link UpdateServicePipelineCommand}.
 */
export interface UpdateServicePipelineCommandOutput extends UpdateServicePipelineOutput, __MetadataBearer {}

/**
 * Update the service pipeline.
 *
 * There are four modes for updating a service pipeline. The `deploymentType` field defines the mode.
 *
 * - **`NONE`
 *
 *   In this mode, a deployment *doesn't* occur. Only the requested metadata parameters are updated.
 *
 * - **`CURRENT_VERSION`
 *
 *   In this mode, the service pipeline is deployed and updated with the new spec that you provide. Only requested parameters are updated. *Don’t* include major or minor version parameters when you use this `deployment-type`.
 *
 * - **`MINOR_VERSION`
 *
 *   In this mode, the service pipeline is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can specify a different minor version of the current major version in use.
 *
 * - **`MAJOR_VERSION`
 *
 *   In this mode, the service pipeline is deployed and updated with the published, recommended (latest) major and minor version of the current template by default. You can specify a different major version that's higher than the major version in use and a minor version.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers. @example Use a bare-bones client and the command you need to make an API call.********```javascript
 * import { ProtonClient, UpdateServicePipelineCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateServicePipelineCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // UpdateServicePipelineInput
 *   serviceName: "STRING_VALUE", // required
 *   spec: "STRING_VALUE", // required
 *   deploymentType: "STRING_VALUE", // required
 *   templateMajorVersion: "STRING_VALUE",
 *   templateMinorVersion: "STRING_VALUE",
 * };
 * const command = new UpdateServicePipelineCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServicePipelineOutput
 * //   pipeline: { // ServicePipeline
 * //     arn: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastDeploymentAttemptedAt: new Date("TIMESTAMP"), // required
 * //     lastDeploymentSucceededAt: new Date("TIMESTAMP"), // required
 * //     templateName: "STRING_VALUE", // required
 * //     templateMajorVersion: "STRING_VALUE", // required
 * //     templateMinorVersion: "STRING_VALUE", // required
 * //     deploymentStatus: "STRING_VALUE", // required
 * //     deploymentStatusMessage: "STRING_VALUE",
 * //     spec: "STRING_VALUE",
 * //     lastAttemptedDeploymentId: "STRING_VALUE",
 * //     lastSucceededDeploymentId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateServicePipelineCommandInput - {@link UpdateServicePipelineCommandInput}
 * @returns {@link UpdateServicePipelineCommandOutput}
 * @see {@link UpdateServicePipelineCommandInput} for command's `input` shape.
 * @see {@link UpdateServicePipelineCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * There *isn't* sufficient access for performing this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request *couldn't* be made due to a conflicting operation or resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed to register with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource *wasn't* found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input is invalid or an out-of-range value was supplied for the input parameter.
 *
 * @throws {@link ProtonServiceException}
 *
 * Base exception class for all service exceptions from Proton service.
 *
 * @public
 */
export class UpdateServicePipelineCommand extends command<UpdateServicePipelineCommandInput, UpdateServicePipelineCommandOutput>(
  _ep0,
  _mw0,
  "UpdateServicePipeline",
  UpdateServicePipeline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServicePipelineInput;
      output: UpdateServicePipelineOutput;
    };
    sdk: {
      input: UpdateServicePipelineCommandInput;
      output: UpdateServicePipelineCommandOutput;
    };
  };
}
