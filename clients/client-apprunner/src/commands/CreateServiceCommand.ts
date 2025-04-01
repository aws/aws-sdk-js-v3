// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateServiceRequest,
  CreateServiceRequestFilterSensitiveLog,
  CreateServiceResponse,
  CreateServiceResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateServiceCommand, se_CreateServiceCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateServiceCommand}.
 */
export interface CreateServiceCommandInput extends CreateServiceRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceCommand}.
 */
export interface CreateServiceCommandOutput extends CreateServiceResponse, __MetadataBearer {}

/**
 * <p>Create an App Runner service. After the service is created, the action also automatically starts a deployment.</p>
 *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, CreateServiceCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, CreateServiceCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const input = { // CreateServiceRequest
 *   ServiceName: "STRING_VALUE", // required
 *   SourceConfiguration: { // SourceConfiguration
 *     CodeRepository: { // CodeRepository
 *       RepositoryUrl: "STRING_VALUE", // required
 *       SourceCodeVersion: { // SourceCodeVersion
 *         Type: "BRANCH", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *       CodeConfiguration: { // CodeConfiguration
 *         ConfigurationSource: "REPOSITORY" || "API", // required
 *         CodeConfigurationValues: { // CodeConfigurationValues
 *           Runtime: "PYTHON_3" || "NODEJS_12" || "NODEJS_14" || "CORRETTO_8" || "CORRETTO_11" || "NODEJS_16" || "GO_1" || "DOTNET_6" || "PHP_81" || "RUBY_31" || "PYTHON_311" || "NODEJS_18", // required
 *           BuildCommand: "STRING_VALUE",
 *           StartCommand: "STRING_VALUE",
 *           Port: "STRING_VALUE",
 *           RuntimeEnvironmentVariables: { // RuntimeEnvironmentVariables
 *             "<keys>": "STRING_VALUE",
 *           },
 *           RuntimeEnvironmentSecrets: { // RuntimeEnvironmentSecrets
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       },
 *       SourceDirectory: "STRING_VALUE",
 *     },
 *     ImageRepository: { // ImageRepository
 *       ImageIdentifier: "STRING_VALUE", // required
 *       ImageConfiguration: { // ImageConfiguration
 *         RuntimeEnvironmentVariables: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         StartCommand: "STRING_VALUE",
 *         Port: "STRING_VALUE",
 *         RuntimeEnvironmentSecrets: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       ImageRepositoryType: "ECR" || "ECR_PUBLIC", // required
 *     },
 *     AutoDeploymentsEnabled: true || false,
 *     AuthenticationConfiguration: { // AuthenticationConfiguration
 *       ConnectionArn: "STRING_VALUE",
 *       AccessRoleArn: "STRING_VALUE",
 *     },
 *   },
 *   InstanceConfiguration: { // InstanceConfiguration
 *     Cpu: "STRING_VALUE",
 *     Memory: "STRING_VALUE",
 *     InstanceRoleArn: "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KmsKey: "STRING_VALUE", // required
 *   },
 *   HealthCheckConfiguration: { // HealthCheckConfiguration
 *     Protocol: "TCP" || "HTTP",
 *     Path: "STRING_VALUE",
 *     Interval: Number("int"),
 *     Timeout: Number("int"),
 *     HealthyThreshold: Number("int"),
 *     UnhealthyThreshold: Number("int"),
 *   },
 *   AutoScalingConfigurationArn: "STRING_VALUE",
 *   NetworkConfiguration: { // NetworkConfiguration
 *     EgressConfiguration: { // EgressConfiguration
 *       EgressType: "DEFAULT" || "VPC",
 *       VpcConnectorArn: "STRING_VALUE",
 *     },
 *     IngressConfiguration: { // IngressConfiguration
 *       IsPubliclyAccessible: true || false,
 *     },
 *     IpAddressType: "IPV4" || "DUAL_STACK",
 *   },
 *   ObservabilityConfiguration: { // ServiceObservabilityConfiguration
 *     ObservabilityEnabled: true || false, // required
 *     ObservabilityConfigurationArn: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateServiceCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceResponse
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
 * //   OperationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateServiceCommandInput - {@link CreateServiceCommandInput}
 * @returns {@link CreateServiceCommandOutput}
 * @see {@link CreateServiceCommandInput} for command's `input` shape.
 * @see {@link CreateServiceCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>App Runner can't create this resource. You've reached your account quota for this resource type.</p>
 *          <p>For App Runner per-resource quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/apprunner.html">App Runner endpoints and quotas</a> in the
 *         <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 *
 * @public
 */
export class CreateServiceCommand extends $Command
  .classBuilder<
    CreateServiceCommandInput,
    CreateServiceCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AppRunner", "CreateService", {})
  .n("AppRunnerClient", "CreateServiceCommand")
  .f(CreateServiceRequestFilterSensitiveLog, CreateServiceResponseFilterSensitiveLog)
  .ser(se_CreateServiceCommand)
  .de(de_CreateServiceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceRequest;
      output: CreateServiceResponse;
    };
    sdk: {
      input: CreateServiceCommandInput;
      output: CreateServiceCommandOutput;
    };
  };
}
