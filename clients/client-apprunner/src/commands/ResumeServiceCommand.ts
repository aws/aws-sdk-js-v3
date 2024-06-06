// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ResumeServiceRequest,
  ResumeServiceResponse,
  ResumeServiceResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ResumeServiceCommand, se_ResumeServiceCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResumeServiceCommand}.
 */
export interface ResumeServiceCommandInput extends ResumeServiceRequest {}
/**
 * @public
 *
 * The output of {@link ResumeServiceCommand}.
 */
export interface ResumeServiceCommandOutput extends ResumeServiceResponse, __MetadataBearer {}

/**
 * <p>Resume an active App Runner service. App Runner provisions compute capacity for the service.</p>
 *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
 *       call to track the operation's progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ResumeServiceCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ResumeServiceCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const input = { // ResumeServiceRequest
 *   ServiceArn: "STRING_VALUE", // required
 * };
 * const command = new ResumeServiceCommand(input);
 * const response = await client.send(command);
 * // { // ResumeServiceResponse
 * //   Service: { // Service
 * //     ServiceName: "STRING_VALUE", // required
 * //     ServiceId: "STRING_VALUE", // required
 * //     ServiceArn: "STRING_VALUE", // required
 * //     ServiceUrl: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"), // required
 * //     UpdatedAt: new Date("TIMESTAMP"), // required
 * //     DeletedAt: new Date("TIMESTAMP"),
 * //     Status: "CREATE_FAILED" || "RUNNING" || "DELETED" || "DELETE_FAILED" || "PAUSED" || "OPERATION_IN_PROGRESS", // required
 * //     SourceConfiguration: { // SourceConfiguration
 * //       CodeRepository: { // CodeRepository
 * //         RepositoryUrl: "STRING_VALUE", // required
 * //         SourceCodeVersion: { // SourceCodeVersion
 * //           Type: "BRANCH", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //         CodeConfiguration: { // CodeConfiguration
 * //           ConfigurationSource: "REPOSITORY" || "API", // required
 * //           CodeConfigurationValues: { // CodeConfigurationValues
 * //             Runtime: "PYTHON_3" || "NODEJS_12" || "NODEJS_14" || "CORRETTO_8" || "CORRETTO_11" || "NODEJS_16" || "GO_1" || "DOTNET_6" || "PHP_81" || "RUBY_31" || "PYTHON_311" || "NODEJS_18", // required
 * //             BuildCommand: "STRING_VALUE",
 * //             StartCommand: "STRING_VALUE",
 * //             Port: "STRING_VALUE",
 * //             RuntimeEnvironmentVariables: { // RuntimeEnvironmentVariables
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             RuntimeEnvironmentSecrets: { // RuntimeEnvironmentSecrets
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         SourceDirectory: "STRING_VALUE",
 * //       },
 * //       ImageRepository: { // ImageRepository
 * //         ImageIdentifier: "STRING_VALUE", // required
 * //         ImageConfiguration: { // ImageConfiguration
 * //           RuntimeEnvironmentVariables: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           StartCommand: "STRING_VALUE",
 * //           Port: "STRING_VALUE",
 * //           RuntimeEnvironmentSecrets: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         ImageRepositoryType: "ECR" || "ECR_PUBLIC", // required
 * //       },
 * //       AutoDeploymentsEnabled: true || false,
 * //       AuthenticationConfiguration: { // AuthenticationConfiguration
 * //         ConnectionArn: "STRING_VALUE",
 * //         AccessRoleArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     InstanceConfiguration: { // InstanceConfiguration
 * //       Cpu: "STRING_VALUE",
 * //       Memory: "STRING_VALUE",
 * //       InstanceRoleArn: "STRING_VALUE",
 * //     },
 * //     EncryptionConfiguration: { // EncryptionConfiguration
 * //       KmsKey: "STRING_VALUE", // required
 * //     },
 * //     HealthCheckConfiguration: { // HealthCheckConfiguration
 * //       Protocol: "TCP" || "HTTP",
 * //       Path: "STRING_VALUE",
 * //       Interval: Number("int"),
 * //       Timeout: Number("int"),
 * //       HealthyThreshold: Number("int"),
 * //       UnhealthyThreshold: Number("int"),
 * //     },
 * //     AutoScalingConfigurationSummary: { // AutoScalingConfigurationSummary
 * //       AutoScalingConfigurationArn: "STRING_VALUE",
 * //       AutoScalingConfigurationName: "STRING_VALUE",
 * //       AutoScalingConfigurationRevision: Number("int"),
 * //       Status: "ACTIVE" || "INACTIVE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       HasAssociatedService: true || false,
 * //       IsDefault: true || false,
 * //     },
 * //     NetworkConfiguration: { // NetworkConfiguration
 * //       EgressConfiguration: { // EgressConfiguration
 * //         EgressType: "DEFAULT" || "VPC",
 * //         VpcConnectorArn: "STRING_VALUE",
 * //       },
 * //       IngressConfiguration: { // IngressConfiguration
 * //         IsPubliclyAccessible: true || false,
 * //       },
 * //       IpAddressType: "IPV4" || "DUAL_STACK",
 * //     },
 * //     ObservabilityConfiguration: { // ServiceObservabilityConfiguration
 * //       ObservabilityEnabled: true || false, // required
 * //       ObservabilityConfigurationArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResumeServiceCommandInput - {@link ResumeServiceCommandInput}
 * @returns {@link ResumeServiceCommandOutput}
 * @see {@link ResumeServiceCommandInput} for command's `input` shape.
 * @see {@link ResumeServiceCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>You can't perform this action when the resource is in its current state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource doesn't exist for the specified Amazon Resource Name (ARN) in your Amazon Web Services account.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 * @public
 */
export class ResumeServiceCommand extends $Command
  .classBuilder<
    ResumeServiceCommandInput,
    ResumeServiceCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AppRunner", "ResumeService", {})
  .n("AppRunnerClient", "ResumeServiceCommand")
  .f(void 0, ResumeServiceResponseFilterSensitiveLog)
  .ser(se_ResumeServiceCommand)
  .de(de_ResumeServiceCommand)
  .build() {}
