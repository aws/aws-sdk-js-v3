// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelServicePipelineDeploymentInput, CancelServicePipelineDeploymentOutput } from "../models/models_0";
import { CancelServicePipelineDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CancelServicePipelineDeploymentCommandOutput extends CancelServicePipelineDeploymentOutput, __MetadataBearer {}

/**
 * Attempts to cancel a service pipeline deployment on an UpdateServicePipeline action, if the deployment is `IN_PROGRESS`. For more information, see [Update a service pipeline](https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-pipeline-update.html) in the *Proton User guide*.
 *
 * The following list includes potential cancellation scenarios.
 *
 * - If the cancellation attempt succeeds, the resulting deployment state is `CANCELLED`.
 * - If the cancellation attempt fails, the resulting deployment state is `FAILED`.
 * - If the current UpdateServicePipeline action succeeds before the cancellation attempt starts, the resulting deployment state is `SUCCEEDED` and the cancellation attempt has no effect.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
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
export class CancelServicePipelineDeploymentCommand extends command<CancelServicePipelineDeploymentCommandInput, CancelServicePipelineDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "CancelServicePipelineDeployment",
  CancelServicePipelineDeployment$
) {
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
