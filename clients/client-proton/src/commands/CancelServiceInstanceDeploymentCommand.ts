// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelServiceInstanceDeploymentInput, CancelServiceInstanceDeploymentOutput } from "../models/models_0";
import { CancelServiceInstanceDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelServiceInstanceDeploymentCommand}.
 */
export interface CancelServiceInstanceDeploymentCommandInput extends CancelServiceInstanceDeploymentInput {}
/**
 * @public
 *
 * The output of {@link CancelServiceInstanceDeploymentCommand}.
 */
export interface CancelServiceInstanceDeploymentCommandOutput extends CancelServiceInstanceDeploymentOutput, __MetadataBearer {}

/**
 * Attempts to cancel a service instance deployment on an UpdateServiceInstance action, if the deployment is `IN_PROGRESS`. For more information, see [Update a service instance](https://docs.aws.amazon.com/proton/latest/userguide/ag-svc-instance-update.html) in the *Proton User guide*.
 *
 * The following list includes potential cancellation scenarios.
 *
 * - If the cancellation attempt succeeds, the resulting deployment state is `CANCELLED`.
 * - If the cancellation attempt fails, the resulting deployment state is `FAILED`.
 * - If the current UpdateServiceInstance action succeeds before the cancellation attempt starts, the resulting deployment state is `SUCCEEDED` and the cancellation attempt has no effect.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CancelServiceInstanceDeploymentCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CancelServiceInstanceDeploymentCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // CancelServiceInstanceDeploymentInput
 *   serviceInstanceName: "STRING_VALUE", // required
 *   serviceName: "STRING_VALUE", // required
 * };
 * const command = new CancelServiceInstanceDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // CancelServiceInstanceDeploymentOutput
 * //   serviceInstance: { // ServiceInstance
 * //     name: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastDeploymentAttemptedAt: new Date("TIMESTAMP"), // required
 * //     lastDeploymentSucceededAt: new Date("TIMESTAMP"), // required
 * //     serviceName: "STRING_VALUE", // required
 * //     environmentName: "STRING_VALUE", // required
 * //     templateName: "STRING_VALUE", // required
 * //     templateMajorVersion: "STRING_VALUE", // required
 * //     templateMinorVersion: "STRING_VALUE", // required
 * //     deploymentStatus: "STRING_VALUE", // required
 * //     deploymentStatusMessage: "STRING_VALUE",
 * //     spec: "STRING_VALUE",
 * //     lastClientRequestToken: "STRING_VALUE",
 * //     lastAttemptedDeploymentId: "STRING_VALUE",
 * //     lastSucceededDeploymentId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CancelServiceInstanceDeploymentCommandInput - {@link CancelServiceInstanceDeploymentCommandInput}
 * @returns {@link CancelServiceInstanceDeploymentCommandOutput}
 * @see {@link CancelServiceInstanceDeploymentCommandInput} for command's `input` shape.
 * @see {@link CancelServiceInstanceDeploymentCommandOutput} for command's `response` shape.
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
export class CancelServiceInstanceDeploymentCommand extends command<CancelServiceInstanceDeploymentCommandInput, CancelServiceInstanceDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "CancelServiceInstanceDeployment",
  CancelServiceInstanceDeployment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelServiceInstanceDeploymentInput;
      output: CancelServiceInstanceDeploymentOutput;
    };
    sdk: {
      input: CancelServiceInstanceDeploymentCommandInput;
      output: CancelServiceInstanceDeploymentCommandOutput;
    };
  };
}
