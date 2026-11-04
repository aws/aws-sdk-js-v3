// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateServiceInput, UpdateServiceOutput } from "../models/models_0";
import { UpdateService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateServiceCommand}.
 */
export interface UpdateServiceCommandInput extends UpdateServiceInput {}
/**
 * @public
 *
 * The output of {@link UpdateServiceCommand}.
 */
export interface UpdateServiceCommandOutput extends UpdateServiceOutput, __MetadataBearer {}

/**
 * Edit a service description or use a spec to add and delete service instances.
 *
 * > **Note:** Existing service instances and the service pipeline *can't* be edited using this API. They can only be deleted.
 *
 * Use the `description` parameter to modify the description.
 *
 * Edit the `spec` parameter to add or delete instances.
 *
 * > **Note:**
 * >
 * > You can't delete a service instance (remove it from the spec) if it has an attached component.
 * >
 * > For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateServiceCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateServiceCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // UpdateServiceInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   spec: "STRING_VALUE",
 * };
 * const command = new UpdateServiceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceOutput
 * //   service: { // Service
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     arn: "STRING_VALUE", // required
 * //     templateName: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     statusMessage: "STRING_VALUE",
 * //     spec: "STRING_VALUE", // required
 * //     pipeline: { // ServicePipeline
 * //       arn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastDeploymentAttemptedAt: new Date("TIMESTAMP"), // required
 * //       lastDeploymentSucceededAt: new Date("TIMESTAMP"), // required
 * //       templateName: "STRING_VALUE", // required
 * //       templateMajorVersion: "STRING_VALUE", // required
 * //       templateMinorVersion: "STRING_VALUE", // required
 * //       deploymentStatus: "STRING_VALUE", // required
 * //       deploymentStatusMessage: "STRING_VALUE",
 * //       spec: "STRING_VALUE",
 * //       lastAttemptedDeploymentId: "STRING_VALUE",
 * //       lastSucceededDeploymentId: "STRING_VALUE",
 * //     },
 * //     repositoryConnectionArn: "STRING_VALUE",
 * //     repositoryId: "STRING_VALUE",
 * //     branchName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateServiceCommandInput - {@link UpdateServiceCommandInput}
 * @returns {@link UpdateServiceCommandOutput}
 * @see {@link UpdateServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * A quota was exceeded. For more information, see [Proton Quotas](https://docs.aws.amazon.com/proton/latest/userguide/ag-limits.html) in the *Proton User Guide*.
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
export class UpdateServiceCommand extends command<UpdateServiceCommandInput, UpdateServiceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateService",
  UpdateService$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceInput;
      output: UpdateServiceOutput;
    };
    sdk: {
      input: UpdateServiceCommandInput;
      output: UpdateServiceCommandOutput;
    };
  };
}
