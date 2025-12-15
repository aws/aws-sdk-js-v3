// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateServiceInput, UpdateServiceOutput } from "../models/models_0";
import type { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { UpdateService$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Edit a service description or use a spec to add and delete service instances.</p>
 *          <note>
 *             <p>Existing service instances and the service pipeline <i>can't</i> be edited
 *         using this API. They can only be deleted.</p>
 *          </note>
 *          <p>Use the <code>description</code> parameter to modify the description.</p>
 *          <p>Edit the <code>spec</code> parameter to add or delete instances.</p>
 *          <note>
 *             <p>You can't delete a service instance (remove it from the spec) if it has an attached
 *         component.</p>
 *             <p>For more information about components, see
 *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
 *   <i>Proton User Guide</i>.</p>
 *          </note>
 *
 * @deprecated AWS Proton is not accepting new customers.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A quota was exceeded. For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-limits.html">Proton Quotas</a> in
 *       the <i>Proton User Guide</i>.</p>
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
export class UpdateServiceCommand extends $Command
  .classBuilder<
    UpdateServiceCommandInput,
    UpdateServiceCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "UpdateService", {})
  .n("ProtonClient", "UpdateServiceCommand")
  .sc(UpdateService$)
  .build() {
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
