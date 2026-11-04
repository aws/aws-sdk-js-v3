// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelComponentDeploymentInput, CancelComponentDeploymentOutput } from "../models/models_0";
import { CancelComponentDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelComponentDeploymentCommand}.
 */
export interface CancelComponentDeploymentCommandInput extends CancelComponentDeploymentInput {}
/**
 * @public
 *
 * The output of {@link CancelComponentDeploymentCommand}.
 */
export interface CancelComponentDeploymentCommandOutput extends CancelComponentDeploymentOutput, __MetadataBearer {}

/**
 * Attempts to cancel a component deployment (for a component that is in the `IN_PROGRESS` deployment status).
 *
 * For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CancelComponentDeploymentCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CancelComponentDeploymentCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // CancelComponentDeploymentInput
 *   componentName: "STRING_VALUE", // required
 * };
 * const command = new CancelComponentDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // CancelComponentDeploymentOutput
 * //   component: { // Component
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     arn: "STRING_VALUE", // required
 * //     environmentName: "STRING_VALUE", // required
 * //     serviceName: "STRING_VALUE",
 * //     serviceInstanceName: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     lastDeploymentAttemptedAt: new Date("TIMESTAMP"),
 * //     lastDeploymentSucceededAt: new Date("TIMESTAMP"),
 * //     deploymentStatus: "STRING_VALUE", // required
 * //     deploymentStatusMessage: "STRING_VALUE",
 * //     serviceSpec: "STRING_VALUE",
 * //     lastClientRequestToken: "STRING_VALUE",
 * //     lastAttemptedDeploymentId: "STRING_VALUE",
 * //     lastSucceededDeploymentId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CancelComponentDeploymentCommandInput - {@link CancelComponentDeploymentCommandInput}
 * @returns {@link CancelComponentDeploymentCommandOutput}
 * @see {@link CancelComponentDeploymentCommandInput} for command's `input` shape.
 * @see {@link CancelComponentDeploymentCommandOutput} for command's `response` shape.
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
export class CancelComponentDeploymentCommand extends command<CancelComponentDeploymentCommandInput, CancelComponentDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "CancelComponentDeployment",
  CancelComponentDeployment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelComponentDeploymentInput;
      output: CancelComponentDeploymentOutput;
    };
    sdk: {
      input: CancelComponentDeploymentCommandInput;
      output: CancelComponentDeploymentCommandOutput;
    };
  };
}
