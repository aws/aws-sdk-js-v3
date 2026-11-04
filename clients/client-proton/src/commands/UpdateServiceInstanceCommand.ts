// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateServiceInstanceInput, UpdateServiceInstanceOutput } from "../models/models_0";
import { UpdateServiceInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateServiceInstanceCommand}.
 */
export interface UpdateServiceInstanceCommandInput extends UpdateServiceInstanceInput {}
/**
 * @public
 *
 * The output of {@link UpdateServiceInstanceCommand}.
 */
export interface UpdateServiceInstanceCommandOutput extends UpdateServiceInstanceOutput, __MetadataBearer {}

/**
 * Update a service instance.
 *
 * There are a few modes for updating a service instance. The `deploymentType` field defines the mode.
 *
 * > **Note:**
 * >
 * > You can't update a service instance while its deployment status, or the deployment status of a component attached to it, is `IN_PROGRESS`.
 * >
 * > For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateServiceInstanceCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateServiceInstanceCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // UpdateServiceInstanceInput
 *   name: "STRING_VALUE", // required
 *   serviceName: "STRING_VALUE", // required
 *   deploymentType: "STRING_VALUE", // required
 *   spec: "STRING_VALUE",
 *   templateMajorVersion: "STRING_VALUE",
 *   templateMinorVersion: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateServiceInstanceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceInstanceOutput
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
 * @param UpdateServiceInstanceCommandInput - {@link UpdateServiceInstanceCommandInput}
 * @returns {@link UpdateServiceInstanceCommandOutput}
 * @see {@link UpdateServiceInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceInstanceCommandOutput} for command's `response` shape.
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
export class UpdateServiceInstanceCommand extends command<UpdateServiceInstanceCommandInput, UpdateServiceInstanceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateServiceInstance",
  UpdateServiceInstance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceInstanceInput;
      output: UpdateServiceInstanceOutput;
    };
    sdk: {
      input: UpdateServiceInstanceCommandInput;
      output: UpdateServiceInstanceCommandOutput;
    };
  };
}
