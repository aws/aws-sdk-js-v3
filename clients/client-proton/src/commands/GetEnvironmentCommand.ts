// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetEnvironmentInput, GetEnvironmentOutput, GetEnvironmentOutputFilterSensitiveLog } from "../models/models_0";
import { de_GetEnvironmentCommand, se_GetEnvironmentCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEnvironmentCommand}.
 */
export interface GetEnvironmentCommandInput extends GetEnvironmentInput {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentCommand}.
 */
export interface GetEnvironmentCommandOutput extends GetEnvironmentOutput, __MetadataBearer {}

/**
 * <p>Get detailed data for an environment.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetEnvironmentCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetEnvironmentCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // GetEnvironmentInput
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentOutput
 * //   environment: { // Environment
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastDeploymentAttemptedAt: new Date("TIMESTAMP"), // required
 * //     lastDeploymentSucceededAt: new Date("TIMESTAMP"), // required
 * //     arn: "STRING_VALUE", // required
 * //     templateName: "STRING_VALUE", // required
 * //     templateMajorVersion: "STRING_VALUE", // required
 * //     templateMinorVersion: "STRING_VALUE", // required
 * //     deploymentStatus: "STRING_VALUE", // required
 * //     deploymentStatusMessage: "STRING_VALUE",
 * //     protonServiceRoleArn: "STRING_VALUE",
 * //     environmentAccountConnectionId: "STRING_VALUE",
 * //     environmentAccountId: "STRING_VALUE",
 * //     spec: "STRING_VALUE",
 * //     provisioning: "STRING_VALUE",
 * //     provisioningRepository: { // RepositoryBranch
 * //       arn: "STRING_VALUE", // required
 * //       provider: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     componentRoleArn: "STRING_VALUE",
 * //     codebuildRoleArn: "STRING_VALUE",
 * //     lastAttemptedDeploymentId: "STRING_VALUE",
 * //     lastSucceededDeploymentId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEnvironmentCommandInput - {@link GetEnvironmentCommandInput}
 * @returns {@link GetEnvironmentCommandOutput}
 * @see {@link GetEnvironmentCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentCommandOutput} for command's `response` shape.
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
export class GetEnvironmentCommand extends $Command
  .classBuilder<
    GetEnvironmentCommandInput,
    GetEnvironmentCommandOutput,
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
  .s("AwsProton20200720", "GetEnvironment", {})
  .n("ProtonClient", "GetEnvironmentCommand")
  .f(void 0, GetEnvironmentOutputFilterSensitiveLog)
  .ser(se_GetEnvironmentCommand)
  .de(de_GetEnvironmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnvironmentInput;
      output: GetEnvironmentOutput;
    };
    sdk: {
      input: GetEnvironmentCommandInput;
      output: GetEnvironmentCommandOutput;
    };
  };
}
