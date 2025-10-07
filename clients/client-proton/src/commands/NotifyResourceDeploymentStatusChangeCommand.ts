// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  NotifyResourceDeploymentStatusChangeInput,
  NotifyResourceDeploymentStatusChangeInputFilterSensitiveLog,
  NotifyResourceDeploymentStatusChangeOutput,
} from "../models/models_0";
import {
  de_NotifyResourceDeploymentStatusChangeCommand,
  se_NotifyResourceDeploymentStatusChangeCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link NotifyResourceDeploymentStatusChangeCommand}.
 */
export interface NotifyResourceDeploymentStatusChangeCommandInput extends NotifyResourceDeploymentStatusChangeInput {}
/**
 * @public
 *
 * The output of {@link NotifyResourceDeploymentStatusChangeCommand}.
 */
export interface NotifyResourceDeploymentStatusChangeCommandOutput
  extends NotifyResourceDeploymentStatusChangeOutput,
    __MetadataBearer {}

/**
 * <p>Notify Proton of status changes to a provisioned resource when you use self-managed provisioning.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self">Self-managed provisioning</a> in the <i>Proton User Guide</i>.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, NotifyResourceDeploymentStatusChangeCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, NotifyResourceDeploymentStatusChangeCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // NotifyResourceDeploymentStatusChangeInput
 *   resourceArn: "STRING_VALUE", // required
 *   status: "STRING_VALUE",
 *   outputs: [ // OutputsList
 *     { // Output
 *       key: "STRING_VALUE",
 *       valueString: "STRING_VALUE",
 *     },
 *   ],
 *   deploymentId: "STRING_VALUE",
 *   statusMessage: "STRING_VALUE",
 * };
 * const command = new NotifyResourceDeploymentStatusChangeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NotifyResourceDeploymentStatusChangeCommandInput - {@link NotifyResourceDeploymentStatusChangeCommandInput}
 * @returns {@link NotifyResourceDeploymentStatusChangeCommandOutput}
 * @see {@link NotifyResourceDeploymentStatusChangeCommandInput} for command's `input` shape.
 * @see {@link NotifyResourceDeploymentStatusChangeCommandOutput} for command's `response` shape.
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
export class NotifyResourceDeploymentStatusChangeCommand extends $Command
  .classBuilder<
    NotifyResourceDeploymentStatusChangeCommandInput,
    NotifyResourceDeploymentStatusChangeCommandOutput,
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
  .s("AwsProton20200720", "NotifyResourceDeploymentStatusChange", {})
  .n("ProtonClient", "NotifyResourceDeploymentStatusChangeCommand")
  .f(NotifyResourceDeploymentStatusChangeInputFilterSensitiveLog, void 0)
  .ser(se_NotifyResourceDeploymentStatusChangeCommand)
  .de(de_NotifyResourceDeploymentStatusChangeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NotifyResourceDeploymentStatusChangeInput;
      output: {};
    };
    sdk: {
      input: NotifyResourceDeploymentStatusChangeCommandInput;
      output: NotifyResourceDeploymentStatusChangeCommandOutput;
    };
  };
}
