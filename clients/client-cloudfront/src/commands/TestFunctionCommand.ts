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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  TestFunctionRequest,
  TestFunctionRequestFilterSensitiveLog,
  TestFunctionResult,
  TestFunctionResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restXmlTestFunctionCommand,
  serializeAws_restXmlTestFunctionCommand,
} from "../protocols/Aws_restXml";

export interface TestFunctionCommandInput extends TestFunctionRequest {}
export interface TestFunctionCommandOutput extends TestFunctionResult, __MetadataBearer {}

/**
 * <p>Tests a CloudFront function.</p>
 *          <p>To test a function, you provide an <i>event object</i> that represents
 * 			an HTTP request or response that your CloudFront distribution could receive in production.
 * 			CloudFront runs the function, passing it the event object that you provided, and returns the
 * 			function's result (the modified event object) in the response. The response also
 * 			contains function logs and error messages, if any exist. For more information about
 * 			testing functions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *          <p>To test a function, you provide the function's name and version (<code>ETag</code>
 * 			value) along with the event object. To get the function's name and version, you can use
 * 				<code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, TestFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, TestFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new TestFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestFunctionCommandInput} for command's `input` shape.
 * @see {@link TestFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 */
export class TestFunctionCommand extends $Command<
  TestFunctionCommandInput,
  TestFunctionCommandOutput,
  CloudFrontClientResolvedConfig
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

  constructor(readonly input: TestFunctionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TestFunctionCommandInput, TestFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, TestFunctionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "TestFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestFunctionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TestFunctionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlTestFunctionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestFunctionCommandOutput> {
    return deserializeAws_restXmlTestFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
