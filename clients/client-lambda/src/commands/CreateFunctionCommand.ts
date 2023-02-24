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
  CreateFunctionRequest,
  CreateFunctionRequestFilterSensitiveLog,
  FunctionConfiguration,
  FunctionConfigurationFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateFunctionCommand,
  serializeAws_restJson1CreateFunctionCommand,
} from "../protocols/Aws_restJson1";

export interface CreateFunctionCommandInput extends CreateFunctionRequest {}
export interface CreateFunctionCommandOutput extends FunctionConfiguration, __MetadataBearer {}

/**
 * <p>Creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role">execution role</a>. The
 *       deployment package is a .zip file archive or container image that contains your function code. The execution role
 *       grants the function permission to use Amazon Web Services, such as Amazon CloudWatch Logs for log
 *       streaming and X-Ray for request tracing.</p>
 *          <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container
 *         image</a>, then you set the package type to <code>Image</code>. For a container image, the code property
 *       must include the URI of a container image in the Amazon ECR registry. You do not need to specify the
 *       handler and runtime properties.</p>
 *          <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>, then
 *       you set the package type to <code>Zip</code>. For a .zip file archive, the code property specifies the location of
 *       the .zip file. You must also specify the handler and runtime properties. The code in the deployment package must
 *       be compatible with the target instruction set architecture of the function (<code>x86-64</code> or
 *         <code>arm64</code>). If you do not specify the architecture, then the default value is
 *       <code>x86-64</code>.</p>
 *          <p>When you create a function, Lambda provisions an instance of the function and its supporting
 *       resources. If your function connects to a VPC, this process can take a minute or so. During this time, you can't
 *       invoke or modify the function. The <code>State</code>, <code>StateReason</code>, and <code>StateReasonCode</code>
 *       fields in the response from <a>GetFunctionConfiguration</a> indicate when the function is ready to
 *       invoke. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p>
 *          <p>A function has an unpublished version, and can have published versions and aliases. The unpublished version
 *       changes when you update your function's code and configuration. A published version is a snapshot of your function
 *       code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be
 *       changed to map to a different version. Use the <code>Publish</code> parameter to create version <code>1</code> of
 *       your function from its initial configuration.</p>
 *          <p>The other parameters let you configure version-specific and function-level settings. You can modify
 *       version-specific settings later with <a>UpdateFunctionConfiguration</a>. Function-level settings apply
 *       to both the unpublished and published versions of the function, and include tags (<a>TagResource</a>)
 *       and per-function concurrency limits (<a>PutFunctionConcurrency</a>).</p>
 *          <p>You can use code signing if your deployment package is a .zip file archive. To enable code signing for this
 *       function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with
 *         <a>UpdateFunctionCode</a>, Lambda checks that the code package has a valid signature from
 *       a trusted publisher. The code-signing configuration includes set of signing profiles, which define the trusted
 *       publishers for this function.</p>
 *          <p>If another Amazon Web Services account or an Amazon Web Service invokes your function, use <a>AddPermission</a> to grant permission by creating a resource-based Identity and Access Management (IAM) policy. You can grant permissions at the function level, on a version, or on an alias.</p>
 *          <p>To invoke your function directly, use <a>Invoke</a>. To invoke your function in response to events
 *       in other Amazon Web Services, create an event source mapping (<a>CreateEventSourceMapping</a>),
 *       or configure a function trigger in the other service. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html">Invoking Lambda
 *       functions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, CreateFunctionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, CreateFunctionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new CreateFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFunctionCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class CreateFunctionCommand extends $Command<
  CreateFunctionCommandInput,
  CreateFunctionCommandOutput,
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

  constructor(readonly input: CreateFunctionCommandInput) {
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
  ): Handler<CreateFunctionCommandInput, CreateFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFunctionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "CreateFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFunctionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: FunctionConfigurationFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateFunctionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFunctionCommandOutput> {
    return deserializeAws_restJson1CreateFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
