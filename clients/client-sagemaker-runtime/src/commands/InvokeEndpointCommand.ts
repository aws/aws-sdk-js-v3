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

import {
  InvokeEndpointInput,
  InvokeEndpointInputFilterSensitiveLog,
  InvokeEndpointOutput,
  InvokeEndpointOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1InvokeEndpointCommand,
  serializeAws_restJson1InvokeEndpointCommand,
} from "../protocols/Aws_restJson1";
import { SageMakerRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerRuntimeClient";

export interface InvokeEndpointCommandInput extends InvokeEndpointInput {}
export interface InvokeEndpointCommandOutput extends InvokeEndpointOutput, __MetadataBearer {}

/**
 * <p>After you deploy a model into production using Amazon SageMaker hosting services, your
 *             client applications use this API to get inferences from the model hosted at the
 *             specified endpoint. </p>
 *          <p>For an overview of Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
 *          <p>Amazon SageMaker strips all POST headers except those supported by the API. Amazon SageMaker might add
 *             additional headers. You should not rely on the behavior of headers outside those
 *             enumerated in the request syntax. </p>
 *          <p>Calls to <code>InvokeEndpoint</code> are authenticated by using Amazon Web Services
 *             Signature Version 4. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating
 *                 Requests (Amazon Web Services Signature Version 4)</a> in the <i>Amazon S3 API
 *                 Reference</i>.</p>
 *          <p>A customer's model containers must respond to requests within 60 seconds. The model
 *             itself can have a maximum processing time of 60 seconds before responding to
 *             invocations. If your model is going to take 50-60 seconds of processing time, the SDK
 *             socket timeout should be set to be 70 seconds.</p>
 *          <note>
 *             <p>Endpoints are scoped to an individual account, and are not public. The URL does
 *                 not contain the account ID, but Amazon SageMaker determines the account ID from the
 *                 authentication token that is supplied by the caller.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerRuntimeClient, InvokeEndpointCommand } from "@aws-sdk/client-sagemaker-runtime"; // ES Modules import
 * // const { SageMakerRuntimeClient, InvokeEndpointCommand } = require("@aws-sdk/client-sagemaker-runtime"); // CommonJS import
 * const client = new SageMakerRuntimeClient(config);
 * const command = new InvokeEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InvokeEndpointCommandInput} for command's `input` shape.
 * @see {@link InvokeEndpointCommandOutput} for command's `response` shape.
 * @see {@link SageMakerRuntimeClientResolvedConfig | config} for SageMakerRuntimeClient's `config` shape.
 *
 */
export class InvokeEndpointCommand extends $Command<
  InvokeEndpointCommandInput,
  InvokeEndpointCommandOutput,
  SageMakerRuntimeClientResolvedConfig
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

  constructor(readonly input: InvokeEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InvokeEndpointCommandInput, InvokeEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InvokeEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerRuntimeClient";
    const commandName = "InvokeEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InvokeEndpointInputFilterSensitiveLog,
      outputFilterSensitiveLog: InvokeEndpointOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InvokeEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InvokeEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InvokeEndpointCommandOutput> {
    return deserializeAws_restJson1InvokeEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
