// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CancelComponentDeploymentInput,
  CancelComponentDeploymentOutput,
  CancelComponentDeploymentOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CancelComponentDeploymentCommand, se_CancelComponentDeploymentCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Attempts to cancel a component deployment (for a component that is in the <code>IN_PROGRESS</code> deployment status).</p>
 *          <p>For more information about components, see
 *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
 *   <i>Proton User Guide</i>.</p>
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
export class CancelComponentDeploymentCommand extends $Command
  .classBuilder<
    CancelComponentDeploymentCommandInput,
    CancelComponentDeploymentCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsProton20200720", "CancelComponentDeployment", {})
  .n("ProtonClient", "CancelComponentDeploymentCommand")
  .f(void 0, CancelComponentDeploymentOutputFilterSensitiveLog)
  .ser(se_CancelComponentDeploymentCommand)
  .de(de_CancelComponentDeploymentCommand)
  .build() {
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
