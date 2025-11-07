// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelServicePipelineDeploymentInput, CancelServicePipelineDeploymentOutput } from "../models/models_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { CancelServicePipelineDeployment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelServicePipelineDeploymentCommand}.
 */
export interface CancelServicePipelineDeploymentCommandInput extends CancelServicePipelineDeploymentInput {}
/**
 * @public
 *
 * The output of {@link CancelServicePipelineDeploymentCommand}.
 */
export interface CancelServicePipelineDeploymentCommandOutput
  extends CancelServicePipelineDeploymentOutput,
    __MetadataBearer {}

/**
 * <p>Attempts to cancel a service pipeline deployment on an <a>UpdateServicePipeline</a> action, if the deployment is <code>IN_PROGRESS</code>. For
 *       more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-pipeline-update.html">Update a service pipeline</a>
 *       in the <i>Proton User guide</i>.</p>
 *          <p>The following list includes potential cancellation scenarios.</p>
 *          <ul>
 *             <li>
 *                <p>If the cancellation attempt succeeds, the resulting deployment state is
 *             <code>CANCELLED</code>.</p>
 *             </li>
 *             <li>
 *                <p>If the cancellation attempt fails, the resulting deployment state is
 *             <code>FAILED</code>.</p>
 *             </li>
 *             <li>
 *                <p>If the current <a>UpdateServicePipeline</a> action succeeds before the
 *           cancellation attempt starts, the resulting deployment state is <code>SUCCEEDED</code> and
 *           the cancellation attempt has no effect.</p>
 *             </li>
 *          </ul>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CancelServicePipelineDeploymentCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CancelServicePipelineDeploymentCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // CancelServicePipelineDeploymentInput
 *   serviceName: "STRING_VALUE", // required
 * };
 * const command = new CancelServicePipelineDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // CancelServicePipelineDeploymentOutput
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
 * @param CancelServicePipelineDeploymentCommandInput - {@link CancelServicePipelineDeploymentCommandInput}
 * @returns {@link CancelServicePipelineDeploymentCommandOutput}
 * @see {@link CancelServicePipelineDeploymentCommandInput} for command's `input` shape.
 * @see {@link CancelServicePipelineDeploymentCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class CancelServicePipelineDeploymentCommand extends $Command
  .classBuilder<
    CancelServicePipelineDeploymentCommandInput,
    CancelServicePipelineDeploymentCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "CancelServicePipelineDeployment", {})
  .n("ProtonClient", "CancelServicePipelineDeploymentCommand")
  .sc(CancelServicePipelineDeployment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelServicePipelineDeploymentInput;
      output: CancelServicePipelineDeploymentOutput;
    };
    sdk: {
      input: CancelServicePipelineDeploymentCommandInput;
      output: CancelServicePipelineDeploymentCommandOutput;
    };
  };
}
