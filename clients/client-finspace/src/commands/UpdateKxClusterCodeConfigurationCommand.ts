// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { UpdateKxClusterCodeConfigurationRequest, UpdateKxClusterCodeConfigurationResponse } from "../models/models_0";
import {
  de_UpdateKxClusterCodeConfigurationCommand,
  se_UpdateKxClusterCodeConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateKxClusterCodeConfigurationCommand}.
 */
export interface UpdateKxClusterCodeConfigurationCommandInput extends UpdateKxClusterCodeConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKxClusterCodeConfigurationCommand}.
 */
export interface UpdateKxClusterCodeConfigurationCommandOutput
  extends UpdateKxClusterCodeConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Allows you to update code configuration on a running cluster. By using this API you can update the code, the initialization script path, and the command line arguments for a specific cluster.
 *       The configuration that you want to update will override any existing configurations on the cluster.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, UpdateKxClusterCodeConfigurationCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, UpdateKxClusterCodeConfigurationCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FinspaceClient(config);
 * const input = { // UpdateKxClusterCodeConfigurationRequest
 *   environmentId: "STRING_VALUE", // required
 *   clusterName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   code: { // CodeConfiguration
 *     s3Bucket: "STRING_VALUE",
 *     s3Key: "STRING_VALUE",
 *     s3ObjectVersion: "STRING_VALUE",
 *   },
 *   initializationScript: "STRING_VALUE",
 *   commandLineArguments: [ // KxCommandLineArguments
 *     { // KxCommandLineArgument
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   deploymentConfiguration: { // KxClusterCodeDeploymentConfiguration
 *     deploymentStrategy: "NO_RESTART" || "ROLLING" || "FORCE", // required
 *   },
 * };
 * const command = new UpdateKxClusterCodeConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateKxClusterCodeConfigurationCommandInput - {@link UpdateKxClusterCodeConfigurationCommandInput}
 * @returns {@link UpdateKxClusterCodeConfigurationCommandOutput}
 * @see {@link UpdateKxClusterCodeConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateKxClusterCodeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 * @public
 */
export class UpdateKxClusterCodeConfigurationCommand extends $Command
  .classBuilder<
    UpdateKxClusterCodeConfigurationCommandInput,
    UpdateKxClusterCodeConfigurationCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroManagementService", "UpdateKxClusterCodeConfiguration", {})
  .n("FinspaceClient", "UpdateKxClusterCodeConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateKxClusterCodeConfigurationCommand)
  .de(de_UpdateKxClusterCodeConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKxClusterCodeConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateKxClusterCodeConfigurationCommandInput;
      output: UpdateKxClusterCodeConfigurationCommandOutput;
    };
  };
}
