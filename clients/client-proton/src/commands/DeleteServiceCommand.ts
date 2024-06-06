// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteServiceInput, DeleteServiceOutput, DeleteServiceOutputFilterSensitiveLog } from "../models/models_0";
import { de_DeleteServiceCommand, se_DeleteServiceCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServiceCommand}.
 */
export interface DeleteServiceCommandInput extends DeleteServiceInput {}
/**
 * @public
 *
 * The output of {@link DeleteServiceCommand}.
 */
export interface DeleteServiceCommandOutput extends DeleteServiceOutput, __MetadataBearer {}

/**
 * <p>Delete a service, with its instances and pipeline.</p>
 *          <note>
 *             <p>You can't delete a service if it has any service instances that have components attached
 *         to them.</p>
 *             <p>For more information about components, see
 *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
 *   <i>Proton User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, DeleteServiceCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, DeleteServiceCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // DeleteServiceInput
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServiceOutput
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
 * @param DeleteServiceCommandInput - {@link DeleteServiceCommandInput}
 * @returns {@link DeleteServiceCommandOutput}
 * @see {@link DeleteServiceCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceCommandOutput} for command's `response` shape.
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
export class DeleteServiceCommand extends $Command
  .classBuilder<
    DeleteServiceCommandInput,
    DeleteServiceCommandOutput,
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
  .s("AwsProton20200720", "DeleteService", {})
  .n("ProtonClient", "DeleteServiceCommand")
  .f(void 0, DeleteServiceOutputFilterSensitiveLog)
  .ser(se_DeleteServiceCommand)
  .de(de_DeleteServiceCommand)
  .build() {}
