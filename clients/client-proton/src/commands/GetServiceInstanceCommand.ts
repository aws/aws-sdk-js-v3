// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetServiceInstanceInput,
  GetServiceInstanceOutput,
  GetServiceInstanceOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetServiceInstanceCommand, se_GetServiceInstanceCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServiceInstanceCommand}.
 */
export interface GetServiceInstanceCommandInput extends GetServiceInstanceInput {}
/**
 * @public
 *
 * The output of {@link GetServiceInstanceCommand}.
 */
export interface GetServiceInstanceCommandOutput extends GetServiceInstanceOutput, __MetadataBearer {}

/**
 * <p>Get detailed data for a service instance. A service instance is an instantiation of
 *       service template and it runs in a specific environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetServiceInstanceCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetServiceInstanceCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // GetServiceInstanceInput
 *   name: "STRING_VALUE", // required
 *   serviceName: "STRING_VALUE", // required
 * };
 * const command = new GetServiceInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceInstanceOutput
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
 * @param GetServiceInstanceCommandInput - {@link GetServiceInstanceCommandInput}
 * @returns {@link GetServiceInstanceCommandOutput}
 * @see {@link GetServiceInstanceCommandInput} for command's `input` shape.
 * @see {@link GetServiceInstanceCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
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
export class GetServiceInstanceCommand extends $Command
  .classBuilder<
    GetServiceInstanceCommandInput,
    GetServiceInstanceCommandOutput,
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
  .s("AwsProton20200720", "GetServiceInstance", {})
  .n("ProtonClient", "GetServiceInstanceCommand")
  .f(void 0, GetServiceInstanceOutputFilterSensitiveLog)
  .ser(se_GetServiceInstanceCommand)
  .de(de_GetServiceInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceInstanceInput;
      output: GetServiceInstanceOutput;
    };
    sdk: {
      input: GetServiceInstanceCommandInput;
      output: GetServiceInstanceCommandOutput;
    };
  };
}
