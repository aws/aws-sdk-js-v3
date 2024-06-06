// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateServicePipelineInput,
  UpdateServicePipelineInputFilterSensitiveLog,
  UpdateServicePipelineOutput,
  UpdateServicePipelineOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateServicePipelineCommand, se_UpdateServicePipelineCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Update the service pipeline.</p>
 *          <p>There are four modes for updating a service pipeline. The <code>deploymentType</code>
 *       field defines the mode.</p>
 *          <dl>
 *             <dt/>
 *             <dd>
 *                <p>
 *                   <code>NONE</code>
 *                </p>
 *                <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested
 *             metadata parameters are updated.</p>
 *             </dd>
 *             <dt/>
 *             <dd>
 *                <p>
 *                   <code>CURRENT_VERSION</code>
 *                </p>
 *                <p>In this mode, the service pipeline is deployed and updated with the new spec that
 *             you provide. Only requested parameters are updated. <i>Don’t</i> include
 *             major or minor version parameters when you use this <code>deployment-type</code>.</p>
 *             </dd>
 *             <dt/>
 *             <dd>
 *                <p>
 *                   <code>MINOR_VERSION</code>
 *                </p>
 *                <p>In this mode, the service pipeline is deployed and updated with the published,
 *             recommended (latest) minor version of the current major version in use, by default. You
 *             can specify a different minor version of the current major version in use.</p>
 *             </dd>
 *             <dt/>
 *             <dd>
 *                <p>
 *                   <code>MAJOR_VERSION</code>
 *                </p>
 *                <p>In this mode, the service pipeline is deployed and updated with the published,
 *             recommended (latest) major and minor version of the current template by default. You can
 *             specify a different major version that's higher than the major version in use and a
 *             minor version.</p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateServicePipelineCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateServicePipelineCommand } = require("@aws-sdk/client-proton"); // CommonJS import
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
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request <i>couldn't</i> be made due to a conflicting operation or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 * @public
 */
export class UpdateServicePipelineCommand extends $Command
  .classBuilder<
    UpdateServicePipelineCommandInput,
    UpdateServicePipelineCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsProton20200720", "UpdateServicePipeline", {})
  .n("ProtonClient", "UpdateServicePipelineCommand")
  .f(UpdateServicePipelineInputFilterSensitiveLog, UpdateServicePipelineOutputFilterSensitiveLog)
  .ser(se_UpdateServicePipelineCommand)
  .de(de_UpdateServicePipelineCommand)
  .build() {}
