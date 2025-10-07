// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteEnvironmentInput,
  DeleteEnvironmentOutput,
  DeleteEnvironmentOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_DeleteEnvironmentCommand, se_DeleteEnvironmentCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentCommand}.
 */
export interface DeleteEnvironmentCommandInput extends DeleteEnvironmentInput {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentCommand}.
 */
export interface DeleteEnvironmentCommandOutput extends DeleteEnvironmentOutput, __MetadataBearer {}

/**
 * <p>Delete an environment.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, DeleteEnvironmentCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, DeleteEnvironmentCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // DeleteEnvironmentInput
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEnvironmentOutput
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
 * @param DeleteEnvironmentCommandInput - {@link DeleteEnvironmentCommandInput}
 * @returns {@link DeleteEnvironmentCommandOutput}
 * @see {@link DeleteEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentCommandOutput} for command's `response` shape.
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
export class DeleteEnvironmentCommand extends $Command
  .classBuilder<
    DeleteEnvironmentCommandInput,
    DeleteEnvironmentCommandOutput,
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
  .s("AwsProton20200720", "DeleteEnvironment", {})
  .n("ProtonClient", "DeleteEnvironmentCommand")
  .f(void 0, DeleteEnvironmentOutputFilterSensitiveLog)
  .ser(se_DeleteEnvironmentCommand)
  .de(de_DeleteEnvironmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentInput;
      output: DeleteEnvironmentOutput;
    };
    sdk: {
      input: DeleteEnvironmentCommandInput;
      output: DeleteEnvironmentCommandOutput;
    };
  };
}
