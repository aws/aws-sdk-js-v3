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

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  FunctionConfiguration,
  FunctionConfigurationFilterSensitiveLog,
  UpdateFunctionConfigurationRequest,
  UpdateFunctionConfigurationRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateFunctionConfigurationCommand,
  serializeAws_restJson1UpdateFunctionConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateFunctionConfigurationCommand}.
 */
export interface UpdateFunctionConfigurationCommandInput extends UpdateFunctionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFunctionConfigurationCommand}.
 */
export interface UpdateFunctionConfigurationCommandOutput extends FunctionConfiguration, __MetadataBearer {}

/**
 * @public
 * <p>Modify the version-specific settings of a Lambda function.</p>
 *          <p>When you update a function, Lambda provisions an instance of the function and its supporting
 *       resources. If your function connects to a VPC, this process can take a minute. During this time, you can't modify
 *       the function, but you can still invoke it. The <code>LastUpdateStatus</code>, <code>LastUpdateStatusReason</code>,
 *       and <code>LastUpdateStatusReasonCode</code> fields in the response from <a>GetFunctionConfiguration</a>
 *       indicate when the update is complete and the function is processing events with the new configuration. For more
 *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda
 *         function states</a>.</p>
 *          <p>These settings can vary between versions of a function and are locked when you publish a version. You can't
 *       modify the configuration of a published version, only the unpublished version.</p>
 *          <p>To configure function concurrency, use <a>PutFunctionConcurrency</a>. To grant invoke permissions
 *       to an Amazon Web Services account or Amazon Web Service, use <a>AddPermission</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateFunctionConfigurationCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateFunctionConfigurationCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = {
 *   FunctionName: "STRING_VALUE", // required
 *   Role: "STRING_VALUE",
 *   Handler: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Timeout: Number("int"),
 *   MemorySize: Number("int"),
 *   VpcConfig: {
 *     SubnetIds: [
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Environment: {
 *     Variables: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   Runtime: "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x",
 *   DeadLetterConfig: {
 *     TargetArn: "STRING_VALUE",
 *   },
 *   KMSKeyArn: "STRING_VALUE",
 *   TracingConfig: {
 *     Mode: "Active" || "PassThrough",
 *   },
 *   RevisionId: "STRING_VALUE",
 *   Layers: [
 *     "STRING_VALUE",
 *   ],
 *   FileSystemConfigs: [
 *     {
 *       Arn: "STRING_VALUE", // required
 *       LocalMountPath: "STRING_VALUE", // required
 *     },
 *   ],
 *   ImageConfig: {
 *     EntryPoint: [
 *       "STRING_VALUE",
 *     ],
 *     Command: [
 *       "STRING_VALUE",
 *     ],
 *     WorkingDirectory: "STRING_VALUE",
 *   },
 *   EphemeralStorage: {
 *     Size: Number("int"), // required
 *   },
 *   SnapStart: {
 *     ApplyOn: "PublishedVersions" || "None",
 *   },
 * };
 * const command = new UpdateFunctionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateFunctionConfigurationCommandInput - {@link UpdateFunctionConfigurationCommandInput}
 * @returns {@link UpdateFunctionConfigurationCommandOutput}
 * @see {@link UpdateFunctionConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link CodeSigningConfigNotFoundException} (client fault)
 *  <p>The specified code signing configuration does not exist.</p>
 *
 * @throws {@link CodeVerificationFailedException} (client fault)
 *  <p>The code signature failed one or more of the validation checks for signature mismatch or expiry, and the code
 *       signing policy is set to ENFORCE. Lambda blocks the deployment.</p>
 *
 * @throws {@link InvalidCodeSignatureException} (client fault)
 *  <p>The code signature failed the integrity check. If the integrity check fails, then Lambda blocks
 *       deployment, even if the code signing policy is set to WARN.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias. Call the <code>GetFunction</code> or the <code>GetAlias</code>
 *       API operation to retrieve the latest RevisionId for your resource.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 *
 */
export class UpdateFunctionConfigurationCommand extends $Command<
  UpdateFunctionConfigurationCommandInput,
  UpdateFunctionConfigurationCommandOutput,
  LambdaClientResolvedConfig
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
  constructor(readonly input: UpdateFunctionConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFunctionConfigurationCommandInput, UpdateFunctionConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFunctionConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "UpdateFunctionConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFunctionConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: FunctionConfigurationFilterSensitiveLog,
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
  private serialize(input: UpdateFunctionConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFunctionConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateFunctionConfigurationCommandOutput> {
    return deserializeAws_restJson1UpdateFunctionConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
