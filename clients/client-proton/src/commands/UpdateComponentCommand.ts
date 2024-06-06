// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateComponentInput,
  UpdateComponentInputFilterSensitiveLog,
  UpdateComponentOutput,
  UpdateComponentOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateComponentCommand, se_UpdateComponentCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateComponentCommand}.
 */
export interface UpdateComponentCommandInput extends UpdateComponentInput {}
/**
 * @public
 *
 * The output of {@link UpdateComponentCommand}.
 */
export interface UpdateComponentCommandOutput extends UpdateComponentOutput, __MetadataBearer {}

/**
 * <p>Update a component.</p>
 *          <p>There are a few modes for updating a component. The <code>deploymentType</code> field defines the mode.</p>
 *          <note>
 *             <p>You can't update a component while its deployment status, or the deployment status of a service instance attached to it, is
 *         <code>IN_PROGRESS</code>.</p>
 *          </note>
 *          <p>For more information about components, see
 *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
 *   <i>Proton User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateComponentCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateComponentCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // UpdateComponentInput
 *   name: "STRING_VALUE", // required
 *   deploymentType: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   serviceName: "STRING_VALUE",
 *   serviceInstanceName: "STRING_VALUE",
 *   serviceSpec: "STRING_VALUE",
 *   templateFile: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateComponentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateComponentOutput
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
 * @param UpdateComponentCommandInput - {@link UpdateComponentCommandInput}
 * @returns {@link UpdateComponentCommandOutput}
 * @see {@link UpdateComponentCommandInput} for command's `input` shape.
 * @see {@link UpdateComponentCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateComponentCommand extends $Command
  .classBuilder<
    UpdateComponentCommandInput,
    UpdateComponentCommandOutput,
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
  .s("AwsProton20200720", "UpdateComponent", {})
  .n("ProtonClient", "UpdateComponentCommand")
  .f(UpdateComponentInputFilterSensitiveLog, UpdateComponentOutputFilterSensitiveLog)
  .ser(se_UpdateComponentCommand)
  .de(de_UpdateComponentCommand)
  .build() {}
