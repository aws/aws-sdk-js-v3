// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteComponentInput,
  DeleteComponentOutput,
  DeleteComponentOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_DeleteComponentCommand, se_DeleteComponentCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteComponentCommand}.
 */
export interface DeleteComponentCommandInput extends DeleteComponentInput {}
/**
 * @public
 *
 * The output of {@link DeleteComponentCommand}.
 */
export interface DeleteComponentCommandOutput extends DeleteComponentOutput, __MetadataBearer {}

/**
 * <p>Delete an Proton component resource.</p>
 *          <p>For more information about components, see
 *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
 *   <i>Proton User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, DeleteComponentCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, DeleteComponentCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // DeleteComponentInput
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteComponentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteComponentOutput
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
 * @param DeleteComponentCommandInput - {@link DeleteComponentCommandInput}
 * @returns {@link DeleteComponentCommandOutput}
 * @see {@link DeleteComponentCommandInput} for command's `input` shape.
 * @see {@link DeleteComponentCommandOutput} for command's `response` shape.
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
export class DeleteComponentCommand extends $Command
  .classBuilder<
    DeleteComponentCommandInput,
    DeleteComponentCommandOutput,
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
  .s("AwsProton20200720", "DeleteComponent", {})
  .n("ProtonClient", "DeleteComponentCommand")
  .f(void 0, DeleteComponentOutputFilterSensitiveLog)
  .ser(se_DeleteComponentCommand)
  .de(de_DeleteComponentCommand)
  .build() {}
