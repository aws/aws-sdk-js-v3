// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import {
  CreateServiceRequest,
  CreateServiceRequestFilterSensitiveLog,
  CreateServiceResponse,
  CreateServiceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0CreateServiceCommand,
  serializeAws_json1_0CreateServiceCommand,
} from "../protocols/Aws_json1_0";

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
 * @public
 * <p>Create an App Runner service. After the service is created, the action also automatically starts a deployment.</p>
 *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation's progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, CreateServiceCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, CreateServiceCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const input = {
 *   ServiceName: "STRING_VALUE", // required
 *   SourceConfiguration: {
 *     CodeRepository: {
 *       RepositoryUrl: "STRING_VALUE", // required
 *       SourceCodeVersion: {
 *         Type: "BRANCH", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *       CodeConfiguration: {
 *         ConfigurationSource: "REPOSITORY" || "API", // required
 *         CodeConfigurationValues: {
 *           Runtime: "PYTHON_3" || "NODEJS_12" || "NODEJS_14" || "CORRETTO_8" || "CORRETTO_11" || "NODEJS_16" || "GO_1" || "DOTNET_6" || "PHP_81" || "RUBY_31", // required
 *           BuildCommand: "STRING_VALUE",
 *           StartCommand: "STRING_VALUE",
 *           Port: "STRING_VALUE",
 *           RuntimeEnvironmentVariables: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           RuntimeEnvironmentSecrets: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *     ImageRepository: {
 *       ImageIdentifier: "STRING_VALUE", // required
 *       ImageConfiguration: {
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
 *     AuthenticationConfiguration: {
 *       ConnectionArn: "STRING_VALUE",
 *       AccessRoleArn: "STRING_VALUE",
 *     },
 *   },
 *   InstanceConfiguration: {
 *     Cpu: "STRING_VALUE",
 *     Memory: "STRING_VALUE",
 *     InstanceRoleArn: "STRING_VALUE",
 *   },
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   EncryptionConfiguration: {
 *     KmsKey: "STRING_VALUE", // required
 *   },
 *   HealthCheckConfiguration: {
 *     Protocol: "TCP" || "HTTP",
 *     Path: "STRING_VALUE",
 *     Interval: Number("int"),
 *     Timeout: Number("int"),
 *     HealthyThreshold: Number("int"),
 *     UnhealthyThreshold: Number("int"),
 *   },
 *   AutoScalingConfigurationArn: "STRING_VALUE",
 *   NetworkConfiguration: {
 *     EgressConfiguration: {
 *       EgressType: "DEFAULT" || "VPC",
 *       VpcConnectorArn: "STRING_VALUE",
 *     },
 *     IngressConfiguration: {
 *       IsPubliclyAccessible: true || false,
 *     },
 *   },
 *   ObservabilityConfiguration: {
 *     ObservabilityEnabled: true || false, // required
 *     ObservabilityConfigurationArn: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateServiceCommand(input);
 * const response = await client.send(command);
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
 *
 */
export class CreateServiceCommand extends $Command<
  CreateServiceCommandInput,
  CreateServiceCommandOutput,
  AppRunnerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateServiceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateServiceCommandInput, CreateServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateServiceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "CreateServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateServiceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateServiceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateServiceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateServiceCommandOutput> {
    return deserializeAws_json1_0CreateServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
