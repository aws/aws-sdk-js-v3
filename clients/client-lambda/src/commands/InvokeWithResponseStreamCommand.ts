// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  EventStreamSerdeContext as __EventStreamSerdeContext,
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
  InvokeWithResponseStreamRequest,
  InvokeWithResponseStreamRequestFilterSensitiveLog,
  InvokeWithResponseStreamResponse,
  InvokeWithResponseStreamResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_InvokeWithResponseStreamCommand, se_InvokeWithResponseStreamCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link InvokeWithResponseStreamCommand}.
 */
export interface InvokeWithResponseStreamCommandInput extends InvokeWithResponseStreamRequest {}
/**
 * @public
 *
 * The output of {@link InvokeWithResponseStreamCommand}.
 */
export interface InvokeWithResponseStreamCommandOutput extends InvokeWithResponseStreamResponse, __MetadataBearer {}

/**
 * @public
 * <p>Configure your Lambda functions to stream response payloads back to clients. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-response-streaming.html">Configuring a Lambda function to stream responses</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, InvokeWithResponseStreamCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, InvokeWithResponseStreamCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // InvokeWithResponseStreamRequest
 *   FunctionName: "STRING_VALUE", // required
 *   InvocationType: "RequestResponse" || "DryRun",
 *   LogType: "None" || "Tail",
 *   ClientContext: "STRING_VALUE",
 *   Qualifier: "STRING_VALUE",
 *   Payload: "BLOB_VALUE",
 * };
 * const command = new InvokeWithResponseStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param InvokeWithResponseStreamCommandInput - {@link InvokeWithResponseStreamCommandInput}
 * @returns {@link InvokeWithResponseStreamCommandOutput}
 * @see {@link InvokeWithResponseStreamCommandInput} for command's `input` shape.
 * @see {@link InvokeWithResponseStreamCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link EC2AccessDeniedException} (server fault)
 *  <p>Need additional permissions to configure VPC settings.</p>
 *
 * @throws {@link EC2ThrottledException} (server fault)
 *  <p>Amazon EC2 throttled Lambda during Lambda function initialization using
 *       the execution role provided for the function.</p>
 *
 * @throws {@link EC2UnexpectedException} (server fault)
 *  <p>Lambda received an unexpected Amazon EC2 client exception while setting up for the
 *         Lambda function.</p>
 *
 * @throws {@link EFSIOException} (client fault)
 *  <p>An error occurred when reading from or writing to a connected file system.</p>
 *
 * @throws {@link EFSMountConnectivityException} (client fault)
 *  <p>The Lambda function couldn't make a network connection to the configured file system.</p>
 *
 * @throws {@link EFSMountFailureException} (client fault)
 *  <p>The Lambda function couldn't mount the configured file system due to a permission or configuration
 *       issue.</p>
 *
 * @throws {@link EFSMountTimeoutException} (client fault)
 *  <p>The Lambda function made a network connection to the configured file system, but the mount
 *       operation timed out.</p>
 *
 * @throws {@link ENILimitReachedException} (server fault)
 *  <p>Lambda couldn't create an elastic network interface in the VPC, specified as part of Lambda function configuration, because the limit for network interfaces has been reached. For more
 *       information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda
 *         quotas</a>.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link InvalidRequestContentException} (client fault)
 *  <p>The request body could not be parsed as JSON.</p>
 *
 * @throws {@link InvalidRuntimeException} (server fault)
 *  <p>The runtime or runtime version specified is not supported.</p>
 *
 * @throws {@link InvalidSecurityGroupIDException} (server fault)
 *  <p>The security group ID provided in the Lambda function VPC configuration is not valid.</p>
 *
 * @throws {@link InvalidSubnetIDException} (server fault)
 *  <p>The subnet ID provided in the Lambda function VPC configuration is not valid.</p>
 *
 * @throws {@link InvalidZipFileException} (server fault)
 *  <p>Lambda could not unzip the deployment package.</p>
 *
 * @throws {@link KMSAccessDeniedException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because KMS access was denied.
 *       Check the Lambda function's KMS permissions.</p>
 *
 * @throws {@link KMSDisabledException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because the KMS key used is
 *       disabled. Check the Lambda function's KMS key settings.</p>
 *
 * @throws {@link KMSInvalidStateException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because the state of the KMS key used is not valid for Decrypt. Check the function's KMS key settings.</p>
 *
 * @throws {@link KMSNotFoundException} (server fault)
 *  <p>Lambda couldn't decrypt the environment variables because the KMS key was not
 *       found. Check the function's KMS key settings.</p>
 *
 * @throws {@link RequestTooLargeException} (client fault)
 *  <p>The request payload exceeded the <code>Invoke</code> request body JSON input quota. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda
 *       quotas</a>.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ResourceNotReadyException} (server fault)
 *  <p>The function is inactive and its VPC connection is no longer available. Wait for the VPC connection to
 *       reestablish and try again.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link SubnetIPAddressLimitReachedException} (server fault)
 *  <p>Lambda couldn't set up VPC access for the Lambda function because one or more
 *       configured subnets has no available IP addresses.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link UnsupportedMediaTypeException} (client fault)
 *  <p>The content type of the <code>Invoke</code> request body is not JSON.</p>
 *
 *
 */
export class InvokeWithResponseStreamCommand extends $Command<
  InvokeWithResponseStreamCommandInput,
  InvokeWithResponseStreamCommandOutput,
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
  constructor(readonly input: InvokeWithResponseStreamCommandInput) {
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
  ): Handler<InvokeWithResponseStreamCommandInput, InvokeWithResponseStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InvokeWithResponseStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "InvokeWithResponseStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InvokeWithResponseStreamRequestFilterSensitiveLog,
      outputFilterSensitiveLog: InvokeWithResponseStreamResponseFilterSensitiveLog,
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
  private serialize(input: InvokeWithResponseStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InvokeWithResponseStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<InvokeWithResponseStreamCommandOutput> {
    return de_InvokeWithResponseStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
